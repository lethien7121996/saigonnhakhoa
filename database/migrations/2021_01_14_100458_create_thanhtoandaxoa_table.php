<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateThanhtoandaxoaTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('thanhtoandaxoa', function (Blueprint $table) {
            $table->increments('id');
            $table->string('ngaythanhtoan');
            $table->string('chitietthanhtoan');
            $table->string('tongtien');
            $table->string('hinhthucthanhtoan');
            $table->string('ghichu');
            $table->string('nguoithutien');
            $table->string('idkhammoi');
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
        Schema::dropIfExists('thanhtoandaxoa');
    }
}
