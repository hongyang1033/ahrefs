$(document).ready(function() {
  var toolList = $('.tools-list').find('li').find('span');
  toolList.eq(0).addClass('span-active');

  var slider = $('.slider').unslider({autoplay: true, arrows: false, nav: false});

  var slider2 = $('.slider-mobile').unslider({autoplay: true, arrows: false, nav: true});

  var slider3 = $('.slider-testimonial').unslider({autoplay: true, arrows: false, speed: '300', nav: true});

  var onChange = slider.on('unslider.change', function(event, index, slide) {
    event.preventDefault();
    toolList.removeClass('span-active');
    toolList.eq(index).addClass('span-active');
  });

  toolList.each(function(index) {
    $(this).on('click', function() {
      event.preventDefault();
      onChange.off();
      clickEvent(index);
      toolList.removeClass('span-active');
      toolList.eq(index).addClass('span-active');
      slider.unslider('stop');
    });
  });

  function clickEvent(index) {
    if (index === 0) {
      slider.unslider('animate:first');
    } else if (index === toolList.length - 1) {
      slider.unslider('animate:last');
    } else {
      slider.unslider('animate:' + index);
    }
  }

  if ($('#canvas').length > 0) {
    var c = document.getElementById('canvas');
    var ctx = c.getContext('2d');
    draw();
  }


  function draw() {
    for (var i = 0; i < 40; i++) {
      var randomPX = Math.floor((Math.random() * 1800) + 1);
      var randomPY = Math.floor((Math.random() * 1000) + 1);
      var randomSize = Math.floor((Math.random() * 20) + 5);

      ctx.fillStyle = "#0f4c7b";
      ctx.fillRect(randomPX, randomPY, randomSize, randomSize);
    }
  }


});
