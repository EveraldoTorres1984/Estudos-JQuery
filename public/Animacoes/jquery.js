$(function () {

    /*  $("#botaoHide").on('click', function () {
         $(".blue").hide(2000, function () {
             alert('Terminou de esconder'); //fazendo um callback após executar a função.
         });
     });
     $("#botaoShow").on('click', function () {
         $(".blue").show(2000);
     }); */

    /*  //Outras opções são: toggle, fadeOut, fadeIn, fadeToggle
     $("#botaoHide").on('click', function(){
         $('.blue').fadeOut(1000);
     });
     $("#botaoShow").on('click', function(){
         $('.blue').fadeIn(1000);
     }); */

    /*  //Usando o feito Flip(também te a opção do slide Toggle)
     $('#flip').on('click', function(){
         $('#panel').slideToggle(1000);
     });     */


    /*  //Animação de um elemento(pouco usado).
    $('.red').on('click', function(){
        $('.red').animate({left: '250px'});
    });
 */

    $('.red').on('click', function () {
        $(this).css('background-color', 'blue').slideUp(2000).slideDown(2000);
    })
});