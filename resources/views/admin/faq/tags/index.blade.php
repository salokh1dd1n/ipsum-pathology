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
                    <th class="text-center">Действия</th>
                </tr>
                </thead>
                <tbody>
                @forelse($tags as $tag)
                    <tr>
                        @foreach(array_keys(Config::get('app.languages')) as $key)
                            <td>{{ $tag->getTranslation('title', $key) }}</td>
                        @endforeach
                        <td class="text-center">
                            @include('admin.includes.actionsModel', ['route' => 'tags', 'id' => $tag->id])
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
