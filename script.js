$(function(){
    //住所・番号・Eメール ボタン
    $('.add_btn').on('click',function(){
        $('.add').toggleClass('hide');
    })
    $('.num_btn').on('click',function(){
        $('.num').toggleClass('hide');
    })
    $('.email_btn').on('click',function(){
        $('.email').toggleClass('hide');
    })



    //Q＆A
    $('.question').on('click',function(){
        $(this).next().slideToggle();
        $(this).toggleClass('on');
    })

    //メンバー紹介 
    $('#intro_btn').on('click',function(){
        $('.toggle_menu dd').slideToggle();
    })

    

    //TOPへ戻る　ボタン
    $('.goto_top_btn').on('click',function(){
        $('html,body').animate({'scrollTop':0},500);
    })
    
})
