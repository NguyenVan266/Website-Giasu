<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateChuyenxeTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('chuyenxe', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('id_lotrinh')->unsigned()->nullable();
            $table->integer('id_nhanvien')->unsigned()->nullable();
            $table->integer('id_xe')->unsigned()->nullable();
            $table->string('giave');
            $table->integer('trangthai');
            $table->timestamps();
            $table->foreign('id_lotrinh')->references('id')->on('lotrinh');
            $table->foreign('id_nhanvien')->references('id')->on('nhanvien');
            $table->foreign('id_xe')->references('id')->on('xe');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('chuyenxe');
    }
}
