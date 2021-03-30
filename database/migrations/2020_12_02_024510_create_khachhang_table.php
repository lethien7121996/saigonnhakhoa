<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateKhachhangTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('khachhang', function (Blueprint $table) {
            $table->increments('ID');
            $table->string('hoten');
            $table->string('gioitinh');
            $table->string('ngaysinh');
            $table->string('diachi');
            $table->string('dienthoai');
            $table->string('tiensubenh');
            $table->string('gioithieu');
            $table->string('khuvuc');
            $table->string('dichvudieutri');
            $table->string('nguongioithieu');
            $table->string('anhdaidien');
            $table->string('truocmatbefore');
            $table->string('hamtrenbefore');
            $table->string('hamduoibefore');
            $table->string('truocmatafter');
            $table->string('hamtrenafter');
            $table->string('hamduoiafter');
            $table->string('danhgia');
            $table->string('sosao');
            $table->string('bacsidieutri');
            $table->string('trangthai');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('khachhang');
    }
}
