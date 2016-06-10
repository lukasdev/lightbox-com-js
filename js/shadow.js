$(function(){
    var modal = '<div class="shadow">'+
        '<a href="#" class="close-box">X</a>'+
        '<div class="imagem"></div>'+
        '</div>';
    $('body').append(modal);


    function openModal(imagem, title, effect){

        $('.shadow .imagem').html('<img src="'+imagem+'" /><div class="title">'+title+'</div>');

        if(effect == 'show'){
            $('.shadow').show();
        }else if(effect == 'fadeIn'){
            $('.shadow').fadeIn();
        }
    }


    $('.shadowBox').on('click', function(e){
        e.preventDefault();
        var imagem = $(this).attr('href');
        var title  = $(this).attr('title');
        var effect = $(this).attr('data-effect');
        openModal(imagem, title, effect);
        return false;
    });

    $('.close-box').on('click', function(e){
        e.preventDefault();

        $('.shadow').fadeOut();
        return false;
    });

    $('body').on('click', '.shadow', function(){
        e.preventDefault();

        $('.shadow').fadeOut();
        return false;
    });
});