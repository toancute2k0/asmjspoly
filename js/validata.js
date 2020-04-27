// bắt lỗi form đăng nhập
function validation () {
    // kiểm tra mã sinh viên
    var name = document.getElementById("name").value;
    var error__message1 = document.getElementById("error__message1");
        error__message1.style.padding = "4px 4px 4px 10px";
        if (name == "") {
            error__message1.innerHTML = "(*) Mã Sinh Viên không được để trống";
            document.getElementById("name").style.backgroundColor = "yellow";
            document.getElementById("name").focus();
            return false;
        }
        else {
            error__message1.innerHTML = "";
            document.getElementById("name").style.backgroundColor = "white";
        }

    //kiem tra fullname sinh vien
    var fullname = document.getElementById("fullname").value;
    var error__message2 = document.getElementById("error__message2");
        error__message2.style.padding = "4px 4px 4px 10px";
        if (fullname == "") {
            error__message2.innerHTML = "(*) Họ và Tên Sinh Viên không được để trống";
            document.getElementById("fullname").style.backgroundColor = "yellow";
            document.getElementById("fullname").focus();
            return false;
        }
        else {
            error__message2.innerHTML = "";
            document.getElementById("fullname").style.backgroundColor = "white";
        }

    //kiem tra email
    var email = document.getElementById("email").value;
    var error__message3 = document.getElementById("error__message3");
        error__message3.style.padding = "4px 4px 4px 10px";
        if (email == "") {
            error__message3.innerHTML = "(*) Email không được để trống";
            document.getElementById("email").style.backgroundColor = "yellow";
            document.getElementById("email").focus();
            return false;
        }
        else {
            var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if (!filter.test(email)) {
                error__message3.innerHTML = "(*) Email không hợp lệ vd: fptpoly@gmail.com";
                document.getElementById("email").style.backgroundColor = "yellow";
                document.getElementById("email").focus();
                return false;
            }
            else {
                error__message3.innerHTML = "";
                document.getElementById("email").style.backgroundColor = "white";
            }
        }

    ///kiểm tra giới tính
    var radios = document.getElementsByName("gioitinh");
    var error__message4 = document.getElementById("error__message4");
        error__message4.style.padding = "4px 4px 4px 10px";
        if(!radios[0].checked && !radios[1].checked) {
            error__message4.innerHTML = "(*) Giới tinh không được bỏ trống";
            document.getElementById("gioitinh").style.backgroundColor = "yellow";
            return false;
        }
        else {
            error__message4.innerHTML = "";
            document.getElementById("gioitinh").style.backgroundColor = "white";
        }

    //kiểm tra sở thích
    var hobbys = document.getElementsByName("hobby");
    var error__message5 = document.getElementById("error__message5");
        error__message5.style.padding = "4px 4px 4px 10px";
        if(!hobbys[0].checked && !hobbys[1].checked && !hobbys[2].checked && !hobbys[3].checked) {
            error__message5.innerHTML = "(*) Sở Thích không được bỏ trống";
            document.getElementById("hobby").style.backgroundColor = "yellow";
            return false;
        }
        else {
            error__message5.innerHTML = "";
            document.getElementById("hobby").style.backgroundColor = "white";
        }

    //kiểm lỗi quốc gia
    var loaisp = document.getElementById("loai");
    var error__message6 = document.getElementById("error__message6");
        error__message6.style.padding = "4px 4px 4px 10px";
        if (loaisp.selectedIndex == 0) {
            error__message6.innerHTML = "(*) Quốc Gia không được bỏ trống";
            document.getElementById("loai").style.backgroundColor = "yellow";
            return false;
        }
        else {
            error__message6.innerHTML = "";
            document.getElementById("loai").style.backgroundColor = "white";
        }

    //bắt lỗi ghi chú trên 220 kí tự
    var messages = document.getElementById("message").value;
    var error__message7 = document.getElementById("error__message7");
        error__message7.style.padding = "4px 4px 4px 10px";
        if (messages.length > 200) {
            error__message7.innerHTML = "(*) Ghi Chú không quá 200 kí tự";
            document.getElementById("message").style.backgroundColor = "yellow";
            return false;
        }
        else {
            error__message7.innerHTML = "";
            document.getElementById("message").style.backgroundColor = "white";
        }
    //xuất ra câu chúc mừng
    alert("Chúc Mừng "+fullname+" Đã Đăng Kí Thành Công!");
}
