<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDiemdontraTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('diemdontra', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('id_tuyenduong')->unsigned()->nullable();
            $table->string('diemdon');
            $table->string('diemtra');
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
        Schema::dropIfExists('diemdontra');
    }
}
