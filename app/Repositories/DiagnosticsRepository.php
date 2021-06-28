<?php

namespace App\Repositories;

use App\Models\Diagnostic as Model;

class DiagnosticsRepository extends CoreRepository
{

    public function __construct(Model $model)
    {
        parent::__construct($model);
    }

    public function getAllDiagnostics()
    {
        $columns = [
            'id',
            'title',
            'price'
        ];

        $result = $this
            ->model
            ->select($columns);

        return $result;
    }

    public function getPaginatedDiagnostics()
    {
        $result = $this
            ->getAllDiagnostics()
            ->paginate(10);

        return $result;
    }

}
