
setInterval(time, 1000);
function time() {
var dateObj = new Date(),
      hour = dateObj.getHours(),
      minute = dateObj.getMinutes(),
      second = dateObj.getSeconds();

function nullPlus(data) { 
    if (data < 10) { data = "0" + data } else { data = data };
    return data;
}

hour = nullPlus(hour);
minute = nullPlus(minute);
second = nullPlus(second);
document.getElementsByTagName('body')[0].innerHTML = '';
document.write(hour + ':' + minute + ':' + second);
}