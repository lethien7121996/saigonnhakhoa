<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateQuatrinhdieutriTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('quatrinhdieutri', function (Blueprint $table) {
            $table->increments('id');
            $table->string('idkhachhang');
            $table->string('ngaydieutri');
            $table->string('rang');
            $table->string('soluong');
            $table->string('dieutridichvu');
            $table->string('ghichu');
            $table->string('idbacsi');
            $table->string('congvieclabo');
            $table->string('congvieccungcap');
            $table->string('chiphi');
            $table->string('giamgia');
            $table->string('loaigiamgia');
            $table->string('trangthai');
            $table->string('idphieudieuchi');
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
        Schema::dropIfExists('quatrinhdieutri');
    }
}
