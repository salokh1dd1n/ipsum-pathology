@extends('admin.layouts.app')
@push('breadcrumb')
    @include('admin.includes.breadcrumb', ['page' => 'Услуги', 'route' => 'services'])
@endpush
@section('content')
    <div class="card">
        <div class="card-header">
            <div class="row">
                <div class="col-6"><strong>Услуги</strong></div>
                <div class="col-6">
                    <a class="btn btn-sm btn-success float-right" href="{{ route('services.create') }}"> Добавить</a>
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
                @forelse($services as $service)
                    <tr>
                        <td>{{ $service->title }}</td>
                        <td>{{ formattedPrice($service->price) }}</td>
                        <td>
                            <a class="btn btn-sm btn-primary" href="{{ route('services.edit', $service->id) }}">
                                <svg class="c-icon mr-1">
                                    <use
                                        xlink:href="{{ asset('dashboard/icons/free.svg#cil-pencil') }}"></use>
                                </svg>
                                Изменить
                            </a>
                            <button class="btn btn-sm btn-danger" type="button" data-toggle="modal"
                                    data-target="#deleteNewsItem{{ $service->id }}">
                                <svg class="c-icon mr-1">
                                    <use
                                        xlink:href="{{ asset('dashboard/icons/free.svg#cil-trash') }}"></use>
                                </svg>
                                Удалить
                            </button>
                            @include('admin.includes.deleteModel', ['route' => 'services', 'id' => $service->id])
                        </td>
                    </tr>
                @empty
                    <tr>
                        <th class="text-center text-middle" colspan="3">Услуги не найдены</th>
                    </tr>
                @endforelse
                </tbody>
            </table>
            @if($services->total() > $services->count())
                {{ $services->links() }}
            @endif

        </div>
    </div>
@endsection


