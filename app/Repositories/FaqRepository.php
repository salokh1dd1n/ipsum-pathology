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

    public function upadateFaqDataWithTags($id, $data, $tag)
    {
        $faqItem = $this->find($id);
        $faqItem->update($data);
        $faqItem->tags()->sync((array)$tag);
        return $faqItem;
    }

    public function updateFaqDataWithoutTags($id, $data)
    {
        $faqItem = $this->find($id);
        $faqItem->update($data);
        $faqItem->tags()->detach();
        return $faqItem;
    }

}


