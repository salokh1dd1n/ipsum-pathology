<?php

namespace App\Repositories;

use App\Models\Faq as Model;

class FaqRepository extends CoreRepository
{

    /**
     * TeamRepository constructor.
     *
     * @param Model $model
     */
    public function __construct(Model $model)
    {
        parent::__construct($model);
    }

    public function getAllFaq()
    {
        $columns = [
            'id',
            'title',
        ];

        $result = $this
            ->model
            ->select($columns)
            ->with(['tags:id,title']);

        return $result;
    }

    public function getPaginatedFaq()
    {
        $result = $this
            ->getAllFaq()
            ->paginate(10);

        return $result;
    }

    public function getFAQ($id)
    {
        $columns = [
            'id',
            'title',
            'description',
        ];
        $result = $this
            ->model
            ->select($columns)
            ->where('id', $id)
            ->with(['tags:id,title'])
            ->first();

        return $result;
    }

    public function insertFaqData($data, $tag)
    {
        $result = $this->create($data);
        $result->tags()->sync((array)$tag);
        return $result;
    }

    public function updateFaqData($id, $data, $tag)
    {
        $faq = $this->find($id);
        $faq->update($data);
        $faq->tags()->sync((array)$tag);
        return $faq;
    }

}


