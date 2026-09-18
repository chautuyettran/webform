document.getElementById("form").addEventListener("submit", function(event) {

    event.preventDefault();

    let hoten = document.getElementById("hoten").value;
    let email = document.getElementById("email").value;
    let matkhau = document.getElementById("matkhau").value;
    let nhaplaimatkhau = document.getElementById("nhaplaimatkhau").value;
    let dieukhoan = document.getElementById("dieukhoan").checked;

    if (hoten == "") {
        alert("Vui lòng nhập họ tên");
        return;
    }

    if (email == "") {
        alert("Vui lòng nhập email");
        return;
    }

    if (matkhau == "") {
        alert("Vui lòng nhập mật khẩu");
        return;
    }

    if (matkhau != nhaplaimatkhau) {
        alert("Mật khẩu không giống nhau");
        return;
    }

    if (!dieukhoan) {
        alert("Bạn phải đồng ý với điều khoản");
        return;
    }

    alert("Đăng ký thành công!");

});