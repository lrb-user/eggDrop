$(document).ready(function(){
    // ham_pan
    let h_pan = document.getElementsByClassName('h_pan')[0];
    let h_pan_con = document.getElementsByClassName('h_pan_content')[0];
    let h_pan_back = document.getElementsByClassName('h_pan_back')[0];
    let wrap = document.getElementsByClassName('wrap')[0];
    let line_top = document.getElementsByClassName('h_line_top')[0];
    let line_mid = document.getElementsByClassName('h_line_mid')[0];
    let line_bot = document.getElementsByClassName('h_line_bot')[0];
    let h_pan_chk = true;

    $(window).resize(function(){
        if($(window).width() >= 768){
            console.log(h_pan_chk)
            h_pan_back.style.display = 'none'
        }
        else if(h_pan_chk == false){
            h_pan_back.style.display = 'block'
        }
    })

    h_pan.addEventListener('click',function(){
        if(h_pan_chk){
            console.log('참');
            h_pan_chk = false;
            h_pan_con.style.transform = 'translateX(0)'
            h_pan_back.style.display = 'block'
            // wrap.style.height = '100vh'

            line_top.style.transform= 'translateY(10px)'
            line_bot.style.transform = 'translateY(-10px)'
            setTimeout(function(){
                line_mid.style.scale ='0'
                line_top.style.transform ='translateY(10px) rotate(45deg)'
                line_bot.style.transform ='translateY(-10px) rotate(-45deg)'
            },500)
        }
        else if(h_pan_chk == false){
            console.log('거짓')
            h_pan_chk = true;
            h_pan_con.style.transform = 'translateX(100%)'
            h_pan_back.style.display = 'none'
            // wrap.style.height = 'auto'

            line_top.style.transform = 'translateY(12px) rotate(0)'
            line_bot.style.transform = 'translateY(-12px) rotate(0)'
            setTimeout(function(){
                line_top.style.transform = 'translateY(0)'
                line_bot.style.transform = 'translateY(0)'
                line_mid.style.scale ='1'
            },500)
        }
    })
    
})