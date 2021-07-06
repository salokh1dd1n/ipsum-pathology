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
                                <a class="btn btn-sm btn-success" href="#"
                                   onclick="event.preventDefault(); document.getElementById('application-done').submit();">
                                    <svg class="c-icon mr-1">
                                        <use
                                            xlink:href="{{ asset('dashboard/@coreui/icons/sprites/free.svg#cil-task') }}"></use>
                                    </svg>
                                    Завершено
                                </a>
                                <form id="application-done" action="{{ route('applications.done', $application->id) }}" method="POST" class="d-none">
                                    @method('PATCH')
                                    @csrf
                                </form>
                            @endif
                            <button class="btn btn-sm btn-danger" type="button" data-toggle="modal"
                                    data-target="#deleteNewsItem{{ $application->id }}">
                                <svg class="c-icon mr-1">
                                    <use
                                        xlink:href="{{ asset('dashboard/@coreui/icons/sprites/free.svg#cil-trash') }}"></use>
                                </svg>
                                Удалить
                            </button>
                            <div class="modal fade" id="deleteNewsItem{{ $application->id }}" tabindex="-1"
                                 role="dialog"
                                 aria-labelledby="myModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-danger" role="document">
                                    <form action="{{ route('applications.destroy', $application->id) }}" method="POST">
                                        @method('DELETE')
                                        @csrf
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h4 class="modal-title">Удаление новости</h4>
                                                <button class="close" type="button" data-dismiss="modal"
                                                        aria-label="Close">
                                                    <span aria-hidden="true">×</span></button>
                                            </div>
                                            <div class="modal-body">
                                                <div class="row">
                                                    <div class="col-8">
                                                        <label for="delete_name">ФИО:</label>
                                                        <p>{{ $application->fio }}</p>
                                                    </div>
                                                    <div class="col-4">
                                                        <label for="delete_role">Телефонный номер:</label>
                                                        <p>{{ formattedPhoneNumber($application->phone_number) }}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                <button class="btn btn-secondary" type="button" data-dismiss="modal">
                                                    Отменить
                                                </button>
                                                <button class="btn btn-danger" type="submit">Удалить</button>
                                            </div>
                                        </div>
                                    </form>
                                    <!-- /.modal-content-->
                                </div>
                                <!-- /.modal-dialog-->
                            </div>
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
