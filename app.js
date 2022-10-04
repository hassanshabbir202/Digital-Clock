setInterval(curTime,1000);
function curTime() {
    var p = "PM";
    var time = new Date();
    var currentTime = document.getElementById("clock");
    var h = time.getHours();
    var m = time.getMinutes();
    var s = time.getSeconds();
    h < 12 ? p = "AM" : "PM"
    if(h > 12){
        h = h-12
    }else if(h < 10){
        h = "0" + h;
    }else if(m < 10) {
        m = "0" + m;
    }else if(s < 10) {
        s = "0" + s;
    }
    currentTime.innerHTML = h + ":" + m + ":" + s + " " + p;
}