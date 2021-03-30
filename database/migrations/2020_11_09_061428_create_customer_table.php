<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCustomerTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('customer', function (Blueprint $table) {
            $table->increments('ID');
            $table->string('hoten');
            $table->string('gioitinh');
            $table->string('ngaysinh');
            $table->string('email');
            $table->string('dienthoai');
            $table->string('tiensubenh');
            $table->string('gioithieu');
            $table->string('dichvudieutri');
            $table->string('nguongioithieu');
            $table->string('anhdaidien');
            $table->string('hamtren');
            $table->string('hamduoi');
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
        Schema::dropIfExists('customer');
    }
}
