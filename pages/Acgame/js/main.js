// JavaScript Document
jQuery(document).ready(function($){ 

	$('#menu').slideToggle(500); 
    $('#menus').mouseover(function(){$('#m1,#m2').css('border-color','#41c0d0'); });
	$('#menus').mouseout(function(){$('#m1,#m2').css('border-color','#ff99c4'); $('#menus').css('background-color','');});
	$('#menus').click(function(){$('html,body').stop(); $('#menus').css('background-color',''); $('#menu').slideToggle(200); 	$('#m1,#m2').delay(500).fadeIn(500); });
	$('#home').click(function(){$('html,body').stop(); $('html,body').animate({scrollTop:$('html').offset().top}, 500);});
	$('#about').click(function(){$('html,body').stop(); $('html,body').animate({scrollTop:$('#aboutshow').offset().top}, 500);});
	$('#Anime').click(function(){$('html,body').stop(); $('html,body').animate({scrollTop:$('#showbox1').offset().top}, 500);});
	$('#contact').click(function(){$('html,body').stop(); $('html,body').animate({scrollTop:$('#contactshow').offset().top}, 500);});
	$('#more').click(function(){$('html,body').stop(); $('html,body').animate({scrollTop:$('#showbox1').offset().top}, 2000);});
	$('.only').click(function(){$('html,body').stop(); $('html,body').animate({scrollTop:$('html').offset().top}, 1000);});

	$('.favbox').mouseover(function(w) {
        							var w=$('.favbox').width();
									$('.favboxcontect').width(w).height(w * 0.666666);
									$('.favshow').width(w*0.35).height(w*0.15);
									});
									
	$('.box').mouseover(function(w) {
        							var w=$('.box').width();
									$('.boxcontect').width(w).height(w * 1.5);
									$('.boxshow').width(w).height(w*1.5);
									});
									
	/*home*/
	$('.dong').mouseover(function(){ $('.dongs').show(10); $('.yins,.wus,.kes,.yous,.yings').hide(0);});
	$('.d').mouseover(function(){$(this).stop(); $('.dongs').show(0);});
	$('.d').mouseout(function(){ $(this).delay(200); $('.dongs').hide(0);});
	
	$('.yin').mouseover(function(){ $('.yins').show(10); $('.dongs,.wus,.kes,yous,yings').hide(0);});
	$('.y').mouseover(function(){$(this).stop(); $('.yins').show(0);});
	$('.y').mouseout(function(){ $(this).delay(200); $('.yins').hide(0);});

	$('.wu').mouseover(function(){ $('.wus').show(10); $('.dongs,yins,kes,yous,yings').hide(0);});
	$('.w').mouseover(function(){$(this).stop(); $('.wus').show(0);});
	$('.w').mouseout(function(){ $(this).delay(200); $('.wus').hide(0);});
	
	$('.ke').mouseover(function(){ $('.kes').show(10); $('.dongs,.yins,.wus,yous,yings').hide(0);});
	$('.k').mouseover(function(){$(this).stop(); $('.kes').show(0);});
	$('.k').mouseout(function(){ $(this).delay(200); $('.kes').hide(0);});
	
	$('.you').mouseover(function(){ $('.yous').show(10); $('.dongs,.yins,.wus,kes,yings').hide(0);});
	$('.yo').mouseover(function(){$(this).stop(); $('.yous').show(0);});
	$('.yo').mouseout(function(){ $(this).delay(200); $('.yous').hide(0);});

	$('.ying').mouseover(function(){ $('.yings').show(10); $('.dongs,.yins,.wus,kes,yous').hide(0);});
	$('.yi').mouseover(function(){$(this).stop(); $('.yings').show(0);});
	$('.yi').mouseout(function(){ $(this).delay(200); $('.yings').hide(0);});
		
	$('#only2').click(function(){$('html,body').stop(); $('html,body').animate({scrollTop:$('html').offset().top}, 1000);});
	
});


$(function(){ $("#showbanner").responsiveSlides({
					auto: true,
					pager: false,
					nav: true,
					speed: 500,
					pause: true,
					namespace:'centered-btns',
					prevText: "",
					nextText: "",
				  });
			});		
			
function ttxx(div,cssname,offset){
									var a,b,c,d;
									d=$(div).offset().top;
									a=eval(d + offset);
									b=$(window).scrollTop(); 
									c=$(window).height();
									if(b+c>a){
										$((div)).addClass((cssname));
											 }
								  }
     
	$(document).ready(function(e) {
	$(window).scroll(function(){
								ttxx(".show3",'ttxxscaleY',0);
								ttxx("#all",'ttxxtop',0);
								ttxx(".b1",'ttxxtop',0);
								ttxx(".b2",'ttxxtop',0);
								ttxx(".b3",'ttxxtop',0);
								ttxx(".b4",'ttxxtop',0);
								ttxx(".b5",'ttxxtop',0);
								ttxx(".b6",'ttxxtop',0);
								ttxx(".b7",'ttxxtop',0);
								ttxx(".b8",'ttxxtop',0);
								ttxx("#clearanceb2",'ttxxleft3',0);
								ttxx("#clearanceb4",'ttxxright3',0);
								ttxx(".clearance1",'ttxxright3',0);
								ttxx(".clearance2",'ttxxleft3',0);
								ttxx(".clearance",'ttxxright3',0);
								ttxx(".clearance3",'ttxxleft3',0);
								ttxx("#aboutshow",'ttxxtop',0);
								ttxx("#contactshow",'ttxxtop',0);
								ttxx(".only",'ttxxtop',0);								
								});
								  	});
								  	
