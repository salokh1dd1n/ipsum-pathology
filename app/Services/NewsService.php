<?php

namespace App\Services;

use App\Repositories\NewsRepository;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class NewsService extends CoreService
{

    public function __construct(NewsRepository $repository, $prefix = 'news')
    {
        parent::__construct($repository, $prefix);
    }

    public function getPaginatedNews()
    {
        return $this->repository->getPaginatedNews();
    }

    public function getNews($id)
    {
        return $this->repository->find($id);
    }

}
