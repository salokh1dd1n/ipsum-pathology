<?php

namespace App\Repositories\Interfaces;

interface NewsRepositoryInterface
{

    public function getAllNews();

    public function getPaginatedNews();

    public function getNews(int $id);

    public function editNews(int $id, array $data);
}
