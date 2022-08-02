//Método noConflict é usado quando trabalho com varios frameworks e é utilizado justamente pra evitar conflitos, como o proprio nome já diz. 

$.noConflict();//chamando o método(posso também criar uma variavel pra guardar o método e utiliza-la normal mente.Ex: var jq = $.noConflict();).
//Utiizando nesse caso JQuery ao invés de usar o $.
jQuery(function () {
    jQuery('button').on('click', function () {
        jQuery('p').text('Texto gerado ao clicar no botão');
    })
});