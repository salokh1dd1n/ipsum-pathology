<?php

namespace App\Repositories;

use App\Models\Research as Model;

class ResearchesRepository extends CoreRepository
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

    public function getAllResearches()
    {
        $columns = [
            'id',
            'title',
            'short_desc'
        ];

        $result = $this
            ->model
            ->select($columns);

        return $result;
    }

    public function getPaginatedResearches()
    {
        $result = $this
            ->getAllResearches()
            ->orderByDesc('id')
            ->paginate(10);

        return $result;
    }

    public function getResearch($id)
    {
        $columns = [
            'id',
            'title',
            'image',
            'short_desc',
            'description',
        ];
        $result = $this
            ->model
            ->select($columns)
            ->where('id', $id)
            ->with(['services:id,title,description,price'])
            ->with(['advantages:id,title,image'])
            ->first();

        return $result;
    }

    public function insertResearchData($data, $service, $advantage)
    {
        $result = $this->create($data);
        $result->services()->sync((array)$service);
        $result->advantages()->sync((array)$advantage);
        return $result;
    }

    public function updateResearchData(int $id, $data, $service, $advantage)
    {
        $researchItem = $this->find($id);
        $researchItem->update($data);
        $researchItem->services()->sync((array)$service);
        $researchItem->advantages()->sync((array)$advantage);
        return $researchItem;

    }

}


