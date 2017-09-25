function ShowMenu(obj, noid) {
    var block = document.getElementById(noid);
    var n = noid.substr(noid.length - 1);
    if (noid.length == 4) {
        var h2 =getElementsByTagName("h2");
        for (var i = 0; i < h2.length; i++) {
            h2[i].innerHTML = h2[i].innerHTML.replace("+", "-");
        }
    } else {
        var span = document.getElementById("menu")
        .getElementsByTagName("span");
        var h1 = document.getElementById("menu")
        .getElementsByTagName("h1");
        for (var i = 0; i < h1.length; i++) {
            h1[i].innerHTML = h1[i].innerHTML.replace("-", "+");
             	 h1[i].style.color = "";
             	 h1[i].style.background = "";
              }
                obj.style.color = "#fff";
                obj.style.background = "#3b6caa";
                for (var i = 0; i < span.length; i++) {
                    if (i != n) {
                        span[i].className = "no";
                    }
                }
       
    }
    if (block.className == "no") {
        block.className = "";
        obj.innerHTML = obj.innerHTML.replace("+", "-");
    } else {
        block.className = "no";
    }
}