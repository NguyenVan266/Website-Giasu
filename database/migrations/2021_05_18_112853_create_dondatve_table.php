<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDondatveTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('dondatve', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('id_xe')->unsigned()->nullable();
            $table->integer('id_user')->unsigned()->nullable();
            $table->integer('id_chuyenxe')->unsigned()->nullable();
            $table->string('diemdon');
            $table->string('diemtra');
            $table->string('vitri');
            $table->integer('soluongve');
            $table->string('tongtien');
            $table->integer('trangthai');
            $table->integer('destroy');
            $table->timestamps();
            $table->foreign('id_xe')->references('id')->on('xe');
            $table->foreign('id_user')->references('id')->on('users');
            $table->foreign('id_chuyenxe')->references('id')->on('chuyenxe');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('dondatve');
    }
}
