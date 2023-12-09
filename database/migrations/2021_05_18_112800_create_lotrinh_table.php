<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLotrinhTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('lotrinh', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('id_tuyenduong')->unsigned()->nullable();
            $table->string('tramdung')->nullable();
            $table->time('thoigiandi');
            $table->time('thoigianden');
            $table->date('ngaydi');
            $table->date('ngayden');
            $table->timestamps();
            $table->foreign('id_tuyenduong')->references('id')->on('tuyenduong');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('lotrinh');
    }
}
