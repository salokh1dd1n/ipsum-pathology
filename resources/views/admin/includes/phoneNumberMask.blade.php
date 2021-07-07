<script src="{{ asset('dashboard/coreui/js/inputmask.min.js') }}"></script>
<script>
    let selector = document.getElementById("phone_number");

    let im = new Inputmask("+999 (99) 999-99-99");

    im.mask(selector);
</script>
