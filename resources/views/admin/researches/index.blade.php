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
                    <th>Действия</th>
                </tr>
                </thead>
                <tbody>
                @forelse($researches as $research)
                    <tr>
                        <td>{{ $research->title }}</td>
                        <td>{{ $research->short_desc }}</td>
                        <td>
                            <a class="btn btn-sm btn-primary" href="{{ route('researches.edit', $research->id) }}">
                                <svg class="c-icon mr-1">
                                    <use
                                        xlink:href="{{ asset('dashboard/icons/free.svg#cil-pencil') }}"></use>
                                </svg>
                                Изменить
                            </a>
                            <button class="btn btn-sm btn-danger" type="button" data-toggle="modal"
                                    data-target="#deleteNewsItem{{ $research->id }}">
                                <svg class="c-icon mr-1">
                                    <use
                                        xlink:href="{{ asset('dashboard/icons/free.svg#cil-trash') }}"></use>
                                </svg>
                                Удалить
                            </button>
                            @include('admin.includes.deleteModel', ['route' => 'researches', 'id' => $research->id])
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
