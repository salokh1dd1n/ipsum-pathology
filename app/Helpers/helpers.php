<?php


function multiOptionSelected($old_name, $input)
{
    if (old($old_name) != null) {
        foreach (old($old_name) as $old) {
            if ($old == $input) {
                return "selected";
            }
        }
    }
}

function formatedPhoneNumber($phone_number)
{
    $statement = preg_match('/^(998)\s*(\d{2})\s*(\d{3})\s*(\d{2})\s*(\d{2})$/', $phone_number, $matches);
    if ($statement) {
        $result = '+' . $matches[1].' ('.$matches[2].') '.$matches[3].'-'.$matches[4].'-'.$matches[5];
        return $result;
    }
}

function formatedPrice($price)
{
    return number_format($price, 0, '', ' ');
}
