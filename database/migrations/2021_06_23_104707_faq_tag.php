<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class FaqTag extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('faq_tag', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('faq_id')->nullable();
            $table->unsignedBigInteger('tags_id')->nullable();
            $table->foreign('faq_id')->references('id')->on('faqs')->cascadeOnDelete();
            $table->foreign('tags_id')->references('id')->on('tags')->cascadeOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('faq_tag');
    }
}
