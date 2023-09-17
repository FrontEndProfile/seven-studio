var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4.9,
  spaceBetween: 16,
  loop: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1.2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    576: {
      slidesPerView: 3.3,
      spaceBetween: 16,
      centeredSlides: false,
    },
    // when window width is >= 640px
    991: {
      slidesPerView: 4.9,
      spaceBetween: 16,
    }
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".client-slider", {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
});

let resultView = document.querySelector(".result");
let errorView = document.querySelector(".error-box");
let attachment = document.getElementById("attachment");

const validateFields = () => {
  if (attachment.value.length <= 0 || attachment.value.length <= 0) {
    errorView.classList.add("error-box-active");
    errorView.textContent = "Selecione algum arquivo";
  } else {
    errorView.classList.remove("error-box-active");
  }
};

const getExtension = () => {
  validateFields();
  resultView.textContent = attachment.value.split(".").pop();
};

const removeAttachment = () => {
  attachment.value = "";
  resultView.textContent = "";
};


$(document).ready(function () {
  $(".card a").click(function () {
      var imageSource = $(this).data("image-source");
      $("#modalImage").attr("src", imageSource);
      $("#cardModal").modal("show");
  });
  $("#cardModal").on("hidden.bs.modal", function () {
      $("#modalImage").attr("src", "");
  });
});