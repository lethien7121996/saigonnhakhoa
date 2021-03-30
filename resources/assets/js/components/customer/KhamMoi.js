
import React, { Component } from "react"
import { Link } from 'react-router-dom'
import KhachHangInfo from './KhachHangInfo'
let date_ob = new Date();
let date = ("0" + date_ob.getDate()).slice(-2);
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
let year = date_ob.getFullYear();
let hours = date_ob.getHours();
let minutes = date_ob.getMinutes();
let seconds = date_ob.getSeconds();
const ngayhientai=year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds
class KhamMoi extends Component {
    constructor (props) {
    super(props)
    this.state = {
        khammoi: [],
        nguonlist: [],
        benhlylist: [],
        dichvulist: [],
        doctorlist: [],
        idkhachhang:this.props.match.params.id,
        ngay: ngayhientai,
        nguon: '1',
        benhly: '1',
        dichvu: '1',
        ghichu: 'Chưa có ghi chú',
        bacsi: '4',
        chiphi: '0',
        thanhtoan: '0',
        trangthaidieutri: '3',
        idkhammoiupdate: '',
        usercurrent: []
    }
    this.handleFieldChange = this.handleFieldChange.bind(this)
    this.handleCreateKhamMoi  = this.handleCreateKhamMoi.bind(this)
    this.handleDeleteKhamMoi  = this.handleDeleteKhamMoi.bind(this)
    this.handleChiTietKhamMoi  = this.handleChiTietKhamMoi.bind(this)
    this.handleUpdateKhamMoi = this.handleUpdateKhamMoi.bind(this)
    
    
   
  }

componentDidMount(){
 
    axios.get('/index.php/api/khammoi/'+this.state.idkhachhang).then(response => {
        this.setState({
          khammoi: response.data
        })
      })
      axios.get('/index.php/api/nguongioithieu').then(response => {
        this.setState({
          nguonlist: response.data
        })
      })
      axios.get('/index.php/api/dichvu').then(response => {
        this.setState({
          dichvulist: response.data
        })
      }) 
      axios.get('/index.php/api/doctor').then(response => {
        this.setState({
          doctorlist: response.data
        })
      })
     
      axios.get('/index.php/api/chandoan').then(response => {
        
        this.setState({
            benhlylist: response.data
          })
      })
      axios.get('/index.php/api/infouser/'+localStorage.getItem('userid')).then(response => {
        console.log(response.data)
        this.setState({
          usercurrent: response.data
        })
       
      })
}
handleFieldChange (event) {
   

  var checkedArr = [];
  var value;
   if(event.target.type == 'checkbox')
   {
     
       const checkeds = document.getElementsByTagName('input');
       for (var i = 0; i < checkeds.length; i++) {
         if (checkeds[i].checked) {
           checkedArr.push(checkeds[i].value);
         }
       }
       value = checkedArr;
     this.setState({ [event.target.name]: value });
   }
   else if(event.target.type == 'file')
   {
   
     this.setState({
       [event.target.name]:event.target.files[0]
     })
   }
   else
   {
     if(event.target.name == 'dieutridichvu')
     {
      axios.get('/index.php/api/sanphamdichvutheoid/'+event.target.value)
      .then(response => {
        document.getElementById("chiphi").value = response.data.sotien
        document.getElementById("soluong").value = "1"
        document.getElementById("updatechiphi").value = response.data.sotien
        document.getElementById("updatesoluong").value = "1"
        this.setState({
          chiphi: response.data.sotien,
         
        })
        
      })
      .catch(error => {
    
        
      })
     }
     if(event.target.name == 'soluong')
     {
      if(event.target.id == "updatesoluong")
      {
        var mdieutri = document.getElementById("updatedieutridichvu").value
        axios.get('/index.php/api/sanphamdichvutheoid/'+mdieutri)
        .then(response => {
        var chiphi = response.data.sotien
       
           
          
        var tongchiphi = Number(chiphi)*Number(document.getElementById("updatesoluong").value)
          
         document.getElementById("updatechiphi").value=tongchiphi
         
         this.setState({
          chiphi: tongchiphi,
         
        })
        })
      }
      else
      {

        var mdieutri = document.getElementById("dieutridichvu").value
        axios.get('/index.php/api/sanphamdichvutheoid/'+mdieutri)
        .then(response => {
        var chiphi = response.data.sotien
       
           
          
        var tongchiphi = Number(chiphi)*Number(document.getElementById("soluong").value)
          
         document.getElementById("chiphi").value=tongchiphi
         
         this.setState({
          chiphi: tongchiphi,
         
        })
        })
      }
             
      
     }
     this.setState({
       [event.target.name]: event.target.value
     })
     
   }
  
 }
 
