<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateChuongtrinhkhuyenmaiTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('chuongtrinhkhuyenmai', function (Blueprint $table) {
            $table->increments('id');
            $table->string('tenchuongtrinh');
            $table->string('duocgiam');
            $table->string('donvi');
            $table->string('ngayapdung');
            $table->string('denngay');
            $table->string('nhomthanhvien');
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
        Schema::dropIfExists('chuongtrinhkhuyenmai');
    }
}
