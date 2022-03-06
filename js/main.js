
// dark theme
document.getElementById('dark').onclick = function(ev) {

	ev.preventDefault;
	darkmodesystem();
}

var clicked = false;

function darkmodesystem() {

	if (!clicked) {

		clicked = true;
		document.body.style.transition = "all 2s";
		document.body.style.backgroundColor = "black";
		document.getElementById('section-header275').style.color = 'white';
		document.getElementById('section-header275').style.borderColor = 'white';
		document.getElementById('section-header245').style.color = 'white';
		document.getElementById('section-header245').style.borderColor = 'white';
		document.getElementById('section-header225').style.color = 'white';
		document.getElementById('section-header225').style.borderColor = 'white';
		document.getElementById('section-header200').style.color = 'white';
		document.getElementById('section-header200').style.borderColor = 'white';
		document.getElementById('section-header185').style.color = 'white';
		document.getElementById('section-header185').style.borderColor = 'white';
		document.getElementById('section-header155').style.color = 'white';
		document.getElementById('section-header155').style.borderColor = 'white';
		document.getElementById('section-header125').style.color = 'white';
		document.getElementById('section-header125').style.borderColor = 'white';
		document.getElementById('section-header95').style.color = 'white';
		document.getElementById('section-header95').style.borderColor = 'white';
		document.getElementById('section-header85').style.color = 'white';
		document.getElementById('section-header85').style.borderColor = 'white';
		document.getElementById('section-header70').style.color = 'white';
		document.getElementById('section-header70').style.borderColor = 'white';
		document.getElementById('section-header50').style.color = 'white';
		document.getElementById('section-header50').style.borderColor = 'white';
		document.getElementById('section-header22').style.color = 'white';
		document.getElementById('section-header22').style.borderColor = 'white';
		document.getElementById('section-header').style.color = 'white';
		document.getElementById('section-header').style.borderColor = 'white';
		document.getElementById('section-header1').style.color = 'white';
		document.getElementById('section-header1').style.borderColor = 'white';
		document.getElementById('section-header2').style.color = 'white';
		document.getElementById('section-header2').style.borderColor = 'white';
		document.getElementById('section-header3').style.color = 'white';
		document.getElementById('section-header3').style.borderColor = 'white';

	} else {

		clicked = false;
		document.body.style.transition = "all 2s";
		document.body.style.backgroundColor = "white";
		document.getElementById('section-header275').style.color = 'black';
		document.getElementById('section-header275').style.borderColor = 'black';
		document.getElementById('section-header245').style.color = 'black';
		document.getElementById('section-header245').style.borderColor = 'black';
		document.getElementById('section-header225').style.color = 'black';
		document.getElementById('section-header225').style.borderColor = 'black';
		document.getElementById('section-header200').style.color = 'black';
		document.getElementById('section-header200').style.borderColor = 'black';
		document.getElementById('section-header185').style.color = 'black';
		document.getElementById('section-header185').style.borderColor = 'black';
		document.getElementById('section-header155').style.color = 'black';
		document.getElementById('section-header155').style.borderColor = 'black';
		document.getElementById('section-header125').style.color = 'black';
		document.getElementById('section-header125').style.borderColor = 'black';
		document.getElementById('section-header95').style.color = 'black';
		document.getElementById('section-header95').style.borderColor = 'black';
		document.getElementById('section-header85').style.color = 'black';
		document.getElementById('section-header85').style.borderColor = 'black';
		document.getElementById('section-header70').style.color = 'black';
		document.getElementById('section-header70').style.borderColor = 'black';
		document.getElementById('section-header50').style.color = 'black';
		document.getElementById('section-header50').style.borderColor = 'black';
		document.getElementById('section-header22').style.color = 'black';
		document.getElementById('section-header22').style.borderColor = 'black';
		document.getElementById('section-header').style.color = 'black';
		document.getElementById('section-header').style.borderColor = 'black';
		document.getElementById('section-header1').style.color = 'black';
		document.getElementById('section-header1').style.borderColor = 'black';	
		document.getElementById('section-header2').style.color = 'black';
		document.getElementById('section-header2').style.borderColor = 'black';	
		document.getElementById('section-header3').style.color = 'black';
		document.getElementById('section-header3').style.borderColor = 'black';
		
     
	}
}
// end dark theme


//setting owl carousel
 let navText = ["<i class='bx bx-chevron-left'></i>","<i class='bx bx-chevron-right'></i>"]

$('#hero-carousel').owlCarousel({
	items: 1,
	dots:false,
	loop:true,
	nav:true,
	navText: navText,
	autoplay: true,
	autoplayHoverPause:true
})

$('#top-movies-slide').owlCarousel({
		items:6,
		dots:false,
		loop:true,
        autoplay:true,
		autoplayHoverPause:true	
})

$('.movies-slide').owlCarousel({
	items:6,
	dots:false,
	nav:true,
	navText: navText,
	margin: 15
})
//end setting owl carousel




// search bar
function search_movingpicture() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('movingpicture');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="";                 
        }
    }
}
// end search bar


// teaser hero

$(document).ready(function(){
	var $playbtn = $(".teaser"),
	$openvid = $(".big-teaser"),
    $closevid = $(".bx-window-close");

	$playbtn.click(function(){
         $openvid.fadeIn();
	});
    
	$closevid.click(function(){
        $openvid.fadeOut();
	});
});
	


//end teaser hero

