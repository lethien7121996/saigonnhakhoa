<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLabocongviecTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('labocongviec', function (Blueprint $table) {
            $table->increments('id');
            $table->string('tencongviec');
            $table->string('idcongty');
            $table->string('donvitinh');
            $table->string('dongia');
            $table->string('baohanh');
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
        Schema::dropIfExists('labocongviec');
    }
}
