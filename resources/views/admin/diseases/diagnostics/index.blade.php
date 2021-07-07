@extends('admin.layouts.app')
@push('breadcrumb')
    @include('admin.includes.breadcrumb', ['page' => 'Диагностика', 'route' => 'diagnostics'])
@endpush
@section('content')
    <div class="card">
        <div class="card-header">
            <div class="row">
                <div class="col-6"><strong>Диагностика</strong></div>
                <div class="col-6">
                    <a class="btn btn-sm btn-success float-right" href="{{ route('diagnostics.create') }}"> Добавить</a>
                </div>
            </div>
        </div>
        <div class="card-body">
            <table class="table table-responsive-sm">
                <thead>
                <tr>
                    <th>Заголовок</th>
                    <th>Цена</th>
                    <th>Действия</th>
                </tr>
                </thead>
                <tbody>
                @forelse($diagnostics as $diagnostic)
                    <tr>
                        <td>{{ $diagnostic->title }}</td>
                        <td>{{ formattedPrice($diagnostic->price) }}</td>
                        <td>
                            <a class="btn btn-sm btn-primary" href="{{ route('diagnostics.edit', $diagnostic->id) }}">
                                <svg class="c-icon mr-1">
                                    <use
                                        xlink:href="{{ asset('dashboard/icons/free.svg#cil-pencil') }}"></use>
                                </svg>
                                Изменить
                            </a>
                            <button class="btn btn-sm btn-danger" type="button" data-toggle="modal"
                                    data-target="#deleteNewsItem{{ $diagnostic->id }}">
                                <svg class="c-icon mr-1">
                                    <use
                                        xlink:href="{{ asset('dashboard/icons/free.svg#cil-trash') }}"></use>
                                </svg>
                                Удалить
                            </button>
                            @include('admin.includes.deleteModel', ['route' => 'diagnostics', 'id' => $diagnostic->id])
                        </td>
                    </tr>
                @empty
                    <tr>
                        <th class="text-center text-middle" colspan="3">Диагностика не найдена</th>
                    </tr>
                @endforelse
                </tbody>
            </table>
            @if($diagnostics->total() > $diagnostics->count())
                {{ $diagnostics->links() }}
            @endif

        </div>
    </div>
@endsection
