<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePaymentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('payments', function (Blueprint $table) {
            $table->increments('id');
            $table->integer('p_dondatve_id')->unsigned()->nullable();
            $table->integer('p_user_id')->unsigned()->nullable();
            $table->string('p_dondatve_code')->nullable();
            $table->float('p_money',15,2)->nullable();
            $table->string('p_note')->nullable();
            $table->string('p_vnp_response_code')->nullable();
            $table->string('p_code_vnp')->nullable();
            $table->string('p_code_bank')->nullable();
            $table->date('p_time')->nullable();
            $table->timestamps();
            $table->foreign('p_dondatve_id')->references('id')->on('dondatve');
            $table->foreign('p_user_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('payments');
    }
}
