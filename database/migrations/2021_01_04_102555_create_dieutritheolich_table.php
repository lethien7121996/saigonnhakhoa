<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDieutritheolichTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('dieutritheolich', function (Blueprint $table) {
            $table->increments('id');
            $table->string('ngay');
            $table->string('dieutri');
            $table->string('bacsi');
            $table->string('trangthai');
            $table->string('luuy');
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
        Schema::dropIfExists('dieutritheolich');
    }
}
