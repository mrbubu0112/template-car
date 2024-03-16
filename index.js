// Lấy danh sách các phần tử content-car
const carImages = document.getElementsByClassName('image-new-car');
const carTexts = document.getElementsByClassName('content-new-car');

// Lấy danh sách các button ratio
const ratioButtons = document.querySelectorAll('.car-radio');

// Thiết lập biến đếm và thời gian chuyển đổi
let currentCarIndex = 0;
const intervalTime = 3000; // Thời gian chuyển đổi giữa các phần tử (3 giây)

// Hàm chuyển đổi slide
function changeSlide() {
  // Ẩn tất cả các phần tử content-car
  for (let i = 0; i < carImages.length; i++) {
    carImages[i].style.display = 'none';
    carTexts[i].style.display = 'none';
    ratioButtons[i].classList.remove('checked');
  }

  // Hiển thị phần tử content-car hiện tại
  carImages[currentCarIndex].style.display = 'block';
  carTexts[currentCarIndex].style.display = 'block';

  // Thêm lớp CSS 'checked' cho button ratio tương ứng với nút radio được chọn
  ratioButtons[currentCarIndex].classList.add('checked');
  ratioButtons[currentCarIndex].checked = true;
}

// Gọi hàm changeSlide ban đầu với chỉ số hiện tại
changeSlide();

// Thêm xử lý sự kiện click cho các button ratio
ratioButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    currentCarIndex = index;
    changeSlide();
  });
});

// Thiết lập chạy tự động chuyển slide theo thời gian
setInterval(() => {
  currentCarIndex++;
  if (currentCarIndex >= carImages.length) {
    currentCarIndex = 0;
  }
  changeSlide();
}, intervalTime);