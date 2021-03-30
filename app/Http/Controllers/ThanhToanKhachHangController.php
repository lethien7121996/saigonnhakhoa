<?php

namespace App\Http\Controllers;
use App\Thanhtoankhachhang;
use App\Thanhtoandaxoa;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ThanhToanKhachHangController extends Controller
{
    public function index($id)
    {
        $thanhtoan = Thanhtoankhachhang::where("idkhammoi",'=',$id)->get();
        return $thanhtoan->toJson();
    }
    public function store(Request $request)
    {
  $validatedData = $request->validate([
            'ngaythanhtoan' => 'required',
            'chitietthanhtoan' => 'required',
            'tongtien' => 'required',
            'hinhthucthanhtoan' => 'required',
            'ghichu' => 'required',
            'nguoithutien' => 'required',
            'idkhammoi' => 'required',
            'idkhachhang' => 'required'
          ]);
  
          $thanhtoan = Thanhtoankhachhang::create([
            'ngaythanhtoan' => $validatedData['ngaythanhtoan'],
            'chitietthanhtoan' => json_encode($validatedData['chitietthanhtoan']),
            'tongtien' => $validatedData['tongtien'],
            'hinhthucthanhtoan' => $validatedData['hinhthucthanhtoan'],
            'ghichu' => $validatedData['ghichu'],
            'nguoithutien' => $validatedData['nguoithutien'],
            'idkhammoi' => $validatedData['idkhammoi'],
            'idkhachhang' => $validatedData['idkhachhang']
          ]);
     
      return response()->json('Project created!');
    }
    public function update(Request $request, $id)
    {
        $thanhtoan = Thanhtoankhachhang::find($id);
        $thanhtoan->ngaythanhtoan = $request->get('ngaythanhtoan');
        $thanhtoan->chitietthanhtoan = json_encode($request->get('chitietthanhtoan'));
        $thanhtoan->tongtien = $request->get('tongtien');
        $thanhtoan->hinhthucthanhtoan = $request->get('hinhthucthanhtoan');
        $thanhtoan->ghichu = $request->get('ghichu');
        $thanhtoan->nguoithutien = $request->get('nguoithutien');
        $thanhtoan->idkhammoi = $request->get('idkhammoi');
        $thanhtoan->idkhachhang = $request->get('idkhachhang');
        $thanhtoan->save();

        return response()->json('Successfully Updated');
    }
    public function destroy($id)
    {

      $thanhtoan = Thanhtoankhachhang::find($id);
      $thanhtoandaxoa = Thanhtoandaxoa::create([
        'ngaythanhtoan' => $thanhtoan["ngaythanhtoan"],
        'chitietthanhtoan' => $thanhtoan["chitietthanhtoan"],
        'tongtien' => $thanhtoan["tongtien"],
        'hinhthucthanhtoan' => $thanhtoan["hinhthucthanhtoan"],
        'ghichu' => $thanhtoan["ghichu"],
        'nguoithutien' => $thanhtoan["nguoithutien"],
        'idkhammoi' => $thanhtoan["idkhammoi"],
        'idkhachhang' => $thanhtoan["idkhachhang"]
      ]);
        $thanhtoan->delete();
      return response()->json('Successfully Deleted');
    }
    public function chitietthanhtoan($id)
    {
      $thanhtoan = Thanhtoankhachhang::where('id',$id)->first();

      return $thanhtoan->toJson();
    }
    public function chitietthanhtoantheokhammoi($id)
    {
      $thanhtoan = Thanhtoankhachhang::where('idkhammoi',$id)->select("chitietthanhtoan")->latest()->first();
   
     return $thanhtoan["chitietthanhtoan"];
     
    }
    public function thanhtoanthongke($id)
    {
        $dathanhtoan = Thanhtoankhachhang::select(DB::raw('SUM(tongtien) AS dathanhtoan'))->where("idkhammoi",'=',$id)->get();
        $phaithanhtoan= DB::table('chiphi')->select(DB::raw('SUM(saugiam) AS phaithanhtoan'))->where("idkhammoi",'=',$id)->get();
        
        $merged = $phaithanhtoan->merge($dathanhtoan);
        $result = $merged->all();
        return $result;
    }
    public function thanhtoanthongkekhachhang($id)
    {
        $dathanhtoan = Thanhtoankhachhang::select(DB::raw('SUM(tongtien) AS dathanhtoan'))->where("idkhachhang",'=',$id)->get();
 
        return $dathanhtoan->toJSon();
    }
    public function laytienkh(){
        $customers = Thanhtoankhachhang::select( 'thanhtoankhachhang.idkhachhang',DB::raw('SUM(tongtien) as tongtiendatra'))->leftjoin('khachhang', 'thanhtoankhachhang.idkhachhang', '=', 'khachhang.ID')
        
  
       
        ->groupBy('thanhtoankhachhang.idkhachhang');
        
        $customerss = Thanhtoankhachhang::join('chiphi', 'chiphi.idkhachhang', '=', 'thanhtoankhachhang.idkhachhang')
        ->select( 'thanhtoankhachhang.idkhachhang', DB::raw(' SUM(DISTINCT chiphi.saugiam) as tongsaugiam'))

       
        ->groupBy('thanhtoankhachhang.idkhachhang');
     
        $shares = $customers->merge($customerss);
   
         return $shares->toJson();
    }
}
