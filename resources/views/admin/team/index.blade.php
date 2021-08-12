@extends('admin.layouts.app')
@push('breadcrumb')
    @include('admin.includes.breadcrumb', ['page' => 'Специалисты', 'route' => 'team'])
@endpush
@section('content')
    <div class="card">
        <div class="card-header">
            <div class="row">
                <div class="col-6"><strong>Специалисты</strong></div>
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
                    <th class="text-center">Сортировка</th>
                    <th class="text-center">Действия</th>
                </tr>
                </thead>
                <tbody>
                @forelse($team as $member)
                    <tr>
                        <td>{{ $member->name }}</td>
                        <td>{{ $member->role }}</td>
                        <td>{{ formattedPhoneNumber($member->phone_number) }}</td>
                        <td style="width: 1px; white-space: nowrap" class="text-center">
                            <form action="{{ route('team.setPosition', $member->id) }}" method="post">
                                @csrf
                                @method('PATCH')
                                <select class="form-control" id="select-position" onchange="this.form.submit()"
                                        name="position">
                                    @for ($i = 0; $i <= $team->count(); $i++)
                                        <option value="{{ $i }}"
                                                @if($i == $member->position) selected @endif>{{ $i }}</option>
                                    @endfor
                                </select>
                            </form>
                        </td>
                        <td class="text-center">
                            <a class="btn btn-sm btn-primary mb-1" href="{{ route('team.edit', $member->id) }}">
                                <svg class="c-icon mr-1">
                                    <use
                                        xlink:href="{{ asset('dashboard/icons/free.svg#cil-pencil') }}"></use>
                                </svg>
                                Изменить
                            </a>
                            <button class="btn btn-sm btn-danger mb-1" type="button" data-toggle="modal"
                                    data-target="#deleteNewsItem{{ $member->id }}">
                                <svg class="c-icon mr-1">
                                    <use
                                        xlink:href="{{ asset('dashboard/icons/free.svg#cil-trash') }}"></use>
                                </svg>
                                Удалить
                            </button>
                            @include('admin.includes.deleteModel', ['route' => 'team', 'id' => $member->id])
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
