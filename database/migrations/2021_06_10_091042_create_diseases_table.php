<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDiseasesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('diseases', function (Blueprint $table) {
            $table->id();
            $table->json('title');
            $table->json('description');
            $table->unsignedBigInteger('symptom_id');
            $table->json('symptom_desc');
            $table->unsignedBigInteger('diagnostic_id');
            $table->json('treatment_desc')->nullable();
            $table->json('faq_ids');
            $table->timestamps();

            $table->foreign('symptom_id')->references('id')->on('symptoms');
            $table->foreign('diagnostic_id')->references('id')->on('diagnostics');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('diseases');
    }
}
