<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;

class UniqueRule implements Rule
{
    protected string $table;
    protected $id;

    /**
     * Create a new rule instance.
     *
     * @param $table
     * @param $id
     */
    public function __construct($table, $id = null)
    {
        $this->table = $table;
        $this->id = $id;
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param string $attribute
     * @param mixed $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        if ($this->id != null) {
            $uniqueRule = ['unique_translation:' . $this->table . ',title,' . $this->id . 'id'];
        } else {
            $uniqueRule = ['unique_translation:' . $this->table];
        }
        return $uniqueRule;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'The validation error message.';
    }
}
