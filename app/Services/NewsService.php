<?php

namespace App\Services;

use App\Repositories\NewsRepository;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class NewsService extends CoreService
{
    protected object $repository;

    /**
     * NewsService constructor.
     * @param NewsRepository $repository
     * @param string $prefix
     */

    public function __construct(NewsRepository $repository, $prefix = 'news')
    {
        $this->repository = $repository;
        parent::__construct($this->repository, $prefix);
    }

    public function getAllNews($number)
    {
        return $this->repository->getAllNews()->addSelect(['image', 'short_desc'])->take($number)->get();
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