 handleCreateKhamMoi (event) {
   event.preventDefault()

   const { history } = this.props
   var date_ob = new Date();
   var date = ("0" + date_ob.getDate()).slice(-2);
   var month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
   var year = date_ob.getFullYear();
   var hours = date_ob.getHours();
   var minutes = date_ob.getMinutes();
   var seconds = date_ob.getSeconds();
   var ngayhientai=year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds
   const khammoi = {
    ngay: ngayhientai,
    nguon: this.state.nguon,
    benhly: this.state.benhly,
    dichvu: this.state.dichvu,
    ghichu: this.state.ghichu,
    bacsi: this.state.bacsi,
    chiphi: this.state.chiphi,
    thanhtoan: this.state.thanhtoan,
    trangthaidieutri: this.state.trangthaidieutri,
    idkhachhang: this.state.idkhachhang
   }
   console.log(khammoi);
   axios.post('/index.php/api/khammoi', khammoi)
     .then(response => {
       // redirect to the homepage
       axios.get('/index.php/api/khammoi/'+this.state.idkhachhang).then(response => {
           this.setState({
            khammoi: response.data
           })
         })
       var button = document.getElementById('btn-endss')
       button.click()
       
     })
     .catch(error => {
       this.setState({
         
         
       })
       var button = document.getElementById('btn-endss')
       button.click()
     })
 }
 handleDeleteKhamMoi(event)
 {
     event.preventDefault()
     let idkhammoi=event.target.attributes.getNamedItem('data-idkhammoi').value

     axios.get('/index.php/api/khammoidelete/'+idkhammoi)
     .then(response => {
       // redirect to the homepage
       axios.get('/index.php/api/khammoi/'+this.state.idkhachhang).then(response => {
           this.setState({
                khammoi: response.data
           })
         })
         var button = document.getElementById('btndongdulieu')
       
         button.click()
     })
     .catch(error => {
       this.setState({
       
         
       })
       
     })
 }
 handleChiTietKhamMoi(event)
 {
   event.preventDefault()
   let idpc=event.target.attributes.getNamedItem('data-idkhammoi').value
   axios.get('/index.php/api/chitietkhammoi/'+idpc)
     .then(response => {
       console.log(response.data)
     
       document.getElementById('updatebenhly').value=response.data["benhly"]
       var selectbl=document.getElementById("updatebenhly").childNodes;
       for(var i = 0; i < selectbl.length; i++) {
         var datadv=selectbl[i].value;
         if(datadv==response.data["benhly"])
         {
            selectbl[i].setAttribute('selected', true);
         }
        }
        document.getElementById('updatedichvu').value=response.data["dichvu"]
       var selectdv=document.getElementById("updatedichvu").childNodes;
       for(var p = 0; p < selectdv.length; p++) {
         var datadv=selectdv[p].value;
         if(datadv==response.data["dichvu"])
         {
            selectdv[p].setAttribute('selected', true);
         }
        }
        document.getElementById('updatenguon').value=response.data["nguon"]
       var selectng=document.getElementById("updatenguon").childNodes;
       for(var z = 0; z < selectng.length; z++) {
            var datadv=selectng[z].value;
            if(datadv===response.data["nguon"])
            {
                selectng[z].setAttribute('selected', true);
            }
        }
        document.getElementById('updateghichu').value=response.data["ghichu"]
        document.getElementById('updatebacsi').value=response.data["bacsi"]
        var selectbs=document.getElementById("updatebacsi").childNodes;
        for(var i = 0; i < selectbs.length; i++) {
             var datadv=selectbs[i].value;
             if(datadv==response.data["bacsi"])
             {
                selectbs[i].setAttribute('selected', true);
             }
         }
         document.getElementById('updatetrangthaidieutri').value=response.data["trangthaidieutri"]
        var selectttdt=document.getElementById("updatetrangthaidieutri").childNodes;
        for(var i = 0; i < selectttdt.length; i++) {
             var datadv=selectttdt[i].value;
             if(datadv==response.data["trangthaidieutri"])
             {
                selectttdt[i].setAttribute('selected', true);
             }
         }
        this.setState({
           ngay: response.data["ngay"],
           nguon: response.data["nguon"],
           benhly: response.data["benhly"],
           dichvu: response.data["dichvu"],
           ghichu: response.data["ghichu"],
           bacsi: response.data["bacsi"],
           chiphi: response.data["chiphi"],
           thanhtoan: response.data["thanhtoan"],
           trangthaidieutri: response.data["trangthaidieutri"],
           idkhammoiupdate: response.data["id"]
       })
     })
     .catch(error => {
       this.setState({
       
         
       })
       
     })
 }


