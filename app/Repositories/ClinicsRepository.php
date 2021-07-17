<?php

namespace App\Repositories;

use App\Models\Clinic as Model;

class ClinicsRepository extends CoreRepository
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

    public function getAllClinics()
    {
        $columns = [
            'id',
            'title',
            'address',
            'phone_number'
        ];

        $result = $this
            ->model
            ->select($columns);

        return $result;
    }

    public function getPaginatedClinics($number)
    {
        $result = $this
            ->getAllClinics()
            ->orderByDesc('id')
            ->paginate($number);

        return $result;
    }

    public function getClinic($id)
    {
        $columns = [
            'id',
            'title',
            'phone_number',
            'address',
        ];
        $result = $this
            ->model
            ->select($columns)
            ->where('id', $id)
            ->first();

        return $result;
    }

}


