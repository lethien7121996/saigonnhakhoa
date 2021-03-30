<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLichhenTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('lichhen', function (Blueprint $table) {
            $table->increments('id');
            $table->string('idkhachhang');
            $table->string('dichvu');
            $table->string('trangthai');
            $table->string('ghichu');
            $table->string('loai');
            $table->string('dieutri');
            $table->string('benhly');
            $table->string('idkhammoi');
            $table->string('start');
            $table->string('end');
            $table->string('giohen');
            $table->string('idbacsi');
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
        Schema::dropIfExists('lichhen');
    }
}
