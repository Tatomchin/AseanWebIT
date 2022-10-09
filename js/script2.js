window.onscroll = function () {asean_1(),asean_2(),hideMenu()};

function hideMenu(){
    let screeenW = screen.width;
    let screeenH = screen.height;
    let curentPosition = 0;
    let position = document.documentElement.scrollTop;
                 
    document.getElementsByClassName('BG_headMenu')[1].style.opacity = 1 - position/100;
    if (position > 100) {
        document.getElementsByClassName('BG_headMenu')[0].style.visibility = "hidden";
        document.getElementsByClassName('BG_headMenu')[1].style.visibility = "hidden";
        document.getElementById('Menu').style.visibility = "hidden";

    }

    else{
        document.getElementsByClassName('BG_headMenu')[0].style.visibility = "visible";
        document.getElementsByClassName('BG_headMenu')[1].style.visibility = "visible";
        document.getElementById('Menu').style.visibility = "visible";
    }

    //Hide botton BackToTop

    if(position > 300){
        document.getElementById('backToTop').style.visibility = "visible";
    }
    else{
        document.getElementById('backToTop').style.visibility = "hidden";
    }


}
        function asean_2(){
            let position = document.documentElement.scrollTop;
            var con1 = document.getElementById("content-as-1");
            con1.style.animation = "zoom1 0.6s linear forwards";
        }
        function asean_1() {
            let position = document.documentElement.scrollTop;
            var con1 = document.getElementById("content-as-1");
            var con2 = document.getElementById("content-as-2");
            var con3 = document.getElementById("content-as-3");
            var con4 = document.getElementById("content-as-4");
            var con5 = document.getElementById("content-as-5");
            var con6 = document.getElementById("content-as-6");
            var con7 = document.getElementById("content-as-7");
            var con8 = document.getElementById("content-as-8");
            var con9 = document.getElementById("content-as-9");
            var con10 = document.getElementById("content-as-10");
            if(position >= 300){
                con2.style.animation = "zoom1 0.6s linear forwards";
            }if(position >= 680){
                con3.style.animation = "zoom1 0.6s linear forwards";
            }if(position >= 1100){
                con4.style.animation = "zoom1 0.6s linear forwards";
            }if(position >= 1500){
                con5.style.animation = "zoom1 0.6s linear forwards";
            }if(position >= 2500){
                con6.style.animation = "zoom1 0.6s linear forwards";
            }if(position >= 3150){
                con7.style.animation = "zoom1 0.6s linear forwards";
            }if(position >= 3300){
                con8.style.animation = "zoom1 0.6s linear forwards";
            }if(position >= 3600){
                con9.style.animation = "zoom1 0.6s linear forwards";
            }if(position >= 3900){
                con10.style.animation = "zoom1 0.6s linear forwards";
            }
            
        }
