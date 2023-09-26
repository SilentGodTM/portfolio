document.addEventListener("DOMContentLoaded", function() {
    var images = document.querySelectorAll(".photo");
    var infoBlock = document.querySelector(".info");
  
    // Обработчик клика на кнопку "Обо мне"
    document.querySelector(".buttoninfo").addEventListener("click", function() {
      if (infoBlock.style.display === "none" || infoBlock.style.display === "") {
        infoBlock.style.display = "block";
  
        // Показываем изображения при первом нажатии
        images.forEach(function(image) {
          image.style.display = "block";
        });
      } else {
        infoBlock.style.display = "none";
  
        // Скрываем изображения при повторном нажатии
        images.forEach(function(image) {
          image.style.display = "none";
        });
      }
    });
  });