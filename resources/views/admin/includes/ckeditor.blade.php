<script src="{{ asset('dashboard/ckeditor/ckeditor.js') }}"></script>
<script type="text/javascript">

    @foreach(array_keys(Config::get('app.languages')) as $key)
    CKEDITOR.replace('description[{{ $key }}]', {
        defaultLanguage: "en",
        filebrowserUploadUrl: "{{route('upload', ['_token' => csrf_token() ])}}",
        filebrowserUploadMethod: 'form'
    });
    @endforeach
</script>
