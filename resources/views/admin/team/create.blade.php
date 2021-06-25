@extends('admin.layouts.app')
@push('breadcrumb')
    @include('admin.includes.breadcrumb', ['page' => 'Специалисты', 'action' => 'Добавить специалиста', 'route' => 'team'])
@endpush
@section('content')
    <div class="card">
        <div class="card-header"><strong>Добавить новости</strong></div>
        <form class="form-horizontal" action="{{ route('team.store') }}" method="POST" enctype="multipart/form-data">
            @csrf
            <div class="card-body">
                <div class="row">
                    <div class="col-4">
                        <div class="form-group">
                            <label for="image">Фото</label>
                            <div class="custom-file">
                                <input type="file" accept="image/jpeg,image/png,image/gif"
                                       class="custom-file-input @error('image') is-invalid @enderror" id="image"
                                       name="image" value="{{ old('image') }}" data-buttonText="Salom">
                                <label class="custom-file-label">
                                    Выбрать файл...
                                </label>
                                @error('image')
                                <div class="invalid-feedback">{{ $message }}</div>
                                @enderror
                            </div>
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="form-group">
                            <label for="phone_number">Телефонный номер</label>
                            <input class="form-control @error('phone_number') is-invalid @enderror"
                                   id="phone_number" name="phone_number"
                                   type="text" value="{{ old('phone_number') }}"
                                   placeholder="Введите номер телефона">
                            @error('phone_number')
                            <div class="invalid-feedback">{{ $message }}</div>
                            @enderror
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="form-group">
                            <label for="role_id">Роль</label>
                            <select class="form-control @error('role_id') is-invalid @enderror" id="role_id"
                                    name="role_id">
                                <option selected value="">-- Без роли --</option>
                                @foreach($roles as $role)
                                    <option @if (old('role_id') == $role->id) selected  @endif value="{{ $role->id }}">{{ $role->title }}</option>
                                @endforeach
                            </select>
                            @error('role')
                            <div class="invalid-feedback">{{ $message }}</div>
                            @enderror
                        </div>
                    </div>
                </div>
                <div class="nav-tabs-boxed">
                    <ul class="nav nav-tabs" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" data-toggle="tab" href="#ru" role="tab" aria-controls="home"
                               aria-selected="false">
                                <svg class="c-icon">
                                    <use
                                        xlink:href="{{ asset('dashboard/@coreui/icons/sprites/flag.svg#cif-ru') }}"></use>
                                </svg>
                                Русский
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-toggle="tab" href="#uz" role="tab" aria-controls="profile"
                               aria-selected="false">
                                <svg class="c-icon">
                                    <use
                                        xlink:href="{{ asset('dashboard/@coreui/icons/sprites/flag.svg#cif-uz') }}"></use>
                                </svg>
                                O'zbek
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-toggle="tab" href="#en" role="tab"
                               aria-controls="messages" aria-selected="true">
                                <svg class="c-icon">
                                    <use
                                        xlink:href="{{ asset('dashboard/@coreui/icons/sprites/flag.svg#cif-us') }}"></use>
                                </svg>
                                English
                            </a>
                        </li>
                    </ul>
                    <div class="tab-content">
                        @foreach(Config::get('app.languages') as $key => $lang)
                            <div class="tab-pane @if($key == 'ru') active @endif" id="{{ $key }}" role="tabpanel">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="form-group">
                                            <label for="name_{{ $key }}">ФИО ({{ $lang }})</label>
                                            <input class="form-control @error('name.'.$key) is-invalid @enderror"
                                                   id="name_{{ $key }}" name="name[{{ $key }}]"
                                                   type="text" value="{{ old('name.'.$key) }}"
                                                   placeholder="Введите ФИО">
                                            @error('name.'.$key)
                                            <div class="invalid-feedback">{{ $message }}</div>
                                            @enderror
                                        </div>
                                    </div>

                                    <div class="col-12">
                                        <div class="form-group">
                                            <label for="description_{{ $key }}">Описание ({{ $lang }})</label>
                                            <textarea class="form-control @error('description.'.$key) is-invalid @enderror"
                                                id="description_{{ $key }}" name="description[{{ $key }}]" rows="9"
                                                placeholder="Введите описание">{{ old('description.'.$key) }}</textarea>
                                            @error('description.'.$key)
                                            <div class="invalid-feedback">{{ $message }}</div>
                                            @enderror
                                        </div>
                                    </div>
                                </div>

                            </div>
                        @endforeach

                    </div>
                </div>
            </div>
            <div class="card-footer text-right">
                <button class="btn btn-primary" type="submit"> Сохранить</button>
            </div>
        </form>
    </div>
@endsection

