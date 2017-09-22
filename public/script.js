(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = youtubeVideo;
/**
*   @fileoverview
*     Componente para incrustar un video de YouTube en nuestro sitio web cuando la resolución es mayor a 64em (1024px), cuando es menor se agrega un enlace al video
*     Dependencias: font-awesome
*
*   @param {String} id, id del video de YouTube, se define en el archivo pug
*   @param {String} $video-width, anchura del contenedor del video, se define en el archivo scss
*
*   @returns {void} no retorna nada
*
*   @author Jonathan MirCha <jonmircha@gmail.com>
*   @version 1.0.0
*/
function youtubeVideo() {
  var d = document,
      w = window,
      mq = w.matchMedia('(min-width: 64em)'),
      youtube = d.querySelectorAll('.Youtube'),
      youtubeWrapper = d.querySelectorAll('.Youtube-wrapper'),
      youtubeIds = [],
      youtubeIframe = [];

  youtube.forEach(function (video, index) {
    return youtubeIds[index] = video.id;
  });

  console.log(youtubeIds);

  function showVideo(mq) {
    if (mq.matches) {
      youtubeWrapper.forEach(function (video, index) {
        video.innerHTML = '<iframe src="https://www.youtube.com/embed/' + youtubeIds[index] + '" frameborder="0"></iframe>';
      });
    } else {
      youtubeWrapper.forEach(function (video, index) {
        video.innerHTML = '<a href="https://www.youtube.com/watch?v=' + youtubeIds[index] + '" target="_blank"><i class="fa fa-youtube-play"></i> Ver Video</a>';
      });
    }
  }

  mq.addListener(showVideo);
  showVideo(mq);
}

},{}],2:[function(require,module,exports){
'use strict';

var _youtube_video = require('./components/youtube_video');

var _youtube_video2 = _interopRequireDefault(_youtube_video);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _youtube_video2.default)();

},{"./components/youtube_video":1}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvY29tcG9uZW50cy95b3V0dWJlX3ZpZGVvLmpzIiwic3JjL2pzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7a0JDYXdCLFk7QUFieEI7Ozs7Ozs7Ozs7Ozs7QUFhZSxTQUFTLFlBQVQsR0FBeUI7QUFDdEMsTUFBTSxJQUFJLFFBQVY7QUFBQSxNQUNFLElBQUksTUFETjtBQUFBLE1BRUUsS0FBSyxFQUFFLFVBQUYsQ0FBYSxtQkFBYixDQUZQO0FBQUEsTUFHRSxVQUFVLEVBQUUsZ0JBQUYsQ0FBbUIsVUFBbkIsQ0FIWjtBQUFBLE1BSUUsaUJBQWdCLEVBQUUsZ0JBQUYsQ0FBbUIsa0JBQW5CLENBSmxCO0FBQUEsTUFLRSxhQUFhLEVBTGY7QUFBQSxNQU1FLGdCQUFnQixFQU5sQjs7QUFRQSxVQUFRLE9BQVIsQ0FBZ0IsVUFBQyxLQUFELEVBQVEsS0FBUjtBQUFBLFdBQWtCLFdBQVcsS0FBWCxJQUFvQixNQUFNLEVBQTVDO0FBQUEsR0FBaEI7O0FBRUEsVUFBUSxHQUFSLENBQWEsVUFBYjs7QUFFQSxXQUFTLFNBQVQsQ0FBb0IsRUFBcEIsRUFBd0I7QUFDdEIsUUFBSSxHQUFHLE9BQVAsRUFBZ0I7QUFDZCxxQkFBZSxPQUFmLENBQXVCLFVBQUMsS0FBRCxFQUFRLEtBQVIsRUFBa0I7QUFDdkMsY0FBTSxTQUFOLG1EQUFnRSxXQUFXLEtBQVgsQ0FBaEU7QUFDRCxPQUZEO0FBR0QsS0FKRCxNQUlPO0FBQ0wscUJBQWUsT0FBZixDQUF1QixVQUFDLEtBQUQsRUFBUSxLQUFSLEVBQWtCO0FBQ3ZDLGNBQU0sU0FBTixpREFBOEQsV0FBVyxLQUFYLENBQTlEO0FBQ0QsT0FGRDtBQUdEO0FBQ0Y7O0FBRUQsS0FBRyxXQUFILENBQWUsU0FBZjtBQUNBLFlBQVUsRUFBVjtBQUNEOzs7OztBQ3hDRDs7Ozs7O0FBRUEiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyoqXG4qICAgQGZpbGVvdmVydmlld1xuKiAgICAgQ29tcG9uZW50ZSBwYXJhIGluY3J1c3RhciB1biB2aWRlbyBkZSBZb3VUdWJlIGVuIG51ZXN0cm8gc2l0aW8gd2ViIGN1YW5kbyBsYSByZXNvbHVjacOzbiBlcyBtYXlvciBhIDY0ZW0gKDEwMjRweCksIGN1YW5kbyBlcyBtZW5vciBzZSBhZ3JlZ2EgdW4gZW5sYWNlIGFsIHZpZGVvXG4qICAgICBEZXBlbmRlbmNpYXM6IGZvbnQtYXdlc29tZVxuKlxuKiAgIEBwYXJhbSB7U3RyaW5nfSBpZCwgaWQgZGVsIHZpZGVvIGRlIFlvdVR1YmUsIHNlIGRlZmluZSBlbiBlbCBhcmNoaXZvIHB1Z1xuKiAgIEBwYXJhbSB7U3RyaW5nfSAkdmlkZW8td2lkdGgsIGFuY2h1cmEgZGVsIGNvbnRlbmVkb3IgZGVsIHZpZGVvLCBzZSBkZWZpbmUgZW4gZWwgYXJjaGl2byBzY3NzXG4qXG4qICAgQHJldHVybnMge3ZvaWR9IG5vIHJldG9ybmEgbmFkYVxuKlxuKiAgIEBhdXRob3IgSm9uYXRoYW4gTWlyQ2hhIDxqb25taXJjaGFAZ21haWwuY29tPlxuKiAgIEB2ZXJzaW9uIDEuMC4wXG4qL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24geW91dHViZVZpZGVvICgpIHtcbiAgY29uc3QgZCA9IGRvY3VtZW50LFxuICAgIHcgPSB3aW5kb3csXG4gICAgbXEgPSB3Lm1hdGNoTWVkaWEoJyhtaW4td2lkdGg6IDY0ZW0pJyksXG4gICAgeW91dHViZSA9IGQucXVlcnlTZWxlY3RvckFsbCgnLllvdXR1YmUnKSxcbiAgICB5b3V0dWJlV3JhcHBlciA9ZC5xdWVyeVNlbGVjdG9yQWxsKCcuWW91dHViZS13cmFwcGVyJyksXG4gICAgeW91dHViZUlkcyA9IFtdLFxuICAgIHlvdXR1YmVJZnJhbWUgPSBbXVxuXG4gIHlvdXR1YmUuZm9yRWFjaCgodmlkZW8sIGluZGV4KSA9PiB5b3V0dWJlSWRzW2luZGV4XSA9IHZpZGVvLmlkKVxuXG4gIGNvbnNvbGUubG9nKCB5b3V0dWJlSWRzIClcblxuICBmdW5jdGlvbiBzaG93VmlkZW8gKG1xKSB7XG4gICAgaWYgKG1xLm1hdGNoZXMpIHtcbiAgICAgIHlvdXR1YmVXcmFwcGVyLmZvckVhY2goKHZpZGVvLCBpbmRleCkgPT4ge1xuICAgICAgICB2aWRlby5pbm5lckhUTUwgPSBgPGlmcmFtZSBzcmM9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke3lvdXR1YmVJZHNbaW5kZXhdfVwiIGZyYW1lYm9yZGVyPVwiMFwiPjwvaWZyYW1lPmBcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHlvdXR1YmVXcmFwcGVyLmZvckVhY2goKHZpZGVvLCBpbmRleCkgPT4ge1xuICAgICAgICB2aWRlby5pbm5lckhUTUwgPSBgPGEgaHJlZj1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9JHt5b3V0dWJlSWRzW2luZGV4XX1cIiB0YXJnZXQ9XCJfYmxhbmtcIj48aSBjbGFzcz1cImZhIGZhLXlvdXR1YmUtcGxheVwiPjwvaT4gVmVyIFZpZGVvPC9hPmBcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgbXEuYWRkTGlzdGVuZXIoc2hvd1ZpZGVvKTtcbiAgc2hvd1ZpZGVvKG1xKTtcbn1cbiIsImltcG9ydCB5b3V0dWJlVmlkZW8gZnJvbSAnLi9jb21wb25lbnRzL3lvdXR1YmVfdmlkZW8nXG5cbnlvdXR1YmVWaWRlbygpIl19
