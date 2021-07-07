@extends('admin.layouts.app')
@push('breadcrumb')
    @include('admin.includes.breadcrumb', ['page' => 'Новости', 'action' => 'Редактировать новости', 'route' => 'news'])
@endpush
@section('content')
    <div class="card">
        <div class="card-header"><strong>Редактировать новости</strong></div>
        <form class="form-horizontal" action="{{ route('news.update', $newsItem->id) }}" method="POST"
              enctype="multipart/form-data">
            @method('PATCH')
            @csrf
            <div class="card-body">
                <div class="row">
                    <div class="col-12">
                        <div class="form-group">
                            <label for="image">Фото</label>
                            <div class="custom-file">
                                <input type="hidden" value="{{ $newsItem->id }}" name="id">
                                <input type="file" accept="image/jpeg,image/png,image/gif"
                                       class="custom-file-input @error('image') is-invalid @enderror" id="image"
                                       name="image" value="{{ $newsItem->image }}">
                                <label class="custom-file-label">
                                    {{ $newsItem->image }}
                                </label>
                                @error('image')
                                <div class="invalid-feedback">{{ $message }}</div>
                                @enderror
                            </div>
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
                            <div class="tab-pane @if($key == 'ru') active  @endif" id="{{ $key }}" role="tabpanel">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="form-group">
                                            <label for="title">Заголовок ({{ $lang }})</label>
                                            <input class="form-control @error('title.'.$key) is-invalid @enderror"
                                                   id="title" name="title[{{ $key }}]"
                                                   type="text" value="{{ $newsItem->getTranslation('title', $key) }}"
                                                   placeholder="Введите заголовок новости">
                                            @error('title.'.$key)
                                            <div class="invalid-feedback">{{ $message }}</div>
                                            @enderror
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-group">
                                            <label for="description">Описание ({{ $lang }})</label>
                                            <textarea
                                                class="description form-control @error('description.'.$key) is-invalid @enderror"
                                                id="description" name="description[{{ $key }}]">
                                                {{ $newsItem->getTranslation('description', $key) }}
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
