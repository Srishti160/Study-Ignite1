function loadComponentFromFile(filepath, location) {
    var client = new XMLHttpRequest();
    client.open('GET', filepath);
    client.onreadystatechange = function() {
         location.innerHTML = client.responseText;
    }
    client.send();
  }
 
  var sidebar_container = document.getElementById("sidebar_container");
  var content = loadComponentFromFile('./sidebar.html', sidebar_container);