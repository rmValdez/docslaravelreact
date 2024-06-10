<?php

use Illuminate\Support\Facades\Route;

// Route::middleware('oauth')->group(function () {
  Route::get('/{path?}', function () {
    return view('home', [
      'auth' => '["John","Mary","Peter","Sally"]',
      'roles' => '["John","Mary","Peter","Sally"]',
      'permission' => '["John","Mary","Peter","Sally"]',
      'department' => '["John","Mary","Peter","Sally"]'
    ]);
  })->where('path', '^(?!oauth\/).*');
// });