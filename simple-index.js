document.addEventListener('DOMContentLoaded', () => {
    // активация слайдера
    new ItcSimpleSlider('.itcss', {
      loop: true,
      autoplay: true,
      swipe: true
    });
  });