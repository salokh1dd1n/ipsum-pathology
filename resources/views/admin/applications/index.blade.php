@extends('admin.layouts.app')
@push('breadcrumb')
    @include('admin.includes.breadcrumb', ['page' => 'Заявки', 'route' => 'applications'])
@endpush
@section('content')
    <div class="card">
        <div class="card-header"><strong>Заявки</strong></div>
        <div class="card-body">
            <table class="table table-responsive-sm">
                <thead>
                <tr>
                    <th>ФИО</th>
                    <th>Телефонный номер</th>
                    <th>Статус</th>
                    <th>Действия</th>
                </tr>
                </thead>
                <tbody>
                @forelse($applications as $application)
                    <tr>
                        <td>{{ $application->fio }}</td>
                        <td>{{ formattedPhoneNumber($application->phone_number) }}</td>
                        <td><span
                                class="badge badge-{{customStatus($application->status)->type}}">{{ customStatus($application->status)->text }}</span>
                        </td>
                        <td>
                            @if(!$application->status)
                                <a class="btn btn-sm btn-success mb-1" href="#"
                                   onclick="event.preventDefault(); document.getElementById('application-done').submit();">
                                    <svg class="c-icon mr-1">
                                        <use
                                            xlink:href="{{ asset('dashboard/icons/free.svg#cil-task') }}"></use>
                                    </svg>
                                    Завершено
                                </a>
                                <form id="application-done" action="{{ route('applications.done', $application->id) }}" method="POST" class="d-none">
                                    @method('PATCH')
                                    @csrf
                                </form>
                            @endif
                            <button class="btn btn-sm btn-danger mb-1" type="button" data-toggle="modal"
                                    data-target="#deleteNewsItem{{ $application->id }}">
                                <svg class="c-icon mr-1">
                                    <use
                                        xlink:href="{{ asset('dashboard/icons/free.svg#cil-trash') }}"></use>
                                </svg>
                                Удалить
                            </button>
                            @include('admin.includes.deleteModel', ['route' => 'applications', 'id' => $application->id])
                        </td>
                    </tr>
                @empty
                    <tr>
                        <th class="text-center text-middle" colspan="4">Заявок не найдено</th>
                    </tr>
                @endforelse
                </tbody>
            </table>
            @if($applications->total() > $applications->count())
                {{ $applications->links() }}
            @endif

        </div>
    </div>
@endsection
