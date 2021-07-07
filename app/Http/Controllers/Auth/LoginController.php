<?php

namespace App\Http\Controllers\Auth;


use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    private const ADMIN_HOME = 'admin/applications';

    protected $redirectTo = self::ADMIN_HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */

    public function showLoginForm()
    {
        return view('admin.auth.login');
    }

    public function __construct()
    {
        $this->middleware('guest')->except('logout');
    }
}
