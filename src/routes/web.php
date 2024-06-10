<?php

use Illuminate\Support\Facades\Route;
use Auth;
use Illuminate\Support\Facades\Request;

Route::get('/', function (Request $request) {
    return view('home');
});


  // Route::middleware('oauth')->group(function () {\
  //   Route::get('/{path?}', function () {
  //     return view('home', [ ...$data ]);
  //   })->where('path', '^(?!oauth\/).*');
  // });
  