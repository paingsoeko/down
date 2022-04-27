var url = document.getElementById("url");
var btn = document.getElementById("myBtn");
var filters__active = document.getElementById("projects");



btn.onclick = function() {
  console.log(url.value);
  document.getElementById("widgetApi").setAttribute("src", "https://yt-download.org/api/widget?url="+url.value); 
  filters__active.style.height = "120vh";       
}


iFrameResize({ log: false, minHeight: 435 }, '#buttonApi')





