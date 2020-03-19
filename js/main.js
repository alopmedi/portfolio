	
var theme_maroon='#800000';
/*Header*/
var header='\
<div class="header-bar">\
	<a id="logo" href="index.html" title="Home Page"><img src="images/wolficon.png" alt = "wolf icon"></a>\
	<div id="burger-icon"><div class="bar"></div><div class="bar"></div><div class="bar"></div></div>\
	<nav class="primary-nav">\
		<a id="nav-projects" href="index.html#main">Home</a>\
		<a id="nav-gaming" href="gaming.html">Gaming</a>\
		<a id="nav-about" href="about.html">About</a>\
		<a id="nav-contact" href="contact.html">Contact</a>\
	</nav>\
</div>\
'
$(document).ready(function(){
/*current page mark*/
	let url=document.URL;
	let page='';
	let inner_page=false;
	
	if(url.includes('about')){page='about';}
	else if(url.includes('gaming')){page='gaming';}
	else if(url.includes('contact')){page='contact'}
	else{ page='projects';
		if(url.includes('projects')) inner_page=true;} 

	if($('header')){
		let tmpl=inner_page?headerP:header;
		let css=inner_page?'border-page-mark':'filled-page-mark';
		$('header').html(tmpl);
		$('#nav-'+page).addClass(css);
	}

	$("#nav-gaming").attr("href","#");

	/* Button to scroll to top*/

	$(window).scroll(function(){
		let pix=200;
		if($("#button").length)
			if ($(document).scrollTop() > pix) $("#button").css("display","flex");
			else $("#button").css("display","none");
	});

	$("#button").click(function(){
		$('html,body').animate({ scrollTop: 0 }, 'normal');
        return false;
	});

	/*Burger menu when in mobile screen*/
	$('#burger-icon').hover(function(){
		$('.bar:nth-child(n)').css({'background-color':'black'});
	},function(){
		$('.bar:nth-child(n)').css({'background-color':'#333'});
	})
	$('#burger-icon').click(function(){
		if($('.bar:nth-child(1)').css('top')=='0px'){
			$('.bar:nth-child(1)').css({'transform':'rotate(-45deg)','top':'8px'});
			$('.bar:nth-child(2)').css({'transform':'rotate(45deg)'});
			$('.bar:nth-child(3)').css({'transform':'rotate(45deg)','top':'-8px'});
			$('.primary-nav').addClass('burger');}
		else{
			$('.bar:nth-child(n)').css({'transform':'rotate(0)','top':'0'});
			$('.primary-nav').removeClass('burger');}
	})
	
	/* animation on gaming page*/
	if(page=='gaming'){$("#motion-1").animate({top:"100vh"},500,"swing");}
	else{
		$("#nav-gaming").click(function(){
		var motiondiv=$('<div id="motion"></div>');
		motiondiv.appendTo('body');
		$("#motion").animate({height:"100vh"},500,"swing",function(){
			if(inner_page) window.location.assign('../gaming.html');
			else window.location.assign('gaming.html');});
			return false;
		})
	}
})

/*much of this code was found online via different forums, websites, and github pages*/