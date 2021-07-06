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
    $statement = preg_match('/^(998)\s*(\d{2})\s*(\d{3})\s*(\d{2})\s*(\d{2})$/', $phone_number, $matches);
    if ($statement) {
        $result = '+' . $matches[1] . ' (' . $matches[2] . ') ' . $matches[3] . '-' . $matches[4] . '-' . $matches[5];
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
