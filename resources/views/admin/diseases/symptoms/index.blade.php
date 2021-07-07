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
                    <th>Действия</th>
                </tr>
                </thead>
                <tbody>
                @forelse($symptoms as $symptom)
                    <tr>
                        <td>{{ $symptom->title }}</td>
                        <td>{{ $symptom->desc_part }}</td>
                        <td>
                            <a class="btn btn-sm btn-primary" href="{{ route('symptoms.edit', $symptom->id) }}">
                                <svg class="c-icon mr-1">
                                    <use
                                        xlink:href="{{ asset('dashboard/icons/free.svg#cil-pencil') }}"></use>
                                </svg>
                                Изменить
                            </a>
                            <button class="btn btn-sm btn-danger" type="button" data-toggle="modal"
                                    data-target="#deleteNewsItem{{ $symptom->id }}">
                                <svg class="c-icon mr-1">
                                    <use
                                        xlink:href="{{ asset('dashboard/icons/free.svg#cil-trash') }}"></use>
                                </svg>
                                Удалить
                            </button>
                            @include('admin.includes.deleteModel', ['route' => 'symptoms', 'id' => $symptom->id])
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
