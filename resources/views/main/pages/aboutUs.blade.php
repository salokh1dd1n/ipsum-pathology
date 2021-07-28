@extends('main.layouts.app')
@push('langSwitcher')
    @include('main.includes.langSwitcher')
@endpush
@section('content')
    <div class="content">
        <page class="our-labaratory our-lab">

            <!-- First part article -->
            <div class="our-lab__wrapper">
                <div class="uk-container uk-container-center our-lab__container">
                    <div class="block__wrapper uk-width-1-1 ta__block block-ta">

                        <section class="our-lab__article">
                            <!-- Container title -->
                            <h1 class="our-lab__title block__title uk-margin-small">Лечение "Наименование
                                заболевания"</h1>

                            <!-- background pictures -->
                            <div class="anim__background anim-bg2">
                                <div class="anim__background-mask">
                                    <picture>
                                        <img src="{{ asset('main/img/Mask.png') }}" alt="" width="183px"
                                             height="183px"/></picture>
                                </div>
                            </div>

                            <article class="our-lab__content block__article-text">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    It has survived not only five centuries, but also the leap into electronic
                                    typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                                    the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                                    with desktop publishing software like Aldus PageMaker including versions of Lorem
                                    Ipsum.</br></br>
                                    <div
                                        class="uk-flex uk-child-width-1-2@l uk-child-width-1-1 uk-flex-center uk-flex-middle"
                                        uk-grid>
                                        <div class="our-lab__content-left__part uk-text-center">
                                            <picture>
                                                <img src="{{ asset('main/img/article__picture2.png') }}" alt="">
                                            </picture>
                                        </div>
                                        <div class="our-lab__content-right__part">
                                            <h2 class="our-lab__title block__title uk-margin-small">Качество
                                                анализа</h2>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                                    Ipsum has been the industry's standard dummy text ever since the 1500s, when an
                                    unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    It has survived not only five centuries, but also the leap into electronic
                                    typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                                    the release of Letraset sheets containing Lorem Ipsum passages, and more recently
                                    with desktop publishing software like Aldus PageMaker including versions of Lorem
                                    Ipsum.</p>
                    </div>
                </div>
                </article>
                </section>


                <div class="anim__background block__background-anim anim-bg2">
                    <picture>
                        <img src="{{ asset('main/img/footerAtom.png') }}" alt="" class="anim__bg-atom" width="248px"
                             height="248px">
                    </picture>
                </div>


                <!-- Specialization -->
                <section class="our-lab__specialization">
                    <h1 class="our-lab__title block__title uk-margin-small">Специализация</h1>

                    <div
                        class="our-lab__specs uk-grid-match uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-5@m uk-flex-center"
                        uk-grid>
                        <div>
                            <div
                                class="our-lab__spec-card card-spec uk-flex uk-flex-center uk-flex-middle uk-flex-column uk-text-center">
                                <div class="card-spec-num">1</div>
                                <div class="card-spec-title">Специализация 1</div>
                                <div class="card-spec-text">Add photos & a welcome message. Create any kind of gift you
                                    can imagine.
                                </div>
                                <a href="#" class="card-spec-btn">Подробнее</a>
                            </div>
                        </div>
                        <div>
                            <div
                                class="our-lab__spec-card card-spec uk-flex uk-flex-center uk-flex-middle uk-flex-column uk-text-center">
                                <div class="card-spec-num">1</div>
                                <div class="card-spec-title">Специализация 1</div>
                                <div class="card-spec-text">Add photos & a welcome message. Create any kind of gift you
                                    can imagine.
                                </div>
                                <a href="#" class="card-spec-btn">Подробнее</a>
                            </div>
                        </div>
                        <div>
                            <div
                                class="our-lab__spec-card card-spec uk-flex uk-flex-center uk-flex-middle uk-flex-column uk-text-center">
                                <div class="card-spec-num">1</div>
                                <div class="card-spec-title">Специализация 1</div>
                                <div class="card-spec-text">Add photos & a welcome message. Create any kind of gift you
                                    can imagine.
                                </div>
                                <a href="#" class="card-spec-btn">Подробнее</a>
                            </div>
                        </div>
                        <div>
                            <div
                                class="our-lab__spec-card card-spec uk-flex uk-flex-center uk-flex-middle uk-flex-column uk-text-center">
                                <div class="card-spec-num">1</div>
                                <div class="card-spec-title">Специализация 1</div>
                                <div class="card-spec-text">Add photos & a welcome message. Create any kind of gift you
                                    can imagine.
                                </div>
                                <a href="#" class="card-spec-btn">Подробнее</a>
                            </div>
                        </div>
                        <div>
                            <div
                                class="our-lab__spec-card card-spec uk-flex uk-flex-center uk-flex-middle uk-flex-column uk-text-center">
                                <div class="card-spec-num">1</div>
                                <div class="card-spec-title">Специализация 1</div>
                                <div class="card-spec-text">Add photos & a welcome message. Create any kind of gift you
                                    can imagine.
                                </div>
                                <a href="#" class="card-spec-btn">Подробнее</a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <!-- Statistics -->
            <section class="our-lab__statistics">
                <div class="our-lab__statistics-content stat__cont uk-flex uk-flex-center uk-flex-middle uk-height-1-1">
                    <div class="stat__cont-item">
                        <div class="stat__cont-item-icon">
                            <picture>
                                <img src="{{ asset('main/img/members-icon.png') }}" alt="" width="60px" height="60px"
                                     uk-img></picture>
                        </div>
                        <div class="stat__cont-item-context">
                            <div class="stat__cont-item-context-title">28K</div>
                            <div class="stat__cont-item-context-subtitle">Total Users</div>
                        </div>
                    </div>
                    <div class="stat__cont-item">
                        <div class="stat__cont-item-icon">
                            <picture>
                                <img src="{{ asset('main/img/download-icon.png') }}" alt="" width="60px" height="60px"
                                     uk-img></picture>
                        </div>
                        <div class="stat__cont-item-context">
                            <div class="stat__cont-item-context-title">13K</div>
                            <div class="stat__cont-item-context-subtitle">Lifetime Downloads</div>
                        </div>
                    </div>
                    <div class="stat__cont-item">
                        <div class="stat__cont-item-icon">
                            <picture>
                                <img src="{{ asset('main/img/like-icon.png') }}" alt="" width="60px" height="60px"
                                     uk-img></picture>
                        </div>
                        <div class="stat__cont-item-context">
                            <div class="stat__cont-item-context-title">68K</div>
                            <div class="stat__cont-item-context-subtitle">Social Likes</div>
                        </div>
                    </div>
                    <div class="stat__cont-item">
                        <div class="stat__cont-item-icon">
                            <picture>
                                <img src="{{ asset('main/img/star-icon.png') }}" alt="" width="60px" height="60px"
                                     uk-img></picture>
                        </div>
                        <div class="stat__cont-item-context">
                            <div class="stat__cont-item-context-title">10K</div>
                            <div class="stat__cont-item-context-subtitle">5 Star Ratings</div>
                        </div>
                    </div>
                </div>
                <div class="our-lab__statistics-bg">
                    <span>
                        <picture>
                            <img src="{{ asset('main/img/statistics-bg.png') }}" alt="">
                        </picture>
                    </span>
                </div>
            </section>

            <div class="block__wrapper uk-width-1-1 ta__block block-ta">
                <!-- Principles -->
                <section class="our-lab__principles">
                    <!-- Container title -->
                    <h1 class="treatment-article__title block__title">Наши принципы</h1>
                    <div uk-filter="target: .js-filter" class="accordion">
                        <ul class="js-filter uk-child-width-1-1 uk-child-width-1-2@m uk-text-center accordion__items-container"
                            uk-grid="masonry: true">
                            <li class="accordion__items-element">
                                <div class="uk-card uk-card-default uk-card-body accordion__item-card">
                                    <ul uk-accordion>
                                        <li>
                                            <a class="uk-accordion-title accordion__item-title uk-text-left" href="#">Принцип
                                                1 1
                                            </a>
                                            <div class="uk-accordion-content accordion__item-content">
                                                <p>It takes 2-3 weeks to get your first blog post ready. That includes
                                                    the in-depth research & creation of your monthly content marketing
                                                    strategy that we MUST do before writing your first blog post.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="accordion__items-element">
                                <div class="uk-card uk-card-default uk-card-body accordion__item-card">
                                    <ul uk-accordion>
                                        <li>
                                            <a class="uk-accordion-title accordion__item-title uk-text-left" href="#">Принцип
                                                1
                                            </a>
                                            <div class="uk-accordion-content accordion__item-content">
                                                <p>It takes 2-3 weeks to get your first blog post ready. That includes
                                                    the in-depth research & creation of your monthly content marketing
                                                    strategy that we MUST do before writing your first blog post.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="accordion__items-element">
                                <div class="uk-card uk-card-default uk-card-body accordion__item-card">
                                    <ul uk-accordion>
                                        <li>
                                            <a class="uk-accordion-title accordion__item-title uk-text-left" href="#">Принцип
                                                1
                                            </a>
                                            <div class="uk-accordion-content accordion__item-content">
                                                <p>It takes 2-3 weeks to get your first blog post ready. That includes
                                                    the in-depth research & creation of your monthly content marketing
                                                    strategy that we MUST do before writing your first blog post.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="accordion__items-element">
                                <div class="uk-card uk-card-default uk-card-body accordion__item-card">
                                    <ul uk-accordion>
                                        <li>
                                            <a class="uk-accordion-title accordion__item-title uk-text-left" href="#">Принцип
                                                1
                                            </a>
                                            <div class="uk-accordion-content accordion__item-content">
                                                <p>It takes 2-3 weeks to get your first blog post ready. That includes
                                                    the in-depth research & creation of your monthly content marketing
                                                    strategy that we MUST do before writing your first blog post.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li class="accordion__items-element">
                                <div class="uk-card uk-card-default uk-card-body accordion__item-card">
                                    <ul uk-accordion>
                                        <li>
                                            <a class="uk-accordion-title accordion__item-title uk-text-left" href="#">Принцип
                                                1
                                            </a>
                                            <div class="uk-accordion-content accordion__item-content">
                                                <p>It takes 2-3 weeks to get your first blog post ready. That includes
                                                    the in-depth research & creation of your monthly content marketing
                                                    strategy that we MUST do before writing your first blog post.</p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>

                <!-- ourTeam -->
                <section class="our-lab__team">
                    <h1 class="our-lab__title block__title uk-margin-small">Наша команда</h1>

                    <div
                        class="our-lab__specs uk-child-width-1-1 uk-child-width-1-2@s uk-child-width-1-4@m uk-flex-center uk-grid-match"
                        uk-grid>
                        @foreach($team as $member)
                            <div>
                                <div
                                    class="our-lab__team-card tm__card uk-flex uk-flex-center uk-flex-middle uk-flex-column uk-text-center">
                                    <div class="tm__card-photo">
                                        <picture>
                                            <img src="{{ asset('storage/uploads/images/'.$member->image) }}" alt=""
                                                 width="222px"
                                                 height="222px" uk-img/>
                                        </picture>
                                    </div>
                                    <div class="uk-card tm__card-content cnt">
                                        <div class="cnt-position">{{ $member->role }}</div>
                                        <div class="cnt-name">{{ $member->name }}</div>
                                        <div class="cnt-description">{{ $member->description }}</div>
                                    </div>
                                </div>
                            </div>
                        @endforeach
                    </div>

                </section>
            </div>
        </page>
    </div>
@endsection
