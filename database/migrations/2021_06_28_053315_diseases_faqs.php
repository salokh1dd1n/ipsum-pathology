<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class DiseasesFaqs extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('diseases_faqs', function (Blueprint $table){
           $table->id();
           $table->unsignedBigInteger('disease_id');
           $table->unsignedBigInteger('faq_id');

           $table->foreign('disease_id')->references('id')->on('diseases')->cascadeOnDelete();
           $table->foreign('faq_id')->references('id')->on('faqs')->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('diseases_faqs');
    }
}
