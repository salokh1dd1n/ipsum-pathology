@extends('admin.layouts.app')
@push('breadcrumb')
    @include('admin.includes.breadcrumb', ['page' => 'Преимущества', 'route' => 'advantages'])
@endpush
@section('content')
    <div class="card">
        <div class="card-header">
            <div class="row">
                <div class="col-6"><strong>Преимущества</strong></div>
                <div class="col-6">
                    <a class="btn btn-sm btn-success float-right" href="{{ route('advantages.create') }}"> Добавить</a>
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
                @forelse($advantages as $advantage)
                    <tr>
                        @foreach(array_keys(Config::get('app.languages')) as $key)
                            <td>{{ $advantage->getTranslation('title', $key) }}</td>
                        @endforeach
                        <td>
                            <a class="btn btn-sm btn-primary" href="{{ route('advantages.edit', $advantage->id) }}">
                                <svg class="c-icon mr-1">
                                    <use
                                        xlink:href="{{ asset('dashboard/icons/free.svg#cil-pencil') }}"></use>
                                </svg>
                                Изменить
                            </a>
                            <button class="btn btn-sm btn-danger" type="button" data-toggle="modal"
                                    data-target="#deleteNewsItem{{ $advantage->id }}">
                                <svg class="c-icon mr-1">
                                    <use
                                        xlink:href="{{ asset('dashboard/icons/free.svg#cil-trash') }}"></use>
                                </svg>
                                Удалить
                            </button>
                            @include('admin.includes.deleteModel', ['route' => 'advantages', 'id' => $advantage->id])
                        </td>
                    </tr>
                @empty
                    <tr>
                        <th class="text-center text-middle" colspan="4">Преимущества не найдено</th>
                    </tr>
                @endforelse
                </tbody>
            </table>
            @if($advantages->total() > $advantages->count())
                {{ $advantages->links() }}
            @endif

        </div>
    </div>
@endsection
