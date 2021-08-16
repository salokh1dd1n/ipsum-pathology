@extends('admin.layouts.app')
@push('breadcrumb')
    @include('admin.includes.breadcrumb', ['page' => 'Симптомы', 'route' => 'symptoms'])
@endpush
@section('content')
    <div class="card">
        <div class="card-header">
            <div class="row">
                <div class="col-6"><strong>Симптомы</strong></div>
                <div class="col-6">
                    <a class="btn btn-sm btn-success float-right" href="{{ route('symptoms.create') }}"> Добавить</a>
                </div>
            </div>
        </div>
        <div class="card-body">
            <table class="table table-responsive-sm">
                <thead>
                <tr>
                    <th>Заголовок</th>
                    <th>Описание</th>
                    <th class="text-center">Действия</th>
                </tr>
                </thead>
                <tbody>
                @forelse($symptoms as $symptom)
                    <tr>
                        <td>{{ $symptom->title }}</td>
                        <td>{{ $symptom->desc_part }}</td>
                        <td class="text-center">
                            @include('admin.includes.actionsModel', ['route' => 'symptoms', 'id' => $symptom->id])
                        </td>
                    </tr>
                @empty
                    <tr>
                        <th class="text-center text-middle" colspan="3">Симптомов не найдено</th>
                    </tr>
                @endforelse
                </tbody>
            </table>
            @if($symptoms->total() > $symptoms->count())
                {{ $symptoms->links() }}
            @endif

        </div>
    </div>
@endsection
