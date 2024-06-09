$(document).ready(function(){
    // copy클릭이벤트
    let copy_box = document.getElementsByClassName('copy_box')[0];
    
    copy_box.addEventListener('click',function(){
        console.log('확인')
        alert('URL이 복사되었습니다. Crtl + V 를 눌러 붙여넣기 하세요.');
    })

    // indi클릭
    
    $('.indi').click(function(){
        indi_init();
        $('.img_item_box img').eq($(this).index()).css({
            left:'100%',
        }).animate({
            left:'0%'
        },1000)    

        $('.img_item_box img').eq($('.indi_active').index()).animate({
            left:'-100%'
        },1000);
       

        $('.indi').removeClass('indi_active');
        $('.indi').eq($(this).index()).addClass('indi_active');
    })

    function indi_init(){
        $('.indi').css({
            pointerEvents:'none'
        })
        setTimeout(function(){
            $(".indi").css({
                pointerEvents:'auto'
            })
        },1000)
    }

    // gauge
    let gauge_interval = "";
    gauge_interval = setInterval(function(){
        $('.gauge_1 .gauge_bar').css({
            left:'-100%'
        }).animate({
            left:0
        },2000)

        $('.box_img_1').animate({
            left:'2700%'
        },2000)

        setTimeout(function(){
            $('.box_img_1').animate({
                left:0
            },0)
            $('.box_img_2').animate({
                left:'2700%'
            },0)
        },2990)
        
        setTimeout(function(){
            $('.box_img_2').animate({
                left:'4200%'
            },1000)
            $('.gauge_2 .gauge_bar').css({
                left:'-100%'
            }).animate({
                left:'0'
            },1000)
        },2000)
        setTimeout(function(){
            $(".gauge_2 .gauge_bar").animate({
                left:'-100%'
            },0)
        },2000)
        
    },3000)


    // 신선한 재료 한칸 슬라이드
    let with_item_width = $('.with_items_box div').outerWidth();
    let with_item_count = $('.with_items_box div').length;
    let with_index = 1;
    let with_interval = ""
    function with_auto(){
        with_interval = setInterval(function(){
            $('.with_btn_R').trigger('click')
        },2000)
    }
    with_auto();
    setTimeout(function(){
        for(let i = 0; i < with_item_count; i++){
            if($(window).width() <= 1200){
                if(i == 0){
                    $('.with_items_box div').eq(i).css({
                        left:(with_item_width * i)
                    })
                }
                else if(i != 0){
                    $('.with_items_box div').eq(i).css({
                        left:((with_item_width + 20) * i)
                    })
                }
            }
            else{
                if(i == 0){
                    $('.with_items_box div').eq(i).css({
                        left:(with_item_width * i)
                    })
                }
                else if(i !=0){
                    $('.with_items_box div').eq(i).css({
                        left:((with_item_width + 40) *i)
                    })
                }
            }
        }
    },100)

    $(window).resize(function(){
        clearInterval(with_interval);
        $('.with_items_box div').stop();
        with_item_width = $('.with_items_box div').outerWidth();
        setTimeout(function(){
            for(let i = 0; i<with_item_count; i++){
                if($(window).width() <= 1200){
                    if(i == 0){
                        $('.with_items_box div').eq(i).css({
                            left:(with_item_width * i)
                        })
                    }
                    else if(i != 0){
                        $('.with_items_box div').eq(i).css({
                            left:((with_item_width + 20) * i)
                        })
                    }
                }
                else{
                    if(i == 0){
                        $('.with_items_box div').eq(i).css({
                            left:(with_item_width * i)
                        })
                    }
                    else if(i !=0){
                        $('.with_items_box div').eq(i).css({
                            left:((with_item_width + 40) *i)
                        })
                    }
                }
            }
        },100)
        with_auto();
        with_index = 1;
    })
    
    
    $('.with_btn_R').click(function(){
        with_btn_init();
        if($(window).width() <= 1200){
            $('.with_items_box div').animate({
                left:'-='+(with_item_width+20)
            },1000)
            $('.with_items_box div').eq((with_index-1) % with_item_count).animate({
                left:(with_item_width+20) *(with_item_count -1) 
            },0)
        }
        else{
            $('.with_items_box div').animate({
                left:'-='+(with_item_width+40)
            },1000)
            $('.with_items_box div').eq((with_index-1) % with_item_count).animate({
                left:(with_item_width+40) *(with_item_count -1) 
            },0)
        }
        with_index++;
    })

    $('.with_btn_L').click(function(){
        with_btn_init();
        with_index--;
        if($(window).width() <= 1200){
            $('.with_items_box div').eq((with_index -1) % with_item_count).css({
                left:-(with_item_width+20)
            })
            $('.with_items_box div').animate({
                left:'+='+(with_item_width+20)
            })
        }
        else{
            $('.with_items_box div').eq((with_index -1) % with_item_count).css({
                left:-(with_item_width+40)
            })
            $('.with_items_box div').animate({
                left:'+='+(with_item_width+40)
            })
        }
    })
    

    $('.with_items_box, .with_btn').mouseenter(function(){
        clearInterval(with_interval);
    })
    $('.with_items_box,.with_btn').mouseleave(function(){
        with_auto();
    })
    
    function with_btn_init(){
        $('.with_btn').css({
            pointerEvents:'none'
        })
        setTimeout(function(){
            $('.with_btn').css({
                pointerEvents:'auto'
            })
        },1000)
    }

    // 영양성분 클릭
    $('.nutrient_btn_box p').click(function(){
        console.log('영양성분')
        $('.nutrient_pan').css({
            display:'block'
        })
        $('.nut_back_pan').css({
            display:'block',
            pointerEvents:'auto',
        })
        $('.wrap').css({
            height:'100vh'
        })
    })
    $('.nut_h_R').click(function(){
        console.log('hh')
        $('.nutrient_pan').css({
            display:'none'
        })
        $('.nut_back_pan').css({
            display:'none',
            pointerEvents:'none'
        })
        $('.wrap').css({
            height:'auto'
        })
    })



    // 샌드위치 다른 메뉴 한칸 슬라이드
    let ano_item_width = $('.another_item').outerWidth();
    let ano_item_count = $('.another_item').length;
    console.log(ano_item_count)
    let ano_interval = "";
    let ano_index = 1;

    setTimeout(function(){
        for(let i = 0; i < ano_item_count; i++){
            if(i==0){
                $('.another_item').eq(i).css({
                    left:ano_item_width * i
                })
            }
            else if(i !=0){
                $('.another_item').eq(i).css({
                    left:ano_item_width * i
                })
            }
        }
    },100)

    function ano_auto(){
        ano_interval = setInterval(function(){
            $('.another_item').animate({
                left:'-='+ano_item_width
            },2000,'linear');
            $('.another_item').eq((ano_index - 1) % ano_item_count).animate({
                left:ano_item_width * (ano_item_count - 1)
            },0)

            ano_index++;
        },2000);
    }
    ano_auto();

    $(window).resize(function(){
        clearInterval(ano_interval);
        $('.another_item').stop();
        ano_item_width = $('.another_item').outerWidth();
        setTimeout(function(){
            for(let i = 0; i < ano_item_count; i++){
                if(i==0){
                    $('.another_item').eq(i).css({
                        left:ano_item_width * i
                    })
                }
                else if(i !=0){
                    $('.another_item').eq(i).css({
                        left:ano_item_width * i
                    })
                }
            }
        },100)
        ano_index = 1;
        ano_auto();
        
    })

})