<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateXeTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('xe', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('id_loaixe')->unsigned()->nullable();
            $table->string('tenxe');
            $table->string('bienso');
            $table->string('anhxe')->nullable();
            $table->integer('trangthai');
            $table->timestamps();
            $table->foreign('id_loaixe')->references('id')->on('loaixe');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('xe');
    }
}
