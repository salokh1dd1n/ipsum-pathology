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
                    <th class="text-center">Действия</th>
                </tr>
                </thead>
                <tbody>
                @forelse($diagnostics as $diagnostic)
                    <tr>
                        <td>{{ $diagnostic->title }}</td>
                        <td>{{ formattedPrice($diagnostic->price) }}</td>
                        <td class="text-center">
                            @include('admin.includes.actionsModel', ['route' => 'diagnostics', 'id' => $diagnostic->id])
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
