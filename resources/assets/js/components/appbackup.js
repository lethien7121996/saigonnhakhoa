import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { BrowserView, MobileView, isBrowser, isMobile } from "react-device-detect";
import Header from './Header'
import SideBarMain from './SideBarMain'
import MetaPage from './MetaPage'
import DashBoard from './DashBoard'
import AllCustomer from './customer/AllCustomer'
import AddCustomer from './customer/AddCustomer'
import EditCustomer from './customer/EditCustomer'
import ProfileCustomer from './customer/ProfileCustomer'
import PhieuDon from './customer/PhieuDon'
import LichHen from './customer/LichHen'
import DieuTriThanhToan from './customer/DieuTriThanhToan'
import DonThuoc from './customer/DonThuoc'
import HoaDonThanhToan from './customer/HoaDonThanhToan'
import AllDoctor from './doctor/AllDoctor'
import AddDoctor from './doctor/AddDoctor'
import EditDoctor from './doctor/EditDoctor'
import ProfileDoctor from './doctor/ProfileDoctor'
import AddPayment from './payment/AddPayment'
import Checkout from './payment/Checkout'
import InvoiceCustomer from './payment/InvoiceCustomer'
import CalendarBooking from './timetable/CalendarBooking'
import TimetableDoctor from './timetable/TimetableDoctor'
import ReportAll from './report/ReportAll'
import ReportDoanhThu from './report/ReportDoanhThu'
import ThietLapDichVu from './system/ThietLapDichVu'
import ThietLapChanDoan from './system/ThietLapChanDoan'
import ThietLapDungCu from './system/ThietLapDungCu'
import ThietLapDuocPham from './system/ThietLapDuocPham'
import ThietLapNguonGioiThieu from './system/ThietLapNguonGioiThieu'
import ThietLapTienSuBenh from './system/ThietLapTienSuBenh'
import ThietLapNhomKhachHang from './system/ThietLapNhomKhachHang'
import ThietLapLaboCongTy from './system/ThietLapLaboCongTy'
import ThietLapLaboCongViec from './system/ThietLapLaboCongViec'
import NewProject from './NewProject'
import ProjectsList from './ProjectsList'
import Login from './Login'
import ChiTieuHangNgay from './chitieuhangngay/ChiTieuHangNgay'
import ThongKeNhap from './thongke/ThongKeNhap'
import ChuongTrinhKhuyenMai from './chuongtrinhkhuyenmai/ChuongTrinhKhuyenMai'
import InDonThuoc from './customer/InDonThuoc';
function App() {
  return (
    <BrowserRouter>
    
        
      
      
    <Header />
    <SideBarMain />
    <div id="page-wrapper">
  <div className="container-fluid">
    <MetaPage />

    <Switch>
     <Route exact path='/' component={AllCustomer} />
      <Route exact path='/tong-quan' component={DashBoard} />
      <Route exact path='/tat-ca-khach-hang' component={AllCustomer} />
      <Route exact path='/them-khach-hang' component={AddCustomer} />
      <Route exact path='/sua-khach-hang' component={EditCustomer} />
      <Route exact path='/ho-so-khach-hang/:id'  component={ProfileCustomer} />
      <Route exact path='/phieu-dieu-chi-chi-tiet/:idkh/:id'  component={PhieuDon} />
      <Route exact path='/lich-hen-khach-hang/:id'  component={LichHen} />
      <Route exact path='/lap-phieu-khach-hang/:id'  component={DieuTriThanhToan} />
      <Route exact path='/don-thuoc-khach-hang/:id'  component={DonThuoc} />
      <Route exact path='/in-hoa-don-khach-hang/:idkh/:id'  component={HoaDonThanhToan} />
      <Route exact path='/in-don-thuoc-khach-hang/:idkh/:id'  component={InDonThuoc} />
      <Route exact path='/tat-ca-bac-si' component={AllDoctor} />
      <Route exact path='/them-bac-si' component={AddDoctor} />
      <Route exact path='/sua-bac-si' component={EditDoctor} />
      <Route exact path='/ho-so-bac-si' component={ProfileDoctor} />
      <Route exact path='/chi-tieu-hang-ngay' component={ChiTieuHangNgay} />
      <Route exact path='/thoi-gian-bieu-bac-si' component={TimetableDoctor} />
      <Route exact path='/lich-hen-bac-si' component={CalendarBooking} />
      <Route exact path='/thanh-toan' component={Checkout} />
      <Route exact path='/them-thanh-toan' component={AddPayment} />
      <Route exact path='/hoa-don-khach-hang' component={InvoiceCustomer} />
      <Route exact path='/bao-cao-tong-quan' component={ReportAll} />
      <Route exact path='/bao-cao-doanh-thu' component={ReportDoanhThu} />
      <Route exact path='/thiet-lap-dich-vu' component={ThietLapDichVu} />
      <Route exact path='/thiet-lap-chan-doan' component={ThietLapChanDoan} />
      <Route exact path='/thiet-lap-dung-cu' component={ThietLapDungCu} />
      <Route exact path='/thiet-lap-duoc-pham' component={ThietLapDuocPham} />
      <Route exact path='/thiet-lap-nguon-gioi-thieu' component={ThietLapNguonGioiThieu} />
      <Route exact path='/thiet-lap-tien-su-benh' component={ThietLapTienSuBenh} />
      <Route exact path='/thiet-lap-nhom-khach-hang' component={ThietLapNhomKhachHang} />
      <Route exact path='/thiet-lap-labo-cong-ty' component={ThietLapLaboCongTy} />
      <Route exact path='/thiet-lap-labo-cong-viec' component={ThietLapLaboCongViec} />
      <Route exact path='/chuong-trinh-khuyen-mai' component={ChuongTrinhKhuyenMai} />
      <Route exact path='/thong-ke-nhap' component={ThongKeNhap} />
      <Route exact path='/new-project' component={NewProject} />
      <Route exact path='/list-project' component={ProjectsList} />
    </Switch>
    </div>
<footer className="footer text-center"> 2020 &copy; ỨNG DỤNG QUẢN LÝ PHÒNG KHÁM NHA KHOA </footer>
     </div>
    


  
  
</BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('root'))