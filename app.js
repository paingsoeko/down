
function myFunction() {
  var url = document.getElementById("url");

    document.getElementById("demo").innerHTML = url.value;
    // document.getElementById("widgetApi").style.display="inline";
    document.getElementById("widgetApi").setAttribute("src", "https://yt-download.org/api/widget?url="+currentVal);
  }
