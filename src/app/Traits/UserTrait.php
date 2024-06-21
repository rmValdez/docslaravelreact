<?php

namespace App\Traits;

use Exception;
use App\Models\UsersModel;

trait UserTrait
{
  private function hasUser(string $userId)
  {
    return UsersModel::findOr($userId, fn () => throw new Exception('No User Found!'));
  }

  protected function myInfo()
  {
    return auth()->user();
  }

  protected function fullName()
  {
    $user = auth()->user();

    $fullName = $user->first_name . ' ' . $user->middle_name . ' ' . $user->last_name  . ' ' . $user->suffix;

    return \Str::of($fullName)->replaceMatches('/ {2,}/', ' ')->value;
  }

  protected function userId()
  {
    return auth()->user()->id;
  }

  protected function myRole()
  {
    return auth()->user()->roles->pluck('name');
  }

  protected function myPermissions()
  {
    return auth()->user()->getAllPermissions()->pluck('name');
  }

  protected function oAuthToken()
  {
    return \Auth::user()->tokens->first();
  }
}
