(function() {
    var carousel, next, prev, seats;
  
    carousel = $('.carousel');
  
    seats = $('.carousel-seat');
  
    next = function(el) {
      if (el.next().length > 0) {
        return el.next();
      } else {
        return seats.first();
      }
    };
  
    prev = function(el) {
      if (el.prev().length > 0) {
        return el.prev();
      } else {
        return seats.last();
      }
    };
  
    $('.toggle').on('click', function(e) {
      var el, i, j, new_seat, ref;
      el = $('.is-ref').removeClass('is-ref');
      if ($(e.currentTarget).data('toggle') === 'next') {
        new_seat = next(el);
        carousel.removeClass('is-reversing');
      } else {
        new_seat = prev(el);
        carousel.addClass('is-reversing');
      }
      new_seat.addClass('is-ref').css('order', 1);
      for (i = j = 2, ref = seats.length; (2 <= ref ? j <= ref : j >= ref); i = 2 <= ref ? ++j : --j) {
        new_seat = next(new_seat).css('order', i);
      }
      carousel.removeClass('is-set');
      return setTimeout((function() {
        return carousel.addClass('is-set');
      }), 50);
    });
  
  }).call(this);




//   $(document).ready(function(){

//     var map;
//     function initialize() {
//         var mapOptions = {
//         zoom: 14,
//         center: new google.maps.LatLng(-23.996416, -46.255792)
//     };
//     map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
// }
//     google.maps.event.addDomListener(window, 'load', initialize);

// var myLatlng = new google.maps.LatLng(-23.996416, -46.255792);
// var marker = new google.maps.Marker({
// position: myLatlng,
// map: map,
// title:"Hello World!"
// });


// })