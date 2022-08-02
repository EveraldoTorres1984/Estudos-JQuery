$(function () {

    /* //pegando um valor de input
    $('#texto').on('blur', function(){
        var valor = $(this).val();
        alert('Foi digitado: ' + valor);
    }); */

    /* //fazendo uma verificação para qual endereço o link vai
    $("#botao").on('click', function () {
        var link = $('#link').attr("href");
        alert('O link vai para: ' + link);
    }); */


    $('#botao1').on('click', function () {
        $('h1').text('H1 modificado com JQuery');
    });
    $('#botao2').on('click', function () {
        $('h2').html('<strong>H2 modificado</strong> <i>com JQuery</i>');
    });
    $('#botao3').on('click', function () {
        $('#texto').val("Everaldo Torres");
    });
    $('#botao4').on('click', function () {
        $('#link').text('Ir para programação web');
        $('#link').attr('href', 'https://programacaoweb.com.br');
    });
    $('#botao5').on('click', function () {
        $('img').attr('src', 'https://vocerh.abril.com.br/wp-content/uploads/2021/03/mitchell-luo-jz4ca36oJ_M-unsplash.jpg?quality=70&strip=info&resize=850,567');
    });
    $('#botao6').on('click', function () {
        $('h1').remove();
    });
    $('#botao7').on('click', function () {
        $('#teste').empty();
    });
    $('#botao8').on('click', function () {
        $('#link').addClass('red');
    });
    $('#botao9').on('click', function () {
        var larguraImg = $('img').width();
        alert("A largura é: " + larguraImg + ' px'); 
    });
});