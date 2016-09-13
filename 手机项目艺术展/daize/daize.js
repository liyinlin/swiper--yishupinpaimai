	var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    paginationClickable: true,
    direction: 'vertical',
    onInit:function(swiper){
        $(".tb1").css({"animation":"tb1 10s forwards"});
        $(".tb1").css({"-webkit-animation":"tb1 10s forwards"});
        $(".tb2").css({"animation":"tb2 10s forwards"});
        $(".tb2").css({"-webkit-animation":"tb2 10s forwards"});
        $(".tb3").css({"animation":"tb3 10s forwards"});
        $(".tb3").css({"-webkit-animation":"tb3 10s forwards"});
        $(".op").css({"animation":"zhuan 4s infinite linear",});
        $(".op").css({"-webkit-animation":"zhuan 4s infinite linear",});
        $(".op").css({"-moz-animation":"zhuan 4s infinite linear",});
        $(".op").css({"-ms-animation":"zhuan 4s infinite linear",});
        $(".op").css({"-o-animation":"zhuan 4s infinite linear",});
    },
    onSlideChangeStart:function(swiper){
    	if(swiper.activeIndex==0){
                $(".tb1").css({"animation":"tb1 10s forwards"});
                $(".tb1").css({"-webkit-animation":"tb1 10s forwards"});
                $(".tb2").css({"animation":"tb2 10s forwards"});
                $(".tb2").css({"-webkit-animation":"tb2 10s forwards"});
                $(".tb3").css({"animation":"tb3 10s forwards"});
                $(".tb3").css({"-webkit-animation":"tb3 10s forwards"});
        	}else{
        		$(".topa,.tb1,.tb2,.tb3").css({"animation":""});
        		$(".topa,.tb1,.tb2,.tb3").css({"-webkit-animation":""});  
	        }
            if(swiper.activeIndex==1){
            $(".center1b").css({"-webkit-animation":"center1b 2s forwards"});
            $(".center1b").css({"animation":"center1b 2s forwards"});
        }else{
            $(".center1b").css({"animation":""});
            $(".center1b").css({"-webkit-animation":""});  
        }
        if(swiper.activeIndex==2){
            $(".center2a").css({"-webkit-animation":"center2a 4s forwards linear"});
            $(".center2a").css({"animation":"center2a 4s forwards linear"});
            $(".center2b").css({"-webkit-animation":"center2b 8s forwards"});
            $(".center2b").css({"animation":"center2b 8s forwards"});
            $(".center2c").css({"-webkit-animation":"center2c 8s forwards"});
            $(".center2c").css({"animation":"center2c 8s forwards"});
        }else{
            $(".center2a,.center2b,.center2c").css({"animation":""});
            $(".center2a,.center2b,.center2c").css({"-webkit-animation":""});  
        }
        if(swiper.activeIndex==3){
            $(".center3g").css({"animation":"center3g 6s forwards",});
            $(".center3g").css({"-webkit-animation":"center3g 6s forwards",});
        	$(".center3a").css({"animation":"center3a 6s forwards",});
    		$(".center3a").css({"-webkit-animation":"center3a 6s forwards",});
    		$(".center3b").css({"animation":"center3b 20s forwards",});
    		$(".center3b").css({"-webkit-animation":"center3b 20s forwards",});
    		$(".center3c").css({"animation":"center3c 20s forwards",});
    		$(".center3c").css({"-webkit-animation":"center3c 20s forwards",});
    	}else{
    		$(".center3g,.center3a,.center3b,.center3c").css({"animation":"",});
    		$(".center3g,.center3a,.center3b,.cebter3c").css({"-webkit-animation":"",});
        }
         if(swiper.activeIndex==4){
         	$(".center4a").css({"animation":"center4a 2s forwards",});
    		$(".center4a").css({"-webkit-animation":"center4a 2s forwards",});
    		$(".center4b").css({"animation":"center4b 6s forwards",});
    		$(".center4b").css({"-webkit-animation":"center4b 6s forwards",});
            $(".center4c").css({"animation":"center4c 6s forwards",});
            $(".center4c").css({"-webkit-animation":"center4c 6s forwards",});
    	}else{
    		$(".center4a,.center4b,.center4c").css({"animation":"",});
    		$(".center4a,.center4b,.center4c").css({"-webkit-animation":"",}); 
        } 
        if(swiper.activeIndex==5){
        	$(".center5a").css({"animation":"center5a 4s forwards",});
    		$(".center5a").css({"-webkit-animation":"center5a 4s forwards",});
    		$(".center5b").css({"animation":"center5b 8s forwards",});
    		$(".center5b").css({"-webkit-animation":"center5b 8s forwards",});
    	}else{
    		$(".center5a,.center5b").css({"animation":"",});
    		$(".center5a,.center5b").css({"-webkit-animation":"",});  
        } 
        if(swiper.activeIndex==6){
            $(".center6g").css({"animation":"center6g 6s forwards",});
            $(".center6g").css({"-webkit-animation":"center6g 6s forwards",});
    		$(".center6a").css({"animation":"center6a 4s forwards",});
    		$(".center6a").css({"-webkit-animation":"center6a 4s forwards",});
            $(".center6b").css({"animation":"center6b 8s forwards",});
            $(".center6b").css({"-webkit-animation":"center6b 8s forwards",});
    	}else{
    		$(".center6g,.center6a,.center6b").css({"animation":"",});
    		$(".center6g,.center6a,.center6b").css({"-webkit-animation":"",}); 
        }
        if(swiper.activeIndex==7){
            $(".center7g").css({"animation":"center7g 8s forwards",});
            $(".center7g").css({"-webkit-animation":"center7g 8s forwards",});
        	$(".center7a").css({"animation":"center7a 4s forwards",});
    		$(".center7a").css({"-webkit-animation":"center7a 4s forwards",});
    		$(".center7b").css({"animation":"center7b 4s forwards",});
    		$(".center7b").css({"-webkit-animation":"center7b 4s forwards",});
            $(".center7c").css({"animation":"center7c 8s forwards",});
            $(".center7c").css({"-webkit-animation":"center7c 8s forwards",});
    	}else{
    		$(".center7g,.center7a,.center7b,.center7c").css({"animation":"",});
    		$(".center7g,.center7a,.center7b,.center7c").css({"-webkit-animation":"",}); 
        }
        if(swiper.activeIndex==8){
            $(".center8g").css({"animation":"center8g 10s forwards",});
            $(".center8g").css({"-webkit-animation":"center8g 10s forwards",});
            $(".center8f").css({"animation":"center8f 10s forwards",});
            $(".center8f").css({"-webkit-animation":"center8f 10s forwards",});
        	$(".center8a").css({"animation":"center8a 4s forwards",});
    		$(".center8a").css({"-webkit-animation":"center8a 4s forwards",});
    		$(".center8b").css({"animation":"center8b 4s forwards",});
    		$(".center8c").css({"-webkit-animation":"center8c 4s forwards",});
            $(".center8c").css({"-webkit-animation":"center8c 8s forwards",});
    	}else{
    		$(".center8g,.center8f,.center8a,.center8b,.center8c").css({"animation":"",});
    		$(".center8g,.center8f,.center8a,.center8b,.center8c").css({"-webkit-animation":"",}); 
        }
        if(swiper.activeIndex==9){
            $(".center9g").css({"animation":"center9g 6s forwards",});
            $(".center9g").css({"-webkit-animation":"center9g 6s forwards",});
        	$(".center9a").css({"animation":"center9a 2s forwards",});
    		$(".center9a").css({"-webkit-animation":"center9a 2s forwards",});
    		$(".center9b").css({"animation":"center9b 4s forwards",});
    		$(".center9b").css({"-webkit-animation":"center9b 4s forwards",});
    	}else{
    		$(".center9g,.center9a,.center9b").css({"animation":"",});
    		$(".center9g,.center9a,.center9b").css({"-webkit-animation":"",}); 
        }
        if(swiper.activeIndex==10){
            $(".center10a").css({"animation":"center10a 4s forwards",});
            $(".center10a").css({"-webkit-animation":"center10a 4s forwards",});
            $(".center10b").css({"animation":"center10b 8s forwards",});
            $(".center10b").css({"-webkit-animation":"center10b 8s forwards",});
        }else{
            $(".center10a,.center10b").css({"animation":"",});
            $(".center10a,.center10b").css({"-webkit-animation":"",}); 
        }
        if(swiper.activeIndex==11){
            $(".center11a").css({"animation":"center11a 3s forwards",});
            $(".center11a").css({"-webkit-animation":"center11a 3s forwards",});
            $(".center11b").css({"animation":"center11b 6s forwards",});
            $(".center11b").css({"-webkit-animation":"center11b 6s forwards",});
        }else{
            $(".center11a,.center11b").css({"animation":"",});
            $(".center11a,.center11b").css({"-webkit-animation":"",}); 
        }
        if(swiper.activeIndex==12){
            $(".center12g").css({"animation":"center12g 8s forwards linear",});
            $(".center12g").css({"-webkit-animation":"center12g 8s forwards linear",});
            $(".center12a").css({"animation":"center12a 4s forwards",});
            $(".center12a").css({"-webkit-animation":"center12a 4s forwards",});
            $(".center12b").css({"animation":"center12b 6s forwards",});
            $(".center12b").css({"-webkit-animation":"center12b 6s forwards",});
        }else{
            $(".center12g,.center12a,.center12b").css({"animation":"",});
            $(".center12g,.center12a,.center12b").css({"-webkit-animation":"",}); 
        }
        if(swiper.activeIndex==13){
            $(".center13a").css({"animation":"center13a 2s forwards linear",});
            $(".center13a").css({"-webkit-animation":"center13a 2s forwards linear",});
            $(".center13b").css({"animation":"center13b 2s forwards linear",});
            $(".center13b").css({"-webkit-animation":"center13b 2s forwards linear",});
            $(".center13c").css({"animation":"center13c 4s forwards linear",});
            $(".center13c").css({"-webkit-animation":"center13c 4s forwards linear",});
        }else{
            $(".center13a,.center13b,.center13c").css({"animation":"",});
            $(".center13a,.center13b,.center13c").css({"-webkit-animation":"",}); 
        }
        if(swiper.activeIndex==14){
            $(".bottoma").css({"animation":"bottoma 4s forwards",});
                $(".bottoma").css({"-webkit-animation":"bottoma 4s forwards",});
                $(".xiuxiu").css({"animation":"xiuxiu 4s forwards",});
                $(".xiuxiu").css({"-webkit-animation":"xiuxiu 4s forwards",});
                $(".xiu").css({"animation":"xiu 1s forwards","animation-delay":"5s"});
                $(".xiu").css({"-webkit-animation":"xiu 1s forwards","animation-delay":"5s"});
                $(".yi").css({"animation":"yi 1s forwards","animation-delay":"4.5s"});
                $(".yi").css({"-webkit-animation":"yi 1s forwards","animation-delay":"4.5s"});
                $(".xiu2").css({"animation":"xiu2 1s forwards","animation-delay":"4s"});
                $(".xiu2").css({"-webkit-animation":"xiu2 1s forwards","animation-delay":"4s"});
                $(".bottomb").css({"animation":"bottomb 2s forwards","animation-delay":"6s"});
                $(".bottomb").css({"-webkit-animation":"bottomb 2s forwards","-webkit-animation-delay":"6s"});
                $(".bottomc").css({"animation":"bottomc 2s forwards","animation-delay":"11s"});
                $(".bottomc").css({"-webkit-animation":"bottomc 2s forwards","-webkit-animation-delay":"11s"});
                $(".bottomd").css({"animation":"bottomd 3s forwards","animation-delay":"8s"});
                $(".bottomd").css({"-webkit-animation":"bottomd 3s forwards","-webkit-animation-delay":"8s"});
                $(".aa").css({"animation":"bottomd 3s forwards","animation-delay":"8s"});
                $(".aa").css({"-webkit-animation":"bottomd 3s forwards","-webkit-animation-delay":"8s"}); 
            }else{
                $(".bottoma,.bottomb,.bottomc,.bottomd,.aa,.xiu,.xiu2,.yi,.xiuxiu").css({"animation":"",});
                $(".bottoma,.bottomb,.bottomc,.bottomd,.aa,.xiu,.xiu2,.yi,.xiuxiu").css({"-webkit-animation":"",}); 
            }
    }   
});
var body = document.getElementsByTagName('body')[0];
var audio = document.getElementsByTagName('audio')[0];
var op = document.getElementById('op');
var qq=1;
var bf=1;
body.ontouchstart = function(){
	if(bf==1){
            audio.play();
            audio.loop = "loop";
            bf=2;
        }
}
op.onclick = function(){
    if(qq==1){
        $(".op").css({"animation":""});
        $(".op").css({"-webkit-animation":""});
        $(".op").css({"-moz-animation":""});
        $(".op").css({"-ms-animation":""});
        $(".op").css({"-o-animation":""});
        audio.pause();
        qq=2;
    }
    else{
        $(".op").css({"animation":"zhuan 4s infinite linear",});
        $(".op").css({"-webkit-animation":"zhuan 4s infinite linear",});
        $(".op").css({"-moz-animation":"zhuan 4s infinite linear",});
        $(".op").css({"-ms-animation":"zhuan 4s infinite linear",});
        $(".op").css({"-o-animation":"zhuan 4s infinite linear",});
        audio.play();
        qq=1;
    }
}