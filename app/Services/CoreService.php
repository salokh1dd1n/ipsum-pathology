<?php

namespace App\Services;

class CoreService
{

    public function __construct()
    {

    }

    public function redirectWithAlert($result, $route, $action, $type = 'success')
    {
        $message = null;
        switch ($action) {
            case "create":
                $message = 'Успешно сохранено';
                break;
            case "update":
                $message = 'Успешно обновлено';
                break;
            case "delete":
                $message = 'Успешно удалено';
                break;
        }

        if ($result) {
            return redirect()
                ->route($route)
                ->with([$type => $message]);
        } else {
            return back()
                ->with(['error' => 'Ошибка, Свяжитесь с администратором'])
                ->withInput();
        }
    }

}
