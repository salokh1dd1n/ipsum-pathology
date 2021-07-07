<div class="modal fade" id="deleteNewsItem{{ $id }}" tabindex="-1"
     role="dialog"
     aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-danger" role="document">
        <form action="{{ route($route.'.destroy', $id) }}" method="POST">
            @method('DELETE')
            @csrf
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Удаление</h5>
                    <button class="close" type="button" data-dismiss="modal"
                            aria-label="Close">
                        <span aria-hidden="true">×</span></button>
                </div>
                <div class="modal-body text-center">
                    <h5>Вы уверены, что хотите удалить эту запись</h5>
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
