var imageLinks = [
  "chandu.html",
  "jyo.html",
  "navaneeth.html",
  "lasya.html",
  "pragna.html",
  "abhinaya.html",
  "dhanush.html"
];

var swiperWrapper = document.getElementById("swiper-wrapper");

imageLinks.forEach(function (link, index) {
  var swiperSlide = document.createElement("div");
  swiperSlide.className = "swiper-slide";

  var a = document.createElement("a");
  a.href = link;

  var img = document.createElement("img");
  img.src = "img" + (index + 1) + ".jpg";
  img.alt = "Image";

  var div = document.createElement("div");
  var h2 = document.createElement("h2");
  h2.textContent = "Custom Title";

  div.appendChild(h2);
  a.appendChild(img);
  swiperSlide.appendChild(a);
  swiperSlide.appendChild(div);

  swiperWrapper.appendChild(swiperSlide);
});

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: "1",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 4,
    slideShadows: false
  },
  keyboard: {
    enabled: true
  },
  mousewheel: {
    thresholdDelta: 70
  },
  initialSlide: 0,
  on: {
    click: function (event) {
      var clickedSlide = this.clickedSlide;
      if (clickedSlide) {
        var link = clickedSlide.querySelector("a").href;
        window.location.href = link;
      }
    }
  },
  breakpoints: {
    640: {
      slidesPerView: 2
    }
  }
});
