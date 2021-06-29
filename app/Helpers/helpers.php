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
