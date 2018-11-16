//My building popup
$(".my_building_popup").click(function(){
  $(".my_buildings_popup_body").addClass("modal_visible");
  $(".fog").addClass("modal_visible");

});

$(".popup-close").click(function(){
  $(".my_buildings_popup_body").removeClass("modal_visible");
  $(".fog").removeClass("modal_visible");
});

$(".mysegments_button").click(function(){
  $(".my_buildings_popup_body").removeClass("modal_visible");
  $(".fog").removeClass("modal_visible");
});

$(document).click(function(e) {
  //if you click on anything except the modal itself or the "open modal" link, close the modal
  if (!$(e.target).closest(".my_buildings_popup_body, .popup-body, .my_building_popup").length) {
    $("body").find(".my_buildings_popup_body").removeClass("modal_visible");
    $("body").find(".fog").removeClass("modal_visible");
  }
});



//Appointement popup
$(".js-open-modal").click(function(){
  $(".popup_modal").addClass("modal_visible");
  $(".appoitment_popup_back").addClass("modal_visible");

});
/*
$(".js-close-modal").click(function(){
  $(".popup_modal").removeClass("modal_visible");
  $(".appoitment_popup_back").removeClass("modal_visible");
});
*/
$(".close_img").click(function(){
  $(".popup_modal").removeClass("modal_visible");
  $(".appoitment_popup_back").removeClass("modal_visible");
});

$(document).click(function(event) {
  //if you click on anything except the modal itself or the "open modal" link, close the modal
  if (!$(event.target).closest(".popup_modal,.js-open-modal").length) {
    $("body").find(".popup_modal").removeClass("modal_visible");
    $("body").find(".appoitment_popup_back").removeClass("modal_visible");
  }
});


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
  			$("body").find(".my_buildings_popup_body").removeClass("modal_visible");

  			//Segment page more info popup
    		$("body").find(".fog").removeClass("modal_visible");
    		$('body').removeClass('c-modal--scroll');
       		 $('.c-modal').removeClass('c-modal--open');
            /*
            moreInfoPopup.style.display = 'none';
            segment_body.classList.remove("c-modal--scroll");
            */
        }
    });

})();