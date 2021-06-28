<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class DiseasesDiagnostics extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('diseases_diagnostics', function (Blueprint $table){
           $table->id();
           $table->unsignedBigInteger('disease_id');
           $table->unsignedBigInteger('diagnostic_id');

           $table->foreign('disease_id')->references('id')->on('diseases')->cascadeOnDelete();
           $table->foreign('diagnostic_id')->references('id')->on('diagnostics')->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('diseases_diagnostics');
    }
}
