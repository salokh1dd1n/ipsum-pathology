@extends('admin.layouts.app')
@push('breadcrumb')
    @include('admin.includes.breadcrumb', ['page' => 'К кому обратиться', 'route' => 'clinics'])
@endpush
@section('content')
    <div class="card">
        <div class="card-header">
            <div class="row">
                <div class="col-6"><strong>Новости</strong></div>
                <div class="col-6">
                    <a class="btn btn-sm btn-success float-right" href="{{ route('clinics.create') }}"> Добавить</a>
                </div>
            </div>
        </div>
        <div class="card-body">
            <table class="table table-responsive-sm">
                <thead>
                <tr>
                    <th>Заголовок</th>
                    <th>Телефонный номер</th>
                    <th>Действия</th>
                </tr>
                </thead>
                <tbody>
                @forelse($clinics as $clinic)
                    <tr>
                        <td>{{ $clinic->title }}</td>
                        <td>{{ formattedPhoneNumber($clinic->phone_number) }}</td>
                        <td>
                            <a class="btn btn-sm btn-primary" href="{{ route('clinics.edit', $clinic->id) }}">
                                <svg class="c-icon mr-1">
                                    <use
                                        xlink:href="{{ asset('dashboard/icons/free.svg#cil-pencil') }}"></use>
                                </svg>
                                Изменить
                            </a>
                            <button class="btn btn-sm btn-danger" type="button" data-toggle="modal"
                                    data-target="#deleteNewsItem{{ $clinic->id }}">
                                <svg class="c-icon mr-1">
                                    <use
                                        xlink:href="{{ asset('dashboard/icons/free.svg#cil-trash') }}"></use>
                                </svg>
                                Удалить
                            </button>
                            @include('admin.includes.deleteModel', ['route' => 'clinics', 'id' => $clinic->id])
                        </td>
                    </tr>
                @empty
                    <tr>
                        <th class="text-center text-middle" colspan="3">Организации не найдена</th>
                    </tr>
                @endforelse
                </tbody>
            </table>
            @if($clinics->total() > $clinics->count())
                {{ $clinics->links() }}
            @endif

        </div>
    </div>
@endsection
