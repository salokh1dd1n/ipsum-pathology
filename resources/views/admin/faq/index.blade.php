@extends('admin.layouts.app')
@push('breadcrumb')
    @include('admin.includes.breadcrumb', ['page' => 'FAQ', 'route' => 'faq'])
@endpush
@section('content')
    <div class="card">
        <div class="card-header">
            <div class="row">
                <div class="col-6"><strong>FAQ</strong></div>
                <div class="col-6">
                    <a class="btn btn-sm btn-success float-right" href="{{ route('faq.create') }}"> Добавить</a>
                </div>
            </div>
        </div>
        <div class="card-body">
            <table class="table table-responsive-sm">
                <thead>
                <tr>
                    <th>Заголовок</th>
                    <th>Теги</th>
                    <th>Действия</th>
                </tr>
                </thead>
                <tbody>
                @forelse($faqs as $faq)
                    <tr>
                        <td>{{ $faq->title }}</td>
                        <td>
                            @forelse($faq->tags as $tag)
                                <span class="badge badge-success">{{ $tag->title }}</span>
                            @empty
                                <span class="badge badge-secondary">-- Без роли --</span>
                            @endforelse
                        </td>
                        <td>
                            <a class="btn btn-sm btn-primary mb-1" href="{{ route('faq.edit', $faq->id) }}">
                                <svg class="c-icon mr-1">
                                    <use
                                        xlink:href="{{ asset('dashboard/icons/free.svg#cil-pencil') }}"></use>
                                </svg>
                                Изменить
                            </a>
                            <button class="btn btn-sm btn-danger mb-1" type="button" data-toggle="modal"
                                    data-target="#deleteNewsItem{{ $faq->id }}">
                                <svg class="c-icon mr-1">
                                    <use
                                        xlink:href="{{ asset('dashboard/icons/free.svg#cil-trash') }}"></use>
                                </svg>
                                Удалить
                            </button>
                            @include('admin.includes.deleteModel', ['route' => 'faq', 'id' => $faq->id])
                        </td>
                    </tr>
                @empty
                    <tr>
                        <th class="text-center text-middle" colspan="3">Специалистов не найдено</th>
                    </tr>
                @endforelse
                </tbody>
            </table>
            @if($faqs->total() > $faqs->count())
                {{ $faqs->links() }}
            @endif

        </div>
    </div>
@endsection
