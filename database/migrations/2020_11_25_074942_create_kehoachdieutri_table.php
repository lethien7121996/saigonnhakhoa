<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateKehoachdieutriTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('kehoachdieutri', function (Blueprint $table) {
            $table->increments('id');
            $table->string('idkhachhang');
            $table->string('ngaylapkehoach');
            $table->string('rang');
            $table->string('soluong');
            $table->string('dieutridichvu');
            $table->string('ghichu');
            $table->string('idbacsi');
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
        Schema::dropIfExists('kehoachdieutri');
    }
}
