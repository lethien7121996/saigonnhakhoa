<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateKhammoiTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('khammoi', function (Blueprint $table) {
            $table->increments('id');
            $table->string('ngay');
            $table->string('nguon');
            $table->string('benhly');
            $table->string('dichvu');
            $table->string('ghichu');
            $table->string('bacsi');
            $table->string('chiphi');
            $table->string('thanhtoan');
            $table->string('trangthaidieutri');
            $table->string('idkhachhang');
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
        Schema::dropIfExists('khammoi');
    }
}
