$(function () {
    $('#busca').on('keyup', function () {
        var valor = $(this).val().toLowerCase();

        $('#minhaTabela tr').filter(function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(valor) > -1);
        });
    });
});