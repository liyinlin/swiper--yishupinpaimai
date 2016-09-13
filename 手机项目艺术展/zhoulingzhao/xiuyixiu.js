var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        direction: 'vertical',
        onInit:function(swiper){
        	$(".tb1").css({"-webkit-animation":"tb1 4s forwards"});
            $(".tb1").css({"animation":"tb1 4s forwards"});
    		$(".tb2").css({"-webkit-animation":"tb2 4s forwards"});
            $(".tb2").css({"animation":"tb2 4s forwards"});
            $(".tb3").css({"-webkit-animation":"tb3 4s forwards"});
            $(".tb3").css({"animation":"tb3 4s forwards"});
            $(".tc").css({"-webkit-animation":"tc 2s forwards"});
            $(".tc").css({"animation":"tc 2s forwards"});
            $(".op").css({"animation":"zhuan 4s infinite linear",});
            $(".op").css({"-webkit-animation":"zhuan 4s infinite linear",});
            $(".op").css({"-moz-animation":"zhuan 4s infinite linear",});
            $(".op").css({"-ms-animation":"zhuan 4s infinite linear",});
            $(".op").css({"-o-animation":"zhuan 4s infinite linear",});
        },
        onSlideChangeStart:function(swiper){
	    	if(swiper.activeIndex==0){
	        		$(".tb1").css({"-webkit-animation":"tb1 4s forwards"});
                    $(".tb1").css({"animation":"tb1 4s forwards"});
                    $(".tb2").css({"-webkit-animation":"tb2 4s forwards"});
                    $(".tb2").css({"animation":"tb2 4s forwards"});
                    $(".tb3").css({"-webkit-animation":"tb3 4s forwards"});
                    $(".tb3").css({"animation":"tb3 4s forwards"});
                    $(".tc").css({"-webkit-animation":"tc 2s forwards"});
                    $(".tc").css({"animation":"tc 2s forwards"});
	        	}else{
	        		$(".tb1,.tb2,.tb3,.tc").css({"animation":""});
                    $(".tb1,.tb2,.tb3,.tc").css({"-webkit-animation":""});  
		        }
            if(swiper.activeIndex==2){
                $(".txt1").css({"-webkit-animation":"txt1 7s forwards"});
                $(".txt1").css({"animation":"txt1 7s forwards"});
                $(".txt2").css({"-webkit-animation":"txt2 7s forwards"});
                $(".txt2").css({"animation":"txt2 7s forwards"});
                $(".txt3").css({"-webkit-animation":"txt3 7s forwards"});
                $(".txt3").css({"animation":"txt3 7s forwards"});
                $(".txt4").css({"-webkit-animation":"txt4 7s forwards"});
                $(".txt4").css({"animation":"txt4 7s forwards"});
                $(".txt5").css({"-webkit-animation":"txt5 7s forwards"});
                $(".txt5").css({"animation":"txt5 7s forwards"});
                $(".txt6").css({"-webkit-animation":"txt6 7s forwards"});
                $(".txt6").css({"animation":"txt6 7s forwards"});
                $(".txt7").css({"-webkit-animation":"txt7 7s forwards"});
                $(".txt7").css({"animation":"txt7 7s forwards"});
            }else{
                $(".txt1,.txt2,.txt3,.txt4,.txt5,.txt6,.txt7").css({"animation":""});
                $(".txt1,.txt2,.txt3,.txt4,.txt5,.txt6,.txt7").css({"-webkit-animation":""});  
            }
	        if(swiper.activeIndex==3){
        		$(".center1 .p1").css({"animation":"px 2s forwards",});
                $(".center1 .p1").css({"-webkit-animation":"px 2s forwards",});
        		$(".center1 .p2,.center1 .p4").css({"animation":"py 2s forwards",});
                $(".center1 .p2,.center1 .p4").css({"-webkit-animation":"py 2s forwards",});
        		$(".center1 .p3,.center1 .p5").css({"animation":"pz 2s forwards",});
                $(".center1 .p3,.center1 .p5").css({"-webkit-animation":"pz 2s forwards",});
        	}else{
        		$(".center1 .p1,.center1 .p2,.center1 .p3,.center1 .p4,.center1 .p5").css({"animation":""});
                $(".center1 .p1,.center1 .p2,.center1 .p3,.center1 .p4,.center1 .p5").css({"-webkit-animation":""}); 
	        }
	        if(swiper.activeIndex==4){
	        		$(".center2 .zhuxi").css({"animation":"center2a 2s forwards"});
                    $(".center2 .zhuxi").css({"-webkit-animation":"center2a 2s forwards"});
	        		$(".center2 .p1").css({"animation":"p1 4s forwards",});
                    $(".center2 .p1").css({"-webkit-animation":"p1 4s forwards",});
	        		$(".center2 .p2").css({"animation":"p2 4s forwards",});
                    $(".center2 .p2").css({"-webkit-animation":"p2 4s forwards",});
	        		$(".center2 .p3").css({"animation":"p3 4s forwards",});
                    $(".center2 .p3").css({"-webkit-animation":"p3 4s forwards",});
	        		$(".center2 .p4").css({"animation":"p4 4s forwards",});
                    $(".center2 .p4").css({"-webkit-animation":"p4 4s forwards",});
	        		$(".center2 .p5").css({"animation":"p5 4s forwards",});
                    $(".center2 .p5").css({"-webkit-animation":"p5 4s forwards",});
	        	}else{
	        		$(".center2 .zhuxi,.center2 .p1,.center2 .p2,.center2 .p3,.center2 .p4,.center2 .p5").css({"animation":"",});
                    $(".center2 .zhuxi,.center2 .p1,.center2 .p2,.center2 .p3,.center2 .p4,.center2 .p5").css({"-webkit-animation":"",});  
		        }
	        if(swiper.activeIndex==7){
        		$(".center3 .renmin").css({"animation":"zhuxi 2s forwards",});
                $(".center3 .renmin").css({"-webkit-animation":"zhuxi 2s forwards",});
        		$(".center3 .p1,.center3 .p3,.center3 .p5").css({"animation":"py 2s forwards",});
                $(".center3 .p1,.center3 .p3,.center3 .p5").css({"-webkit-animation":"py 2s forwards",});
        		$(".center3 .p2,.center3 .p4,.center3 .p6").css({"animation":"pz 2s forwards",});
                $(".center3 .p2,.center3 .p4,.center3 .p6").css({"-webkit-animation":"pz 2s forwards",});
        	}else{
        		$(".center3 .p1,.center3 .p2,.center3 .p3,.center3 .p4,.center3 .p5,.center3 .p6,.center3 .renmin").css({"animation":"",});
                $(".center3 .p1,.center3 .p2,.center3 .p3,.center3 .p4,.center3 .p5,.center3 .p6,.center3 .renmin").css({"-webkit-animation":"",});
	        }
	         if(swiper.activeIndex==5){
        		$(".center4a").css({"animation":"miao 1s forwards",});
                $(".center4a").css({"-webkit-animation":"miao 1s forwards",});
        		$(".center4b").css({"animation":"guohui 1s forwards",});
                $(".center4b").css({"-webkit-animation":"guohui 1s forwards",});
        	}else{
        		$(".center4a,.center4b").css({"animation":"",});
                $(".center4a,.center4b").css({"-webkit-animation":"",}); 
	        } 
	        if(swiper.activeIndex==6){
        		$(".center5a").css({"animation":"qianzi 2s forwards",});
                $(".center5a").css({"-webkit-animation":"qianzi 2s forwards",});
        		$(".center5b").css({"animation":"famous 2s forwards",});
                $(".center5b").css({"-webkit-animation":"famous 2s forwards",});
        	}else{
        		$(".center5a,.center5b").css({"animation":"",});
                $(".center5a,.center5b").css({"-webkit-animation":"",});  
	        } 
	        if(swiper.activeIndex==8){
                $(".pa").css({"animation":"pa 1s forwards"});
                $(".pa").css({"-webkit-animation":"pa 1s forwards"});
                $(".pa2").css({"animation":"pa2 1s forwards"});
                $(".pa2").css({"-webkit-animation":"pa2 1s forwards"});
                $(".pa3").css({"animation":"pa3 1s forwards"});
                $(".pa3").css({"-webkit-animation":"pa3 1s forwards"});
        		$(".qian1").css({"animation":"qian1 3s forwards",});
                $(".qian1").css({"-webkit-animation":"qian1 3s forwards",});
        		$(".qian2").css({"animation":"qian2 3s forwards",});
                $(".qian2").css({"-webkit-animation":"qian2 3s forwards",});
        		$(".qian3").css({"animation":"qian3 3s forwards",});
                $(".qian3").css({"-webkit-animation":"qian3 3s forwards",});
        		$(".qian4").css({"animation":"qian4 3s forwards",});
                $(".qian4").css({"-webkit-animation":"qian4 3s forwards",});
        		$(".qian5").css({"animation":"qian5 3s forwards",});
                $(".qian5").css({"-webkit-animation":"qian5 3s forwards",});
        		$(".qian6").css({"animation":"qian6 3s forwards",});
                $(".qian6").css({"-webkit-animation":"qian6 3s forwards",});
        		$(".qian7").css({"animation":"qian7 3s forwards",});
                $(".qian7").css({"-webkit-animation":"qian7 3s forwards",});
        		$(".qian8").css({"animation":"qian8 3s forwards",});
                $(".qian8").css({"-webkit-animation":"qian8 3s forwards",});
        	}else{
        		$(".pa,.pa2,.pa3,.qian1,.qian2,.qian3,.qian4,.qian5,.qian6,.qian7,.qian8").css({"animation":"",});
                $(".pa,.pa2,.pa3,.qian1,.qian2,.qian3,.qian4,.qian5,.qian6,.qian7,.qian8").css({"-webkit-animation":"",}); 
	        }
	        if(swiper.activeIndex==9){
        		$(".center7a").css({"animation":"youpiaoa 2s forwards",});
                $(".center7a").css({"-webkit-animation":"youpiaoa 2s forwards",});
        		$(".center7b").css({"animation":"youpiaob 2s forwards",});
                $(".center7b").css({"-webkit-animation":"youpiaob 2s forwards",});
        		$(".center7c").css({"animation":"youpiaoc 2s forwards",});
                $(".center7c").css({"-webkit-animation":"youpiaoc 2s forwards",});
        		$(".center7d").css({"animation":"youpiao 2s forwards",});
                $(".center7d").css({"-webkit-animation":"youpiao 2s forwards",});
        	}else{
        		$(".center7a,.center7b,.center7c,.center7d").css({"animation":"",});
                $(".center7a,.center7b,.center7c,.center7d").css({"-webkit-animation":"",}); 
	        }
	        if(swiper.activeIndex==10){
        		$(".center8a").css({"animation":"youpiaotop 2s forwards",});
                $(".center8a").css({"-webkit-animation":"youpiaotop 2s forwards",});
        		$(".center8b").css({"animation":"youpiaotu 2s forwards",});
                $(".center8b").css({"-webkit-animation":"youpiaotu 2s forwards",});
        		$(".center8c").css({"animation":"youpiaozi 2s forwards",});
                $(".center8c").css({"-webkit-animation":"youpiaozi 2s forwards",});
        	}else{
        		$(".center8a,.center8b,.center8c").css({"animation":"",});
                $(".center8a,.center8b,.center8c").css({"-webkit-animation":"",}); 
	        }
            if(swiper.activeIndex==11){
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