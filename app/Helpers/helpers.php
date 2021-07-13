<?php
function multiOptionSelected($old_inputs, $value, $inputs = null)
{
    $result = null;
    if ($old_inputs) {
        foreach ($old_inputs as $old_input) {
            if ($old_input == $value) {
                $result = "selected";
            }
        }
    } else {
        if ($inputs != null) {
            foreach ($inputs as $input) {
                if ($input->id == $value) {
                    $result = "selected";
                }
            }
        }
    }
    return $result;
}

function formattedPhoneNumber($phone_number)
{
    $statement = preg_match('/^(\d{2})(\d{3})(\d{2})(\d{2})$/', $phone_number, $matches);
    if ($statement) {
        $result = '+998 (' . $matches[1] . ') ' . $matches[2] . '-' . $matches[3] . '-' . $matches[4];
        return $result;
    }
}

function reFormatPhoneNumber($phone_number)
{
    $statement = preg_match('/^(\+998)\s*\S?(\d{2})\S?\s*(\d{3})\S?\s*(\d{2})\S?\s*(\d{2})$/', $phone_number, $matches);
    if ($statement) {
        $result = $matches[2] . $matches[3] . $matches[4] . $matches[5];
        return $result;
    }
}

function formattedPrice($price)
{
    return number_format($price, 0, '', ' ');
}

function customStatus($status)
{
    $result = [];
    switch ($status) {
        case 0:
            $result['text'] = 'Не просмотрено';
            $result['type'] = 'danger';
            break;
        case 1:
            $result['text'] = 'Завершено';
            $result['type'] = 'success';
            break;
    }
    return (object)$result;
}

function getLangWithoutExisting()
{
    $languages = array_keys(\Illuminate\Support\Facades\Config::get('app.languages'));
    $key = array_search(app()->getLocale(), $languages);
    unset($languages[$key]);

    return $languages;
}

function getShortDesc($description) {
    $result = strip_tags($description);
    $result = substr($result, 0, 100);
    return $result;
}

function currentRouteName()
{
    return \Illuminate\Support\Facades\Route::currentRouteName();
}

function routeWithLocale($routeName, $otherParams = null)
{
    return route($routeName, [app()->getLocale(), $otherParams]);
}
