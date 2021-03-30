<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateThongkenhapTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('thongkenhap', function (Blueprint $table) {
            $table->increments('id');
            $table->string('ngay');
            $table->string('hen');
            $table->string('giao');
            $table->string('tendungcu');
            $table->string('congty');
            $table->string('sl');
            $table->string('dongia');
            $table->string('phikhac');
            $table->string('ghichuphikhac');
            $table->string('tongcong');
            $table->string('datra');
            $table->string('ghichu');
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
        Schema::dropIfExists('thongkenhap');
    }
}
