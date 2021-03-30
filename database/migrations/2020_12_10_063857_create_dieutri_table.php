<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDieutriTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('dieutri', function (Blueprint $table) {
            $table->increments('id');
            $table->string('ten');
            $table->text('sotien');
            $table->string('baohanh');
            $table->string('donvitinh');
            $table->string('idcha');
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
        Schema::dropIfExists('dieutri');
    }
}
