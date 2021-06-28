<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class DiseasesSymptoms extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('diseases_symptoms', function (Blueprint $table){
           $table->id();
           $table->unsignedBigInteger('disease_id');
           $table->unsignedBigInteger('symptom_id');

           $table->foreign('disease_id')->references('id')->on('diseases')->cascadeOnDelete();
           $table->foreign('symptom_id')->references('id')->on('symptoms')->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('diseases_symptoms');
    }
}
