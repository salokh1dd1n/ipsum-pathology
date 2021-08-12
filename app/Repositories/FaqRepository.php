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
            'description',
            'position'
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
            ->orderBy('position')
            ->paginate(10);

        return $result;
    }

    public function getRelatedFaqTags($faqs)
    {
        $tags = [];
        foreach ($faqs as $faq) {
            foreach ($faq->tags as $tag) {
                $tags[$tag->id] = $tag->title;
            }
        }
        ksort($tags);

        return $tags;
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


