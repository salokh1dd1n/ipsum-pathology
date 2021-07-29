@extends('admin.layouts.app')
@push('breadcrumb')
    @include('admin.includes.breadcrumb', ['page' => 'К кому обратиться', 'action' => 'Добавить организацию', 'route' => 'clinics'])
@endpush
@section('content')
    <div class="card">
        <div class="card-header"><strong>Добавить организацию</strong></div>
        <form class="form-horizontal" action="{{ route('clinics.store') }}" method="POST">
            @csrf
            <div class="card-body">
                <div class="row">
                    @foreach(Config::get('app.languages') as $key => $lang)
                        <div class="col-4">
                            <div class="form-group">
                                <label for="title_{{ $key }}">Заголовок ({{ $lang }})</label>
                                <input class="form-control @error('title.'.$key) is-invalid @enderror"
                                       id="title_{{ $key }}" name="title[{{ $key }}]"
                                       type="text" value="{{ old('title.'.$key) }}"
                                       placeholder="Введите заголовок">
                                @error('title.'.$key)
                                <div class="invalid-feedback">{{ $message }}</div>
                                @enderror
                            </div>
                        </div>
                    @endforeach
                    <div class="col-8">
                        <div class="form-group">
                            <label for="address">Адрес</label>
                            <input class="form-control @error('address') is-invalid @enderror"
                                   id="address" name="address"
                                   type="text" value="{{ old('address') }}" list="browsers"
                                   placeholder="Введите адрес">
                            <datalist id="browsers">
                            </datalist>
                            @error('address')
                            <div class="invalid-feedback">{{ $message }}</div>
                            @enderror
                            <ul class="list-group" style="border-top-left-radius: 0px; border-top-right-radius: 0px;"
                                id="addresses">
                            </ul>
                            <input type="hidden" value="{{ old('latitude') }}" name="latitude">
                            <input type="hidden" value="{{ old('longitude') }}" name="longitude">
                        </div>
                    </div>
                    <div class="col-4">
                        <div class="form-group">
                            <label for="phone_number">Телефонный номер</label>
                            <input class="form-control @error('phone_number') is-invalid @enderror"
                                   id="phone_number" name="phone_number"
                                   type="text"
                                   value="{{ old('phone_number', '+998') }}"
                                   placeholder="Введите номер телефона">
                            @error('phone_number')
                            <div class="invalid-feedback">{{ $message }}</div>
                            @enderror
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="form-group border rounded">
                            <div id="map" style="width:100%; height:500px; background-color: #e5e3df;"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-footer text-right">
                <button class="btn btn-primary" type="submit"> Сохранить</button>
            </div>
        </form>
    </div>
@endsection
@push('scripts')
    @include('admin.includes.yandexMapScriptForCreate')
    @include('admin.includes.phoneNumberMask')
@endpush


