@extends('admin.layouts.auth')

@section('content')

    <div class="card p-4">
        <div class="card-body">
            <h1>Авторизация</h1>
            <p class="text-muted">Войдите в свой аккаунт</p>
            <form method="POST" action="{{ route('login') }}">
                @csrf
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                    <span class="input-group-text">
                      <svg class="c-icon">
                        <use xlink:href="{{ asset('dashboard/icons/free.svg#cil-user') }}"></use>
                      </svg>
                    </span>
                    </div>
                    <input class="form-control @error('email') is-invalid @enderror" type="text"
                           placeholder="Адрес электронной почты"
                           name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>
                    @error('email')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                    @enderror
                </div>
                <div class="input-group mb-4">
                    <div class="input-group-prepend">
                    <span class="input-group-text">
                      <svg class="c-icon">
                        <use xlink:href="{{ asset('dashboard/icons/free.svg#cil-lock-locked') }}"></use>
                      </svg>
                    </span>
                    </div>
                    <input class="form-control @error('password') is-invalid @enderror" type="password"
                           placeholder="Пароль"
                           name="password" required autocomplete="current-password">
                    @error('password')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                    @enderror
                </div>
                <div class="row">
                    <div class="col-12 text-right">
                        <button class="btn btn-primary px-4" type="submit">Вход</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
@endsection
