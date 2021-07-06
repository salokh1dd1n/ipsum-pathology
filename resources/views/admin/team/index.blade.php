@extends('admin.layouts.app')
@push('breadcrumb')
    @include('admin.includes.breadcrumb', ['page' => 'Специалисты', 'route' => 'team'])
@endpush
@section('content')
    <div class="card">
        <div class="card-header">
            <div class="row">
                <div class="col-6"><strong>Новости</strong></div>
                <div class="col-6">
                    <a class="btn btn-sm btn-success float-right" href="{{ route('team.create') }}"> Добавить</a>
                </div>
            </div>
        </div>
        <div class="card-body">
            <table class="table table-responsive-sm">
                <thead>
                <tr>
                    <th>ФИО</th>
                    <th>Роль</th>
                    <th>Телефонный номер</th>
                    <th>Действия</th>
                </tr>
                </thead>
                <tbody>
                @forelse($team as $member)
                    <tr>
                        <td>{{ $member->name }}</td>
                        <td>{{ $member->role }}</td>
                        <td>{{ formattedPhoneNumber($member->phone_number) }}</td>
                        <td>
                            <a class="btn btn-sm btn-primary" href="{{ route('team.edit', $member->id) }}">
                                <svg class="c-icon mr-1">
                                    <use
                                        xlink:href="{{ asset('dashboard/@coreui/icons/sprites/free.svg#cil-pencil') }}"></use>
                                </svg>
                                Изменить
                            </a>
                            <button class="btn btn-sm btn-danger" type="button" data-toggle="modal"
                                    data-target="#deleteNewsItem{{ $member->id }}">
                                <svg class="c-icon mr-1">
                                    <use
                                        xlink:href="{{ asset('dashboard/@coreui/icons/sprites/free.svg#cil-trash') }}"></use>
                                </svg>
                                Удалить
                            </button>
                            <div class="modal fade" id="deleteNewsItem{{ $member->id }}" tabindex="-1" role="dialog"
                                 aria-labelledby="myModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-danger" role="document">
                                    <form action="{{ route('team.destroy', $member->id) }}" method="POST">
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
                                                        <p>{{ $member->name }}</p>
                                                    </div>
                                                    <div class="col-4">
                                                        <label for="delete_role">Роль:</label>
                                                        <p>{{ $member->role }}</p>
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
                        <th class="text-center text-middle" colspan="4">Специалистов не найдено</th>
                    </tr>
                @endforelse
                </tbody>
            </table>
            @if($team->total() > $team->count())
                {{ $team->links() }}
            @endif

        </div>
    </div>
@endsection
