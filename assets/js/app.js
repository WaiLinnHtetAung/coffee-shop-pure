document.addEventListener("DOMContentLoaded", function() {

    // add shadow to nav when scroll
    const nav = document.querySelector("nav"); 
    window.addEventListener("scroll", function () {
        if (window.scrollY > 0) {
            nav.classList.add("shadow");
        } else {
            nav.classList.remove("shadow");
        }
    })


    const swiper = new Swiper('.swiper', {
        // Optional parameters
        loop: true,
        autoplay: {
            delay: 2500,
        },
        speed: 400,
        slidesPerView: 3,
        spaceBetween: 10,
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            // when window width is >= 320px
            280: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            // when window width is >= 480px
            640: {
              slidesPerView: 2,
              spaceBetween: 30
            },
            // when window width is >= 640px
            880: {
              slidesPerView: 3,
              spaceBetween: 40
            }
          },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });

      

      
});