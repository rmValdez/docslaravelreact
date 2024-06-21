<?php

namespace App\Macros;

class SchemaBlueprintMacro
{
  public function nmsHash()
  {
    return function ($column = 'uniqid', $length = 20)
    {
      return $this->char($column, $length);
    };
  }
}