<?php

namespace App\Providers;

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\ServiceProvider;
use App\Macros\SchemaBlueprintMacro;

use App\Macros\ModelMacros;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
        $this->registerMacros();
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
      if (env('APP_ENV') == 'STAGING' || env('APP_ENV') == 'PRODUCTION') {
        \URL::forceScheme('https');
      }
      ModelMacros::register();
    }

    public function registerMacros()
    {
      Blueprint::mixin(new SchemaBlueprintMacro);
    }
}
