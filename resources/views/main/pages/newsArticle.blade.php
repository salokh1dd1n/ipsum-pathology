@extends('main.layouts.app')
@push('langSwitcher')
    @include('main.includes.langSwitcher', ['id' => $newsItem->id])
@endpush
@section('content')
    <div class="content">
        <page class="news__article news">
            <!-- News Article -->
            <section class="news__content cnt">
                <div class="uk-container uk-container-center cnt__container">
                    <div class="cnt__wrapper block__wrapper uk-width-1-1">
                        <!-- background pictures -->
                        <div class="anim__background anim-bg2">
                            <div class="anim__background-mask">
                                <picture>
                                    <img src="{{ asset('main/img/Mask.png') }}" alt=""/></picture>
                            </div>
                        </div>

                        <div class="cnt__top">
                            <div class="cnt__img">
                                <picture>
                                    <img src="{{ asset('storage/uploads/images/'.$newsItem->image) }}" alt="" width="427px" height="529px" uk-img></picture>
                            </div>
                            <div class="cnt__top">
                                <span class="cnt__top-data">
                                  {{ $newsItem->published_at }}
                                </span>
                                <h1 class="cnt__top-title block__title uk-margin-small">{{ $newsItem->title }}</h1>
                                <p class="cnt__text">
                                    {!! $newsItem->description !!}
                                </p>
                            </div>
                        </div>
{{--                        <div class="ctn__bottom">--}}
{{--                            <p class="cnt__text">--}}
{{--                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. A tellus scelerisque neque--}}
{{--                                ultricies non aliquam ultricies. Aliquet at imperdiet habitasse mauris facilisis id--}}
{{--                                turpis. Fusce ut vitae in sagittis sed blandit iaculis gravida at. Et consectetur diam--}}
{{--                                convallis ullamcorper facilisi. Tristique ultricies et imperdiet pellentesque sit donec.--}}
{{--                                Amet, gravida in ut imperdiet amet ut ut tortor enim. Nunc, accumsan, mi pellentesque--}}
{{--                                phasellus vitae. Id mi id dui, varius morbi. Vulputate sociis aliquam enim sem volutpat.--}}
{{--                                Dapibus nisl enim et penatibus. Lobortis scelerisque platea gravida lorem non sit enim--}}
{{--                                augue.--}}
{{--                                <br><br>--}}
{{--                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. A tellus scelerisque neque--}}
{{--                                ultricies non aliquam ultricies. Aliquet at imperdiet habitasse mauris facilisis id--}}
{{--                                turpis. Fusce ut vitae in sagittis sed blandit iaculis gravida at. Et consectetur diam--}}
{{--                                convallis ullamcorper facilisi. Tristique ultricies et imperdiet pellentesque sit donec.--}}
{{--                                Amet, gravida in ut imperdiet amet ut ut tortor enim. Nunc, accumsan, mi pellentesque--}}
{{--                                phasellus vitae. Id mi id dui, varius morbi. Vulputate sociis aliquam enim sem volutpat.--}}
{{--                                Dapibus nisl enim et penatibus. Lobortis scelerisque platea gravida lorem non sit enim--}}
{{--                                augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. A tellus scelerisque--}}
{{--                                neque ultricies non aliquam ultricies. Aliquet at imperdiet habitasse mauris facilisis--}}
{{--                                id turpis. Fusce ut vitae in sagittis sed blandit iaculis gravida at. Et consectetur--}}
{{--                                diam convallis ullamcorper facilisi. Tristique ultricies et imperdiet pellentesque sit--}}
{{--                                donec. Amet, gravida in ut imperdiet amet ut ut tortor enim. Nunc, accumsan, mi--}}
{{--                                pellentesque phasellus vitae. Id mi id dui, varius morbi. Vulputate sociis aliquam enim--}}
{{--                                sem volutpat. Dapibus nisl enim et penatibus. Lobortis scelerisque platea gravida lorem--}}
{{--                                non sit enim augue.--}}
{{--                            </p>--}}
{{--                        </div>--}}

                        <div class="anim__background block__background-anim anim-bg2">
                            <picture>
                                <img src="{{ asset('main/img/footerAtom.png') }}" alt="" class="anim__bg-atom" width="248px"
                                     height="248px"></picture>
                        </div>
                    </div>
                </div>
            </section>
        </page>
    </div>
@endsection
