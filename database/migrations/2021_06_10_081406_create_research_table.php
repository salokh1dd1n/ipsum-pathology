<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateResearchTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::dropIfExists('research');
        Schema::create('research', function (Blueprint $table) {
            $table->id();
            $table->string('title', 100);
            $table->string('image', 50);
            $table->string('short_desc');
            $table->unsignedBigInteger('advantage_id');
            $table->unsignedBigInteger('service_id');
            $table->text('description');
            $table->timestamps();

            $table->foreign('advantage_id')->references('id')->on('advantages');
            $table->foreign('service_id')->references('id')->on('services');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('research');
    }
}
