<?php

namespace App\Services;

use App\Repositories\NewsRepository;

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
        return $this->repository->getAllNews()->addSelect(['image', 'description'])->orderByDesc('id')->take($number)->get();
    }

    public function getPaginatedNews($number)
    {
        return $this->repository->getPaginatedNews($number);
    }

    public function getNews($id)
    {
        return $this->repository->find($id);
    }

}
