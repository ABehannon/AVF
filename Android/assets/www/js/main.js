//Alex Behannon
//AVF 1211
// 11/8/2012

//init
document.addEventListener("deviceready", ready, false);

//ready
function ready(){
    console.log('Device is Ready');
}

//errors
function onError(message) {
    alert ('Error - ' + message);
}


//GEOLOCATION

//geo starter
function initGeolocation(){
    navigator.geolocation.getCurrentPosition(onSuccessGeo, onError);
}

//good to go! Geo info hoooooo!
function onSuccessGeo(position) {
    alert(
          'Latitude: ' + position.coords.latitude + '\n' +
          'Longitude: ' + position.coords.longitude + '\n' +
          'Altitude: ' + position.coords.altitude + '\n' +
          'Heading: ' + position.coords.heading
          );
}


//CONTACTS

//contact start
function contactInit(){
    var options = new ContactFindOptions();
    options.filter="";
    options.multiple= true;
    var field = ["displayName", "name"];
    navigator.contacts.find(field, onSuccessContacts, options);
}

//Proof of concept
function onSuccessContacts(contacts) {
    alert('Contact Count: ' + contacts.length);
}


//CAMERA

//take picture with button!
function takePicture() {
    navigator.camera.getPicture(onSuccessCamera, onError, {
        quality: 50,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.CAMERA,
        encodingType: Camera.EncodingType.JPEG
    });
}

//Good
function onSuccessCamera(imageData){
    alert('Picture Taken');
}

//ACCELEROMETER

//Accelerometer Doohickey (had to use this word somewhere)
//Position Vars
var x = 0;
var y = 0;

//Spd-Vel Vars
var vx = 0;
var vy = 0;

//Accel Vars
var ax = 0;
var ay = 0;

if (window.DeviceMotionEvent !== undefined) {
    window.ondevicemotion = function (event) {
	ax = event.accelerationIncludingGravity.x * 5;
	ay = event.accelerationIncludingGravity.y * 5;
	document.getElementById("accelX").innerHTML = event.accelerationIncludingGravity.x;
	document.getElementById("accelY").innerHTML = event.accelerationIncludingGravity.y;
	document.getElementById("accelZ").innerHTML = event.accelerationIncludingGravity.z;
}

setInterval(function () {
    });
}

//not exactly much to do here, so heres a moose.
/*
          \`-'.'.   /`.    |\
           \     `-'   \  / '-./\       .'\
            `-.         '.       `-.)\.'  /
               `._       ''-. `:.      _.'
                  `-._...__.::::.__.--'
                       _.-..'''''.
               _.---.__`._.       `-.
        ___..-'             `o>      `-.
   .-```                           <)   )
 .'                         `._.-.`-._.'
/                           /     `-'
|            '             /
|     .       '          .'
 \     \       \       .'|
  '    / -..__.|     /   |
  |   /|   |   \    '\   /
  \   | \  |    |  | |  |
   \ /   . |    |  /  \ |
   | |    \ \   | |   | |
   | \     | `. | |   | |
   |  \    /   `' |  /_  `.
   /'  \   `---/_  `.  `.\.'
    `.\.'        `.\.'
*/

//Main Nav / Buttons
jQuery(document).ready(function() {

//Menu
	(function() {

		var $mainNav    = $('#navigation').children('ul');

		$mainNav.on('mouseenter', 'li', function() {
			var $this    = $(this),
				$subMenu = $this.children('ul');
			if( $subMenu.length ) $this.addClass('hover');
			$subMenu.hide().stop(true, true).slideDown('fast');
		}).on('mouseleave', 'li', function() {
			$(this).removeClass('hover').children('ul').stop(true, true).slideUp('fast');
		});
		
	})();
	
//Menu (Responsive)
	(function() {
		selectnav('nav', {
			label: 'Menu',
			nested: true,
			indent: '-'
		});
				
	})();

//Return to Top Button
	jQuery('#scroll-top-top a').click(function(){
		jQuery('html, body').animate({scrollTop:0}, 300); 
		return false; 
	}); 
	
});

//Twitter Stuff
$(function(){
	$.getJSON("http://search.twitter.com/search.json?q=Omaha&rpp=10&include_entities=true&result_type=popular&callback=?", function(data){
	console.log(data);
	$("#datamsg").html("<p>Twitter Posts Received</p>");
	for (i=0, j=data.results.length; i<j; i++){
		
		$("#twitter-output")
			.append("<li>" +
				"<p>" + "<img src='" + data.results[i].profile_image_url + "' /><br />" + 
				data.results[i].text + ", <em>" + data.results[i].created_at +"</em>" + 
			"</p>" +
			"</li>");
		}
		
	});

});

