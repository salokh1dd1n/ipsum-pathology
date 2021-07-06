@extends('admin.layouts.app')
@push('breadcrumb')
    @include('admin.includes.breadcrumb', ['page' => 'Болезни', 'action' => 'Добавить болезнь', 'route' => 'diseases'])
@endpush
@section('content')
    <div class="card">
        <div class="card-header"><strong>Добавить болезнь</strong></div>
        <form class="form-horizontal" action="{{ route('diseases.store') }}" method="POST"
              enctype="multipart/form-data">
            @csrf
            <div class="card-body">
                <div class="nav-tabs-boxed">
                    <div class="row">
                        <div class="col-4">
                            <div class="form-group">
                                <label for="symptom_id">Выберите симптомы</label>
                                <select class="form-control @error('symptom_id') is-invalid @enderror"
                                        id="symptom_id" name="symptom_id[]"
                                        multiple multiselect-search="true" multiselect-max-items>
                                    @foreach($symptoms as $symptom)
                                        <option value="{{ $symptom->id }}"
                                                {{ multiOptionSelected(old('symptom_id'), $symptom->id) }}>
                                            {{ $symptom->title }}
                                        </option>
                                    @endforeach
                                </select>
                                @error('symptom_id')
                                <div class="invalid-feedback">{{ $message }}</div>
                                @enderror
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="form-group">
                                <label for="diagnostic_id">Выберите диагностику</label>
                                <select class="form-control @error('diagnostic_id') is-invalid @enderror"
                                        id="diagnostic_id" name="diagnostic_id[]"
                                        multiple multiselect-search="true" multiselect-max-items>
                                    @foreach($diagnostics as $diagnostic)
                                        <option value="{{ $diagnostic->id }}"
                                                {{ multiOptionSelected(old('diagnostic_id'), $diagnostic->id) }}>
                                            {{ $diagnostic->title }}
                                        </option>
                                    @endforeach
                                </select>
                                @error('diagnostic_id')
                                <div class="invalid-feedback">{{ $message }}</div>
                                @enderror
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="form-group">
                                <label for="faq_id">Выберите FAQ</label>
                                <select class="form-control @error('faq_id') is-invalid @enderror"
                                        id="faq_id" name="faq_id[]"
                                        multiple multiselect-search="true" multiselect-max-items>
                                    @foreach($faqs as $faq)
                                        <option value="{{ $faq->id }}"
                                                {{ multiOptionSelected(old('faq_id'), $faq->id) }}>
                                            {{ $faq->title }}
                                        </option>
                                    @endforeach
                                </select>
                                @error('faq_id')
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
                            <div class="tab-pane @if($key == 'ru') active  @endif" id="{{ $key }}"
                                 role="tabpanel">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="form-group">
                                            <label for="title_{{ $key }}">Заголовок ({{ $lang }})</label>
                                            <input
                                                class="form-control @error('title.'.$key) is-invalid @enderror"
                                                id="title_{{ $key }}" name="title[{{ $key }}]"
                                                type="text" value="{{ old('title.'.$key) }}"
                                                placeholder="Введите заголовок">
                                            @error('title.'.$key)
                                            <div class="invalid-feedback">{{ $message }}</div>
                                            @enderror
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="form-group">
                                            <label for="symptom_desc_{{ $key }}">Описание симптома ({{ $lang }})</label>
                                            <textarea
                                                class="form-control @error('symptom_desc.'.$key) is-invalid @enderror"
                                                id="symptom_desc_{{ $key }}" name="symptom_desc[{{ $key }}]"
                                                rows="9"
                                                placeholder="Введите описание симптома">{{ old('symptom_desc.'.$key) }}</textarea>
                                            @error('symptom_desc.'.$key)
                                            <div class="invalid-feedback">{{ $message }}</div>
                                            @enderror
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="form-group">
                                            <label for="treatment_desc_{{ $key }}">Описание лечения ({{ $lang }}
                                                )</label>
                                            <textarea
                                                class="form-control @error('treatment_desc.'.$key) is-invalid @enderror"
                                                id="treatment_desc_{{ $key }}" name="treatment_desc[{{ $key }}]"
                                                rows="9"
                                                placeholder="Введите описание лечения">{{ old('treatment_desc.'.$key) }}</textarea>
                                            @error('treatment_desc.'.$key)
                                            <div class="invalid-feedback">{{ $message }}</div>
                                            @enderror
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-group">
                                            <label for="description_{{ $key }}">Описание ({{ $lang }})</label>
                                            <textarea
                                                class="description form-control @error('description.'.$key) is-invalid @enderror"
                                                id="description_{{ $key }}" name="description[{{ $key }}]">
                                                {{ old('description.'.$key) }}
                                            </textarea>
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
    @include('admin.includes.ckeditor')
@endpush

