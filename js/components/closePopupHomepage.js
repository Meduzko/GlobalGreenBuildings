(function() {

	let ESC_CODE = 27;
	/* Homepage popup*/
	let popup = document.getElementById("login_popup");
	/* Segment page popup */
	let moreInfoPopup = document.getElementById('c-modal__more'); 
	let segment_body = document.getElementById('segment_body'); 
	
	$(document).keyup(function(e) {
        if (e.keyCode == ESC_CODE) {
           	$(".popup_modal").removeClass("modal_visible");
  			$(".appoitment_popup_back").removeClass("modal_visible");
            /*
            moreInfoPopup.style.display = 'none';
            segment_body.classList.remove("c-modal--scroll");
            */
        }
    });

})();