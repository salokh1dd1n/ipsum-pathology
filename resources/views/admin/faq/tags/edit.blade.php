@extends('admin.layouts.app')
@push('breadcrumb')
    @include('admin.includes.breadcrumb', ['page' => 'Теги', 'action' => 'Редактировать тег', 'route' => 'tags'])
@endpush
@section('content')
    <div class="card">
        <div class="card-header"><strong>Редактировать тег</strong></div>
        <form class="form-horizontal" action="{{ route('tags.update', $tag->id) }}" method="POST">
            @method('PATCH')
            @csrf
            <div class="card-body">
                <div class="row">
                    @foreach(Config::get('app.languages') as $key => $lang)
                        <div class="col-4">
                            <div class="form-group">
                                <input type="hidden" value="{{ $tag->id }}" name="id">
                                <label for="title">Заголовок ({{ $lang }})</label>
                                <input class="form-control @error('title.'.$key) is-invalid @enderror"
                                       id="title" name="title[{{ $key }}]"
                                       type="text" value="{{ $tag->getTranslation('title', $key) }}"
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
