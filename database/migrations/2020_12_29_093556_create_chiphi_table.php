<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateChiphiTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('chiphi', function (Blueprint $table) {
            $table->increments('id');
            $table->string('ngaytao');
            $table->string('ten');
            $table->string('gia');
            $table->string('soluong');
            $table->string('thanhtien');
            $table->string('giamgia');
            $table->string('saugiam');
            $table->string('idkhachhang');
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
        Schema::dropIfExists('chiphi');
    }
}
