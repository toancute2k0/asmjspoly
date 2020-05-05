
// load all ảnh lên
var images = [];
    for (var i = 0; i < 5; i++) {
        images[i] = new Object();
        images[i].src="img/"+ i +".jpg";
    }
var index = -1;
var timer;
function changeImg() {
    index++;
        if (index > images.length - 1) {
            index = 0;
        }
    var anh = document.getElementById("imgs");
    anh.src = images[index].src;
    var soanh = document.getElementById("number__img");
    soanh.innerHTML = (index + 1) +' / ' +images.length;
    timer = setTimeout("changeImg()", 3000);
}
// next ảnh 
function next() {
    index++;
        if (index >= images.length) {
            index = 0;
        }
    var anh = document.getElementById("imgs");
    anh.src = images[index].src;
    var soanh = document.getElementById("number__img");
    soanh.innerHTML = (index + 1) +' / ' +images.length;
}

// prev trở về trước
function prev() {
    index--;
        if (index < 0) {
            index = images.length - 1;
        }
    var anh = document.getElementById("imgs");
    anh.src = images[index].src;
    var soanh = document.getElementById("number__img");
    soanh.innerHTML = (index + 1) +' / ' +images.length;
}

function stopShow() {
    clearInterval(timer);
}

function runShow() {
    changeImg(); 
}

window.onload = runShow;

