@extends('admin.layouts.app')
@push('breadcrumb')
    @include('admin.includes.breadcrumb', ['page' => 'Преимущества', 'action' => 'Редактировать преимущество', 'route' => 'advantages'])
@endpush
@section('content')
    <div class="card">
        <div class="card-header"><strong>Добавить преимущество</strong></div>
        <form class="form-horizontal" action="{{ route('advantages.update', $advantage->id) }}" method="POST" enctype="multipart/form-data">
            @method('PATCH')
            @csrf
            <div class="card-body">
                <div class="row">
                    <div class="col-12">
                        <div class="form-group">
                            <label for="image">Фото</label>
                            <div class="custom-file">
                                <input type="hidden" name="id" value="{{ $advantage->id }}">
                                <input type="file" accept="image/jpeg,image/png,image/gif"
                                       class="custom-file-input @error('image') is-invalid @enderror" id="image"
                                       name="image" value="{{ $advantage->image }}" data-buttonText="Salom">
                                <label class="custom-file-label">
                                    {{ $advantage->image }}
                                </label>
                                @error('image')
                                <div class="invalid-feedback">{{ $message }}</div>
                                @enderror
                            </div>
                        </div>
                    </div>
                    @foreach(Config::get('app.languages') as $key => $lang)
                        <div class="col-4">
                            <div class="form-group">
                                <label for="title_{{ $key }}">Заголовок ({{ $lang }})</label>
                                <input class="form-control @error('title.'.$key) is-invalid @enderror"
                                       id="title_{{ $key }}" name="title[{{ $key }}]"
                                       type="text" value="{{ $advantage->getTranslation('title', $key) }}"
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
