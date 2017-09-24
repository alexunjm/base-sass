(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

exports.__esModule = true;
var Node = function () {
    function Node(elm) {
        this.elm = elm;
    }
    Node.prototype.insert = function (elm, attr) {
        if (elm) {
            if (elm[attr]) {
                if (elm[attr] < this.elm.name) {
                    return this.insertLeft(elm, attr);
                } else {
                    return this.insertRight(elm, attr);
                }
            }
        }
    };
    Node.prototype.insertLeft = function (elm, attr) {
        if (this.left) {
            return this.left.insert(elm, attr);
        } else {
            this.left = new Node({ name: elm[attr], domElm: elm });
            return this.left;
        }
    };
    Node.prototype.insertRight = function (elm, attr) {
        if (this.right) {
            return this.right.insert(elm, attr);
        } else {
            this.right = new Node({ name: elm[attr], domElm: elm });
            return this.right;
        }
    };
    return Node;
}();
exports.Node = Node;
function init() {
    var root;
    var attr = 'tagName';
    function rootObj(data, attr) {
        if (!root) {
            root = new Node({ name: data[attr], domElm: data });
        }
        return root;
    }
    function saveDom() {
        var body_children = document.body.children;
        var first = true;
        for (var i in body_children) {
            if (first) {
                root = rootObj(body_children[i], attr);
                first = false;
            }
            if (!isNaN(+i)) {
                saveDomAbb(body_children[i]);
                root.insert(body_children[i], attr);
            }
        }
        console.log(root);
    }
    function saveDomAbb(elm) {
        try {
            root = rootObj(null, null);
            root.insert(elm, attr);
            var children = elm.children;
            if (children && children.length) {
                for (var i in children) {
                    saveDomAbb(children[i]);
                    /* console.log(i, children, children[i]); */
                }
            }
        } catch (error) {
            /* console.log(error.message); */
        }
    }
    saveDom();
}
exports["default"] = init;

},{}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
'use strict';

var _youtube_video = require('./components/youtube_video');

var _youtube_video2 = _interopRequireDefault(_youtube_video);

var _abb = require('./components/abb');

