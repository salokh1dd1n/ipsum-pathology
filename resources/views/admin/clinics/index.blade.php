@extends('admin.layouts.app')
@push('breadcrumb')
    @include('admin.includes.breadcrumb', ['page' => 'К кому обратиться', 'route' => 'clinics'])
@endpush
@section('content')
    <div class="card">
        <div class="card-header">
            <div class="row">
                <div class="col-6"><strong>К кому обратиться</strong></div>
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
                    <th class="text-center">Сортировка</th>
                    <th class="text-center">Действия</th>
                </tr>
                </thead>
                <tbody>
                @forelse($clinics as $clinic)
                    <tr>
                        <td>{{ $clinic->title }}</td>
                        <td>{{ formattedPhoneNumber($clinic->phone_number) }}</td>
                        <td style="width: 1px; white-space: nowrap" class="text-center">
                            <form action="{{ route('clinics.setPosition', $clinic->id) }}" method="post">
                                @csrf
                                @method('PATCH')
                                <select class="form-control" id="select-position" onchange="this.form.submit()"
                                        name="position">
                                    @for ($i = 0; $i <= $clinics->count(); $i++)
                                        <option value="{{ $i }}"
                                                @if($i == $clinic->position) selected @endif>{{ $i }}</option>
                                    @endfor
                                </select>
                            </form>
                        </td>
                        <td class="text-center">
                            @include('admin.includes.actionsModel', ['route' => 'clinics', 'id' => $clinic->id])
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
