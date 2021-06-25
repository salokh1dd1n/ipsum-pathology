<?php

namespace App\Services;

use App\Repositories\TagsRepository;

class TagsService extends CoreService
{

    protected object $repository;

    /**
     * TagsService constructor.
     * @param TagsRepository $repository
     * @param string $prefix
     */
    public function __construct(TagsRepository $repository, $prefix = 'tags')
    {
        $this->repository = $repository;
        parent::__construct($this->repository, $prefix);
    }

    public function getPaginatedFaqTags()
    {
        return $this->repository->getPaginatedFaqTags();
    }

    /**
     * @param int $id
     * @return \Illuminate\Database\Eloquent\Model
     */
    public function getFaqTag(int $id)
    {
        return $this->repository->find($id);
    }

}
