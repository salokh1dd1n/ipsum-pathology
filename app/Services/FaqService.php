<?php

namespace App\Services;


use App\Repositories\FaqRepository;
use App\Repositories\TagsRepository;
use App\Services\Traits\RedirectTrait;

class FaqService extends CoreService
{
    use RedirectTrait;

    protected object $repository;
    protected $tagsRepository;

    public function __construct(FaqRepository $repository, $prefix = 'faq')
    {
        parent::__construct($repository, $prefix);
        $this->tagsRepository = app(TagsRepository::class);
        $this->repository = $repository;
    }

    public function getPaginatedFaq()
    {
        return $this->repository->getPaginatedFaq();
    }

    public function getAllFaqTags()
    {
        return $this->tagsRepository->getAllFaqTags()->get();
    }


    public function getFAQ($id)
    {
        return $this->repository->getFAQ($id);
    }

    public function insertFaqData($data, $tags)
    {
        $result = $this->repository->insertFaqData($data, $tags);
        return $this->redirectWithAlert($result, $this->prefix . '.edit', 'create', $result->id);
    }

    public function updateFaqData($id, $data, $tags)
    {
        $result = $this->repository->updateFaqData($id, $data, $tags);
        return $this->redirectWithAlert($result, $this->prefix . '.edit', 'update', $id);
    }

}