var _abb2 = _interopRequireDefault(_abb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _youtube_video2.default)();
(0, _abb2.default)();

},{"./components/abb":1,"./components/youtube_video":2}]},{},[3])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvY29tcG9uZW50cy9hYmIuanMiLCJzcmMvanMvY29tcG9uZW50cy95b3V0dWJlX3ZpZGVvLmpzIiwic3JjL2pzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7O0FBQ0EsUUFBUSxVQUFSLEdBQXFCLElBQXJCO0FBQ0EsSUFBSSxPQUFRLFlBQVk7QUFDcEIsYUFBUyxJQUFULENBQWMsR0FBZCxFQUFtQjtBQUNmLGFBQUssR0FBTCxHQUFXLEdBQVg7QUFDSDtBQUNELFNBQUssU0FBTCxDQUFlLE1BQWYsR0FBd0IsVUFBVSxHQUFWLEVBQWUsSUFBZixFQUFxQjtBQUN6QyxZQUFJLEdBQUosRUFBUztBQUNMLGdCQUFJLElBQUksSUFBSixDQUFKLEVBQWU7QUFDWCxvQkFBSSxJQUFJLElBQUosSUFBWSxLQUFLLEdBQUwsQ0FBUyxJQUF6QixFQUErQjtBQUMzQiwyQkFBTyxLQUFLLFVBQUwsQ0FBZ0IsR0FBaEIsRUFBcUIsSUFBckIsQ0FBUDtBQUNILGlCQUZELE1BR0s7QUFDRCwyQkFBTyxLQUFLLFdBQUwsQ0FBaUIsR0FBakIsRUFBc0IsSUFBdEIsQ0FBUDtBQUNIO0FBQ0o7QUFDSjtBQUNKLEtBWEQ7QUFZQSxTQUFLLFNBQUwsQ0FBZSxVQUFmLEdBQTRCLFVBQVUsR0FBVixFQUFlLElBQWYsRUFBcUI7QUFDN0MsWUFBSSxLQUFLLElBQVQsRUFBZTtBQUNYLG1CQUFPLEtBQUssSUFBTCxDQUFVLE1BQVYsQ0FBaUIsR0FBakIsRUFBc0IsSUFBdEIsQ0FBUDtBQUNILFNBRkQsTUFHSztBQUNELGlCQUFLLElBQUwsR0FBWSxJQUFJLElBQUosQ0FBUyxFQUFFLE1BQU0sSUFBSSxJQUFKLENBQVIsRUFBbUIsUUFBUSxHQUEzQixFQUFULENBQVo7QUFDQSxtQkFBTyxLQUFLLElBQVo7QUFDSDtBQUNKLEtBUkQ7QUFTQSxTQUFLLFNBQUwsQ0FBZSxXQUFmLEdBQTZCLFVBQVUsR0FBVixFQUFlLElBQWYsRUFBcUI7QUFDOUMsWUFBSSxLQUFLLEtBQVQsRUFBZ0I7QUFDWixtQkFBTyxLQUFLLEtBQUwsQ0FBVyxNQUFYLENBQWtCLEdBQWxCLEVBQXVCLElBQXZCLENBQVA7QUFDSCxTQUZELE1BR0s7QUFDRCxpQkFBSyxLQUFMLEdBQWEsSUFBSSxJQUFKLENBQVMsRUFBRSxNQUFNLElBQUksSUFBSixDQUFSLEVBQW1CLFFBQVEsR0FBM0IsRUFBVCxDQUFiO0FBQ0EsbUJBQU8sS0FBSyxLQUFaO0FBQ0g7QUFDSixLQVJEO0FBU0EsV0FBTyxJQUFQO0FBQ0gsQ0FuQ1csRUFBWjtBQW9DQSxRQUFRLElBQVIsR0FBZSxJQUFmO0FBQ0EsU0FBUyxJQUFULEdBQWdCO0FBQ1osUUFBSSxJQUFKO0FBQ0EsUUFBSSxPQUFPLFNBQVg7QUFDQSxhQUFTLE9BQVQsQ0FBaUIsSUFBakIsRUFBdUIsSUFBdkIsRUFBNkI7QUFDekIsWUFBSSxDQUFDLElBQUwsRUFBVztBQUNQLG1CQUFPLElBQUksSUFBSixDQUFTLEVBQUUsTUFBTSxLQUFLLElBQUwsQ0FBUixFQUFvQixRQUFRLElBQTVCLEVBQVQsQ0FBUDtBQUNIO0FBQ0QsZUFBTyxJQUFQO0FBQ0g7QUFDRCxhQUFTLE9BQVQsR0FBbUI7QUFDZixZQUFJLGdCQUFnQixTQUFTLElBQVQsQ0FBYyxRQUFsQztBQUNBLFlBQUksUUFBUSxJQUFaO0FBQ0EsYUFBSyxJQUFJLENBQVQsSUFBYyxhQUFkLEVBQTZCO0FBQ3pCLGdCQUFJLEtBQUosRUFBVztBQUNQLHVCQUFPLFFBQVEsY0FBYyxDQUFkLENBQVIsRUFBMEIsSUFBMUIsQ0FBUDtBQUNBLHdCQUFRLEtBQVI7QUFDSDtBQUNELGdCQUFJLENBQUMsTUFBTSxDQUFDLENBQVAsQ0FBTCxFQUFnQjtBQUNaLDJCQUFXLGNBQWMsQ0FBZCxDQUFYO0FBQ0EscUJBQUssTUFBTCxDQUFZLGNBQWMsQ0FBZCxDQUFaLEVBQThCLElBQTlCO0FBQ0g7QUFDSjtBQUNELGdCQUFRLEdBQVIsQ0FBWSxJQUFaO0FBQ0g7QUFDRCxhQUFTLFVBQVQsQ0FBb0IsR0FBcEIsRUFBeUI7QUFDckIsWUFBSTtBQUNBLG1CQUFPLFFBQVEsSUFBUixFQUFjLElBQWQsQ0FBUDtBQUNBLGlCQUFLLE1BQUwsQ0FBWSxHQUFaLEVBQWlCLElBQWpCO0FBQ0EsZ0JBQUksV0FBVyxJQUFJLFFBQW5CO0FBQ0EsZ0JBQUksWUFBWSxTQUFTLE1BQXpCLEVBQWlDO0FBQzdCLHFCQUFLLElBQUksQ0FBVCxJQUFjLFFBQWQsRUFBd0I7QUFDcEIsK0JBQVcsU0FBUyxDQUFULENBQVg7QUFDQTtBQUNIO0FBQ0o7QUFDSixTQVZELENBV0EsT0FBTyxLQUFQLEVBQWM7QUFDVjtBQUNIO0FBQ0o7QUFDRDtBQUNIO0FBQ0QsUUFBUSxTQUFSLElBQXFCLElBQXJCOzs7Ozs7OztrQkNwRXdCLFk7QUFieEI7Ozs7Ozs7Ozs7Ozs7QUFhZSxTQUFTLFlBQVQsR0FBeUI7QUFDdEMsTUFBTSxJQUFJLFFBQVY7QUFBQSxNQUNFLElBQUksTUFETjtBQUFBLE1BRUUsS0FBSyxFQUFFLFVBQUYsQ0FBYSxtQkFBYixDQUZQO0FBQUEsTUFHRSxVQUFVLEVBQUUsZ0JBQUYsQ0FBbUIsVUFBbkIsQ0FIWjtBQUFBLE1BSUUsaUJBQWdCLEVBQUUsZ0JBQUYsQ0FBbUIsa0JBQW5CLENBSmxCO0FBQUEsTUFLRSxhQUFhLEVBTGY7QUFBQSxNQU1FLGdCQUFnQixFQU5sQjs7QUFRQSxVQUFRLE9BQVIsQ0FBZ0IsVUFBQyxLQUFELEVBQVEsS0FBUjtBQUFBLFdBQWtCLFdBQVcsS0FBWCxJQUFvQixNQUFNLEVBQTVDO0FBQUEsR0FBaEI7O0FBRUEsVUFBUSxHQUFSLENBQWEsVUFBYjs7QUFFQSxXQUFTLFNBQVQsQ0FBb0IsRUFBcEIsRUFBd0I7QUFDdEIsUUFBSSxHQUFHLE9BQVAsRUFBZ0I7QUFDZCxxQkFBZSxPQUFmLENBQXVCLFVBQUMsS0FBRCxFQUFRLEtBQVIsRUFBa0I7QUFDdkMsY0FBTSxTQUFOLG1EQUFnRSxXQUFXLEtBQVgsQ0FBaEU7QUFDRCxPQUZEO0FBR0QsS0FKRCxNQUlPO0FBQ0wscUJBQWUsT0FBZixDQUF1QixVQUFDLEtBQUQsRUFBUSxLQUFSLEVBQWtCO0FBQ3ZDLGNBQU0sU0FBTixpREFBOEQsV0FBVyxLQUFYLENBQTlEO0FBQ0QsT0FGRDtBQUdEO0FBQ0Y7O0FBRUQsS0FBRyxXQUFILENBQWUsU0FBZjtBQUNBLFlBQVUsRUFBVjtBQUNEOzs7OztBQ3hDRDs7OztBQUNBOzs7Ozs7QUFFQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBOb2RlID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBOb2RlKGVsbSkge1xuICAgICAgICB0aGlzLmVsbSA9IGVsbTtcbiAgICB9XG4gICAgTm9kZS5wcm90b3R5cGUuaW5zZXJ0ID0gZnVuY3Rpb24gKGVsbSwgYXR0cikge1xuICAgICAgICBpZiAoZWxtKSB7XG4gICAgICAgICAgICBpZiAoZWxtW2F0dHJdKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVsbVthdHRyXSA8IHRoaXMuZWxtLm5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5zZXJ0TGVmdChlbG0sIGF0dHIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5zZXJ0UmlnaHQoZWxtLCBhdHRyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIE5vZGUucHJvdG90eXBlLmluc2VydExlZnQgPSBmdW5jdGlvbiAoZWxtLCBhdHRyKSB7XG4gICAgICAgIGlmICh0aGlzLmxlZnQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxlZnQuaW5zZXJ0KGVsbSwgYXR0cik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmxlZnQgPSBuZXcgTm9kZSh7IG5hbWU6IGVsbVthdHRyXSwgZG9tRWxtOiBlbG0gfSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5sZWZ0O1xuICAgICAgICB9XG4gICAgfTtcbiAgICBOb2RlLnByb3RvdHlwZS5pbnNlcnRSaWdodCA9IGZ1bmN0aW9uIChlbG0sIGF0dHIpIHtcbiAgICAgICAgaWYgKHRoaXMucmlnaHQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJpZ2h0Lmluc2VydChlbG0sIGF0dHIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5yaWdodCA9IG5ldyBOb2RlKHsgbmFtZTogZWxtW2F0dHJdLCBkb21FbG06IGVsbSB9KTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJpZ2h0O1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gTm9kZTtcbn0oKSk7XG5leHBvcnRzLk5vZGUgPSBOb2RlO1xuZnVuY3Rpb24gaW5pdCgpIHtcbiAgICB2YXIgcm9vdDtcbiAgICB2YXIgYXR0ciA9ICd0YWdOYW1lJztcbiAgICBmdW5jdGlvbiByb290T2JqKGRhdGEsIGF0dHIpIHtcbiAgICAgICAgaWYgKCFyb290KSB7XG4gICAgICAgICAgICByb290ID0gbmV3IE5vZGUoeyBuYW1lOiBkYXRhW2F0dHJdLCBkb21FbG06IGRhdGEgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJvb3Q7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNhdmVEb20oKSB7XG4gICAgICAgIHZhciBib2R5X2NoaWxkcmVuID0gZG9jdW1lbnQuYm9keS5jaGlsZHJlbjtcbiAgICAgICAgdmFyIGZpcnN0ID0gdHJ1ZTtcbiAgICAgICAgZm9yICh2YXIgaSBpbiBib2R5X2NoaWxkcmVuKSB7XG4gICAgICAgICAgICBpZiAoZmlyc3QpIHtcbiAgICAgICAgICAgICAgICByb290ID0gcm9vdE9iaihib2R5X2NoaWxkcmVuW2ldLCBhdHRyKTtcbiAgICAgICAgICAgICAgICBmaXJzdCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFpc05hTigraSkpIHtcbiAgICAgICAgICAgICAgICBzYXZlRG9tQWJiKGJvZHlfY2hpbGRyZW5baV0pO1xuICAgICAgICAgICAgICAgIHJvb3QuaW5zZXJ0KGJvZHlfY2hpbGRyZW5baV0sIGF0dHIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKHJvb3QpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzYXZlRG9tQWJiKGVsbSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcm9vdCA9IHJvb3RPYmoobnVsbCwgbnVsbCk7XG4gICAgICAgICAgICByb290Lmluc2VydChlbG0sIGF0dHIpO1xuICAgICAgICAgICAgdmFyIGNoaWxkcmVuID0gZWxtLmNoaWxkcmVuO1xuICAgICAgICAgICAgaWYgKGNoaWxkcmVuICYmIGNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgaW4gY2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgc2F2ZURvbUFiYihjaGlsZHJlbltpXSk7XG4gICAgICAgICAgICAgICAgICAgIC8qIGNvbnNvbGUubG9nKGksIGNoaWxkcmVuLCBjaGlsZHJlbltpXSk7ICovXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgLyogY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSk7ICovXG4gICAgICAgIH1cbiAgICB9XG4gICAgc2F2ZURvbSgpO1xufVxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBpbml0O1xuIiwiLyoqXG4qICAgQGZpbGVvdmVydmlld1xuKiAgICAgQ29tcG9uZW50ZSBwYXJhIGluY3J1c3RhciB1biB2aWRlbyBkZSBZb3VUdWJlIGVuIG51ZXN0cm8gc2l0aW8gd2ViIGN1YW5kbyBsYSByZXNvbHVjacOzbiBlcyBtYXlvciBhIDY0ZW0gKDEwMjRweCksIGN1YW5kbyBlcyBtZW5vciBzZSBhZ3JlZ2EgdW4gZW5sYWNlIGFsIHZpZGVvXG4qICAgICBEZXBlbmRlbmNpYXM6IGZvbnQtYXdlc29tZVxuKlxuKiAgIEBwYXJhbSB7U3RyaW5nfSBpZCwgaWQgZGVsIHZpZGVvIGRlIFlvdVR1YmUsIHNlIGRlZmluZSBlbiBlbCBhcmNoaXZvIHB1Z1xuKiAgIEBwYXJhbSB7U3RyaW5nfSAkdmlkZW8td2lkdGgsIGFuY2h1cmEgZGVsIGNvbnRlbmVkb3IgZGVsIHZpZGVvLCBzZSBkZWZpbmUgZW4gZWwgYXJjaGl2byBzY3NzXG4qXG4qICAgQHJldHVybnMge3ZvaWR9IG5vIHJldG9ybmEgbmFkYVxuKlxuKiAgIEBhdXRob3IgSm9uYXRoYW4gTWlyQ2hhIDxqb25taXJjaGFAZ21haWwuY29tPlxuKiAgIEB2ZXJzaW9uIDEuMC4wXG4qL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24geW91dHViZVZpZGVvICgpIHtcbiAgY29uc3QgZCA9IGRvY3VtZW50LFxuICAgIHcgPSB3aW5kb3csXG4gICAgbXEgPSB3Lm1hdGNoTWVkaWEoJyhtaW4td2lkdGg6IDY0ZW0pJyksXG4gICAgeW91dHViZSA9IGQucXVlcnlTZWxlY3RvckFsbCgnLllvdXR1YmUnKSxcbiAgICB5b3V0dWJlV3JhcHBlciA9ZC5xdWVyeVNlbGVjdG9yQWxsKCcuWW91dHViZS13cmFwcGVyJyksXG4gICAgeW91dHViZUlkcyA9IFtdLFxuICAgIHlvdXR1YmVJZnJhbWUgPSBbXVxuXG4gIHlvdXR1YmUuZm9yRWFjaCgodmlkZW8sIGluZGV4KSA9PiB5b3V0dWJlSWRzW2luZGV4XSA9IHZpZGVvLmlkKVxuXG4gIGNvbnNvbGUubG9nKCB5b3V0dWJlSWRzIClcblxuICBmdW5jdGlvbiBzaG93VmlkZW8gKG1xKSB7XG4gICAgaWYgKG1xLm1hdGNoZXMpIHtcbiAgICAgIHlvdXR1YmVXcmFwcGVyLmZvckVhY2goKHZpZGVvLCBpbmRleCkgPT4ge1xuICAgICAgICB2aWRlby5pbm5lckhUTUwgPSBgPGlmcmFtZSBzcmM9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke3lvdXR1YmVJZHNbaW5kZXhdfVwiIGZyYW1lYm9yZGVyPVwiMFwiPjwvaWZyYW1lPmBcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHlvdXR1YmVXcmFwcGVyLmZvckVhY2goKHZpZGVvLCBpbmRleCkgPT4ge1xuICAgICAgICB2aWRlby5pbm5lckhUTUwgPSBgPGEgaHJlZj1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9JHt5b3V0dWJlSWRzW2luZGV4XX1cIiB0YXJnZXQ9XCJfYmxhbmtcIj48aSBjbGFzcz1cImZhIGZhLXlvdXR1YmUtcGxheVwiPjwvaT4gVmVyIFZpZGVvPC9hPmBcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgbXEuYWRkTGlzdGVuZXIoc2hvd1ZpZGVvKTtcbiAgc2hvd1ZpZGVvKG1xKTtcbn1cbiIsImltcG9ydCB5b3V0dWJlVmlkZW8gZnJvbSAnLi9jb21wb25lbnRzL3lvdXR1YmVfdmlkZW8nXG5pbXBvcnQgYWJiIGZyb20gJy4vY29tcG9uZW50cy9hYmInXG5cbnlvdXR1YmVWaWRlbygpXG5hYmIoKVxuIl19
