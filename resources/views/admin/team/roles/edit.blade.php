@extends('admin.layouts.app')
@push('breadcrumb')
    @include('admin.includes.breadcrumb', ['page' => 'Роли', 'action' => 'Редактировать роль', 'route' => 'roles'])
@endpush
@section('content')
    <div class="card">
        <div class="card-header"><strong>Добавить роль</strong></div>
        <form class="form-horizontal" action="{{ route('roles.update', $role->id) }}" method="POST">
            @method('PATCH')
            @csrf
            <div class="card-body">
                <div class="row">
                    @foreach(Config::get('app.languages') as $key => $lang)
                        <div class="col-4">
                            <div class="form-group">
                                <input type="hidden" value="{{ $role->id }}" name="id">
                                <label for="title">Заголовок ({{ $lang }})</label>
                                <input class="form-control @error('title.'.$key) is-invalid @enderror"
                                       id="title" name="title[{{ $key }}]"
                                       type="text" value="{{ $role->getTranslation('title', $key) }}"
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
