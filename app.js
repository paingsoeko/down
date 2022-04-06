
var act = document.getElementById("act");
//Get input url
var url = document.getElementById("url");

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

const switchMode = document.getElementById('switch-mode');

var format= 'mp3';
//Change format
switchMode.addEventListener('change', function () {
	if(this.checked) {
		document.body.classList.add('dark');
        btn.onclick = function() {
            modal.style.display = "block";
            document.getElementById("buttonApi").setAttribute("src", "https://yt-download.org/api/button/mp3?url="+url.value); 
                     
          }
	} else {
        btn.onclick = function() {
            modal.style.display = "block";
            document.getElementById("buttonApi").setAttribute("src", "https://yt-download.org/api/button/mp4?url="+url.value); 
        
          }
	}
})

// When the user clicks the button, open the modal 


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
	console.log("hiwindows");
  }
}
iFrameResize({ log: false, minHeight: 435 }, '#buttonApi')





