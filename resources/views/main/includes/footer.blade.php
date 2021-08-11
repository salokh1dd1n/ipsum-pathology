@if (currentRouteName() != 'contacts')
    <section class="footer__map">
        <script
            type="text/javascript"
            charset="utf-8"
            async
            src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A895c203061d9942672d227bfd26119860efc0b9877042faf61b05700d33a7b1f&amp;width=100%25&amp;height=400&amp;lang={{ app()->getLocale() }}&amp;scroll=false"
        ></script>
    </section>
@endif
<footer class="footer">
    <section class="footer__content">
        <div class="uk-container uk-container-center">
            <div class="footer__content-top uk-grid" uk-grid>
                <div class="uk-width-1-4 left-side">
                    <picture>
                        <img loading="lazy" src="{{ asset('main/img/logoFooter.png') }}" alt="" width="126px" height="72px"/>
                    </picture>
                    <p>Build a modern and creative website with crealand</p>
                    <div class="social-links">
                        <div class="social-link">
                            <a href="#">
                                <svg width="18" height="21" fill="#fff" viewBox="0 0 20 20"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M17.86,9.09 C18.46,12.12 17.14,16.05 13.81,17.56 C9.45,19.53 4.13,17.68 2.47,12.87 C0.68,7.68 4.22,2.42 9.5,2.03 C11.57,1.88 13.42,2.37 15.05,3.65 C15.22,3.78 15.37,3.93 15.61,4.14 C14.9,4.81 14.23,5.45 13.5,6.14 C12.27,5.08 10.84,4.72 9.28,4.98 C8.12,5.17 7.16,5.76 6.37,6.63 C4.88,8.27 4.62,10.86 5.76,12.82 C6.95,14.87 9.17,15.8 11.57,15.25 C13.27,14.87 14.76,13.33 14.89,11.75 L10.51,11.75 L10.51,9.09 L17.86,9.09 L17.86,9.09 Z">
                                    </path>
                                </svg>
                            </a>
                        </div>
                        <div class="social-link">
                            <a href="#">
                                <svg width="18" height="21" fill="#fff" viewBox="0 0 20 20"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M19,4.74 C18.339,5.029 17.626,5.229 16.881,5.32 C17.644,4.86 18.227,4.139 18.503,3.28 C17.79,3.7 17.001,4.009 16.159,4.17 C15.485,3.45 14.526,3 13.464,3 C11.423,3 9.771,4.66 9.771,6.7 C9.771,6.99 9.804,7.269 9.868,7.539 C6.795,7.38 4.076,5.919 2.254,3.679 C1.936,4.219 1.754,4.86 1.754,5.539 C1.754,6.82 2.405,7.95 3.397,8.61 C2.79,8.589 2.22,8.429 1.723,8.149 L1.723,8.189 C1.723,9.978 2.997,11.478 4.686,11.82 C4.376,11.899 4.049,11.939 3.713,11.939 C3.475,11.939 3.245,11.919 3.018,11.88 C3.49,13.349 4.852,14.419 6.469,14.449 C5.205,15.429 3.612,16.019 1.882,16.019 C1.583,16.019 1.29,16.009 1,15.969 C2.635,17.019 4.576,17.629 6.662,17.629 C13.454,17.629 17.17,12 17.17,7.129 C17.17,6.969 17.166,6.809 17.157,6.649 C17.879,6.129 18.504,5.478 19,4.74">
                                    </path>
                                </svg>
                            </a>
                        </div>
                        <div class="social-link">
                            <a href="#">
                                <svg width="16" height="21" fill="#fff" viewBox="0 0 20 20"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M13.55,1H6.46C3.45,1,1,3.44,1,6.44v7.12c0,3,2.45,5.44,5.46,5.44h7.08c3.02,0,5.46-2.44,5.46-5.44V6.44 C19.01,3.44,16.56,1,13.55,1z M17.5,14c0,1.93-1.57,3.5-3.5,3.5H6c-1.93,0-3.5-1.57-3.5-3.5V6c0-1.93,1.57-3.5,3.5-3.5h8 c1.93,0,3.5,1.57,3.5,3.5V14z">
                                    </path>
                                    <circle cx="14.87" cy="5.26" r="1.09"></circle>
                                    <path
                                        d="M10.03,5.45c-2.55,0-4.63,2.06-4.63,4.6c0,2.55,2.07,4.61,4.63,4.61c2.56,0,4.63-2.061,4.63-4.61 C14.65,7.51,12.58,5.45,10.03,5.45L10.03,5.45L10.03,5.45z M10.08,13c-1.66,0-3-1.34-3-2.99c0-1.65,1.34-2.99,3-2.99s3,1.34,3,2.99 C13.08,11.66,11.74,13,10.08,13L10.08,13L10.08,13z">
                                    </path>
                                </svg>
                            </a>
                        </div>
                        <div class="social-link">
                            <a href="#">
                                <svg width="16" height="21" fill="#fff" viewBox="0 0 20 20"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M5.77,17.89 L5.77,7.17 L2.21,7.17 L2.21,17.89 L5.77,17.89 L5.77,17.89 Z M3.99,5.71 C5.23,5.71 6.01,4.89 6.01,3.86 C5.99,2.8 5.24,2 4.02,2 C2.8,2 2,2.8 2,3.85 C2,4.88 2.77,5.7 3.97,5.7 L3.99,5.7 L3.99,5.71 L3.99,5.71 Z">
                                    </path>
                                    <path
                                        d="M7.75,17.89 L11.31,17.89 L11.31,11.9 C11.31,11.58 11.33,11.26 11.43,11.03 C11.69,10.39 12.27,9.73 13.26,9.73 C14.55,9.73 15.06,10.71 15.06,12.15 L15.06,17.89 L18.62,17.89 L18.62,11.74 C18.62,8.45 16.86,6.92 14.52,6.92 C12.6,6.92 11.75,7.99 11.28,8.73 L11.3,8.73 L11.3,7.17 L7.75,7.17 C7.79,8.17 7.75,17.89 7.75,17.89 L7.75,17.89 L7.75,17.89 Z">
                                    </path>
                                </svg>
                            </a>
                        </div>
                        <div class="social-link">
                            <a href="#">
                                <svg width="21" height="21" fill="#fff" viewBox="0 0 20 20"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M15,4.1c1,0.1,2.3,0,3,0.8c0.8,0.8,0.9,2.1,0.9,3.1C19,9.2,19,10.9,19,12c-0.1,1.1,0,2.4-0.5,3.4c-0.5,1.1-1.4,1.5-2.5,1.6 c-1.2,0.1-8.6,0.1-11,0c-1.1-0.1-2.4-0.1-3.2-1c-0.7-0.8-0.7-2-0.8-3C1,11.8,1,10.1,1,8.9c0-1.1,0-2.4,0.5-3.4C2,4.5,3,4.3,4.1,4.2 C5.3,4.1,12.6,4,15,4.1z M8,7.5v6l5.5-3L8,7.5z">
                                    </path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="uk-width-3-4 right-side">
                    <ul uk-accordion class="footer__accordion">
                        <li>
                            <a class="uk-accordion-title accordion__item-title" href="#">Лаборатория
                            </a>
                            <div class="uk-accordion-content footer__accordion-content">
                                <ul class="submenu__accordion">
                                    <li><a href="#">Гистологические исследования</a></li>
                                    <li><a href="#">Цитологические исследования</a></li>
                                    <li><a href="#">Иммуногистохимические исследования</a></li>
                                    <li><a href="#">Иммунофлюоресцентные исследования</a></li>
                                    <li><a href="#">Пересмотр стекол</a></li>
                                    <li><a href="#">Молекулярно-генетические исследования</a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                    <!--  <ul uk-accordion class="footer__accordion">
                        <li class='accordion__key'>
                          <a class="uk-accordion-title accordion__item-title" href="#">Services
                          </a>
                            <div class="uk-accordion-content footer__accordion-content">
                                <ul class="submenu__accordion">
                                    <li><a href="#">Documentation</a></li>
                                    <li><a href="#">Design</a></li>
                                    <li><a href="#">Themes</a></li>
                                    <li><a href="#">Illustrations</a></li>
                                    <li><a href="#">UI KIT</a></li>
                                </ul>
                            </div>
                        </li>
                    </ul> -->
                    <ul uk-accordion class="footer__accordion">
                        <li>
                            <a class="uk-accordion-title accordion__item-title" href="#">Полезное
                            </a>
                            <div class="uk-accordion-content footer__accordion-content">
                                <ul class="submenu__accordion">
                                    <li><a href="{{ routeWithLocale('researches') }}">Лечение</a></li>
                                    <li><a href="{{ routeWithLocale('faq') }}">Вопросы</a></li>
                                    <li><a href="{{ routeWithLocale('doctors') }}">Врачи</a></li>
                                    <li><a href="{{ routeWithLocale('team') }}">Команда</a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                    <ul uk-accordion class="footer__accordion">
                        <li>
                            <a class="uk-accordion-title accordion__item-title" href="#">Контакты
                            </a>
                            <div class="uk-accordion-content footer__accordion-content">
                                <ul class="submenu__accordion">
                                    <li><a href="tel:+998951999300">+998 (95) 199-93-00</a></li>
                                    <li><a href="tel:+998951999301">+998 (95) 199-93-01</a></li>
                                    <li><a href="tel:+998951999304">+998 (95) 199-93-04</a></li>
                                    <li><a href="tel:+998951999305">+998 (95) 199-93-05</a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="footer__content-bottom">
                <div class="footer__left">
                    <picture>
                        <img loading="lazy" src="{{ asset('main/img/Folder.png') }}" alt="" width="230px" height="230px">
                    </picture>
                </div>
                <div class="footer__right">
                    <div class="logo__panda">
                        <a class="btn" href="https://digitalpanda.uz/" target="_blank">
                            <svg width="180px" height="60px" viewBox="0 0 180 60" class="border">
                                <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line"/>
                                <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line"/>
                            </svg>
                            <picture>
                                <img src="{{ asset('main/img/logo-white.svg') }}" alt="https://digitalpanda.uz/">
                            </picture>
                        </a>
                    </div>
                </div>
            </div>
            <div class="footer__content-copy">
                <a class="like__button">
                    <svg width="28" height="24" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#41A0F0" stroke="#41A0F0" stroke-width="1.03"
                              d="M10,4 C10,4 8.1,2 5.74,2 C3.38,2 1,3.55 1,6.73 C1,8.84 2.67,10.44 2.67,10.44 L10,18 L17.33,10.44 C17.33,10.44 19,8.84 19,6.73 C19,3.55 16.62,2 14.26,2 C11.9,2 10,4 10,4 L10,4 Z">
                        </path>
                    </svg>
                </a>
                Copyright &copy; 2021
            </div>
        </div>
    </section>
