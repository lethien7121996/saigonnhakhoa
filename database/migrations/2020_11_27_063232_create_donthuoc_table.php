<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDonthuocTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('donthuoc', function (Blueprint $table) {
            $table->increments('id');
            $table->string('idkhachhang');
            $table->string('chandoan');
            $table->string('chandoankhac');
            $table->string('chidinh');
            $table->string('ghichu');
            $table->string('ngay');
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
        Schema::dropIfExists('donthuoc');
    }
}
