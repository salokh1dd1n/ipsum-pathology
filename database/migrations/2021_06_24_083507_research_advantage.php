<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ResearchAdvantage extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('research_advantage', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('research_id');
            $table->unsignedBigInteger('advantage_id');

            $table->foreign('research_id')->references('id')->on('research')->cascadeOnDelete();
            $table->foreign('advantage_id')->references('id')->on('advantages')->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('research_advantage');
    }
}
