<?php

namespace App\Scopes;

use Illuminate\Database\Eloquent\Model;

class AuthenticationScopes extends Model
{
  protected $table = 'company_emails';
  protected $hidden = ['created_at', 'updated_at'];

  public function scopeShowDomainName($query, string $name)
  {
    self::whereDomainName($name);
  }

  public function scopeSearch($query, string $id)
  {
    self::find($id);
  }
}
