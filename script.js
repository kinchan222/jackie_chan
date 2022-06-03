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



    

    //TOPへ戻る　ボタン
    $('.goto_top_btn').on('click',function(){
        $('html,body').animete({'scrollTop':0},500);
    })
    
})
