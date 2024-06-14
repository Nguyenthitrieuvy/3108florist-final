//render header - footer
const header = document.querySelector("#header");
header.innerHTML = `<div class="header">
<div class="container">
    <div class="top">
        <a href=""><img src="image/logo/Logohoa.jpg" alt="" /></a>
        <div class="mid">
            <div class="text">
                <i class="fa-solid fa-location-dot"></i>
                <h4>
                    153 Hồ Văn Huê - P.9 - Q.Phú Nhuận - HCM -
                    <a href="https://maps.app.goo.gl/FWN97s6K8jMvSVBA6" target="_blank">Xem bản đồ</a>
                </h4>
            </div>
            <form class="form">
                <input type="text" placeholder="Tìm hoa đẹp cho hôm nay thôi nào..." />
                <button><i class="fa-solid fa-magnifying-glass"></i></button>
            </form>
        </div>

        <div class="hotline">
            <div class="phone">
                <a href="tel:0937968678">
                <img src="image/logo/Vonghoa.jpeg" alt="" />
                <i class="fa-solid fa-phone-volume"></i>
                </a>
            </div>
            <div class="content">
                <h4>0937 968 678</h4>
                <p>Liên hệ đặt hoa</p>
            </div>
        </div>
        <div class="request">
            <a href="make-flower.html">Gói hoa theo yêu cầu</a>
        </div>
        <div class="social">
            <a href="https://www.facebook.com/3108Florist?locale=vi_VN"><i class="fa-brands fa-facebook-f"></i></a>
            <a href="https://www.instagram.com/3108florist?igsh=YjlxMWhwM2RpY2to"><i class="fa-brands fa-instagram"></i></a>
            <a href="https://www.tiktok.com/@3108florist?_t=8nBMEzHCnNX&_r=1"><i class="fa-brands fa-tiktok"></i></a>
        </div>
        <div class="cart"><i class="fa-solid fa-cart-shopping"></i><span>0</span></div>
    </div>
</div>
<div class="menu">
    <div class="container">
        <div class="icon-menu"><i class="fa-solid fa-bars"></i> <span>Menu</span></div>
        <ul>
            <li><a href="index.html">Trang Chủ</a></li>
            <li><a href="product.html">Hoa Bó</a></li>
            <li><a href="">Hoa Chậu</a></li>
            <li><a href="">Hoa Sinh Nhật</a></li>
            <li><a href="">Hoa Sự Kiện</a></li>
            <li><a href="">Hoa Khai Trương</a></li>
            <li><a href="">Hoa Viếng</a></li>
            <li><a href="">Sen Đá</a></li>
            <li><a href="">Lan Hồ Điệp</a></li>
        </ul>
    </div>
</div>
</div>`;

const footer = document.querySelector("#footer");
footer.innerHTML = `<div class="footer">
<div class="promotion">
    <div class="container">
        <h3>Khuyến mãi <span>20%</span> cho hoá đơn trên 500k</h3>
        <p>Trong tháng sinh nhật của bạn nhé...</p>
    </div>
</div>
<div class="content">
    <div class="container">
        <div class="row">
            <div class="col-lg-3">
                <img src="image/logo/Logohoa.jpg" alt="" />
                <p>
                    Nếu bạn đang tìm kiếm một trang website đặt hoa online giao tận nơi thì 3108Florist là một sự lựa chọn tuyệt vời dành
                    cho bạn.
                </p>
                <div class="social">
                    <a href="https://www.facebook.com/3108Florist?locale=vi_VN"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="https://www.instagram.com/3108florist?igsh=YjlxMWhwM2RpY2to"><i class="fa-brands fa-instagram"></i></a>
                    <a href="https://www.tiktok.com/@3108florist?_t=8nBMEzHCnNX&_r=1"><i class="fa-brands fa-tiktok"></i></a>
                </div>
            </div>
            <div class="col-lg-3">
                <h3>THÔNG TIN LIÊN HỆ</h3>
                <ul>
                    <li><a href="https://www.google.com/maps/dir//153+H%E1%BB%93+V%C4%83n+Hu%C3%AA+Ph%C6%B0%E1%BB%9Dng+9+Ph%C3%BA+Nhu%E1%BA%ADn+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh/@10.8058035,106.6782717,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x317528d8c44ffee5:0xbad2bee7ee0a2fca">- Địa chỉ: 153 Hồ Văn Huê - P9 - Phú Nhuận</a></li>
                    <li><a href="tel:0937968678">- Điện thoại: 0937 968 678</a></li>
                    <li><a href="https://www.facebook.com/3108Florist?locale=vi_VN">- Facebook: 3108Florist</a></li>
                    <li>- Giờ mở cửa: 7:00AM - 8:00PM</li>
                </ul>
            </div>
            <div class="col-lg-3">
                <h3>MENU</h3>
                <ul>
                    <li><a href="index.html">- Trang Chủ</a></li>
                    <li><a href="about.html">- Giới Thiệu</a></li>
                    <li><a href="news.html">- Tin Tức</a></li>
                    <li><a href="contact.html">- Liên Hệ</a></li>
                    <li><a href="">- Blog</a></li>
                    <li><a href="">- Hình Thức Giao Hàng</a></li>
                </ul>
            </div>
            
            <div class="col-lg-3">
                <h3>BẢN ĐỒ</h3>
                <div class="map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.0719223887645!2d106.6782717!3d10.8058035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528d8c44ffee5%3A0xbad2bee7ee0a2fca!2zMTUzIEjhu5MgVsSDbiBIdcOqLCBQaMaw4budbmcgOSwgUGjDuiBOaHXhuq1uLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmg!5e0!3m2!1svi!2s!4v1704256966840!5m2!1svi!2s"
                        width="600"
                        height="450"
                        style="border: 0"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="bot">
    <h4>Copyright &#169;2023 - 3108Florist.com | All rights reserved</h4>
</div>
</div>

<div class="icon-call">
<a href="tel:0937968678">
    <img src="image/icon/phone.png" alt="" />
</a>
<a href="https://www.facebook.com/3108Florist?locale=vi_VN"">
    <img src="image/icon/mes.png" alt="" />
</a>
<a href="http://zalo.me/0937968678">
    <img src="image/icon/zalo-c.png" alt="" />
</a>
<a href="javascript:;" id="backToTopBtn">
    <img src="image/icon/backtop.png" alt="" />
</a>
</div>`;

// Function to update placeholder based on screen width
const inputElement = document.querySelector(".header .form input");
function updatePlaceholder() {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (width <= 500) {
        inputElement.setAttribute("placeholder", "Tìm hoa thôi nào...");
    } else {
        inputElement.setAttribute("placeholder", "Tìm hoa đẹp cho hôm nay thôi nào...");
    }
}
updatePlaceholder();

//Open menu mobile
let iconMenu = document.querySelector(".header .menu .icon-menu");
let menuDropdown = document.querySelector(".header .menu ul");
//Click outside menu to close
document.addEventListener("click", function (e) {
    if (!menuDropdown.contains(e.target)) {
        if (iconMenu.contains(e.target)) {
            menuDropdown.classList.toggle("active");
        } else {
            menuDropdown.classList.remove("active");
        }
    }
});

//backtop
$(function () {
    $("#backToTopBtn").click(function () {
        $("html, body").animate(
            {
                scrollTop: 0,
            },
            800
        ); // Sc
    });
});