 handleUpdateKhamMoi(event)
 {
  event.preventDefault()
  const khammoiupdate = {
    ngay: this.state.ngay,
    nguon: this.state.nguon,
    benhly: this.state.benhly,
    dichvu: this.state.dichvu,
    ghichu: this.state.ghichu,
    bacsi: this.state.bacsi,
    chiphi: this.state.chiphi,
    thanhtoan: this.state.thanhtoan,
    trangthaidieutri: this.state.trangthaidieutri,
    idkhachhang: this.state.idkhachhang
   }
   console.log(khammoiupdate);
   axios.post('/index.php/api/khammoiupdate/'+this.state.idkhammoiupdate,khammoiupdate)
   .then(response => {
     // redirect to the homepage
     axios.get('/index.php/api/khammoi/'+this.state.idkhachhang).then(response => {
      this.setState({
       khammoi: response.data
      })
    })
       var button = document.getElementById('btn-endsss')
       button.click()
   })
   .catch(error => {
     this.setState({
       errors: error.response.data.errors
       
     })
     var button = document.getElementById('btn-endsss')
     button.click()
   })
   
   
 }
 getdulieuxoa(event)
 {
  event.preventDefault()
  let idkhammoi=event.target.attributes.getNamedItem('data-idkhammoi').value
   document.getElementById("btnxoadulieu").setAttribute("data-idkhammoi", idkhammoi);
 }
  render() {
 const { khammoi,doctorlist,dichvulist,benhlylist,nguonlist,idkhachhang,usercurrent } = this.state
    return (
      <div className="row">
        <div className="col-md-12 col-xs-12 m-b-20">
        <div className="col-md-12 col-xs-12 m-b-20">

<section>
<div className="sttabs tabs-style-bar">
<nav>
 <ul>
   <li className=""><Link to={'/ho-so-khach-hang/'+idkhachhang} className="sticon"><span>Thông tin cá nhân</span></Link></li>
  
   <li className="tab-current"><Link to={'/kham-moi/'+idkhachhang} className="sticon"><span>Bệnh lý</span></Link></li>
 

 </ul>
</nav>

{/* /content */}
</div>
{/* /tabs */}
</section>
<KhachHangInfo idkhachhang={idkhachhang}/>
</div>

</div>
         <div className="col-md-12 col-xs-12 m-b-20">

<section>
<div className="sttabs tabs-style-bar">
<nav>
 <ul>
  

 </ul>
</nav>

{/* /content */}
</div>
{/* /tabs */}
</section>
</div>

      <div className="col-sm-12">
        <div className="white-box">
          <h3 className="box-title">BỆNH LÝ KHÁCH HÀNG
  </h3>
  
    <div className="row">
    
      
      <div className="col-sm-12">
     
   
        <div className="table-responsive">
          <table className="table-bordered table-hover table color-table primary-table" >
            <thead>
              <tr>
                <th>STT</th>
                <th>Ngày</th>
                <th>Nguồn</th>
                <th>Bệnh lý</th>
                <th>Dịch vụ</th>
                <th>Ghi chú</th>
                <th>Bác sĩ</th>
                <th>Chi phí</th>
                <th>Thanh toán</th>
                <th>Trạng thái điều trị</th>
                <th className="icon-list-demo btnthemele">  <button type="button" className="btn btn-block  btn-primary" data-toggle="modal" data-target="#exampleModalKeHoach" data-whatever="@mdo"><i className="fa fa-plus"></i></button></th>
              </tr>
            </thead>
          
            <tbody>
            {khammoi.map((cd, index) => ( 
              <tr key={cd.id} id={"ketquadieutriitem"+cd.id} data-itemcd={cd.id}>
                
                <td data-icd={cd.id}><p>{index+1}</p>
                <button onClick={this.handleChiTietKhamMoi} className="icon-smallx icon-list-demo btn btn-info btn-circle btn-xl" data-idkhammoi={cd.id} data-toggle="modal" data-target="#exampleModalKeHoachCapNhat" data-whatever="@mdo"><i className="fa fa-pencil" data-idkhammoi={cd.id}></i></button>
                </td>
                <td data-icd={cd.id} id={"cotdichvu"+cd.id}>{moment(cd.updated_at).format("DD-MM-YYYY HH:mm:ss")}
                <Link className="btn btn-block  btn-primary" to={"/anh-sau-dieu-tri-khach-hang/"+idkhachhang+'/'+cd.id}>Ảnh trước điều trị <span className="sodemanh" id={"atdt"+cd.id}></span></Link>
                {(() => {
                             axios.get('/index.php/api/laysoanh/'+cd.id).then(response => {
                                 var soanh = response.data[0].soanh
                                 document.getElementById("atdt"+cd.id).innerText=soanh
                            
                              })
                    })()}
           
                </td>
                <td data-icd={cd.id}>{cd.tennguon}</td>
                <td data-icd={cd.id}>{cd.tenchandoan}</td>
                <td data-icd={cd.id}>{cd.tendichvu}</td>
                <td data-icd={cd.id} id={"cotbacsi"+cd.id}>{cd.ghichu}</td>
                <td data-icd={cd.id} id={"cotbacsi"+cd.id}>{cd.tenbacsi}</td>
                <td data-icd={cd.id}>
                <span id={"tongchiphi"+cd.id}>{cd.chiphi.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".")} </span> VNĐ
                    {(() => {
                      
                   
   axios.get('/index.php/api/thongkechiphikhammoi/'+cd.id)
   .then(response => {
    document.getElementById("tongchiphi"+cd.id).innerText=response.data[0].tongsaugiam.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".")
    
    
    
     
   })
   .catch(error => {
    
  
   })
   
})()}
              
              <Link to={'/chi-phi/'+cd.idkhachhang+'/'+cd.id} className="btn btn-block btn-info" key={cd.id}  >Tạo chi phí</Link> 
             
              
                 
                     
                </td>
                <td data-icd={cd.id}>  <span  id={"tongthanhtoan"+cd.id}></span> VNĐ
                {(() => {
                      
                   
                      axios.get('/index.php/api/thanhtoanthongke/'+cd.id)
                      .then(response => {
                        var tongconlai = Number(response.data[0].phaithanhtoan)-Number(response.data[1].dathanhtoan)
                       document.getElementById("tongthanhtoan"+cd.id).innerText=tongconlai.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ".")
                       
                       
                       
                        
                      })
                      .catch(error => {
                       
                     
                      })
                      
                   })()}
                  
                  {(() => {
                         if(usercurrent["role"]!=="3")
                         {
                             return (
                                <Link to={'/tao-thanh-toan/'+cd.idkhachhang+'/'+cd.id} className="btn btn-block btn-info" key={cd.id}  >Thanh toán ngay</Link> 
                             )
                         }
                         else
                         {
                           return(
                           <Link to={'/tao-thanh-toan/'+cd.idkhachhang+'/'+cd.id} className="hidden btn btn-block btn-info" key={cd.id}  >Thanh toán ngay</Link> 
                           )
                         }
                    })()}
         
            
           
                </td>
               
               
                {(() => {
        if (cd.trangthaidieutri==="0") {
          return (
            <td><Link to={'/dieu-tri-theo-lich/'+cd.idkhachhang+'/'+cd.id} className="btn btn-block btn-info" key={cd.id}  >Hoàn thành</Link></td>
          )
        }
        else if (cd.trangthaidieutri==="1") {
            return (
              <td><Link to={'/dieu-tri-theo-lich/'+cd.idkhachhang+'/'+cd.id} className="btn btn-block btn-danger" key={cd.id}  >Đã hủy</Link></td>
            )
        }
        else if (cd.trangthaidieutri==="2") {
            return (
              <td><Link to={'/dieu-tri-theo-lich/'+cd.idkhachhang+'/'+cd.id} className="btn btn-block btn-success" key={cd.id}  >Đang điều trị</Link></td>
            )
        }
        else if (cd.trangthaidieutri==="3") {
            return (
              <td><Link to={'/dieu-tri-theo-lich/'+cd.idkhachhang+'/'+cd.id} className="btn btn-block btn-warning" key={cd.id}  >Không làm</Link></td>
            )
        }
        else {
          return (
            <td><Link to={'/dieu-tri-theo-lich/'+cd.idkhachhang+'/'+cd.id} className="btn btn-block btn-success" key={cd.id}  >Chờ khám</Link></td>
          )
        }
      })()}
              
                <td className="btnaction">
                  <button data-idkhammoi={cd.id} onClick={this.getdulieuxoa} data-toggle="modal" data-target="#xoakhachhang" className="icon-list-demo btn btn-danger btn-circle btn-xl" data-id={cd.id}>
                    <i className="fa fa-trash-o" data-idkhammoi={cd.id}></i>
                  </button>
                  
                

                  </td>
               
              </tr>
            ))}
              
            </tbody>
          </table>
        </div>
      
    </div>
  </div>
        </div>
     
        <div className="row text-center m-t-10">
      
        </div>
      </div>
      <div className="modal fade" id="exampleModalKeHoach" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel1">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
            <h4 className="modal-title" id="exampleModalLabel1">Tạo bệnh lý</h4> </div>
          <div className="modal-body">
            <form onSubmit={this.handleCreateKhamMoi}>
              <div className="form-group hidden">
                <label htmlFor="recipient-name" className="control-label">Ngày </label>
                <input type="text" className="form-control" name="ngay" disabled id="ngay" value={ngayhientai} onChange={this.handleFieldChange} /> </div>
                <div className="form-group">
                    <div className="row ">
                    <div className="col-md-12">
                        <label htmlFor="recipient-name" className="control-label">Bệnh lý</label>
                        <select className="form-control" name="benhly" id="benhly" onChange={this.handleFieldChange}>
                            <option value="chưa chọn">Chọn bệnh lý</option>
                            {benhlylist.map(cd => ( 
                            <option id={"itembenhly"+cd.id} key={cd.id}  value={cd.id} >{cd.ten}</option>
                        ))}
                    </select>
                        </div>
                    
                    </div>
              </div>
              <div className="form-group">
                    <div className="row ">
                    <div className="col-md-12">
                        <label htmlFor="recipient-name" className="control-label">Dịch vụ</label>
                        <select className="form-control" name="dichvu" id="dichvu" onChange={this.handleFieldChange}>
                            <option value="chưa chọn">Chọn dịch vụ</option>
                            {dichvulist.map(cd => ( 
                            <option id={"itemdichvu"+cd.id} key={cd.id}  value={cd.id} >{cd.ten}</option>
                        ))}
                    </select>
                        </div>
                    
                    </div>
              </div>
              <div className="form-group">
                    <div className="row ">
                    <div className="col-md-12">
                        <label htmlFor="recipient-name" className="control-label">Nguồn</label>
                        <select className="form-control" name="nguon" id="nguon" onChange={this.handleFieldChange}>
                            <option value="chưa chọn">Chọn nguồn</option>
                            {nguonlist.map(cd => ( 
                            <option id={"itemnguon"+cd.id} key={cd.id}  value={cd.id} >{cd.nguon}</option>
                        ))}
                    </select>
                        </div>
                    
                    </div>
              </div>
              <div className="form-group">
                <label htmlFor="recipient-name" className="control-label">Ghi chú </label>
                <textarea className="form-control" name="ghichu" id="ghichu" onChange={this.handleFieldChange} /> 
              </div>
              
              <div className="form-group">
                  <div className="row">
                  <div className="col-md-12">
                        <label htmlFor="recipient-name" className="control-label">Bác sĩ</label>
                        <select className="form-control" name="bacsi" id="bacsi" onChange={this.handleFieldChange}>
                        <option value="0">Chọn bác sĩ</option>
                        {doctorlist.map(cd => ( 
                            <option key={cd.id} value={cd.id}>{cd.ten}</option>
                        ))}
                          
                         
                    </select>
                        </div>
                  </div>
         
              </div>
     
              <div className="form-group">
                  <div className="row">
                  <div className="col-md-12">
                        <label htmlFor="recipient-name" className="control-label">Trạng thái điều trị</label>
                        <select className="form-control" name="trangthaidieutri" id="trangthaidieutri" onChange={this.handleFieldChange}>
                        <option value="0">Chọn trạng thái</option>
                        <option value="0">Hoàn Thành</option>
                        <option value="1">Đã hủy </option>
                        <option value="2">Đang điều trị</option>
                        <option value="3">Không làm</option>
                        <option value="4">Chờ khám</option>
                    </select>
                        </div>
                  </div>
         
              </div>
              <div className="modal-footer">
            <button type="button" id="btn-endss" className="btn btn-default btn-end" data-dismiss="modal">QUAY LẠI</button>
            <button type="submit" className="btn btn-primary" >LƯU LẠI</button>
          </div>
            </form>
          </div>
         
        </div>
      </div>
    </div>
    <div className="modal fade" id="exampleModalKeHoachCapNhat" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel1">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
            <h4 className="modal-title" id="exampleModalLabel1CapNhat">Cập nhật bệnh lý</h4> </div>
          <div className="modal-body">
          <form onSubmit={this.handleUpdateKhamMoi}>
              <div className="form-group hidden">
                <label htmlFor="recipient-name" className="control-label">Ngày </label>
                <input type="text" className="form-control" name="ngay" disabled id="updatengay" value={ngayhientai} onChange={this.handleFieldChange} /> </div>
                <div className="form-group">
                    <div className="row ">
                    <div className="col-md-12">
                        <label htmlFor="recipient-name" className="control-label">Bệnh lý</label>
                        <select className="form-control" name="benhly" id="updatebenhly" onChange={this.handleFieldChange}>
                            <option value="chưa chọn">Chọn bệnh lý</option>
                            {benhlylist.map(cd => ( 
                            <option id={"itembenhly"+cd.id} key={cd.id}  value={cd.id} >{cd.ten}</option>
                        ))}
                    </select>
                        </div>
                    
                    </div>
              </div>
              <div className="form-group">
                    <div className="row ">
                    <div className="col-md-12">
                        <label htmlFor="recipient-name" className="control-label">Dịch vụ</label>
                        <select className="form-control" name="dichvu" id="updatedichvu" onChange={this.handleFieldChange}>
                            <option value="chưa chọn">Chọn dịch vụ</option>
                            {dichvulist.map(cd => ( 
                            <option id={"itemdichvu"+cd.id} key={cd.id}  value={cd.id} >{cd.ten}</option>
                        ))}
                    </select>
                        </div>
                    
                    </div>
              </div>
              <div className="form-group">
                    <div className="row ">
                    <div className="col-md-12">
                        <label htmlFor="recipient-name" className="control-label">Nguồn</label>
                        <select className="form-control" name="nguon" id="updatenguon" onChange={this.handleFieldChange}>
                            <option value="chưa chọn">Chọn nguồn</option>
                            {nguonlist.map(cd => ( 
                            <option id={"itemnguon"+cd.id} key={cd.id}  value={cd.id} >{cd.nguon}</option>
                        ))}
                    </select>
                        </div>
                    
                    </div>
              </div>
              <div className="form-group">
                <label htmlFor="recipient-name" className="control-label">Ghi chú </label>
                <textarea className="form-control" name="ghichu" id="updateghichu" onChange={this.handleFieldChange} /> 
              </div>
              
              <div className="form-group">
                  <div className="row">
                  <div className="col-md-12">
                        <label htmlFor="recipient-name" className="control-label">Bác sĩ</label>
                        <select className="form-control" name="bacsi" id="updatebacsi" onChange={this.handleFieldChange}>
                        <option value="0">Chọn bác sĩ</option>
                        {doctorlist.map(cd => ( 
                            <option key={cd.id} value={cd.id}>{cd.ten}</option>
                        ))}
                          
                         
                    </select>
                        </div>
                  </div>
         
              </div>
     
              <div className="form-group">
                  <div className="row">
                  <div className="col-md-12">
                        <label htmlFor="recipient-name" className="control-label">Trạng thái điều trị</label>
                        <select className="form-control" name="trangthaidieutri" id="updatetrangthaidieutri" onChange={this.handleFieldChange}>
                        <option value="0">Chọn trạng thái</option>
                        <option value="0">Hoàn Thành</option>
                        <option value="1">Đã hủy </option>
                        <option value="2">Đang điều trị</option>
                        <option value="3">Không làm</option>
                        <option value="4">Chờ khám</option>
                    </select>
                        </div>
                  </div>
         
              </div>
              <div className="modal-footer">
            <button type="button" id="btn-endsss" className="btn btn-default btn-end" data-dismiss="modal">QUAY LẠI</button>
            <button type="submit" className="btn btn-primary" >LƯU LẠI</button>
          </div>
            </form>
          </div>
         
        </div>
      </div>
    </div>
    <div className="modal fade" id="xoakhachhang" tabIndex={-1} role="dialog" aria-labelledby="xoakhachhang">
<div className="modal-dialog" role="document">
  <div className="modal-content">
    <div className="modal-header">
      <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
      <h4 className="modal-title" id="exampleModalLabel1">BẠN CÓ CHẮC CHẮN MUỐN XÓA</h4> </div>
    <div className="modal-body">
    <button type="button" className="btn btn-default" data-dismiss="modal" id="btndongdulieu">Đóng</button>
                                            <button id="btnxoadulieu" onClick={this.handleDeleteKhamMoi} type="button" className="btn btn-primary">Xóa</button>
    </div>
 
  </div>
</div>
</div>
    </div>
  
    );
  }
}

export default KhamMoi;