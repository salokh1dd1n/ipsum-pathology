@extends('admin.layouts.app')

@section('content')
    <div class="card">
        <div class="card-header"><strong>Добавить новости</strong></div>
        <form class="form-horizontal" action="{{ route('news.store') }}" method="POST" enctype="multipart/form-data">
            @csrf
            <div class="card-body">
                <div class="row">
                    <div class="col-12">
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
                            <div class="tab-pane @if($key == 'ru') active  @endif" id="{{ $key }}" role="tabpanel">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="form-group">
                                            <label for="title">Заголовок ({{ $lang }})</label>
                                            <input class="form-control @error('title.'.$key) is-invalid @enderror"
                                                   id="title" name="title[{{ $key }}]"
                                                   type="text" value="{{ old('title.'.$key) }}"
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
    <script type="text/javascript">

        // CKEDITOR.replace('description', {
        //     filebrowserBrowseUrl:filemanager.ckBrowseUrl;
        // });
        {{--var editor = CKEDITOR.replace('description', {--}}
        {{--    --}}{{--filebrowserBrowseUrl: "{{ asset('dashboard/ck/ckfinder/ckfinder.html?Type=Files') }}",--}}
        {{--    --}}{{--filebrowserImageBrowseUrl: "{{ asset('dashboard/ck/ckfinder/ckfinder.html?Type=Images') }}",--}}
        {{--    --}}{{--filebrowserFlashBrowseUrl: "{{ asset('dashboard/ck/ckfinder/ckfinder.html?Type=Flash') }}",--}}
        {{--    --}}{{--filebrowserUploadUrl: "{{ asset('dashboard/ck/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files') }}",--}}
        {{--    --}}{{--filebrowserImageUploadUrl: "{{ asset('dashboard/ck/ckfinder/core/connctor/php/connector.php?command=QuickUpload&type=Images') }}",--}}
        {{--    --}}{{--filebrowserFlashUploadUrl: "{{ asset('dashboard/ck/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Flash') }}"--}}
        {{--});--}}
        {{--CKFinder.setupCKEditor(editor);--}}
        @foreach(array_keys(Config::get('app.languages')) as $key)
        CKEDITOR.replace('description[{{ $key }}]', {
            defaultLanguage:"en",
            filebrowserUploadUrl: "{{route('upload', ['_token' => csrf_token() ])}}",
            filebrowserUploadMethod: 'form'
        });
        @endforeach
    </script>
@endpush
