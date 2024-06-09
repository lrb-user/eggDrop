$(document).ready(function(){
    // main_banner
    let mb_index = 1;
    let mb_count = $(".main_bn").length;
    let mb_timer = 1000;
    let mb_interval = "";
    let auto_mb_interval="";

    $('.indi_btn_L').click(function(){
        mb_btn_init();
        mb_index--;
        $('.main_bn').eq((mb_index) % mb_count).animate({
            left:'100%'
        },mb_timer);
        $('.main_bn').eq((mb_index -1) % mb_count).css({
            left:'-100%'
        }).animate({
            left:0
        },mb_timer);

        $('.indi').removeClass('indi_active');
        $('.indi').eq((mb_index -1) % mb_count).addClass('indi_active');
    })

    $('.indi_btn_R').click(function(){
        mb_btn_init();
        $('.main_bn').eq((mb_index-1) % mb_count).animate({
            left:'-100%'
        },mb_timer);
        $('.main_bn').eq(mb_index % mb_count).css({
            left:'100%'
        }).animate({
            left:0
        },mb_timer);

        $('.indi').removeClass('indi_active');
        $('.indi').eq(mb_index % mb_count).addClass('indi_active');
        mb_index++;
    })

    $('.indi').click(function(){
        mb_btn_init();
        $('.main_bn').eq($(this).index()).css({
            left:'100%'
        }).animate({
            left:0
        },mb_timer);

        $('.main_bn').eq($('.indi_active').index()).animate({
            left:'-100%'
        },mb_timer);

        $('.indi').removeClass('indi_active');
        $('.indi').eq($(this).index()).addClass('indi_active');

        mb_index = $(this).index()+1;
    })

    $('.indi_box').mouseenter(function(){
        console.log('dd')
        clearInterval(auto_mb_interval);
    })
    $('.indi_box').mouseleave(function(){
        mb_auto_slide();
    })

    function mb_btn_init(){
        $('.indi_btn').css({
            pointerEvents:'none'
        })
        setTimeout(function(){
            $('.indi_btn').css({
                pointerEvents:'auto'
            })
        },mb_timer);
    }

    function mb_auto_slide(){
        clearInterval(auto_mb_interval);
        auto_mb_interval = setInterval(function(){
            $(".indi_btn_R").trigger('click');
        },mb_timer*3);
    }
    mb_auto_slide();
    
    // category_section
    let cate_item_width = $('.cate_item_active li').outerWidth();
    let cate_item_count = $('.cate_item_active li').length;
    console.log($(window).width())
    let cate_index = 1;
    console.log(cate_item_width)

    setTimeout(function(){

        for(let i = 0; i < cate_item_count; i++){
            
            if($(window).width() <= 500){
                for(let i = 0; i < cate_item_count; i++){
                    if(i == 0){
                        $('.cate_item_active li').eq(i).css({
                            left:(cate_item_width * i) +10
                        })
                    }
                    else if(i != 0){
                        $('.cate_item_active li').eq(i).css({
                            left:((cate_item_width+25) * i)+10
                        })
                    }
                }
            }

            else if(i == 0){
                $('.cate_item_active li').eq(i).css({
                    left:cate_item_width * i
                })
            }
            else if(i != 0){
                if($(window).width() <= 768){
                    $('.cate_item_active li').eq(i).css({
                        left:(cate_item_width+20) * i
                    })
                }
                else{
                    $('.cate_item_active li').eq(i).css({
                        left:(cate_item_width+25) * i
                    })
                }
            }
        }
    },100)


    $(window).resize(function(){
        cate_item_width = $('.cate_item_active li').outerWidth();

        if($(window).width() <= 500){
            setTimeout(function(){
                for(let i = 0; i < cate_item_count; i++){
                    if(i == 0){
                        $('.cate_item_active li').eq(i).css({
                            left:(cate_item_width * i) +10
                        })
                    }
                    else if(i != 0){
                        $('.cate_item_active li').eq(i).css({
                            left:((cate_item_width+25) * i)+10
                        })
                    }
                }  
            },100)
        }
        else{
            setTimeout(function(){
                for(let i = 0; i < cate_item_count; i++){
                    if(i == 0){
                        $('.cate_item_active li').eq(i).css({
                            left:cate_item_width * i
                        })
                    }
                    else if(i != 0){
                        if($(window).width() <= 768){
                            $('.cate_item_active li').eq(i).css({
                                left:(cate_item_width+20) * i
                            })
                        }
                        else{
                            $('.cate_item_active li').eq(i).css({
                                left:(cate_item_width+25) * i
                            })
                        }
                    }
                }
            },100)
        }
        cate_index = 1;
        $('#cate_num').text(cate_index);
        $('#cate_count').text('/'+cate_item_count);
    })

    // $('.cate_btn_box').append(
    //     `<div class="cate_btn_item">
    //         <div class="cate_btn cate_btn_L">《</div>
    //         <span class=cate_num>1</span>/6 
    //         <div class="cate_btn cate_btn_R">》</div>
    //     </div>`
    // )

    $(document).on('click','.cate_btn_R',function(){
        console.log(cate_index)
        cate_btn_init();
        if(cate_index == 6){
            cate_index=0;
        }
       
        $('.cate_item_active li').animate({
            left:'-='+(cate_item_width+25)
        },1000)
        if($(window).width() <=500){
            $('.cate_item_active li').eq((cate_index -1) % cate_item_count).animate({
                left:((cate_item_width+25) * (cate_item_count -1))+10
            },0) 
        }
        else{
            $('.cate_item_active li').eq((cate_index -1) % cate_item_count).animate({
                left:(cate_item_width+25) * (cate_item_count -1)
            },0)
        }

        // $('.cate_btn_box').detach();

        // $('.cate_item_ul_box').append(
        //     `<div class="cate_btn_box">
        //     <div class="cate_btn_item">
        //         <div class="cate_btn cate_btn_L">《</div>
        //         <span class=cate_num>${cate_index+1}</span>/${cate_item_count} 
        //         <div class="cate_btn cate_btn_R">》</div>
        //     </div>
        //     </div>`
        // )
        
        $('#cate_num').text(cate_index+1);
        $('#cate_count').text('/'+cate_item_count);
        cate_index++;
    })

    $(document).on('click','.cate_btn_L',function(){
        cate_btn_init();
        cate_index--;
        if(cate_index == 0){
            cate_index = cate_item_count;
        }
        
        if($(window).width() <=500){
            $('.cate_item_active li').eq((cate_index -1) % cate_item_count).animate({
                left:-(cate_item_width+25)+10
            },0)
        }
        else{
            $('.cate_item_active li').eq((cate_index -1) % cate_item_count).animate({
                left:-(cate_item_width+25)
            },0)
        }
        $('.cate_item_active li').animate({
            left:'+='+(cate_item_width+25)
        },1000)
        // $('.cate_btn_box').detach();

        // $('.cate_item_ul_box').append(
        //     `<div class="cate_btn_box">
        //     <div class="cate_btn_item">
        //         <div class="cate_btn cate_btn_L">《</div>
        //         <span class="cate_num">${cate_index}</span>/${cate_item_count} 
        //         <div class="cate_btn cate_btn_R">》</div>
        //     </div>
        //     </div>`
        // )
        $('#cate_num').text(cate_index);
        $('#cate_count').text('/'+cate_item_count);
        console.log(cate_index)
    })

    function cate_btn_init(){
        $('.cate_btn').css({
            pointerEvents:'none'
        })
        setTimeout(function(){
            $('.cate_btn').css({
                pointerEvents:'auto'
            })
        },1000)
    }

    $('.cate_title').click(function(){
        cate_index = 1;
        $('#cate_num').text(cate_index);
        $('#cate_count').text('/'+cate_item_count);
        // $('#cate_num').text('/'+cate_item_count);

        cate_item_width = $('.cate_item_active li').outerWidth();
        setTimeout(function(){
        if($(window).width() <= 500){
            for(let i = 0; i < cate_item_count; i++){
                if(i == 0){
                    $('.cate_item_active li').eq(i).css({
                        left:(cate_item_width * i) +10
                    })
                }
                else if(i != 0){
                    $('.cate_item_active li').eq(i).css({
                        left:((cate_item_width+25) * i)+10
                    })
                }
            }
        }
        else{
            setTimeout(function(){
                for(let i = 0; i < cate_item_count; i++){
                    if(i == 0){
                        $('.cate_item_active li').eq(i).css({
                            left:cate_item_width * i
                        })
                    }
                    else if(i != 0){
                        if($(window).width() <= 768){
                            $('.cate_item_active li').eq(i).css({
                                left:(cate_item_width+20) * i
                            })
                        }
                        else{
                            $('.cate_item_active li').eq(i).css({
                                left:(cate_item_width+25) * i
                            })
                        }
                    }
                }
            },100)
        }
        },10)

        $('.cate_title').removeClass('cate_title_active');
        $('.cate_title').eq($(this).index()).addClass('cate_title_active');

        $('.cate_item_ul').removeClass('cate_item_active');
        $('.cate_item_ul').eq($(this).index()).addClass('cate_item_active');
    })

    // $('.cate_btn_R').click(function(){
    //     console.log('hh')

    //     $('.cate_item_active li').animate({
    //         left:'-='+(cate_item_width+25)
    //     },1000)

    //     $('.cate_item_active li').eq((cate_index -1) % cate_item_count).animate({
    //         left:(cate_item_width+25) * (cate_item_count -1)
    //     },0)

    //     $('.cate_btn_box').detach();

    //     for(let i = 0; i < 1; i++){
    //         $('.cate_item_ul_box').append(
    //             `<div class="cate_btn_box">
    //             <div class="cate_btn_item">
    //                 <div class="cate_btn cate_btn_L">《</div>
    //                 <span class=cate_num>${cate_index+1}</span>/6 
    //                 <div class="cate_btn cate_btn_R">》</div>
    //             </div>
    //             </div>`
    //         )
    //     }
    //     cate_index++;
    // })  
    
    // $('.cate_btn_R').click(function(){
    //     console.log("khh")
    // })
    
    $('.cate_item_ul li').mouseenter(function(){
        console.log('ul확인')
        $('.cate_item_active a').eq($(this).index()).css({
            transform:'translateY(-50px)',
            // transition:'all 0.3s'
        })
        $('.cate_item_active .cate_item_title').eq($(this).index()).css({
            transform:'translateY(-18px)'
        })
        $('.cate_item_active .cate_img_img').eq($(this).index()).css({
            transform:'translateY(0)'
        })
    })
    $('.cate_item_ul li').mouseleave(function(){
        $('.cate_item_active a').css({
            transform: 'translateY(0)'
        })
        $('.cate_item_active .cate_item_title').css({
            transform:'translateY(10%)'
        })
        $('.cate_item_active .cate_img_img').css({
            transform:'translateY(45%)'
        })
    })

    // best_section
    $('.best_indi').click(function(){
        
        $('.best_item').removeClass('best_item_active');
        $('.best_item').eq($(this).index()).addClass('best_item_active');
    })

    $('.s_best_indi').click(function(){
        $('.best_item').removeClass('best_item_active');
        $('.best_item').eq($(this).index()).addClass('best_item_active');

        $('.s_best_indi').removeClass('best_indi_active');
        $('.s_best_indi').eq($(this).index()).addClass('best_indi_active');
    })
    
    let best_interval = "";
    let best_rotate_timer = 10;
    let best = Number(1);
    best_interval = setInterval(function(){
        // clearInterval(best_interval)
        $('.best_rotate_item img').css({
            transform:`rotate(${best}deg)`
        })
        best++;
        
        if(best == 360){
            best=1;
        }
    
    },20)


    // brand_story_section
    let half= $(window).height() / 2;
    let brand_o_top = $('.brand_story_box').offset().top - half;
    let brand_o_bot = $('.brand_story_box').height()+brand_o_top;
    $(window).scroll(function(){
        let s_top = $(window).scrollTop();
        console.log($(window).width())
        $(window).resize(function(){
            // 이 2개 리셋 안해주면 resize할때 최초에 적용해줬던거 적용 안되고 이상하게 됨..
            half= $(window).height() / 2;
            brand_o_top = $('.brand_story_box').offset().top - half;
            
            // brand_o_bot = $('.brand_story_box').height()+brand_o_top;
            if(s_top >= brand_o_top){
                $('.brand_title').css({
                    transform:'translateY(0)'
                })
                $('.brand_item_L').css({
                    transform:'translateX(0)'
                })
                if($(window).width() <= 768){
                    $('.brand_item_txt_box').css({
                        transform:'translateY(0)'
                    })
                }
                else{
                    $('.brand_item_txt_box').css({
                        transform:'translateY(-50%)'
                    })
                }
            }
            else if(s_top <= brand_o_bot){
                $('.brand_title').css({
                    transform:'translateY(100%)'
                })
                $('.brand_item_L').css({
                    transform:'translateX(-100%)'
                })
                $('.brand_item_txt_box').css({
                    transform:'translateY(-20%)'
                })
            }
        })
        // console.log(half)
        
     
        if(s_top >= brand_o_top){
            $('.brand_title').css({
                transform:'translateY(0)'
            })
            $('.brand_item_L').css({
                transform:'translateX(0)'
            })
            if($(window).width() <= 768){
                $('.brand_item_txt_box').css({
                    transform:'translateY(0)'
                })
            }
            else{
                $('.brand_item_txt_box').css({
                    transform:'translateY(-50%)'
                })
            }
        }
        else if(s_top <= brand_o_bot){
            $('.brand_title').css({
                transform:'translateY(100%)'
            })
            $('.brand_item_L').css({
                transform:'translateX(-100%)'
            })
            $('.brand_item_txt_box').css({
                transform:'translateY(-20%)'
            })
        }
    })

    // notice_section
    let notice_item_width = $('.notice_R_item').outerWidth();
    let notice_item_count = $('.notice_R_item').length;
    let notice_item_index = 1;
    let notice_timer = 1000;
    let notice_interval = "";

    setTimeout(function(){
        for(let i = 0; i < notice_item_count; i++){
            if(i == 0){
                $('.notice_R_item').eq(i).css({
                    left:(notice_item_width * i) +30
                })
            }
            else{
               $('.notice_R_item').eq(i).css({
                left:((notice_item_width+20) * i) +30
               }) 
            }
        }
    },100)

    $(window).resize(function(){
        clearInterval(notice_interval);
        $('.notice_R_item').stop();

        notice_item_width = $('.notice_R_item').outerWidth();

        setTimeout(function(){
            for(let i = 0; i < notice_item_count; i++){
                if(i == 0){
                    $('.notice_R_item').eq(i).css({
                        left:(notice_item_width * i) +30
                    })
                }
                else{
                   $('.notice_R_item').eq(i).css({
                    left:((notice_item_width+20) * i) +30
                   }) 
                }
            }
        },100)
        notice_item_index = 1;
        notice_auto();
    })
    $('.notice_btn_R').click(function(){
        // $('.notice_R_item').stop();
        notice_init();
        $('.notice_R_item').animate({
            left:'-='+(notice_item_width+20)
        },notice_timer);
        $('.notice_R_item').eq((notice_item_index -1) % notice_item_count).animate({
            left:((notice_item_width+20) * (notice_item_count -1))+30
        },0)
        notice_item_index++;
    })

    $('.notice_btn_L').click(function(){
        // $(".notice_R_item").stop();
        notice_init();
        notice_item_index--;
        $('.notice_R_item').eq((notice_item_index -1) % notice_item_count).animate({
            left:(-(notice_item_width+20))+30
        },0)
        $('.notice_R_item').animate({
            left:'+='+(notice_item_width+20)
        },notice_timer);
    })

    $('.notice_btn').mouseenter(function(){
        clearInterval(notice_interval);
    })
    $('.notice_btn').mouseleave(function(){
        notice_auto();
    })

    function notice_init(){
        $('.notice_btn').css({
            pointerEvents:'none'
        })
        setTimeout(function(){
            $('.notice_btn').css({
                pointerEvents:'auto'
            })
        },notice_timer);
    }

    function notice_auto(){
        clearInterval(notice_interval);
        notice_interval = setInterval(function(){
            $('.notice_btn_R').trigger('click')
        },notice_timer*2);
    }
    notice_auto();
})