@extends('layouts.base')

@section('scripts')

@endsection
    @section('content')
        <div 
          id='app'
          data-auth="{{ $auth }}"
          data-role="{{ $roles }}"
          data-permission="{{ $permission }}"
          data-department="{{ $department }}"
        >
        </div>
@endsection
