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
                    <th class="text-center">Сортировка</th>
                    <th class="text-center">Действия</th>
                </tr>
                </thead>
                <tbody>
                @forelse($news as $newsItem)
                    <tr>
                        <td>{{ $newsItem->title }}</td>
                        <td>{{ $newsItem->published_at }}</td>
                        <td style="width: 1px; white-space: nowrap" class="text-center">
                            <form action="{{ route('news.setPosition', $newsItem->id) }}" method="post">
                                @csrf
                                @method('PATCH')
                                <select class="form-control" id="select-position" onchange="this.form.submit()"
                                        name="position">
                                    @for ($i = 0; $i <= $news->count(); $i++)
                                        <option value="{{ $i }}"
                                                @if($i == $newsItem->position) selected @endif>{{ $i }}</option>
                                    @endfor
                                </select>
                            </form>
                        </td>
                        <td class="text-center">
                            @include('admin.includes.actionsModel', ['route' => 'news', 'id' => $newsItem->id])
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


