@extends('admin.layouts.app')
@push('breadcrumb')
    @include('admin.includes.breadcrumb', ['page' => 'Теги', 'route' => 'tags'])
@endpush
@section('content')
    <div class="card">
        <div class="card-header">
            <div class="row">
                <div class="col-6"><strong>Теги</strong></div>
                <div class="col-6">
                    <a class="btn btn-sm btn-success float-right" href="{{ route('tags.create') }}"> Добавить</a>
                </div>
            </div>
        </div>
        <div class="card-body">
            <table class="table table-responsive-sm">
                <thead>
                <tr>
                    @foreach(Config::get('app.languages') as $lang)
                        <th>Заголовок ({{ $lang }})</th>
                    @endforeach
                    <th>Действия</th>
                </tr>
                </thead>
                <tbody>
                @forelse($tags as $tag)
                    <tr>
                        @foreach(array_keys(Config::get('app.languages')) as $key)
                            <td>{{ $tag->getTranslation('title', $key) }}</td>
                        @endforeach
                        <td>
                            <a class="btn btn-sm btn-primary" href="{{ route('tags.edit', $tag->id) }}">
                                <svg class="c-icon mr-1">
                                    <use
                                        xlink:href="{{ asset('dashboard/icons/free.svg#cil-pencil') }}"></use>
                                </svg>
                                Изменить
                            </a>
                            <button class="btn btn-sm btn-danger" type="button" data-toggle="modal"
                                    data-target="#deleteNewsItem{{ $tag->id }}">
                                <svg class="c-icon mr-1">
                                    <use
                                        xlink:href="{{ asset('dashboard/icons/free.svg#cil-trash') }}"></use>
                                </svg>
                                Удалить
                            </button>
                            @include('admin.includes.deleteModel', ['route' => 'tags', 'id' => $tag->id])
                        </td>
                    </tr>
                @empty
                    <tr>
                        <th class="text-center text-middle" colspan="4">Роли не найдено</th>
                    </tr>
                @endforelse
                </tbody>
            </table>
            @if($tags->total() > $tags->count())
                {{ $tags->links() }}
            @endif

        </div>
    </div>
@endsection
