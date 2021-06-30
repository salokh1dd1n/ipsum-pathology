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
                                        xlink:href="{{ asset('dashboard/@coreui/icons/sprites/free.svg#cil-pencil') }}"></use>
                                </svg>
                                Изменить
                            </a>
                            <button class="btn btn-sm btn-danger" type="button" data-toggle="modal"
                                    data-target="#deleteNewsItem{{ $tag->id }}">
                                <svg class="c-icon mr-1">
                                    <use
                                        xlink:href="{{ asset('dashboard/@coreui/icons/sprites/free.svg#cil-trash') }}"></use>
                                </svg>
                                Удалить
                            </button>
                            <div class="modal fade" id="deleteNewsItem{{ $tag->id }}" tabindex="-1" role="dialog"
                                 aria-labelledby="myModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-danger" role="document">
                                    <form action="{{ route('tags.destroy', $tag->id) }}" method="POST">
                                        @method('DELETE')
                                        @csrf
                                        <div class="modal-content text-center">
                                            <div class="modal-header">
                                                <h5 class="modal-title">Удаление новости</h5>
                                                <button class="close" type="button" data-dismiss="modal"
                                                        aria-label="Close">
                                                    <span aria-hidden="true">×</span></button>
                                            </div>
                                            <div class="modal-body">
                                                <div class="row">
                                                    @foreach(Config::get('app.languages') as $key => $lang)
                                                        <div class="col-4">
                                                            <label>Заголовок ({{ $lang }}):</label>
                                                            <p>
                                                                {{ $tag->getTranslation('title', $key) }}
                                                            </p>
                                                        </div>
                                                    @endforeach
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button class="btn btn-secondary" type="button" data-dismiss="modal">
                                                    Отменить
                                                </button>
                                                <button class="btn btn-danger" type="submit">Удалить</button>
                                            </div>
                                        </div>
                                    </form>
                                    <!-- /.modal-content-->
                                </div>
                                <!-- /.modal-dialog-->
                            </div>
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
