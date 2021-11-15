var $ = document.querySelector.bind(document)
var $$ = document.querySelectorAll.bind(document)

// form login
var searchForm = $('.search-form')

$('#search-btn').onclick = () => {
  searchForm.classList.toggle('active');
}

let loginForm = $('.login-form-container')
$('#login-btn').onclick = () => {
  loginForm.classList.toggle('active')
}

$('#close-login-btn').onclick = () => {
  loginForm.classList.remove('active')
}

// scroll 
window.onscroll = () => {

  searchForm.classList.remove('active');

  if (window.scrollY > 80) {
    $('.header .header-2').classList.add('active');
  }
  else {
    $('.header .header-2').classList.remove('active')
  }
}

window.onload = () => {
  if (window.scrollY > 80) {
    $('.header .header-2').classList.add('active');
  }
  else {
    $('.header .header-2').classList.remove('active')
  }

  // fadeOut();
}

//  loader 
// function loader() {
//   $('.loader-container').classList.add('active');
// }

// function fadeOut() {
//   setTimeout(loader, 2000)
// }

// slide
var swiper = new Swiper(".featured-slider", {
  spaceBetween: 10,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    450: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

var swiper = new Swiper(".books-slider", {
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".arrivals-slider", {
  spaceBetween: 10,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".reviews-slider", {
  spaceBetween: 10,
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".blogs-slider", {
  spaceBetween: 10,
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 9500,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});