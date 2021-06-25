<?php

namespace App\Services\Traits;

trait RedirectTrait
{

    private function redirectWithAlert($result, $route, $action, $id = null, $type = 'success')
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
                ->route($route, $id)
                ->with([$type => $message]);
        } else {
            return back()
                ->with(['error' => 'Ошибка, Свяжитесь с администратором'])
                ->withInput();
        }
    }

}
