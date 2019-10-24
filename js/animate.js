var kolejka= 54;
var refreshIntervalId=0;
 jQuery(document).ready(function($) 
 { 
 		$("#bg5").fadeOut();
 		$("#nav1").click(function() {
    	$('html,body').animate({
        scrollTop: $("#bg2").offset().top},
        'slow');
     
});
$("#nav2").click(function() {
    	$('html,body').animate({
        scrollTop: $("#bg3").offset().top},
        'slow');
});
$("#nav4").click(function() {
    	$('html,body').animate({
        scrollTop: $("#bg5").offset().top},
        'slow');
});
$("#nav3").click(function() {
    	$('html,body').animate({
        scrollTop: $("#bg4").offset().top},
        'slow');
});

$("#button-portfolio").click(function(){
    $("#bg3").fadeOut();
    $("#nav2").fadeOut();
    $("#nav4").fadeIn();
    $("#bg5").fadeIn();
    $('html,body').animate({
        scrollTop: $("#bg5").offset().top},
        'slow');
		
		refreshIntervalId = setInterval(function(){ 
		document.getElementById('envira-gallery-image-' + kolejka).classList.add('slideUp');
		kolejka=kolejka+1;	
	if(kolejka > 70) { clearInterval(refreshIntervalId);}
	}, 300);				       
});

	documentEl = $(document);
	var ikonki1 = $('#test1');
	var ikonki2 = $('#test3');
	var ikonki3 = $('#test5');
	ikonkiOffset1 = ikonki1.offset().top/2;
	ikonkiOffset2 = ikonki2.offset().top/2;
	ikonkiOffset3 = ikonki3.offset().top/2;
	if(!$('#test6').hasClass("slideUp")) {
	documentEl.on('scroll', function(){
		if (documentEl.scrollTop() > ikonkiOffset1){			
		document.getElementById('test1').classList.add('slideUp');
		document.getElementById('test2').classList.add('slideUp');
		document.getElementById('test11').classList.add('slideUp');
		document.getElementById('test22').classList.add('slideUp');		
 			}
 			if (documentEl.scrollTop() > ikonkiOffset2){			
		document.getElementById('test3').classList.add('slideUp');
		document.getElementById('test4').classList.add('slideUp');
		document.getElementById('test33').classList.add('slideUp');
		document.getElementById('test44').classList.add('slideUp');		
 			}
 			if (documentEl.scrollTop() > ikonkiOffset3){			
		document.getElementById('test5').classList.add('slideUp');
		document.getElementById('test6').classList.add('slideUp');
		document.getElementById('test55').classList.add('slideUp');
		document.getElementById('test66').classList.add('slideUp');		
 			}
	});
	}

 });