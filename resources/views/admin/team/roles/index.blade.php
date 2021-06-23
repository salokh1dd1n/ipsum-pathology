@extends('admin.layouts.app')
@push('breadcrumb')
    @include('admin.includes.breadcrumb', ['page' => 'Роли', 'route' => 'roles'])
@endpush
@section('content')
    <div class="card">
        <div class="card-header">
            <div class="row">
                <div class="col-6"><strong>Новости</strong></div>
                <div class="col-6">
                    <a class="btn btn-sm btn-success float-right" href="{{ route('roles.create') }}"> Добавить</a>
                </div>
            </div>
        </div>
        <div class="card-body">
            <table class="table table-responsive-sm">
                <thead>
                <tr>
                    @foreach(Config::get('app.languages') as $lang)
                        <th>Заголовок ({{ $lang }})</th>
                    @endforeach
                    <th>Действия</th>
                </tr>
                </thead>
                <tbody>
                @forelse($roles as $role)
                    <tr>
                        @foreach(array_keys(Config::get('app.languages')) as $key)
                            <td>{{ $role->getTranslation('title', $key) }}</td>
                        @endforeach
                        <td>
                            <a class="btn btn-sm btn-primary" href="{{ route('roles.edit', $role->id) }}">
                                <svg class="c-icon mr-1">
                                    <use
                                        xlink:href="{{ asset('dashboard/@coreui/icons/sprites/free.svg#cil-pencil') }}"></use>
                                </svg>
                                Изменить
                            </a>
                            <button class="btn btn-sm btn-danger" type="button" data-toggle="modal"
                                    data-target="#deleteNewsItem{{ $role->id }}">
                                <svg class="c-icon mr-1">
                                    <use
                                        xlink:href="{{ asset('dashboard/@coreui/icons/sprites/free.svg#cil-trash') }}"></use>
                                </svg>
                                Удалить
                            </button>
                            <div class="modal fade" id="deleteNewsItem{{ $role->id }}" tabindex="-1" role="dialog"
                                 aria-labelledby="myModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-danger" role="document">
                                    <form action="{{ route('roles.destroy', $role->id) }}" method="POST">
                                        @method('DELETE')
                                        @csrf
                                        <div class="modal-content text-center">
                                            <div class="modal-header">
                                                <h4 class="modal-title">Удаление новости</h4>
                                                <button class="close" type="button" data-dismiss="modal"
                                                        aria-label="Close">
                                                    <span aria-hidden="true">×</span></button>
                                            </div>
                                            <div class="modal-body">
                                                <h5>
                                                    @foreach(Config::get('app.languages') as $key => $lang)
                                                        Заголовок ({{ $lang }}): {{ $role->getTranslation('title', $key) }} <br>
                                                    @endforeach
                                                </h5>
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
                        <th class="text-center text-middle" colspan="3">Роли не найдено</th>
                    </tr>
                @endforelse
                </tbody>
            </table>
            @if($roles->total() > $roles->count())
                {{ $roles->links() }}
            @endif

        </div>
    </div>
@endsection
