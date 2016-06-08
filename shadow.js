$(function(){
    var modal = '<div class="shadow">'+
        '<a href="#" class="close-box">X</a>'+
        '<div class="imagem"></div>'+
        '</div>';
    $('body').append(modal);


    function openModal(imagem, title){

        $('.shadow .imagem').html('<img src="'+imagem+'" /><div class="title">'+title+'</div>');

        $('.shadow').fadeIn();
    }

    $('.shadowBox').on('click', function(e){
        e.preventDefault();
        var imagem = $(this).attr('href');
        var title = $(this).attr('title');
        openModal(imagem, title);
        return false;
    });

    $('.close-box').on('click', function(e){
        e.preventDefault();

        $('.shadow').fadeOut();
        return false;
    });
});