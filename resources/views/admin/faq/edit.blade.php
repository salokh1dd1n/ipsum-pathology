@extends('admin.layouts.app')
@push('breadcrumb')
    @include('admin.includes.breadcrumb', ['page' => 'FAQ', 'action' => 'Редактировать часто задаваемые вопросы', 'route' => 'faq'])
@endpush
@section('content')
    <div class="card">
        <div class="card-header"><strong>Редактировать часто задаваемые вопросы</strong></div>
        <form class="form-horizontal" action="{{ route('faq.update', $faq->id) }}" method="POST"
              enctype="multipart/form-data">
            @method('PATCH')
            @csrf
            <div class="card-body">
                <div class="form-group">
                    <label for="tag_id">Выберите теги</label>
                    <select class="form-control @error('tag_id') is-invalid @enderror"
                            id="tag_id" name="tag_id[]" search-placeholder="sdf" multiple multiselect-search="true">
                        @foreach($tags as $tag)
                            <option value="{{ $tag->id }}"
                                    {{ multiOptionSelected(old('tag_id'), $tag->id, $faq->tags) }}>
                                {{ $tag->title }}
                            </option>
                        @endforeach
                    </select>
                    @error('tag_id')
                    <div class="invalid-feedback">{{ $message }}</div>
                    @enderror
                </div>
                <div class="nav-tabs-boxed">
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
                                                type="text" value="{{ $faq->getTranslation('title', $key) }}"
                                                placeholder="Введите Заголовок">
                                            @error('title.'.$key)
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
                                                rows="6"
                                                placeholder="Введите описание">{{ $faq->getTranslation('description', $key) }}</textarea>
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

