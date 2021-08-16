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
                    <th class="text-center">Действия</th>
                </tr>
                </thead>
                <tbody>
                @forelse($services as $service)
                    <tr>
                        <td>{{ $service->title }}</td>
                        <td>{{ formattedPrice($service->price) }}</td>
                        <td class="text-center">
                            @include('admin.includes.actionsModel', ['route' => 'services', 'id' => $service->id])
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


