<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Thanhtoankhachhang extends Model
{
    protected $table = 'thanhtoankhachhang';
    protected $fillable = ['ngaythanhtoan', 'chitietthanhtoan', 'tongtien', 'hinhthucthanhtoan', 'ghichu', 'nguoithutien', 'idkhammoi', 'idkhachhang'];
}
