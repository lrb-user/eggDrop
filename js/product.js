$(document).ready(function(){
    // best_slide
    let best_slide_index = 1;
    let best_slide_interval = "";
    let best_slide_timer = 1000;
    let best_count = $('.best_slide_R p').length;

    function best_auto(){
        best_slide_interval = setInterval(function(){
            // 나가는 방
            $('.best_slide_R p').eq((best_slide_index - 1) % best_count).animate({
                top:'-120%'
            },best_slide_timer);

            // 들어오는 방
            $('.best_slide_R p').eq(best_slide_index % best_count).css({
                top:'100%'
            }).animate({
                top:0
            },best_slide_timer);
            best_slide_index++;
        },best_slide_timer*2);
    }
    best_auto();

    // banner
    let banner_index = 1;
    let banner_count = $('.banner').length;
    let banner_timer = 2000;
    let banner_interval = "";

    $('.banner').eq(0).css({
        display:'block'
    })

    function banner_auto(){
        banner_interval = setInterval(function(){
            // 나가는판
            $('.banner').eq((banner_index - 1) % banner_count).css({zIndex:0}).delay(banner_timer -500).fadeOut(0);
            // 들어오는판
            $('.banner').eq(banner_index % banner_count).css({zIndex:9999}).fadeIn(banner_timer);
            banner_index++;
        },banner_timer*3);
    }
    banner_auto();

    // function banner_auto(){
    //     clearInterval(banenr_interval);
    //     banenr_interval = setInterval(function(){
    //         $('.banner').eq(banner_index % banner_count).css({zIndex: 99}).fadeIn(banner_timer);
    //         $('.banner').eq((banner_index -1) % banner_count).css({zIndex: 0}).delay(1000).fadeOut(0);
    //         banner_index++;
    //     },banner_timer*3);
    // }


    // banner_auto();

    // reco_item
    let reco_count = $('.reco_item_box li').length;
    let reco_width = $('.reco_item_box li').outerWidth();
    let reco_index = 1;
    let reco_timer = 700;
    let reco_interval = "";
    console.log(reco_count);
    setTimeout(function(){
        for(let i = 0; i < reco_count; i++){
            if($(window).width() <= 768){
                for(let i = 0; i < reco_count; i++){
                    if(i == 0){
                        $('.reco_item_box li').eq(i).css({
                            left:i * reco_width
                        })
                    }
                    else if(i != 0){
                        $('.reco_item_box li').eq(i).css({
                            left: i * (reco_width +15)
                        })
                    }
                }
            }
            else{
                if(i == 0){
                    $('.reco_item_box li').eq(i).css({
                        left: i * reco_width
                    })
                }
                else if(i != 0){
                    $('.reco_item_box li').eq(i).css({
                        left: i * (reco_width + 20)
                    })
                }
            }
        }
    },100)

    $(window).resize(function(){
        clearInterval(reco_interval);
        $('.reco_item_box li').stop();

        reco_width = $('.reco_item_box li').outerWidth();
        setTimeout(function(){
            for(let i = 0; i < reco_count; i++){
                if($(window).width() <= 768){
                    for(let i = 0; i < reco_count; i++){
                        if(i == 0){
                            $('.reco_item_box li').eq(i).css({
                                left:i * reco_width
                            })
                        }
                        else if(i != 0){
                            $('.reco_item_box li').eq(i).css({
                                left: i * (reco_width +15)
                            })
                        }
                    }
                }
                else{
                    if(i == 0){
                        $('.reco_item_box li').eq(i).css({
                            left:i * reco_width
                        })
                    }
                    else if(i != 0){
                        $('.reco_item_box li').eq(i).css({
                            left: i * (reco_width +20)
                        })
                    }
                }
            }
        },100)

        reco_index = 1;
        reco_auto();
    })

    function reco_auto(){
        if($(window).width() <= 768){
            reco_interval = setInterval(function(){
                $('.reco_item_box li').animate({
                    left:'-='+(reco_width+15)
                },reco_timer,"linear");
                $('.reco_item_box li').eq((reco_index -1) % reco_count).animate({
                    left:(reco_width+15) * (reco_count -1)
                },0)
                reco_index++;
            },reco_timer *2);
        }
        else{
            reco_interval = setInterval(function(){
                $('.reco_item_box li').animate({
                    left:'-='+(reco_width+20)
                },reco_timer,"linear");
                $('.reco_item_box li').eq((reco_index -1) % reco_count).animate({
                    left:(reco_width+20) * (reco_count -1)
                },0)
                reco_index++;
            },reco_timer *2);
        }
    }
    reco_auto();

    $('.reco_item_box li').mouseenter(function(){
        clearInterval(reco_interval);
    })
    $('.reco_item_box li').mouseleave(function(){
        reco_auto();
    })
    
    //eggdrop choice 3회 반복
    let item_o_top = $('.item_box').offset().top;
    let item_o_bot = item_o_top + $('.item_box').height();
    let scroll_count = 1;
    let tmp_con = "";
    let d_height = $(document).height();
    $(window).scroll(function(){
        let s_top = $(window).scrollTop();
        let s_bot = s_top + $(window).height();
        // console.log('s_top:'+s_bot+'item_o_bot:'+item_o_bot)
        if(scroll_count<=3){
            if(s_bot >= item_o_bot){
                console.log(scroll_count)
                for(let i = 0; i < 8; i++){
                    tmp_con = `
                    <li class="item_${scroll_count}">
                        <a href="index.html">
                            <div class="item_pan">
                                <div class="item_pan_txt">
                                    <p>미스터에그 세트</p>
                                    <p>MR.EGG SET</p>
                                    <p>
                                        미스터에그 + 해쉬브라운 + 아메리카노 <br>부드러운 스크램블 에그와 <br>
                                        브리오쉬, 에그드랍의 특제 소스가 <br>어우러진 샌드위치
                                    </p>
                                </div>
                            </div>
                            <img src="../eggdrop/img/product/item_list/item_txt_${i+1}.png" alt="" class="item_img_1">
                            <img src="../eggdrop/img/product/item_list/item_img_${i+1}.png" alt="" class="item_img_2">
                        </a>
                    </li>`
                    $('.item_content').append(tmp_con)
                }
                item_o_bot = item_o_top + $('.item_box').height();
                // 이거 다시 안구해주면 scroll_count가 한꺼번에 인식하여 5번이 한번에 반복됨.
                scroll_count++;
            }
        }
    }) 
})
