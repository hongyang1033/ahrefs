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

  $(function () {
    $('[data-toggle="tooltip"]').tooltip()
  });

});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJjbGlja0V2ZW50IiwiaW5kZXgiLCJzbGlkZXIiLCJ1bnNsaWRlciIsInRvb2xMaXN0IiwibGVuZ3RoIiwiZHJhdyIsImkiLCJyYW5kb21QWCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInJhbmRvbVBZIiwicmFuZG9tU2l6ZSIsImN0eCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiZmluZCIsImVxIiwiYWRkQ2xhc3MiLCJhdXRvcGxheSIsImFycm93cyIsIm5hdiIsIm9uQ2hhbmdlIiwic3BlZWQiLCJvbiIsImV2ZW50Iiwic2xpZGUiLCJwcmV2ZW50RGVmYXVsdCIsInJlbW92ZUNsYXNzIiwiZWFjaCIsInRoaXMiLCJvZmYiLCJjIiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRDb250ZXh0Il0sIm1hcHBpbmdzIjoiQUFBQUEsRUFBRUMsVUFBVUMsTUFBTSxXQTJCaEIsUUFBU0MsR0FBV0MsR0FDSixJQUFWQSxFQUNGQyxFQUFPQyxTQUFTLGlCQUNQRixJQUFVRyxFQUFTQyxPQUFTLEVBQ3JDSCxFQUFPQyxTQUFTLGdCQUVoQkQsRUFBT0MsU0FBUyxXQUFhRixHQVdqQyxRQUFTSyxLQUNQLElBQUssR0FBSUMsR0FBSSxFQUFHQSxFQUFJLEdBQUlBLElBQUssQ0FDM0IsR0FBSUMsR0FBV0MsS0FBS0MsTUFBdUIsS0FBaEJELEtBQUtFLFNBQW1CLEdBQy9DQyxFQUFXSCxLQUFLQyxNQUF1QixJQUFoQkQsS0FBS0UsU0FBbUIsR0FDL0NFLEVBQWFKLEtBQUtDLE1BQXVCLEdBQWhCRCxLQUFLRSxTQUFpQixFQUVuREcsR0FBSUMsVUFBWSxVQUNoQkQsRUFBSUUsU0FBU1IsRUFBVUksRUFBVUMsRUFBWUEsSUFsRGpELEdBQUlULEdBQVdQLEVBQUUsZUFBZW9CLEtBQUssTUFBTUEsS0FBSyxPQUNoRGIsR0FBU2MsR0FBRyxHQUFHQyxTQUFTLGNBRXhCLElBQUlqQixHQUFTTCxFQUFFLFdBQVdNLFVBQVVpQixVQUFVLEVBQU1DLFFBQVEsRUFBT0MsS0FBSyxJQU1wRUMsR0FKVTFCLEVBQUUsa0JBQWtCTSxVQUFVaUIsVUFBVSxFQUFNQyxRQUFRLEVBQU9DLEtBQUssSUFFbEV6QixFQUFFLHVCQUF1Qk0sVUFBVWlCLFVBQVUsRUFBTUMsUUFBUSxFQUFPRyxNQUFPLE1BQU9GLEtBQUssSUFFcEZwQixFQUFPdUIsR0FBRyxrQkFBbUIsU0FBU0MsRUFBT3pCLEVBQU8wQixHQUNqRUQsRUFBTUUsaUJBQ054QixFQUFTeUIsWUFBWSxlQUNyQnpCLEVBQVNjLEdBQUdqQixHQUFPa0IsU0FBUyxpQkF3QjlCLElBckJBZixFQUFTMEIsS0FBSyxTQUFTN0IsR0FDckJKLEVBQUVrQyxNQUFNTixHQUFHLFFBQVMsV0FDbEJDLE1BQU1FLGlCQUNOTCxFQUFTUyxNQUNUaEMsRUFBV0MsR0FDWEcsRUFBU3lCLFlBQVksZUFDckJ6QixFQUFTYyxHQUFHakIsR0FBT2tCLFNBQVMsZUFDNUJqQixFQUFPQyxTQUFTLFlBY2hCTixFQUFFLFdBQVdRLE9BQVMsRUFBRyxDQUMzQixHQUFJNEIsR0FBSW5DLFNBQVNvQyxlQUFlLFVBQzVCcEIsRUFBTW1CLEVBQUVFLFdBQVcsS0FDdkI3QiIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgdmFyIHRvb2xMaXN0ID0gJCgnLnRvb2xzLWxpc3QnKS5maW5kKCdsaScpLmZpbmQoJ3NwYW4nKTtcclxuICB0b29sTGlzdC5lcSgwKS5hZGRDbGFzcygnc3Bhbi1hY3RpdmUnKTtcclxuXHJcbiAgdmFyIHNsaWRlciA9ICQoJy5zbGlkZXInKS51bnNsaWRlcih7YXV0b3BsYXk6IHRydWUsIGFycm93czogZmFsc2UsIG5hdjogZmFsc2V9KTtcclxuXHJcbiAgdmFyIHNsaWRlcjIgPSAkKCcuc2xpZGVyLW1vYmlsZScpLnVuc2xpZGVyKHthdXRvcGxheTogdHJ1ZSwgYXJyb3dzOiBmYWxzZSwgbmF2OiB0cnVlfSk7XHJcblxyXG4gIHZhciBzbGlkZXIzID0gJCgnLnNsaWRlci10ZXN0aW1vbmlhbCcpLnVuc2xpZGVyKHthdXRvcGxheTogdHJ1ZSwgYXJyb3dzOiBmYWxzZSwgc3BlZWQ6ICczMDAnLCBuYXY6IHRydWV9KTtcclxuXHJcbiAgdmFyIG9uQ2hhbmdlID0gc2xpZGVyLm9uKCd1bnNsaWRlci5jaGFuZ2UnLCBmdW5jdGlvbihldmVudCwgaW5kZXgsIHNsaWRlKSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgdG9vbExpc3QucmVtb3ZlQ2xhc3MoJ3NwYW4tYWN0aXZlJyk7XHJcbiAgICB0b29sTGlzdC5lcShpbmRleCkuYWRkQ2xhc3MoJ3NwYW4tYWN0aXZlJyk7XHJcbiAgfSk7XHJcblxyXG4gIHRvb2xMaXN0LmVhY2goZnVuY3Rpb24oaW5kZXgpIHtcclxuICAgICQodGhpcykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIG9uQ2hhbmdlLm9mZigpO1xyXG4gICAgICBjbGlja0V2ZW50KGluZGV4KTtcclxuICAgICAgdG9vbExpc3QucmVtb3ZlQ2xhc3MoJ3NwYW4tYWN0aXZlJyk7XHJcbiAgICAgIHRvb2xMaXN0LmVxKGluZGV4KS5hZGRDbGFzcygnc3Bhbi1hY3RpdmUnKTtcclxuICAgICAgc2xpZGVyLnVuc2xpZGVyKCdzdG9wJyk7XHJcbiAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgZnVuY3Rpb24gY2xpY2tFdmVudChpbmRleCkge1xyXG4gICAgaWYgKGluZGV4ID09PSAwKSB7XHJcbiAgICAgIHNsaWRlci51bnNsaWRlcignYW5pbWF0ZTpmaXJzdCcpO1xyXG4gICAgfSBlbHNlIGlmIChpbmRleCA9PT0gdG9vbExpc3QubGVuZ3RoIC0gMSkge1xyXG4gICAgICBzbGlkZXIudW5zbGlkZXIoJ2FuaW1hdGU6bGFzdCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2xpZGVyLnVuc2xpZGVyKCdhbmltYXRlOicgKyBpbmRleCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAoJCgnI2NhbnZhcycpLmxlbmd0aCA+IDApIHtcclxuICAgIHZhciBjID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpO1xyXG4gICAgdmFyIGN0eCA9IGMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIGRyYXcoKTtcclxuICB9XHJcblxyXG5cclxuICBmdW5jdGlvbiBkcmF3KCkge1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCA0MDsgaSsrKSB7XHJcbiAgICAgIHZhciByYW5kb21QWCA9IE1hdGguZmxvb3IoKE1hdGgucmFuZG9tKCkgKiAxODAwKSArIDEpO1xyXG4gICAgICB2YXIgcmFuZG9tUFkgPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogMTAwMCkgKyAxKTtcclxuICAgICAgdmFyIHJhbmRvbVNpemUgPSBNYXRoLmZsb29yKChNYXRoLnJhbmRvbSgpICogMjApICsgNSk7XHJcblxyXG4gICAgICBjdHguZmlsbFN0eWxlID0gXCIjMGY0YzdiXCI7XHJcbiAgICAgIGN0eC5maWxsUmVjdChyYW5kb21QWCwgcmFuZG9tUFksIHJhbmRvbVNpemUsIHJhbmRvbVNpemUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG59KTtcclxuIl19
