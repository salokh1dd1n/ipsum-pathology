@extends('admin.layouts.app')
@push('breadcrumb')
    @include('admin.includes.breadcrumb', ['page' => 'Новости', 'route' => 'news'])
@endpush
@section('content')
    <div class="card">
        <div class="card-header">
            <div class="row">
                <div class="col-6"><strong>Новости</strong></div>
                <div class="col-6">
                    <a class="btn btn-sm btn-success float-right" href="{{ route('news.create') }}"> Добавить</a>
                </div>
            </div>
        </div>
        <div class="card-body">
            <table class="table table-responsive-sm">
                <thead>
                <tr>
                    <th>Заголовок</th>
                    <th>Дата публикации</th>
                    <th>Действия</th>
                </tr>
                </thead>
                <tbody>
                @forelse($news as $newsItem)
                    <tr>
                        <td>{{ $newsItem->title }}</td>
                        <td>{{ $newsItem->published_at }}</td>
                        <td>
                            <a class="btn btn-sm btn-primary" href="{{ route('news.edit', $newsItem->id) }}">
                                <svg class="c-icon mr-1">
                                    <use
                                        xlink:href="{{ asset('dashboard/icons/free.svg#cil-pencil') }}"></use>
                                </svg>
                                Изменить
                            </a>
                            <button class="btn btn-sm btn-danger" type="button" data-toggle="modal"
                                    data-target="#deleteNewsItem{{ $newsItem->id }}">
                                <svg class="c-icon mr-1">
                                    <use
                                        xlink:href="{{ asset('dashboard/icons/free.svg#cil-trash') }}"></use>
                                </svg>
                                Удалить
                            </button>
                            @include('admin.includes.deleteModel', ['route' => 'news', 'id' => $newsItem->id])
                        </td>
                    </tr>
                @empty
                    <tr>
                        <th class="text-center text-middle" colspan="3">Новостей не найдено</th>
                    </tr>
                @endforelse
                </tbody>
            </table>
            @if($news->total() > $news->count())
                {{ $news->links() }}
            @endif

        </div>
    </div>
@endsection


