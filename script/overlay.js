
$( "#work img" ).click(function() {

	if(currentBrowser == "firefox"){
		alert("I'm using an overlay to display the projects, and it is simply broken on Firefox 😔\nPlease try Safari, Opera or Chrome! 🥳");
		return;
	}

    $('#overlay').removeClass('hidden');
    $('#overlay').addClass('visible');
    $('body').addClass('noScroll');
	$('#work, header ,footer').addClass('blur');
	$('#close_btn').removeClass('hideCloseBtn');
	renderProject(this);
});

$( "#close_btn" ).click(function() {
    $('#overlay').addClass('hidden');
    $('#overlay').removeClass('visible');
    $('body').removeClass('noScroll');
    $('#work, header ,footer').removeClass('blur');
    setTimeout(function() {
		$('#close_btn').addClass('hideCloseBtn');
		document.getElementById("port_img").remove();	
	}, 300);
});

$('#overlay').on('click', function(e) {
	if (e.target !== this){
		return;
	}
	$('#overlay').addClass('hidden');
    $('#overlay').removeClass('visible');
    $('body').removeClass('noScroll');
    $('#work, header ,footer').removeClass('blur');
    setTimeout(function() {
		$('#close_btn').addClass('hideCloseBtn');
		document.getElementById("port_img").remove();	
	}, 300);
});

function renderProject(event){
    //console.log(event);
	let targetId = event.id;
	let targetObj;
	let currentIndex;	
	for(var i = 0; i<projects.length; i++){
		if(targetId == projects[i][0]){
			currentIndex = i;
			targetObj = projects[i][1];
		}
	}
	let img = images[currentIndex];
	let ref = document.getElementById("imageSelector");
	let parentDiv = ref.parentNode;
	parentDiv.insertBefore(img, ref)

	$("#content h1").html(targetObj.h1);
	$("#content #client").html(targetObj.item_info.client);
	$("#content #role").html(targetObj.item_info.role);
	$("#content #period").html(targetObj.item_info.period);
	$("#content #cont_ing").html(targetObj.text.text0);
}