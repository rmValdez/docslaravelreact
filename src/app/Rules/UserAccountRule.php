<?php

namespace App\Rules;


class UserAccountRule
{
  public static function update(): array
  {
    return [
      'last_name' => 'required|string|max:255',
      'middle_name' => 'required|string|max:255',
      'first_name' => 'required|string|max:255',
      'suffix' => 'required|string|max:255',
      'birthdate' => 'required',
      'company_email' => 'required|email',
      'personal_email' => 'required|email',
      'password' => 'nullable|required_with:password_confirmation|string|confirmed',
      'current_password' => 'required',
      'role' => 'nullable',
    ];
  }
}
