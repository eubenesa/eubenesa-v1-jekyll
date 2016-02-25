window.onload = function() {
  var elevator = new Elevator({
    element: document.querySelector('.back-to-top'),
    mainAudio: '/js/elevator.js/demo/music/elevator.mp3',
    endAudio: '/js/elevator.js/demo/music/ding.mp3'
  });
}

$(document).ready(function() {
  $('.owl-carousel').owlCarousel({
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 3000,
    items: 1,
    loop: true,
  });

  $('#copyright-text').html('&copy; 2015-' + moment().format('YYYY') + ' Eubene Sa. There is no sponsored content here. OK Bye.');
});
