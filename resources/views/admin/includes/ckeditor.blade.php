<script src="{{ asset('dashboard/ckeditor/ckeditor.js') }}"></script>
<script type="text/javascript">

    // CKEDITOR.replace('description', {
    //     filebrowserBrowseUrl:filemanager.ckBrowseUrl;
    // });
    {{--var editor = CKEDITOR.replace('description', {--}}
    {{--    --}}{{--filebrowserBrowseUrl: "{{ asset('dashboard/ck/ckfinder/ckfinder.html?Type=Files') }}",--}}
    {{--    --}}{{--filebrowserImageBrowseUrl: "{{ asset('dashboard/ck/ckfinder/ckfinder.html?Type=Images') }}",--}}
    {{--    --}}{{--filebrowserFlashBrowseUrl: "{{ asset('dashboard/ck/ckfinder/ckfinder.html?Type=Flash') }}",--}}
    {{--    --}}{{--filebrowserUploadUrl: "{{ asset('dashboard/ck/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Files') }}",--}}
    {{--    --}}{{--filebrowserImageUploadUrl: "{{ asset('dashboard/ck/ckfinder/core/connctor/php/connector.php?command=QuickUpload&type=Images') }}",--}}
    {{--    --}}{{--filebrowserFlashUploadUrl: "{{ asset('dashboard/ck/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Flash') }}"--}}
    {{--});--}}
    {{--CKFinder.setupCKEditor(editor);--}}
    @foreach(array_keys(Config::get('app.languages')) as $key)
    CKEDITOR.replace('description[{{ $key }}]', {
        defaultLanguage: "en",
        filebrowserUploadUrl: "{{route('upload', ['_token' => csrf_token() ])}}",
        filebrowserUploadMethod: 'form'
    });
    @endforeach
</script>
