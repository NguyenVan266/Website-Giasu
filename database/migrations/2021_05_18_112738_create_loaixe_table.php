<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLoaixeTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('loaixe', function (Blueprint $table) {
            $table->increments('id');
            $table->string('tenloaixe');
            $table->integer('soluongghe');
            $table->integer('sohang');
            $table->integer('socot');
            $table->string('sodo');
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
        Schema::dropIfExists('loaixe');
    }
}
