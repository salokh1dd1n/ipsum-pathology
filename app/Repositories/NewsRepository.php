<?php

namespace App\Repositories;

use App\Models\News as Model;

class NewsRepository extends CoreRepository
{

    public function getModelClass()
    {
        return Model::class;
    }



}