</footer>
{{--<footer class="footer">--}}
{{--    <section class="footer__content">--}}
{{--        <div class="uk-container uk-container-center">--}}
{{--            <div class="footer__content-top uk-grid" uk-grid>--}}
{{--                <div class="uk-width-2-5 left-side">--}}
{{--                    <picture>--}}
{{--                        <img src="{{ asset('main/img/logoFooter.png') }}" alt="" width="126px" height="72px"/></picture>--}}
{{--                    <p>Build a modern and creative website with crealand</p>--}}
{{--                    <div class="social-links">--}}
{{--                        <div class="social-link">--}}
{{--                            <a href="#">--}}
{{--                                <svg width="18" height="21" fill="#fff" viewBox="0 0 20 20"--}}
{{--                                     xmlns="http://www.w3.org/2000/svg">--}}
{{--                                    <path--}}
{{--                                        d="M17.86,9.09 C18.46,12.12 17.14,16.05 13.81,17.56 C9.45,19.53 4.13,17.68 2.47,12.87 C0.68,7.68 4.22,2.42 9.5,2.03 C11.57,1.88 13.42,2.37 15.05,3.65 C15.22,3.78 15.37,3.93 15.61,4.14 C14.9,4.81 14.23,5.45 13.5,6.14 C12.27,5.08 10.84,4.72 9.28,4.98 C8.12,5.17 7.16,5.76 6.37,6.63 C4.88,8.27 4.62,10.86 5.76,12.82 C6.95,14.87 9.17,15.8 11.57,15.25 C13.27,14.87 14.76,13.33 14.89,11.75 L10.51,11.75 L10.51,9.09 L17.86,9.09 L17.86,9.09 Z">--}}
{{--                                    </path>--}}
{{--                                </svg>--}}
{{--                            </a>--}}
{{--                        </div>--}}
{{--                        <div class="social-link">--}}
{{--                            <a href="#">--}}
{{--                                <svg width="18" height="21" fill="#fff" viewBox="0 0 20 20"--}}
{{--                                     xmlns="http://www.w3.org/2000/svg">--}}
{{--                                    <path--}}
{{--                                        d="M19,4.74 C18.339,5.029 17.626,5.229 16.881,5.32 C17.644,4.86 18.227,4.139 18.503,3.28 C17.79,3.7 17.001,4.009 16.159,4.17 C15.485,3.45 14.526,3 13.464,3 C11.423,3 9.771,4.66 9.771,6.7 C9.771,6.99 9.804,7.269 9.868,7.539 C6.795,7.38 4.076,5.919 2.254,3.679 C1.936,4.219 1.754,4.86 1.754,5.539 C1.754,6.82 2.405,7.95 3.397,8.61 C2.79,8.589 2.22,8.429 1.723,8.149 L1.723,8.189 C1.723,9.978 2.997,11.478 4.686,11.82 C4.376,11.899 4.049,11.939 3.713,11.939 C3.475,11.939 3.245,11.919 3.018,11.88 C3.49,13.349 4.852,14.419 6.469,14.449 C5.205,15.429 3.612,16.019 1.882,16.019 C1.583,16.019 1.29,16.009 1,15.969 C2.635,17.019 4.576,17.629 6.662,17.629 C13.454,17.629 17.17,12 17.17,7.129 C17.17,6.969 17.166,6.809 17.157,6.649 C17.879,6.129 18.504,5.478 19,4.74">--}}
{{--                                    </path>--}}
{{--                                </svg>--}}
{{--                            </a>--}}
{{--                        </div>--}}
{{--                        <div class="social-link">--}}
{{--                            <a href="#">--}}
{{--                                <svg width="16" height="21" fill="#fff" viewBox="0 0 20 20"--}}
{{--                                     xmlns="http://www.w3.org/2000/svg">--}}
{{--                                    <path--}}
{{--                                        d="M13.55,1H6.46C3.45,1,1,3.44,1,6.44v7.12c0,3,2.45,5.44,5.46,5.44h7.08c3.02,0,5.46-2.44,5.46-5.44V6.44 C19.01,3.44,16.56,1,13.55,1z M17.5,14c0,1.93-1.57,3.5-3.5,3.5H6c-1.93,0-3.5-1.57-3.5-3.5V6c0-1.93,1.57-3.5,3.5-3.5h8 c1.93,0,3.5,1.57,3.5,3.5V14z">--}}
{{--                                    </path>--}}
{{--                                    <circle cx="14.87" cy="5.26" r="1.09"></circle>--}}
{{--                                    <path--}}
{{--                                        d="M10.03,5.45c-2.55,0-4.63,2.06-4.63,4.6c0,2.55,2.07,4.61,4.63,4.61c2.56,0,4.63-2.061,4.63-4.61 C14.65,7.51,12.58,5.45,10.03,5.45L10.03,5.45L10.03,5.45z M10.08,13c-1.66,0-3-1.34-3-2.99c0-1.65,1.34-2.99,3-2.99s3,1.34,3,2.99 C13.08,11.66,11.74,13,10.08,13L10.08,13L10.08,13z">--}}
{{--                                    </path>--}}
{{--                                </svg>--}}
{{--                            </a>--}}
{{--                        </div>--}}
{{--                        <div class="social-link">--}}
{{--                            <a href="#">--}}
{{--                                <svg width="16" height="21" fill="#fff" viewBox="0 0 20 20"--}}
{{--                                     xmlns="http://www.w3.org/2000/svg">--}}
{{--                                    <path--}}
{{--                                        d="M5.77,17.89 L5.77,7.17 L2.21,7.17 L2.21,17.89 L5.77,17.89 L5.77,17.89 Z M3.99,5.71 C5.23,5.71 6.01,4.89 6.01,3.86 C5.99,2.8 5.24,2 4.02,2 C2.8,2 2,2.8 2,3.85 C2,4.88 2.77,5.7 3.97,5.7 L3.99,5.7 L3.99,5.71 L3.99,5.71 Z">--}}
{{--                                    </path>--}}
{{--                                    <path--}}
{{--                                        d="M7.75,17.89 L11.31,17.89 L11.31,11.9 C11.31,11.58 11.33,11.26 11.43,11.03 C11.69,10.39 12.27,9.73 13.26,9.73 C14.55,9.73 15.06,10.71 15.06,12.15 L15.06,17.89 L18.62,17.89 L18.62,11.74 C18.62,8.45 16.86,6.92 14.52,6.92 C12.6,6.92 11.75,7.99 11.28,8.73 L11.3,8.73 L11.3,7.17 L7.75,7.17 C7.79,8.17 7.75,17.89 7.75,17.89 L7.75,17.89 L7.75,17.89 Z">--}}
{{--                                    </path>--}}
{{--                                </svg>--}}
{{--                            </a>--}}
{{--                        </div>--}}
{{--                        <div class="social-link">--}}
{{--                            <a href="#">--}}
{{--                                <svg width="21" height="21" fill="#fff" viewBox="0 0 20 20"--}}
{{--                                     xmlns="http://www.w3.org/2000/svg">--}}
{{--                                    <path--}}
{{--                                        d="M15,4.1c1,0.1,2.3,0,3,0.8c0.8,0.8,0.9,2.1,0.9,3.1C19,9.2,19,10.9,19,12c-0.1,1.1,0,2.4-0.5,3.4c-0.5,1.1-1.4,1.5-2.5,1.6 c-1.2,0.1-8.6,0.1-11,0c-1.1-0.1-2.4-0.1-3.2-1c-0.7-0.8-0.7-2-0.8-3C1,11.8,1,10.1,1,8.9c0-1.1,0-2.4,0.5-3.4C2,4.5,3,4.3,4.1,4.2 C5.3,4.1,12.6,4,15,4.1z M8,7.5v6l5.5-3L8,7.5z">--}}
{{--                                    </path>--}}
{{--                                </svg>--}}
{{--                            </a>--}}
{{--                        </div>--}}
{{--                    </div>--}}
{{--                </div>--}}
{{--                <div class="uk-width-3-5 right-side">--}}
{{--                    <ul uk-accordion class="footer__accordion">--}}
{{--                        <li>--}}
{{--                            <a class="uk-accordion-title accordion__item-title" href="#">Product--}}
{{--                            </a>--}}
{{--                            <div class="uk-accordion-content footer__accordion-content">--}}
{{--                                <ul class="submenu__accordion">--}}
{{--                                    <li><a href="#">Landingpage</a></li>--}}
{{--                                    <li><a href="#">Features</a></li>--}}
{{--                                    <li><a href="#">Documentation</a></li>--}}
{{--                                    <li><a href="#">Referral Program</a></li>--}}
{{--                                    <li><a href="#">Pricing</a></li>--}}
{{--                                </ul>--}}
{{--                            </div>--}}
{{--                        </li>--}}
{{--                    </ul>--}}
{{--                    <ul uk-accordion class="footer__accordion">--}}
{{--                        <li class='accordion__key'>--}}
{{--                            <a class="uk-accordion-title accordion__item-title" href="#">Services--}}
{{--                            </a>--}}
{{--                            <div class="uk-accordion-content footer__accordion-content">--}}
{{--                                <ul class="submenu__accordion">--}}
{{--                                    <li><a href="#">Documentation</a></li>--}}
{{--                                    <li><a href="#">Design</a></li>--}}
{{--                                    <li><a href="#">Themes</a></li>--}}
{{--                                    <li><a href="#">Illustrations</a></li>--}}
{{--                                    <li><a href="#">UI KIT</a></li>--}}
{{--                                </ul>--}}
{{--                            </div>--}}
{{--                        </li>--}}
{{--                    </ul>--}}
{{--                    <ul uk-accordion class="footer__accordion">--}}
{{--                        <li>--}}
{{--                            <a class="uk-accordion-title accordion__item-title" href="#">Company--}}
{{--                            </a>--}}
{{--                            <div class="uk-accordion-content footer__accordion-content">--}}
{{--                                <ul class="submenu__accordion">--}}
{{--                                    <li><a href="#">About</a></li>--}}
{{--                                    <li><a href="#">Terms</a></li>--}}
{{--                                    <li><a href="#">Privacy Policy</a></li>--}}
{{--                                    <li><a href="#">Careers</a></li>--}}
{{--                                </ul>--}}
{{--                            </div>--}}
{{--                        </li>--}}
{{--                    </ul>--}}
{{--                    <ul uk-accordion class="footer__accordion">--}}
{{--                        <li>--}}
{{--                            <a class="uk-accordion-title accordion__item-title" href="#">More--}}
{{--                            </a>--}}
{{--                            <div class="uk-accordion-content footer__accordion-content">--}}
{{--                                <ul class="submenu__accordion">--}}
{{--                                    <li><a href="#">Docementation</a></li>--}}
{{--                                    <li><a href="#">License</a></li>--}}
{{--                                    <li><a href="#">Changelog Policy</a></li>--}}
{{--                                </ul>--}}
{{--                            </div>--}}
{{--                        </li>--}}
{{--                    </ul>--}}
{{--                </div>--}}
{{--            </div>--}}
{{--            <div class="footer__content-bottom">--}}
{{--                <picture>--}}
{{--                    <img src="{{ asset('main/img/Folder.png') }}" alt="" width="230px" height="230px"></picture>--}}
{{--                <a class="like__button">--}}
{{--                    <svg width="28" height="24" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">--}}
{{--                        <path fill="#41A0F0" stroke="#41A0F0" stroke-width="1.03"--}}
{{--                              d="M10,4 C10,4 8.1,2 5.74,2 C3.38,2 1,3.55 1,6.73 C1,8.84 2.67,10.44 2.67,10.44 L10,18 L17.33,10.44 C17.33,10.44 19,8.84 19,6.73 C19,3.55 16.62,2 14.26,2 C11.9,2 10,4 10,4 L10,4 Z">--}}
{{--                        </path>--}}
{{--                    </svg>--}}
{{--                </a>--}}
{{--                Copyright &copy; 2021--}}
{{--            </div>--}}
{{--        </div>--}}
{{--    </section>--}}
{{--</footer>--}}
