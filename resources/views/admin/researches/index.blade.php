@extends('admin.layouts.app')
@push('breadcrumb')
    @include('admin.includes.breadcrumb', ['page' => 'Лабораторные исследования', 'route' => 'researches'])
@endpush
@section('content')
    <div class="card">
        <div class="card-header">
            <div class="row">
                <div class="col-6"><strong>Лабораторные исследования</strong></div>
                <div class="col-6">
                    <a class="btn btn-sm btn-success float-right" href="{{ route('researches.create') }}"> Добавить</a>
                </div>
            </div>
        </div>
        <div class="card-body">
            <table class="table table-responsive-sm">
                <thead>
                <tr>
                    <th>Заголовок</th>
                    <th>Краткое описание</th>
                    <th class="text-center">Сортировка</th>
                    <th class="text-center">Действия</th>
                </tr>
                </thead>
                <tbody>
                @forelse($researches as $research)
                    <tr>
                        <td>{{ $research->title }}</td>
                        <td>{{ $research->short_desc }}</td>
                        <td style="width: 1px; white-space: nowrap" class="text-center">
                            <form action="{{ route('researches.setPosition', $research->id) }}" method="post">
                                @csrf
                                @method('PATCH')
                                <select class="form-control" id="select-position" onchange="this.form.submit()"
                                        name="position">
                                    @for ($i = 0; $i <= $researches->count(); $i++)
                                        <option value="{{ $i }}"
                                                @if($i == $research->position) selected @endif>{{ $i }}</option>
                                    @endfor
                                </select>
                            </form>
                        </td>
                        <td class="text-center">
                            @include('admin.includes.actionsModel', ['route' => 'researches', 'id' => $research->id])
                        </td>
                    </tr>
                @empty
                    <tr>
                        <th class="text-center text-middle" colspan="3">Исследования не найдены</th>
                    </tr>
                @endforelse
                </tbody>
            </table>
            @if($researches->total() > $researches->count())
                {{ $researches->links() }}
            @endif

        </div>
    </div>
@endsection
