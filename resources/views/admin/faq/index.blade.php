@extends('admin.layouts.app')
@push('breadcrumb')
    @include('admin.includes.breadcrumb', ['page' => 'Специалисты', 'route' => 'faq'])
@endpush
@section('content')
    <div class="card">
        <div class="card-header">
            <div class="row">
                <div class="col-6"><strong>Новости</strong></div>
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
                            <a class="btn btn-sm btn-primary" href="{{ route('faq.edit', $faq->id) }}">
                                <svg class="c-icon mr-1">
                                    <use
                                        xlink:href="{{ asset('dashboard/@coreui/icons/sprites/free.svg#cil-pencil') }}"></use>
                                </svg>
                                Изменить
                            </a>
                            <button class="btn btn-sm btn-danger" type="button" data-toggle="modal"
                                    data-target="#deleteNewsItem{{ $faq->id }}">
                                <svg class="c-icon mr-1">
                                    <use
                                        xlink:href="{{ asset('dashboard/@coreui/icons/sprites/free.svg#cil-trash') }}"></use>
                                </svg>
                                Удалить
                            </button>
                            <div class="modal fade" id="deleteNewsItem{{ $faq->id }}" tabindex="-1" role="dialog"
                                 aria-labelledby="myModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-danger" role="document">
                                    <form action="{{ route('faq.destroy', $faq->id) }}" method="POST">
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
                                                        <label for="delete_name">Заголовок:</label>
                                                        <p>{{ $faq->title }}</p>
                                                    </div>
                                                    <div class="col-4">
                                                        <label for="delete_role">Теги:</label>
                                                        <p>
                                                            @forelse($faq->tags as $tag)
                                                                <span
                                                                    class="badge badge-success">{{ $tag->title }}</span>
                                                            @empty
                                                                <span
                                                                    class="badge badge-secondary">-- Без роли --</span>
                                                            @endforelse
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
