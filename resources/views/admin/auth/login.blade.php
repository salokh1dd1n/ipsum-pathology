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
                    <input class="form-control @error('email') is-invalid @enderror" type="text" placeholder="Username"
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
                           placeholder="Password"
                           name="password" required autocomplete="current-password">
                    @error('password')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                    @enderror
                </div>
                <div class="row">
                    <div class="col-6">
                        <button class="btn btn-primary px-4" type="submit">Login</button>
                    </div>
                    <div class="col-6 text-right">
                        <button class="btn btn-link px-0" type="button">Forgot password?</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
    <div class="card text-white bg-primary py-5 d-md-down-none" style="width:44%">
        <div class="card-body text-center">
            <div>
                <h2>Sign up</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.</p>
                <button class="btn btn-lg btn-outline-light mt-3" type="button">Register Now!</button>
            </div>
        </div>
    </div>
    {{--<div class="container">--}}
    {{--    <div class="row justify-content-center">--}}
    {{--        <div class="col-md-8">--}}
    {{--            <div class="card">--}}
    {{--                <div class="card-header">{{ __('Login') }}</div>--}}

    {{--                <div class="card-body">--}}
    {{--                        <form method="POST" action="{{ route('login') }}">--}}
    {{--                            @csrf--}}

    {{--                        <div class="form-group row">--}}
    {{--                            <label for="email" class="col-md-4 col-form-label text-md-right">{{ __('E-Mail Address') }}</label>--}}

    {{--                            <div class="col-md-6">--}}
    {{--                                <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>--}}

    {{--                                    @error('email')--}}
    {{--                                        <span class="invalid-feedback" role="alert">--}}
    {{--                                            <strong>{{ $message }}</strong>--}}
    {{--                                        </span>--}}
    {{--                                    @enderror--}}
    {{--                            </div>--}}
    {{--                        </div>--}}

    {{--                        <div class="form-group row">--}}
    {{--                            <label for="password" class="col-md-4 col-form-label text-md-right">{{ __('Password') }}</label>--}}

    {{--                            <div class="col-md-6">--}}
    {{--                                <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="current-password">--}}

    {{--                                    @error('password')--}}
    {{--                                        <span class="invalid-feedback" role="alert">--}}
    {{--                                            <strong>{{ $message }}</strong>--}}
    {{--                                        </span>--}}
    {{--                                    @enderror--}}
    {{--                            </div>--}}
    {{--                        </div>--}}

    {{--                        <div class="form-group row">--}}
    {{--                            <div class="col-md-6 offset-md-4">--}}
    {{--                                <div class="form-check">--}}
    {{--                                    <input class="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>--}}

    {{--                                    <label class="form-check-label" for="remember">--}}
    {{--                                        {{ __('Remember Me') }}--}}
    {{--                                    </label>--}}
    {{--                                </div>--}}
    {{--                            </div>--}}
    {{--                        </div>--}}

    {{--                        <div class="form-group row mb-0">--}}
    {{--                            <div class="col-md-8 offset-md-4">--}}
    {{--                                <button type="submit" class="btn btn-primary">--}}
    {{--                                    {{ __('Login') }}--}}
    {{--                                </button>--}}

    {{--                                @if (Route::has('password.request'))--}}
    {{--                                    <a class="btn btn-link" href="{{ route('password.request') }}">--}}
    {{--                                        {{ __('Forgot Your Password?') }}--}}
    {{--                                    </a>--}}
    {{--                                @endif--}}
    {{--                            </div>--}}
    {{--                        </div>--}}
    {{--                    </form>--}}
    {{--                </div>--}}
    {{--            </div>--}}
    {{--        </div>--}}
    {{--    </div>--}}
    {{--</div>--}}
@endsection
