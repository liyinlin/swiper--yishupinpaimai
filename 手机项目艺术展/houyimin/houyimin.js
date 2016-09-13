var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        direction: 'vertical',
        onInit:function(swiper){
            $(".topa").css({"animation":"topa 6s forwards"});
        	$(".topa").css({"-webkit-animation":"topa 6s forwards"});
            $(".topd").css({"animation":"topd 4s forwards"});
            $(".topd").css({"-webkit-animation":"topd 4s forwards"});
            $(".topg").css({"animation":"topg 4s forwards"});
            $(".topg").css({"-webkit-animation":"topg 4s forwards"});
            $(".op").css({"animation":"zhuan 4s infinite linear",});
            $(".op").css({"-webkit-animation":"zhuan 4s infinite linear",});
            $(".op").css({"-moz-animation":"zhuan 4s infinite linear",});
            $(".op").css({"-ms-animation":"zhuan 4s infinite linear",});
            $(".op").css({"-o-animation":"zhuan 4s infinite linear",});
        },
        onSlideChangeStart:function(swiper){
	    	if(swiper.activeIndex==0){
                    $(".topa").css({"animation":"topa 6s forwards"});
	        		$(".topa").css({"-webkit-animation":"topa 6s forwards"});
                    $(".topd").css({"animation":"topd 4s forwards"});
                    $(".topd").css({"-webkit-animation":"topd 4s forwards"});
                    $(".topg").css({"animation":"topg 4s forwards"});
                    $(".topg").css({"-webkit-animation":"topg 4s forwards"});      
	        	}else{
	        		$(".topa,.topd,.topg").css({"animation":""});
                    $(".topa,.topd,.topg").css({"-webkit-animation":""});  
		        }
            if(swiper.activeIndex==1){
                $(".center1b").css({"animation":"center1b 4s forwards",});
                $(".center1b").css({"-webkit-animation":"center1b 4s forwards",});
                $(".p1").css({"animation":"p1 12s forwards",});
                $(".p1").css({"-webkit-animation":"p1 12s forwards",});
                $(".p2").css({"animation":"p2 12s forwards",});
                $(".p2").css({"-webkit-animation":"p2 12s forwards",});
                $(".p3").css({"animation":"p3 12s forwards",});
                $(".p3").css({"-webkit-animation":"p3 12s forwards",});
                $(".p4").css({"animation":"p4 12s forwards",});
                $(".p4").css({"-webkit-animation":"p4 12s forwards",});
                $(".p5").css({"animation":"p5 12s forwards",});
                $(".p5").css({"-webkit-animation":"p5 12s forwards",});
                $(".p6").css({"animation":"p6 12s forwards",});
                $(".p6").css({"-webkit-animation":"p6 12s forwards",});
                $(".p7").css({"animation":"p7 12s forwards",});
                $(".p7").css({"-webkit-animation":"p7 12s forwards",});
            }else{
                $(".center1b,.p1,.p2,.p3,.p4,.p5,.p6,.p7").css({"animation":"",});
                $(".center1b,.p1,.p2,.p3,.p4,.p5,.p6,.p7").css({"-webkit-animation":"",});  
            }
            if(swiper.activeIndex==2){
                $(".center2a").css({"animation":"center2a 1s forwards"});
                $(".center2a").css({"-webkit-animation":"center2a 1s forwards"});
                $(".center2b").css({"animation":"center2b 1s forwards"});
                $(".center2b").css({"-webkit-animation":"center2b 1s forwards"});
                $(".center2c").css({"animation":"center2c 1s forwards"});
                $(".center2c").css({"-webkit-animation":"center2c 1s forwards"});
            }else{
                $(".center2a,.center2b,.center2c").css({"animation":""});
                $(".center2a,.center2b,.center2c").css({"-webkit-animation":""});  
            }
            if(swiper.activeIndex==3){
                $(".centerga").css({"animation":"centerga 2s forwards"});
                $(".centerga").css({"-webkit-animation":"centerga 2s forwards"});
                $(".centergb").css({"animation":"centergb 4s forwards"});
                $(".centergb").css({"-webkit-animation":"centergb 4s forwards"});
            }else{
                $(".centerga,.centergb").css({"animation":""});
                $(".centerga,.centergb").css({"-webkit-animation":""});  
            }
	        if(swiper.activeIndex==4){
        		$(".center3a").css({"animation":"center3a 2s forwards",});
                $(".center3a").css({"-webkit-animation":"center3a 2s forwards",});
                $(".center3b").css({"animation":"center3b 4s forwards",});
                $(".center3b").css({"-webkit-animation":"center3b 4s forwards",});
        		$(".pc1,.pc3,.pc5").css({"animation":"py 6s forwards",});
                $(".pc1,.pc3,.pc5").css({"-webkit-animation":"py 6s forwards",});
        		$(".pc2,.pc4,.pc6").css({"animation":"pz 6s forwards",});
                $(".pc2,.pc4,.pc6").css({"-webkit-animation":"pz 6s forwards",});
        	}else{
        		$(".center3a,.center3b,.pc1,.pc2,.pc3,.pc4,.pc5,.pc6").css({"animation":""});
                $(".center3a,.center3b,.pc1,.pc2,.pc3,.pc4,.pc5,.pc6").css({"-webkit-animation":""}); 
	        }
	        if(swiper.activeIndex==5){
        		$(".center4a").css({"animation":"center4a 2s forwards"});
                $(".center4a").css({"-webkit-animation":"center4a 2s forwards"});
        		$(".center4b").css({"animation":"center4b 4s forwards",});
                $(".center4b").css({"-webkit-animation":"center4b 4s forwards",});
                $(".center4c").css({"animation":"center4c 4s forwards",});
                $(".center4c").css({"-webkit-animation":"center4c 4s forwards",});
                $(".px1").css({"animation":"px1 12s forwards",});
                $(".px1").css({"-webkit-animation":"px1 12s forwards",});
        		$(".px2").css({"animation":"px2 12s forwards",});
                $(".px2").css({"-webkit-animation":"px2 12s forwards",});
        		$(".px3").css({"animation":"px3 12s forwards",});
                $(".px3").css({"-webkit-animation":"px3 12s forwards",});
        		$(".px4").css({"animation":"px4 12s forwards",});
                $(".px4").css({"-webkit-animation":"px4 12s forwards",});
        		$(".px5").css({"animation":"px5 12s forwards",});
                $(".px5").css({"-webkit-animation":"px5 12s forwards",});
                $(".px6").css({"animation":"px6 12s forwards",});
                $(".px6").css({"-webkit-animation":"px6 12s forwards",});
                $(".px7").css({"animation":"px7 12s forwards",});
                $(".px7").css({"-webkit-animation":"px7 12s forwards",});
        	}else{
        		$(".center4a,.center4b,.center4c,.px1,.px2,.px3,.px4,.px5,.px6,.px7").css({"animation":"",});
                $(".center4a,.center4b,.center4c,.px1,.px2,.px3,.px4,.px5,.px6,.px7").css({"-webkit-animation":"",});  
	        }
            if(swiper.activeIndex==6){
                $(".center5a").css({"animation":"center5a 2s forwards"});
                $(".center5a").css({"-webkit-animation":"center5a 2s forwards"});
                $(".center5b").css({"animation":"center5b 4s forwards"});
                $(".center5b").css({"-webkit-animation":"center5b 4s forwards"});
                $(".center5c").css({"animation":"center5c 6s forwards"});
                $(".center5c").css({"-webkit-animation":"center5c 6s forwards"});
            }else{
                $(".center5a,.center5b,.center5c").css({"animation":""});
                $(".center5a,.center5b,.center5c").css({"-webkit-animation":""});  
            }
            if(swiper.activeIndex==7){
                $(".center6a").css({"animation":"center6a 2s forwards"});
                $(".center6a").css({"-webkit-animation":"center6a 2s forwards"});
                $(".center6b").css({"animation":"center6b 4s forwards"});
                $(".center6b").css({"-webkit-animation":"center6b 4s forwards"});
                $(".center6c").css({"animation":"center6c 6s forwards"});
                $(".center6c").css({"-webkit-animation":"center6c 6s forwards"});
            }else{
                $(".center6a,.center6b,.center6c").css({"animation":""});
                $(".center6a,.center6b,.center6c").css({"-webkit-animation":""});  
            }
            if(swiper.activeIndex==8){
                $(".center7a").css({"animation":"center7a 3s forwards"});
                $(".center7a").css({"-webkit-animation":"center7a 3s forwards"});
                $(".center7b").css({"animation":"center7b 8s forwards"});
                $(".center7b").css({"-webkit-animation":"center7b 8s forwards"});
                $(".center7c").css({"animation":"center7c 12s forwards"});
                $(".center7c").css({"-webkit-animation":"center7c 12s forwards"});
            }else{
                $(".center7a,.center7b,.center7c").css({"animation":""});
                $(".center7a,.center7b,.center7c").css({"-webkit-animation":""});  
            }
            if(swiper.activeIndex==9){
                $(".center8a").css({"animation":"center8a 2s forwards"});
                $(".center8a").css({"-webkit-animation":"center8a 2s forwards"});
                $(".center8b").css({"animation":"center8b 4s forwards"});
                $(".center8b").css({"-webkit-animation":"center8b 4s forwards"});
                $(".center8c").css({"animation":"center8c 6s forwards"});
                $(".center8c").css({"-webkit-animation":"center8c 6s forwards"});
            }else{
                $(".center8a,.center8b,.center8c").css({"animation":""});
                $(".center8a,.center8b,.center8c").css({"-webkit-animation":""});  
            }
            if(swiper.activeIndex==10){
                $(".center9a").css({"animation":"center9a 2s forwards"});
                $(".center9a").css({"-webkit-animation":"center9a 2s forwards"});
                $(".center9b").css({"animation":"center9b 4s forwards"});
                $(".center9b").css({"-webkit-animation":"center9b 4s forwards"});
            }else{
                $(".center9a,.center9b").css({"animation":""});
                $(".center9a,.center9b").css({"-webkit-animation":""});  
            }
            if(swiper.activeIndex==11){
                $(".center10a").css({"animation":"center10a 2s forwards"});
                $(".center10a").css({"-webkit-animation":"center10a 2s forwards"});
                $(".center10b").css({"animation":"center10b 4s forwards"});  
                $(".center10b").css({"-webkit-animation":"center10b 4s forwards"});
            }else{
                $(".center10a,.center10b").css({"animation":""});
                $(".center10a,.center10b").css({"-webkit-animation":""});  
            }
            if(swiper.activeIndex==12){
                $(".center11a").css({"animation":"center11a 6s forwards"});
                $(".center11a").css({"-webkit-animation":"center11a 6s forwards"});
                $(".center11b").css({"animation":"center11b 6s forwards"});          
                $(".center11b").css({"-webkit-animation":"center11b 6s forwards"});
            }else{
                $(".center11a,.center11b").css({"animation":""});
                $(".center11a,.center11b").css({"-webkit-animation":""});  
            }
            if(swiper.activeIndex==13){
                $(".pt1").css({"animation":"pt1 12s forwards"});
                $(".pt1").css({"-webkit-animation":"pt1 12s forwards"});
                $(".pt2").css({"animation":"pt2 12s forwards"});
                $(".pt2").css({"-webkit-animation":"pt2 12s forwards"});
                $(".pt3").css({"animation":"pt3 12s forwards"});
                $(".pt3").css({"-webkit-animation":"pt3 12s forwards"});
                $(".pt4").css({"animation":"pt4 12s forwards"});
                $(".pt4").css({"-webkit-animation":"pt4 12s forwards"});
                $(".pt5").css({"animation":"pt5 12s forwards"});
                $(".pt5").css({"-webkit-animation":"pt5 12s forwards"});
                $(".pt6").css({"animation":"pt6 12s forwards"});
                $(".pt6").css({"-webkit-animation":"pt6 12s forwards"});
            }else{
                $(".pt1,.pt2,.pt3,.pt4,.pt5,.pt6").css({"animation":""});
                $(".pt1,.pt2,.pt3,.pt4,.pt5,.pt6").css({"-webkit-animation":""});  
            }
            if(swiper.activeIndex==14){
                $(".pd1").css({"animation":"pd1 12s forwards"});
                $(".pd1").css({"-webkit-animation":"pd1 12s forwards"});
                $(".pd2").css({"animation":"pd2 12s forwards"});
                $(".pd2").css({"-webkit-animation":"pd2 12s forwards"});
                $(".pd3").css({"animation":"pd3 12s forwards"});
                $(".pd3").css({"-webkit-animation":"pd3 12s forwards"});
                $(".pd4").css({"animation":"pd4 12s forwards"});
                $(".pd4").css({"-webkit-animation":"pd4 12s forwards"});
                $(".pd5").css({"animation":"pd5 12s forwards"});
                $(".pd5").css({"-webkit-animation":"pd5 12s forwards"});
                $(".pd6").css({"animation":"pd6 12s forwards"});
                $(".pd6").css({"-webkit-animation":"pd6 12s forwards"});
                $(".pd7").css({"animation":"pd7 12s forwards"});
                $(".pd7").css({"-webkit-animation":"pd7 12s forwards"});
                $(".pd8").css({"animation":"pd8 12s forwards"});
                $(".pd8").css({"-webkit-animation":"pd8 12s forwards"});
            }else{
                $(".pd1,.pd2,.pd3,.pd4,.pd5,.pd6,.pd7,.pd8").css({"animation":""});
                $(".pd1,.pd2,.pd3,.pd4,.pd5,.pd6,.pd7,.pd8").css({"-webkit-animation":""});  
            }
            if(swiper.activeIndex==15){
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