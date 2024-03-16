const header = document.getElementById('header');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('navbar-scrolled');
                header.classList.add('scrolled-up');
                navbarSupportedContent.classList.add('scrolled-up')

            } else {
                header.classList.remove('navbar-scrolled');
                header.classList.remove('scrolled-up');
                navbarSupportedContent.classList.remove('scrolled-up')

            }
        });



        // function addActive(event) {
        //     // Lấy danh sách các phần tử <a> trong thẻ có ID là "list-nav"
        //     var links = document.querySelectorAll('#list-nav a');
          
        //     // Xóa lớp "active" khỏi tất cả các phần tử <a>
        //     links.forEach(function(link) {
        //       link.classList.remove('active');
        //     });
          
        //     // Thêm lớp "active" vào phần tử được nhấp chuột
        //     event.target.classList.add('active');
        //   }
          
        //   // Lấy danh sách các phần tử <a> trong thẻ có ID là "list-nav"
        //   var links = document.querySelectorAll('#list-nav a');
          
        //   // Gán sự kiện onclick cho mỗi phần tử <a>
        //   links.forEach(function(link) {
        //     link.addEventListener('click', addActive);
        //   });





          window.addEventListener('scroll', function() {
            var navbarLinks = document.querySelectorAll('.navbar-nav .nav-link');
          
            navbarLinks.forEach(function(link) {
              var sectionId = link.getAttribute('href');
              var section = document.querySelector(sectionId);
          
              if (isElementInViewport(section)) {
                link.classList.add('active');
              } else {
                link.classList.remove('active');
              }
            });
          });
          
          function isElementInViewport(element) {
            var rect = element.getBoundingClientRect();
            var windowHeight = window.innerHeight || document.documentElement.clientHeight;
            var windowWidth = window.innerWidth || document.documentElement.clientWidth;
          
            // Kiểm tra xem phần tử nằm trong khung nhìn theo cả chiều dọc và chiều ngang
            return (
              rect.top >= 0 &&
              rect.left >= 0 &&
              rect.bottom <= windowHeight &&
              rect.right <= windowWidth
            );
          }