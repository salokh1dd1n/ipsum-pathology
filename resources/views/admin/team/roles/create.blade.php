@extends('admin.layouts.app')
@push('breadcrumb')
    @include('admin.includes.breadcrumb', ['page' => 'Роли', 'action' => 'Добавить роль', 'route' => 'roles'])
@endpush
@section('content')
    <div class="card">
        <div class="card-header"><strong>Добавить роль</strong></div>
        <form class="form-horizontal" action="{{ route('roles.store') }}" method="POST">
            @csrf
            <div class="card-body">
                <div class="row">
                    @foreach(Config::get('app.languages') as $key => $lang)
                        <div class="col-4">
                            <div class="form-group">
                                <label for="title_{{ $key }}">Заголовок ({{ $lang }})</label>
                                <input class="form-control @error('title.'.$key) is-invalid @enderror"
                                       id="title_{{ $key }}" name="title[{{ $key }}]"
                                       type="text" value="{{ old('title.'.$key) }}"
                                       placeholder="Введите заголовок">
                                @error('title.'.$key)
                                <div class="invalid-feedback">{{ $message }}</div>
                                @enderror
                            </div>
                        </div>
                    @endforeach
                </div>
            </div>
            <div class="card-footer text-right">
                <button class="btn btn-primary" type="submit"> Сохранить</button>
            </div>
        </form>
    </div>
@endsection
