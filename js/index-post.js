window.onload = function() {
  var elevator = new Elevator({
    element: document.querySelector('.back-to-top'),
    mainAudio: '/js/elevator.js/demo/music/elevator.mp3',
    endAudio: '/js/elevator.js/demo/music/ding.mp3'
  });
}
