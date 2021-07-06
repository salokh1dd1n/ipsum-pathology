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
                    <th>Действия</th>
                </tr>
                </thead>
                <tbody>
                @forelse($diagnostics as $diagnostic)
                    <tr>
                        <td>{{ $diagnostic->title }}</td>
                        <td>{{ formattedPrice($diagnostic->price) }}</td>
                        <td>
                            <a class="btn btn-sm btn-primary" href="{{ route('diagnostics.edit', $diagnostic->id) }}">
                                <svg class="c-icon mr-1">
                                    <use
                                        xlink:href="{{ asset('dashboard/@coreui/icons/sprites/free.svg#cil-pencil') }}"></use>
                                </svg>
                                Изменить
                            </a>
                            <button class="btn btn-sm btn-danger" type="button" data-toggle="modal"
                                    data-target="#deleteNewsItem{{ $diagnostic->id }}">
                                <svg class="c-icon mr-1">
                                    <use
                                        xlink:href="{{ asset('dashboard/@coreui/icons/sprites/free.svg#cil-trash') }}"></use>
                                </svg>
                                Удалить
                            </button>
                            <div class="modal fade" id="deleteNewsItem{{ $diagnostic->id }}" tabindex="-1" role="dialog"
                                 aria-labelledby="myModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-danger" role="document">
                                    <form action="{{ route('diagnostics.destroy', $diagnostic->id) }}" method="POST">
                                        @method('DELETE')
                                        @csrf
                                        <div class="modal-content text-center">
                                            <div class="modal-header">
                                                <h5 class="modal-title">Удаление новости</h5>
                                                <button class="close" type="button" data-dismiss="modal"
                                                        aria-label="Close">
                                                    <span aria-hidden="true">×</span></button>
                                            </div>
                                            <div class="modal-body">
                                                <div class="row">
                                                        <div class="col-6">
                                                            <label>Заголовок :</label>
                                                            <p>
                                                                {{ $diagnostic->title }}
                                                            </p>
                                                        </div>
                                                        <div class="col-6">
                                                            <label>Цена :</label>
                                                            <p>
                                                                {{ formattedPrice($diagnostic->price) }}
                                                            </p>
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
