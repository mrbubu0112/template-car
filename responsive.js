// // Lấy đối tượng div
// var myHeader = document.querySelector('#header');
// var myDiv = document.querySelector('#navbarSupportedContent');

// // Thêm class mới
// // header.classList.add('scrolled-up');
// myHeader.classList.add('scrolled-up');
// myDiv.classList.add('scrolled-up');

// // Thay đổi kích thước màn hình
// window.innerWidth < 993; // Đặt kích thước chiều rộng màn hình là 800px
// window.innerHeight = 600; // Đặt kích thước chiều cao màn hình là 600px
// window.dispatchEvent(new Event('resize')); // Kích hoạt sự kiện resize

// const header = document.getElementById('header');

//         window.addEventListener('scroll', () => {
//             if (window.scrollY > 50) {
//                 header.classList.add('navbar-scrolled');
//                 header.classList.add('scrolled-up');
//                 navbarSupportedContent.classList.add('scrolled-up')

//             } else {
//                 header.classList.remove('navbar-scrolled');
//                 header.classList.remove('scrolled-up');
//                 navbarSupportedContent.classList.remove('scrolled-up')

//             }
//         });

var navbarToggler = document.getElementById('navbar-toggler');

navbarToggler.addEventListener('click', function() {
  navbarToggler.classList.toggle('active');
  navbarToggler.classList.toggle('fa-times');
  navbarToggler.classList.toggle('fa-bars');

});
