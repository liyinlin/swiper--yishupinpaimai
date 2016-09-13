    	var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        direction: 'vertical',
        onInit:function(swiper){
        	$(".topb").css({"animation":"topb 4s forwards"});
        	$(".topb").css({"-webkit-animation":"topb 4s forwards"});
        	$(".topc").css({"animation":"topc 4s forwards"});
        	$(".topc").css({"-webkit-animation":"topc 4s forwards"});
            $(".op").css({"animation":"zhuan 4s infinite linear",});
            $(".op").css({"-webkit-animation":"zhuan 4s infinite linear",});
            $(".op").css({"-moz-animation":"zhuan 4s infinite linear",});
            $(".op").css({"-ms-animation":"zhuan 4s infinite linear",});
            $(".op").css({"-o-animation":"zhuan 4s infinite linear",});
        },
        onSlideChangeStart:function(swiper){
	    	if(swiper.activeIndex==0){
	        		$(".topb").css({"animation":"topb 4s forwards"});
        			$(".topb").css({"-webkit-animation":"topb 4s forwards"});
        			$(".topc").css({"animation":"topc 4s forwards"});
        			$(".topc").css({"-webkit-animation":"topc 4s forwards"});
	        	}else{
	        		$(".topb,.topc").css({"animation":""});
	        		$(".topb,.topc").css({"-webkit-animation":""});  
		        }
	        if(swiper.activeIndex==2){
                $(".txt1").css({"-webkit-animation":"txt1 8s forwards"});
                $(".txt1").css({"animation":"txt1 8s forwards"});
                $(".txt2").css({"-webkit-animation":"txt2 8s forwards"});
                $(".txt2").css({"animation":"txt2 8s forwards"});
                $(".txt3").css({"-webkit-animation":"txt3 8s forwards"});
                $(".txt3").css({"animation":"txt3 8s forwards"});
                $(".txt4").css({"-webkit-animation":"txt4 8s forwards"});
                $(".txt4").css({"animation":"txt4 8s forwards"});
                $(".txt5").css({"-webkit-animation":"txt5 8s forwards"});
                $(".txt5").css({"animation":"txt5 8s forwards"});
            }else{
                $(".txt1,.txt2,.txt3,.txt4,.txt5").css({"animation":""});
                $(".txt1,.txt2,.txt3,.txt4,.txt5").css({"-webkit-animation":""});  
            }
	        if(swiper.activeIndex==3){
	        	$(".center3a").css({"animation":"center3a 8s forwards",});
        		$(".center3a").css({"-webkit-animation":"center3a 8s forwards",});
        		$(".center3b").css({"animation":"center3b 8s forwards",});
        		$(".center3b").css({"-webkit-animation":"center3b 8s forwards",});
        		$(".center3 .p1").css({"animation":"p1 15s forwards",});
        		$(".center3 .p1").css({"-webkit-animation":"p1 15s forwards",});
        		$(".center3 .p2").css({"animation":"p2 15s forwards",});
        		$(".center3 .p2").css({"-webkit-animation":"p2 15s forwards",});
        		$(".center3 .p3").css({"animation":"p3 15s forwards",});
        		$(".center3 .p3").css({"-webkit-animation":"p3 15s forwards",});
        		$(".center3 .p4").css({"animation":"p4 15s forwards",});
        		$(".center3 .p4").css({"-webkit-animation":"p4 15s forwards",});
        		$(".center3 .p5").css({"animation":"p5 15s forwards",});
        		$(".center3 .p5").css({"-webkit-animation":"p5 15s forwards",});
        	}else{
        		$(".center3 .p1,.center3 .p2,.center3 .p3,.center3 .p4,.center3 .p5,.center3a,.center3b").css({"animation":"",});
        		$(".center3 .p1,.center3 .p2,.center3 .p3,.center3 .p4,.center3 .p5,.center3a,.center3b").css({"-webkit-animation":"",});
	        }
	         if(swiper.activeIndex==4){
	         	$(".center4a").css({"animation":"center4a 10s forwards",});
        		$(".center4a").css({"-webkit-animation":"center4a 10s forwards",});
        		$(".center4b").css({"animation":"center4b 10s forwards",});
        		$(".center4b").css({"-webkit-animation":"center4b 10s forwards",});
        		$(".tx1").css({"animation":"tx1 10s forwards",});
        		$(".tx1").css({"-webkit-animation":"tx1 10s forwards",});
        		$(".tx2").css({"animation":"tx2 10s forwards",});
        		$(".tx2").css({"-webkit-animation":"tx2 10s forwards",});
        		$(".tx3").css({"animation":"tx3 10s forwards",});
        		$(".tx3").css({"-webkit-animation":"tx3 10s forwards",});
        		$(".tx4").css({"animation":"tx4 10s forwards",});
        		$(".tx4").css({"-webkit-animation":"tx4 10s forwards",});
        		$(".tx5").css({"animation":"tx5 10s forwards",});
        		$(".tx5").css({"-webkit-animation":"tx5 10s forwards",});
        		$(".tx6").css({"animation":"tx6 10s forwards",});
        		$(".tx6").css({"-webkit-animation":"tx6 10s forwards",});
        	}else{
        		$(".center4a,.center4b,.tx1,.tx2,.tx3,.tx4,.tx5,.tx6").css({"animation":"",});
        		$(".center4a,.center4b,.tx1,.tx2,.tx3,.tx4,.tx5,.tx6").css({"-webkit-animation":"",}); 
	        } 
	        if(swiper.activeIndex==5){
	        	$(".center5a").css({"animation":"center5a 3s forwards",});
        		$(".center5a").css({"-webkit-animation":"center5a 3s forwards",});
        		$(".center5b").css({"animation":"center5b 3s forwards",});
        		$(".center5b").css({"-webkit-animation":"center5b 3s forwards",});
        		$(".center5c").css({"animation":"center5c 3s forwards",});
        		$(".center5c").css({"-webkit-animation":"center5c 3s forwards",});
        		$(".px1").css({"animation":"px1 10s forwards",});
        		$(".px1").css({"-webkit-animation":"px1 10s forwards",});
        		$(".px2").css({"animation":"px2 10s forwards",});
        		$(".px2").css({"-webkit-animation":"px2 10s forwards",});
        		$(".px3").css({"animation":"px3 10s forwards",});
        		$(".px3").css({"-webkit-animation":"px3 10s forwards",});
        		$(".px4").css({"animation":"px4 10s forwards",});
        		$(".px4").css({"-webkit-animation":"px4 10s forwards",});
        		$(".px5").css({"animation":"px5 10s forwards",});
        		$(".px5").css({"-webkit-animation":"px5 10s forwards",});
        	}else{
        		$(".center5a,.center5b,.center5c,.px1,.px2,.px3,.px4,.px5").css({"animation":"",});
        		$(".center5a,.center5b,.center5c,.px1,.px2,.px3,.px4,.px5").css({"-webkit-animation":"",});  
	        } 
	        if(swiper.activeIndex==6){
        		$(".center6b").css({"animation":"center6b 6s forwards",});
        		$(".center6b").css({"-webkit-animation":"center6b 6s forwards",});
        		$(".txte1").css({"-webkit-animation":"txte1 11s forwards",});
        		$(".txte2").css({"-webkit-animation":"txte2 11s forwards",});
        		$(".txte3").css({"-webkit-animation":"txte3 11s forwards",});
        		$(".txte4").css({"-webkit-animation":"txte4 11s forwards",});
        		$(".txte5").css({"-webkit-animation":"txte5 11s forwards",});
        		$(".txte6").css({"-webkit-animation":"txte6 11s forwards",});
        		$(".txte1").css({"animation":"txte1 11s forwards",});
        		$(".txte2").css({"animation":"txte2 11s forwards",});
        		$(".txte3").css({"animation":"txte3 11s forwards",});
        		$(".txte4").css({"animation":"txte4 11s forwards",});
        		$(".txte5").css({"animation":"txte5 11s forwards",});
        		$(".txte6").css({"animation":"txte6 11s forwards",});
        	}else{
        		$(".center6b,.txte1,.txte2,.txte3,.txte4,.txte5,.txte6").css({"animation":"",});
        		$(".center6b,.txte1,.txte2,.txte3,.txte4,.txte5,.txte6").css({"-webkit-animation":"",}); 
	        }
	        if(swiper.activeIndex==7){
	        	$(".center7a").css({"animation":"center7a 8s forwards",});
        		$(".center7a").css({"-webkit-animation":"center7a 8s forwards",});
        		$(".center7b").css({"animation":"center7b 8s forwards",});
        		$(".center7b").css({"-webkit-animation":"center7b 8s forwards",});
                $(".text1").css({"animation":"text1 12s forwards",});
                $(".text2").css({"animation":"text2 12s forwards",});
                $(".text3").css({"animation":"text3 12s forwards",});
                $(".text4").css({"animation":"text4 12s forwards",});
                $(".text5").css({"animation":"text5 12s forwards",});
        		$(".text1").css({"-webkit-animation":"text1 12s forwards",});
        		$(".text2").css({"-webkit-animation":"text2 12s forwards",});
        		$(".text3").css({"-webkit-animation":"text3 12s forwards",});
        		$(".text4").css({"-webkit-animation":"text4 12s forwards",});
        		$(".text5").css({"-webkit-animation":"text5 12s forwards",});
        	}else{
        		$(".center7a,.center7b,.text1,.text2,.text3,.text4,.text5").css({"animation":"",});
        		$(".center7a,.center7b,.text1,.text2,.text3,.text4,.text5").css({"-webkit-animation":"",}); 
	        }
	        if(swiper.activeIndex==8){
	        	$(".center8a").css({"animation":"center8a 8s forwards",});
        		$(".center8a").css({"-webkit-animation":"center8a 8s forwards",});
        		$(".center8b").css({"animation":"center8b 8s forwards",});
        		$(".center8b").css({"-webkit-animation":"center8b 8s forwards",});
                $(".zi1").css({"animation":"py 8s forwards",});
                $(".zi2").css({"animation":"pz 8s forwards",});
                $(".zi3").css({"animation":"py 8s forwards",});
                $(".zi4").css({"animation":"pz 8s forwards",});
                $(".zi5").css({"animation":"py 8s forwards",});
        		$(".zi1").css({"-webkit-animation":"py 8s forwards",});
        		$(".zi2").css({"-webkit-animation":"pz 8s forwards",});
        		$(".zi3").css({"-webkit-animation":"py 8s forwards",});
        		$(".zi4").css({"-webkit-animation":"pz 8s forwards",});
        		$(".zi5").css({"-webkit-animation":"py 8s forwards",});
        	}else{
        		$(".center8a,.center8b,.zi1,.zi2,.zi3,.zi4,.zi5").css({"animation":"",});
        		$(".center8a,.center8b,.zi1,.zi2,.zi3,.zi4,.zi5").css({"-webkit-animation":"",}); 
	        }
	        if(swiper.activeIndex==9){
	        	$(".center9a").css({"animation":"center9a 6s forwards",});
        		$(".center9a").css({"-webkit-animation":"center9a 6s forwards",});
        		$(".center9b").css({"animation":"center9b 6s forwards",});
        		$(".center9b").css({"-webkit-animation":"center9b 6s forwards",});
        		$(".ti1").css({"-webkit-animation":"ti1 10s forwards",});
        		$(".ti2").css({"-webkit-animation":"ti2 10s forwards",});
        		$(".ti3").css({"-webkit-animation":"ti3 10s forwards",});
        		$(".ti4").css({"-webkit-animation":"ti4 10s forwards",});
        		$(".ti5").css({"-webkit-animation":"ti5 10s forwards",});
        		$(".ti1").css({"animation":"ti1 10s forwards",});
        		$(".ti2").css({"animation":"ti2 10s forwards",});
        		$(".ti3").css({"animation":"ti3 10s forwards",});
        		$(".ti4").css({"animation":"ti4 10s forwards",});
        		$(".ti5").css({"animation":"ti5 10s forwards",});
        	}else{
        		$(".center9a,.center9b,.ti1,.ti2,.ti3,.ti4,.ti5").css({"animation":"",});
        		$(".center9a,.center9b,.ti1,.ti2,.ti3,.ti4,.ti5").css({"-webkit-animation":"",}); 
	        }
            if(swiper.activeIndex==10){
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