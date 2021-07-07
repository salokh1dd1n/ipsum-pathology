@extends('admin.layouts.app')
@push('breadcrumb')
    @include('admin.includes.breadcrumb', ['page' => 'Лабораторные исследования', 'action' => 'Редактировать исследование', 'route' => 'researches'])
@endpush
@section('content')
    <div class="card">
        <div class="card-header"><strong>Добавить новости</strong></div>
        <form class="form-horizontal" action="{{ route('researches.update', $research->id) }}" method="POST"
              enctype="multipart/form-data">
            @method('PATCH')
            @csrf
            <div class="card-body">
                <div class="nav-tabs-boxed">
                    <div class="row">
                        <div class="col-12">
                            <div class="form-group">
                                <label for="image">Фото</label>
                                <div class="custom-file">
                                    <input type="hidden" name="id" value="{{ $research->id }}">
                                    <input type="file" accept="image/jpeg,image/png,image/gif"
                                           class="custom-file-input @error('image') is-invalid @enderror" id="image"
                                           name="image" value="{{ $research->image }}" data-buttonText="Salom">
                                    <label class="custom-file-label">
                                        {{ $research->image }}
                                    </label>
                                    @error('image')
                                    <div class="invalid-feedback">{{ $message }}</div>
                                    @enderror
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="form-group">
                                <label for="service_id">Выберите услуги</label>
                                <select class="form-control @error('service_id') is-invalid @enderror"
                                        id="service_id" name="service_id[]" size="6" multiple multiselect-search="true" multiselect-max-items>
                                    @foreach($services as $service)
                                        <option value="{{ $service->id }}"
                                                {{ multiOptionSelected(old('service_id'), $service->id, $research->services) }}>
                                            {{ $service->title }}
                                        </option>
                                    @endforeach
                                </select>
                                @error('service_id')
                                <div class="invalid-feedback">{{ $message }}</div>
                                @enderror
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="form-group">
                                <label for="advantage_id">Выберите преимущество</label>
                                <select class="form-control @error('advantage_id') is-invalid @enderror"
                                        id="advantage_id" name="advantage_id[]" size="6" multiple multiselect-search="true" multiselect-max-items>
                                    @foreach($advantages as $advantage)
                                        <option value="{{ $advantage->id }}"
                                                {{ multiOptionSelected(old('advantage_id'), $advantage->id, $research->advantages) }}>
                                            {{ $advantage->title }}
                                        </option>
                                    @endforeach
                                </select>
                                @error('advantage_id')
                                <div class="invalid-feedback">{{ $message }}</div>
                                @enderror
                            </div>
                        </div>
                    </div>
                    <ul class="nav nav-tabs" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" data-toggle="tab" href="#ru" role="tab"
                               aria-controls="home"
                               aria-selected="false">
                                <svg class="c-icon">
                                    <use
                                        xlink:href="{{ asset('dashboard/icons/flag.svg#cif-ru') }}"></use>
                                </svg>
                                Русский
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-toggle="tab" href="#uz" role="tab" aria-controls="profile"
                               aria-selected="false">
                                <svg class="c-icon">
                                    <use
                                        xlink:href="{{ asset('dashboard/icons/flag.svg#cif-uz') }}"></use>
                                </svg>
                                O'zbek
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-toggle="tab" href="#en" role="tab"
                               aria-controls="messages" aria-selected="true">
                                <svg class="c-icon">
                                    <use
                                        xlink:href="{{ asset('dashboard/icons/flag.svg#cif-us') }}"></use>
                                </svg>
                                English
                            </a>
                        </li>
                    </ul>
                    <div class="tab-content">
                        @foreach(Config::get('app.languages') as $key => $lang)
                            <div class="tab-pane @if($key == 'ru') active  @endif" id="{{ $key }}"
                                 role="tabpanel">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="form-group">
                                            <label for="title_{{ $key }}">Заголовок ({{ $lang }})</label>
                                            <input
                                                class="form-control @error('title.'.$key) is-invalid @enderror"
                                                id="title_{{ $key }}" name="title[{{ $key }}]"
                                                type="text" value="{{ $research->getTranslation('title', $key) }}"
                                                placeholder="Введите Заголовок">
                                            @error('title.'.$key)
                                            <div class="invalid-feedback">{{ $message }}</div>
                                            @enderror
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-group">
                                            <label for="short_desc_{{ $key }}">Краткое описание ({{ $lang }})</label>
                                            <textarea
                                                class="form-control @error('short_desc.'.$key) is-invalid @enderror"
                                                id="short_desc_{{ $key }}" name="short_desc[{{ $key }}]"
                                                rows="3"
                                                placeholder="Введите краткое описание">{{ $research->getTranslation('short_desc', $key) }}</textarea>
                                            @error('short_desc.'.$key)
                                            <div class="invalid-feedback">{{ $message }}</div>
                                            @enderror
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-group">
                                            <label for="description_{{ $key }}">Описание ({{ $lang }})</label>
                                            <textarea
                                                class="form-control @error('description.'.$key) is-invalid @enderror"
                                                id="description_{{ $key }}" name="description[{{ $key }}]"
                                                rows="9"
                                                placeholder="Введите описание">{{ $research->getTranslation('description', $key) }}</textarea>
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
@push('scripts')
    <script src="{{ asset('dashboard/js/multiselect-dropdown.js') }}"></script>
@endpush
