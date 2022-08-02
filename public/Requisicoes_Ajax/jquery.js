$(function () {

    //Usando o método load
    $('#botao').on('click', function () {
        $('#teste').load('teste.txt');
    });

    
    $('#cep').on('blur', function () {
        var valor = $(this).val();
        
        //Metodo AJAX(Método mais cumprido)            
        $.ajax({
            method: "GET",
            url: 'http://viacep.com.br/ws/' + valor + '/json/',
            success: function (dados, status) {
                $('#bairro').val(dados.bairro);
                $('#cidade').val(dados.localidade);
                $('#uf').val(dados.uf);
            },
            error: function () {
                alert("Deu Erro");
            }    
    
        });
        //Metodo GET(Método mais curto)
       /*  $.get('http://viacep.com.br/ws/' + valor + '/json/', function (dados, status) {
            $('#bairro').val(dados.bairro);
            $('#cidade').val(dados.localidade);
            $('#uf').val(dados.uf);
        }); */
    });

    
    

});