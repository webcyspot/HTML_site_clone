jQuery(document).ready(function() {
  // Dynamic slidesToShow
  var newSlidesToShow
  var childElements = jQuery('#listing-slider-low').children().length
  var slideCount = childElements
  if (slideCount <= 3) {
    newSlidesToShow = 3
    jQuery('#listing-slider-low').addClass('less-than-3')
  } else if (slideCount > 3 && slideCount <= 5) {
    newSlidesToShow = 3
  } else {
    newSlidesToShow = 5
  }
  jQuery('#listing-slider-low').slick({
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: newSlidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    // lazyLoad: 'ondemand',
    prevArrow:
      '<button class="slide-arrow prev-arrow">' + sliderArrowSvg + '</button>',
    nextArrow:
      '<button class="slide-arrow next-arrow">' + sliderArrowSvg + '</button>',
    cssEase: 'cubic-bezier(0.6, 0, 0.4, 1)',
    responsive: [
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  })
  jQuery('#listing-slider-high').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 1000,
    // lazyLoad: 'ondemand',
    prevArrow:
      '<button class="slide-arrow prev-arrow">' + sliderArrowSvg + '</button>',
    nextArrow:
      '<button class="slide-arrow next-arrow">' + sliderArrowSvg + '</button>',
    cssEase: 'cubic-bezier(0.6, 0, 0.4, 1)',
    dots: true,
  })
  jQuery('#featured-slider').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1000,
    lazyLoad: 'ondemand',
    prevArrow:
      '<button class="slide-arrow prev-arrow">&#9664;&#xFE0E;</button>',
    nextArrow:
      '<button class="slide-arrow next-arrow">&#9654;&#xFE0E;</button>',
    cssEase: 'cubic-bezier(0.6, 0, 0.4, 1)',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  })
})

var sliderArrowSvg =
  '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 188 318" style="enable-background:new 0 0 188 318;" xml:space="preserve"><path d="M126.88,282.08c-3.16,0-6.28-1.5-8.22-4.29L47.28,175.08c-2.38-3.43-2.38-7.98,0-11.41l71.38-102.71c3.15-4.53,9.38-5.66,13.92-2.5c4.54,3.15,5.66,9.38,2.5,13.92l-67.41,97l67.41,97c3.15,4.54,2.03,10.77-2.5,13.92C130.84,281.5,128.85,282.08,126.88,282.08z"/></svg>'
