<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

// Route::middleware('oauth')->group(function () {
  Route::get('/{path?}', function () {
    // dd(Auth::user());
    $auth = json_encode(['first_name' => 'John','last_name'=> 'Mary','middle_name'=> 'Peter']);
    $roles = json_encode(['first_name' => 'John','last_name'=> 'Mary','middle_name'=> 'Peter']);
    $permission = json_encode(['test']);
    $department = json_encode(['name' => 'John','last_name'=> 'Mary','middle_name'=> 'Peter']);

    return view('home', [
      'auth' => 'null',
      'roles' => $roles,
      'permission' => $permission,
      'department' => $department
    ]);
  })->where('path', '^(?!oauth\/).*');
// });