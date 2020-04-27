// select theo tung muc gia
function showDiv(select) {
    var x = document.getElementsByClassName("cells1");
    var y = document.getElementsByClassName("cells9");
        if (select.value == 1) {
            for (var i = 0; i < 15; i++) {
                x[i].style.display = "block";
                y[0].style.display = "block";
                y[1].style.display = "block";
            }
        }
        else if (select.value == 2) {
            for (var i = 0; i < 20; i++) {
                x[i].style.display = "block";
                y[0].style.display = "block";
                y[1].style.display = "block";
            }
        }
        else if (select.value == 3) {
            for (var i = 0; i < 30; i++) {
                x[i].style.display = "block";
                y[0].style.display = "block";
                y[1].style.display = "block";
            }
        }
        else if (select.value == 4) {
            for (var i = 0; i < 40; i++) {
                x[i].style.display = "block";
                y[0].style.display = "block";
                y[1].style.display = "block";
            }
        }
        else {
            for (var i = 0; i < 40; i++) {
                x[i].style.display = "none";
                y[0].style.display = "none";
                y[1].style.display = "none";
            }
        }
}

//khai báo tất cả biến gia trị
    var a = document.getElementsByName("x");
    var b = document.getElementsByName("gia");
    var c = document.getElementsByName("soluong");
    var d = document.getElementsByName("thanhtien");

// disabled tất cả các tick ko cho chọn
function checkAll(e) {
    var elems = document.getElementsByName("x");
    if (e.checked) {
        for (var i = 0; i < elems.length; i++) {
            elems[i].checked = true;
            c[i].disabled = false;
        }
    }
    else {
        for (var i = 0; i < elems.length; i++) {
            elems[i].checked = false;
            c[i].disabled = true;
            c[i].value = 0;
            d[i].innerHTML = 0;
            tinhtien();
        }
    }
}

// disable chọn sản phẩm
function chonsp() {
    for (var i = 0; i < a.length; i++) {
        if (a[i].checked == true) {
            c[i].disabled = false;
        }
        else {
            c[i].disabled = true;
            c[i].value = 0;
            d[i].innerHTML = 0;
            tinhtien();
        }
    }
}

// tính thành tiền và tổng tiền
function tinhtien() {
    var tongtien = 0;
    for (var i = 0; i < c.length; i++) {
        if (c[i].disabled == false) {
            var soluong = c[i].value;
            var gia = b[i].innerHTML;
            var tong = Number(soluong) * Number(gia);
            d[i].innerHTML = tong;
            tongtien += tong;
        }
    }
    document.getElementById("sum-money").innerText = tongtien;
}
