<script src="{{ asset('dashboard/js/inputmask.min.js') }}"></script>
<script>
    let selector = document.getElementById("price");

    let im = new Inputmask('decimal', { rightAlign: false, groupSeparator: " " });

    im.mask(selector);
</script>
