var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        direction: 'vertical',
        onInit:function(swiper){
            $(".toa").css({"animation":"toa 2s forwards","animation-delay":"4s"});
            $(".toa").css({"-webkit-animation":"toa 2s forwards","-webkit-animation-delay":"4s"});
            $(".tod").css({"animation":"tod 4s forwards"});
            $(".tod").css({"-webkit-animation":"tod 4s forwards"});
            $(".tog").css({"animation":"tog 4s forwards"});
            $(".tog").css({"-webkit-animation":"tog 4s forwards"});
            $(".op").css({"animation":"zhuan 4s infinite linear",});
            $(".op").css({"-webkit-animation":"zhuan 4s infinite linear",});
            $(".op").css({"-moz-animation":"zhuan 4s infinite linear",});
            $(".op").css({"-ms-animation":"zhuan 4s infinite linear",});
            $(".op").css({"-o-animation":"zhuan 4s infinite linear",});
        },
        onSlideChangeStart:function(swiper){
            if(swiper.activeIndex==0){
                    $(".toa").css({"animation":"toa 2s forwards","animation-delay":"4s"});
                    $(".toa").css({"-webkit-animation":"toa 2s forwards","-webkit-animation-delay":"4s"});
                    $(".tod").css({"animation":"tod 4s forwards"});
                    $(".tod").css({"-webkit-animation":"tod 4s forwards"});
                    $(".tog").css({"animation":"tog 4s forwards"});
                    $(".tog").css({"-webkit-animation":"tog 4s forwards"});      
                }else{
                    $(".toa,.tod,.tog").css({"animation":""});
                    $(".toa,.tod,.tog").css({"-webkit-animation":""});  
                }
	    	if(swiper.activeIndex==1){
                    $(".topb").css({"animation":"topb 2s forwards"});
	        		$(".topb").css({"-webkit-animation":"topb 2s forwards"});      
	        	}else{
	        		$(".topb").css({"animation":""});
                    $(".topb").css({"-webkit-animation":""});  
		        }
            if(swiper.activeIndex==2){
                $(".center1a").css({"animation":"center1a 4s forwards",});
                $(".center1a").css({"-webkit-animation":"center1a 4s forwards",});
                $(".center1b").css({"animation":"center1b 2s forwards","animation-delay":"4s",});
                $(".center1b").css({"-webkit-animation":"center1b 2s forwards","-webkit-animation-delay":"4s",});
            }else{
                $(".center1a,.center1b").css({"animation":"",});
                $(".center1a,.center1b").css({"-webkit-animation":"",});  
            }
            if(swiper.activeIndex==3){
                $(".center2a").css({"animation":"center2a 3s forwards"});
                $(".center2a").css({"-webkit-animation":"center2a 3s forwards"});
                $(".center2c").css({"animation":"center2c 3s forwards"});
                $(".center2c").css({"-webkit-animation":"center2c 3s forwards"});
                $(".p1").css({"animation":"pl 1s forwards","animation-delay":"4s"});
                $(".p1").css({"-webkit-animation":"pl 1s forwards","-webkit-animation-delay":"4s"});
                $(".p2").css({"animation":"pl 1s forwards","animation-delay":"5s"});
                $(".p2").css({"-webkit-animation":"pl 1s forwards","-webkit-animation-delay":"5s"});
                $(".p3").css({"animation":"pl 1s forwards","animation-delay":"6s"});
                $(".p3").css({"-webkit-animation":"pl 1s forwards","-webkit-animation-delay":"6s"});
                $(".p4").css({"animation":"pl 1s forwards","animation-delay":"7s"});
                $(".p4").css({"-webkit-animation":"pl 1s forwards","-webkit-animation-delay":"7s"});
                $(".p5").css({"animation":"pl 1s forwards","animation-delay":"8s"});
                $(".p5").css({"-webkit-animation":"pl 1s forwards","-webkit-animation-delay":"8s"});
                $(".p6").css({"animation":"pl 1s forwards","animation-delay":"9s"});
                $(".p6").css({"-webkit-animation":"pl 1s forwards","-webkit-animation-delay":"9s"});
                $(".p7").css({"animation":"pl 1s forwards","animation-delay":"10s"});
                $(".p7").css({"-webkit-animation":"pl 1s forwards","-webkit-animation-delay":"10s"});
            }else{
                $(".center2a,.center2c,.p1,.p2,.p3,.p4,.p5,.p6,.p7").css({"animation":""});
                $(".center2a,.center2c,.p1,.p2,.p3,.p4,.p5,.p6,.p7").css({"-webkit-animation":""});  
            }
	        if(swiper.activeIndex==4){
        		$(".center3a").css({"animation":"center3a 6s forwards",});
                $(".center3a").css({"-webkit-animation":"center3a 6s forwards",});
                $(".center3b").css({"animation":"center3b 2s forwards","animation-delay":"6s"});
                $(".center3b").css({"-webkit-animation":"center3b 2s forwards","-webkit-animation-delay":"6s"});
        	}else{
        		$(".center3a,.center3b").css({"animation":""});
                $(".center3a,.center3b").css({"-webkit-animation":""}); 
	        }
            if(swiper.activeIndex==5){
                $(".gaic").css({"animation":"gaic 4s forwards linear",});
                $(".gaic").css({"-webkit-animation":"gaic 4s forwards linear",});
                $(".gaid").css({"animation":"gaid 4s forwards linear","animation-delay":"0.5s"});
                $(".gaid").css({"-webkit-animation":"gaid 4s forwards linear","-webkit-animation-delay":"0.5s"});
                $(".gaie").css({"animation":"gaie 4s forwards linear","animation-delay":"1s"});
                $(".gaie").css({"-webkit-animation":"gaie 4s forwards linear","-webkit-animation-delay":"1s"});
            }else{
                $(".gaic,.gaid,.gaie").css({"animation":""});
                $(".gaic,.gaid,.gaie").css({"-webkit-animation":""}); 
            }
            if(swiper.activeIndex==6){
                $(".gab").css({"animation":"gab 2s forwards",});
                $(".gab").css({"-webkit-animation":"gab 2s forwards",});
            }else{
                $(".gab").css({"animation":""});
                $(".gab").css({"-webkit-animation":""}); 
            }
	        if(swiper.activeIndex==7){
                $(".t1").css({"animation":"xian 4s forwards",});
                $(".t1").css({"-webkit-animation":"xian 4s forwards"});
                $(".t2").css({"animation":"xian 4s forwards","animation-delay":"1s"});
                $(".t2").css({"-webkit-animation":"xian 4s forwards","-webkit-animation-delay":"1s"});
                $(".t3").css({"animation":"xian 4s forwards","animation-delay":"2s"});
                $(".t3").css({"-webkit-animation":"xian 4s forwards","-webkit-animation-delay":"2s"});
                $(".t4").css({"animation":"xian 4s forwards","animation-delay":"3s"});
                $(".t4").css({"-webkit-animation":"xian 4s forwards","-webkit-animation-delay":"3s"});
                $(".t5").css({"animation":"xian 4s forwards","animation-delay":"4s"});
                $(".t5").css({"-webkit-animation":"xian 4s forwards","-webkit-animation-delay":"4s"});
                $(".x1").css({"animation":"px 1s forwards","animation-delay":"7s"});
                $(".x1").css({"-webkit-animation":"px 1s forwards","-webkit-animation-delay":"7s"});
                $(".x2").css({"animation":"ps 1s forwards","animation-delay":"8s"});
                $(".x2").css({"-webkit-animation":"ps 1s forwards","-webkit-animation-delay":"8s"});
                $(".x3").css({"animation":"px 1s forwards","animation-delay":"9s"});
                $(".x3").css({"-webkit-animation":"px 1s forwards","-webkit-animation-delay":"9s"});
                $(".x4").css({"animation":"ps 1s forwards","animation-delay":"10s"});
                $(".x4").css({"-webkit-animation":"ps 1s forwards","-webkit-animation-delay":"10s"});
                $(".x5").css({"animation":"px 1s forwards","animation-delay":"11s"});
                $(".x5").css({"-webkit-animation":"px 1s forwards","-webkit-animation-delay":"11s"});
                $(".x6").css({"animation":"ps 1s forwards","animation-delay":"12s"});
                $(".x6").css({"-webkit-animation":"ps 1s forwards","-webkit-animation-delay":"12s"});
                $(".x7").css({"animation":"px 1s forwards","animation-delay":"13s"});
                $(".x7").css({"-webkit-animation":"px 1s forwards","-webkit-animation-delay":"13s"});
        	}else{
        		$(".t1,.t2,.t3,.t4,.t5,.x1,.x2,.x3,.x4,.x5,.x6,.x7").css({"animation":"",});
                $(".t1,.t2,.t3,.t4,.t5,.x1,.x2,.x3,.x4,.x5,.x6,.x7").css({"-webkit-animation":"",});  
	        }
            if(swiper.activeIndex==8){
                $(".center5a").css({"animation":"center5a 3s forwards"});
                $(".center5a").css({"-webkit-animation":"center5a 3s forwards"});
                $(".center5b").css({"animation":"center5b 2s forwards","animation-delay":"3s"});
                $(".center5b").css({"-webkit-animation":"center5b 2s forwards","-webkit-animation-delay":"3s"});
            }else{
                $(".center5a,.center5b").css({"animation":""});
                $(".center5a,.center5b").css({"-webkit-animation":""});  
            }
            if(swiper.activeIndex==9){
                $(".center14a").css({"animation":"center14a 4s forwards linear"});
                $(".center14a").css({"-webkit-animation":"center14a 4s forwards"});
                $(".center14b").css({"animation":"center14b 2s forwards linear","animation-delay":"4s"});
                $(".center14b").css({"-webkit-animation":"center14b 2s forwards","-webkit-animation-delay":"4s"});
                $(".center14c").css({"animation":"center14c 2s forwards linear","animation-delay":"6s"});
                $(".center14c").css({"-webkit-animation":"center14c 2s forwards","-webkit-animation-delay":"6s"});
            }else{
                $(".center14a,.center14b,.center14c").css({"animation":""});
                $(".center14a,.center14b,.center14c").css({"-webkit-animation":""});  
            }
            if(swiper.activeIndex==10){
                $(".center15a").css({"animation":"center15a 3s forwards"});
                $(".center15a").css({"-webkit-animation":"center15a 3s forwards"});
                $(".center15b").css({"animation":"center15b 3s forwards"});          
                $(".center15b").css({"-webkit-animation":"center15b 3s forwards"});
                $(".center15c").css({"animation":"center15c 2s forwards","animation-delay":"3s"});          
                $(".center15c").css({"-webkit-animation":"center15c 2s forwards","-webkit-animation-delay":"3s"});
            }else{
                $(".center15a,.center15b,.center15c").css({"animation":""});
                $(".center15a,.center15b,.center15c").css({"-webkit-animation":""});  
            }
            if(swiper.activeIndex==11){
                $(".center8a").css({"animation":"center8a 3s forwards"});
                $(".center8a").css({"-webkit-animation":"center8a 3s forwards"});
                $(".center8b").css({"animation":"center8b 2s forwards","animation-delay":"3s"});
                $(".center8b").css({"animation":"center8b 2s forwards","-webkit-animation-delay":"3s"});
            }else{
                $(".center8a,.center8b").css({"animation":""});
                $(".center8a,.center8b").css({"-webkit-animation":""});  
            }
            if(swiper.activeIndex==12){
                $(".center7a").css({"animation":"center7a 3s forwards"});
                $(".center7a").css({"-webkit-animation":"center7a 3s forwards"});
                $(".center7b").css({"animation":"center7b 4s forwards","animation-delay":"3s"});
                $(".center7b").css({"-webkit-animation":"center7b 4s forwards","-webkit-animation-delay":"3s"});
                $(".center7c").css({"animation":"center7c 2s forwards","animation-delay":"7s"});
                $(".center7c").css({"-webkit-animation":"center7c 2s forwards","-webkit-animation-delay":"7s"});
                $(".center7d").css({"animation":"center7d 2s forwards","animation-delay":"9s"});
                $(".center7d").css({"-webkit-animation":"center7d 2s forwards","-webkit-animation-delay":"9s"});
                $(".center7e").css({"animation":"center7e 2s forwards","animation-delay":"11s"});
                $(".center7e").css({"-webkit-animation":"center7e 2s forwards","-webkit-animation-delay":"11s"});
            }else{
                $(".center7a,.center7b,.center7c,.center7d,.center7e").css({"animation":""});
                $(".center7a,.center7b,.center7c,.center7d,.center7e").css({"-webkit-animation":""});  
            }
            if(swiper.activeIndex==13){
                $(".center6a").css({"animation":"center6a 10s forwards"});
                $(".center6a").css({"-webkit-animation":"center6a 10s forwards"});
                $(".center6b").css({"animation":"center6b 10s forwards"});
                $(".center6b").css({"-webkit-animation":"center6b 10s forwards"});
                $(".center6c").css({"animation":"center6c 2s forwards","animation-delay":"10s"});
                $(".center6c").css({"-webkit-animation":"center6c 2s forwards","-webkit-animation-delay":"10s"});
            }else{
                $(".center6a,.center6b,.center6c").css({"animation":""});
                $(".center6a,.center6b,.center6c").css({"-webkit-animation":""});  
            }
            if(swiper.activeIndex==14){
                $(".center11a").css({"animation":"center11a 5s forwards"});
                $(".center11a").css({"-webkit-animation":"center11a 5s forwards"});
                $(".center11b").css({"animation":"center11b 3s forwards","animation-delay":"5s"});          
                $(".center11b").css({"-webkit-animation":"center11b 3s forwards","-webkit-animation-delay":"5s"});
            }else{
                $(".center11a,.center11b").css({"animation":""});
                $(".center11a,.center11b").css({"-webkit-animation":""});  
            }
            if(swiper.activeIndex==15){
                $(".center13a").css({"animation":"center13a 4s forwards"});
                $(".center13a").css({"-webkit-animation":"center13a 4s forwards"});
                $(".center13b").css({"animation":"center13b 4s forwards"});
                $(".center13b").css({"-webkit-animation":"center13b 4s forwards"});
                $(".center13c").css({"animation":"center13a 4s forwards"});
                $(".center13c").css({"-webkit-animation":"center13a 4s forwards"});
                $(".center13d").css({"animation":"center13b 4s forwards"});
                $(".center13d").css({"-webkit-animation":"center13b 4s forwards"});
                $(".tx1").css({"animation":"py 1s forwards","animation-delay":"4s"});
                $(".tx1").css({"-webkit-animation":"py 1s forwards","-webkit-animation-delay":"4s"});
                $(".tx2").css({"animation":"pz 1s forwards","animation-delay":"5s"});
                $(".tx2").css({"-webkit-animation":"pz 1s forwards","-webkit-animation-delay":"5s"});
                $(".tx3").css({"animation":"py 1s forwards","animation-delay":"6s"});
                $(".tx3").css({"-webkit-animation":"py 1s forwards","-webkit-animation-delay":"6s"});
                $(".tx4").css({"animation":"py 1s forwards","animation-delaz":"7s"});
                $(".tx4").css({"-webkit-animation":"pz 1s forwards","-webkit-animation-delay":"7s"});
                $(".tx5").css({"animation":"py 1s forwards","animation-delay":"8s"});
                $(".tx5").css({"-webkit-animation":"py 1s forwards","-webkit-animation-delay":"8s"});
                $(".tx6").css({"animation":"pz 1s forwards","animation-delay":"9s"});
                $(".tx6").css({"-webkit-animation":"pz 1s forwards","-webkit-animation-delay":"9s"});
                $(".tx7").css({"animation":"py 1s forwards","animation-delay":"10s"});
                $(".tx7").css({"-webkit-animation":"py 1s forwards","-webkit-animation-delay":"10s"});
            }else{
                $(".center13a,.center13b,.center13c,.center13d,.tx1,.tx2,.tx3,.tx4,.tx5,.tx6,.tx7").css({"animation":""});
                $(".center13a,.center13b,.center13c,.center13d,.tx1,.tx2,.tx3,.tx4,.tx5,.tx6,.tx7").css({"-webkit-animation":""});  
            }
            if(swiper.activeIndex==16){
                $(".center16a").css({"animation":"center16a 5s forwards"});
                $(".center16a").css({"-webkit-animation":"center16a 5s forwards"});
                $(".center16c").css({"animation":"center16c 4s forwards"});
                $(".center16c").css({"-webkit-animation":"center16c 4s forwards"});
                $(".center16b").css({"animation":"center16b 3s forwards","animation-delay":"4s"});          
                $(".center16b").css({"-webkit-animation":"center16b 3s forwards","-webkit-animation-delay":"4s"});
            }else{
                $(".center16a,.center16b,.center16c").css({"animation":""});
                $(".center16a,.center16b,.center16c").css({"-webkit-animation":""});  
            }
            if(swiper.activeIndex==17){
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
	body. ontouchstart =function(){
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