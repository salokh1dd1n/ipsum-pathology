@extends('admin.layouts.app')
@push('breadcrumb')
    @include('admin.includes.breadcrumb', ['page' => 'Болезни', 'route' => 'diseases'])
@endpush
@section('content')
    <div class="card">
        <div class="card-header">
            <div class="row">
                <div class="col-6"><strong>Болезни</strong></div>
                <div class="col-6">
                    <a class="btn btn-sm btn-success float-right" href="{{ route('diseases.create') }}"> Добавить</a>
                </div>
            </div>
        </div>
        <div class="card-body">
            <table class="table table-responsive-sm">
                <thead>
                <tr>
                    <th>Заголовок</th>
                    <th>Симптомы</th>
                    <th>Диагностика</th>
                    <th>Часто задаваемые вопросы</th>
                    <th class="text-center">Сортировка</th>
                    <th class="text-center">Действия</th>
                </tr>
                </thead>
                <tbody>
                @forelse($diseases as $disease)
                    <tr>
                        <td>{{ $disease->title }}</td>
                        <td>
                            @foreach($disease->symptoms as $symptom)
                                <span class="badge badge-primary">{{ $symptom->title }}</span>
                            @endforeach
                        </td>
                        <td>
                            @foreach($disease->diagnostics as $diagnostic)
                                <span class="badge badge-success">{{ $diagnostic->title }}</span>
                            @endforeach
                        </td>
                        <td>
                            @foreach($disease->faq as $faq)
                                <span class="badge badge-secondary">{{ $faq->title }}</span>
                            @endforeach
                        </td>
                        <td style="width: 1px; white-space: nowrap" class="text-center">
                            <form action="{{ route('diseases.setPosition', $disease->id) }}" method="post">
                                @csrf
                                @method('PATCH')
                                <select class="form-control" id="select-position" onchange="this.form.submit()"
                                        name="position">
                                    @for ($i = 0; $i <= $diseases->count(); $i++)
                                        <option value="{{ $i }}"
                                                @if($i == $disease->position) selected @endif>{{ $i }}</option>
                                    @endfor
                                </select>
                            </form>
                        </td>
                        <td class="text-center">
                            @include('admin.includes.actionsModel', ['route' => 'diseases', 'id' => $disease->id])
                        </td>
                    </tr>
                @empty
                    <tr>
                        <th class="text-center text-middle" colspan="5">Болезней не найдены</th>
                    </tr>
                @endforelse
                </tbody>
            </table>
            @if($diseases->total() > $diseases->count())
                {{ $diseases->links() }}
            @endif

        </div>
    </div>
@endsection
