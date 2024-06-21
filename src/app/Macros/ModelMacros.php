<?php

namespace App\Macros;

use Closure;
use Illuminate\Database\Eloquent\Builder;

class ModelMacros
{

  public static function register()
  {
    Builder::macro('findByColumn', function ($column, $searchable) {
      return $this->where($column, $searchable)->first();
    });

    Builder::macro('findOrFailWithMessage', function (string $id, string $message = null) {
      $result = $this->find($id);

      if (is_null($result)) {
        return throw_if(is_null($result), \Exception::class, is_null($result) ? 'No User Found' : $result);
      }

      return $result;
    });
  }

  public static function groupByNotification(array $query = null): Closure
  {
    return fn ($query) => $query?->groupBy(function ($data) {
      return date(FDY_DATE_FORMAT, strtotime($data->created_at));
    });
  }
}
