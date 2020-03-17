/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dev/scripts/main.js":
/*!*****************************!*\
  !*** ./dev/scripts/main.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var $ = jQuery;
$(document).ready(function () {
  /*
  ================================================================================
     Remove NO_JS class on body (backup if inline removal declines)
   ================================================================================
  */
  if (document.querySelector('body').classList.contains('no_js')) {
    document.querySelector('body').classList.remove('no_js');
  }
  /*
  ================================================================================
     MOBILE AND TABLET CHECK
   ================================================================================
  */


  window.mobileAndTabletcheck = function () {
    var check = false;

    (function (a) {
      if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);

    return check;
  };
  /*
  ================================================================================
     ADD DAYS TO AGENDA
   ================================================================================
  */


  var calendarBody = document.querySelector('tbody');
  var calendarPrepend = document.createElement('tr');
  calendarPrepend.classList.add('mc-row');
  calendarPrepend.innerHTML = '<td class="no-events"><span class="mc-date agenda-day no-events">M</span></td><td class="no-events"><span class="mc-date agenda-day no-events">D</span></td><td class="no-events"><span class="mc-date agenda-day no-events">W</span></td><td class="no-events"><span class="mc-date agenda-day no-events">D</span></td><td class="no-events"><span class="mc-date agenda-day no-events">V</span></td><td class="no-events"><span class="mc-date agenda-day no-events">Z</span></td><td class="no-events"><span class="mc-date agenda-day no-events">Z</span></td>';
  calendarBody.insertBefore(calendarPrepend, calendarBody.firstChild);
  /*
  ================================================================================
     PROEFLES POP UP
   ================================================================================
  */
  //Fix first option

  document.querySelector('#wpcf7-f138-o2 > form > div.custom-select > span > select > option:nth-child(1)').innerHTML = "Kies een dag";
  document.querySelector('.conversion').addEventListener('click', function (e) {
    e.preventDefault();
    var popup = document.getElementById('proefles-overlay');
    var filter = document.getElementById('proefles-filter');
    popup.classList.toggle('togglePopup');
    filter.classList.toggle('toggleFilter');
  });
  document.querySelector('.close-popup').addEventListener('click', function (e) {
    e.preventDefault();
    var popup = document.getElementById('proefles-overlay');
    var filter = document.getElementById('proefles-filter');
    popup.classList.toggle('togglePopup');
    filter.classList.toggle('toggleFilter');
  });
  document.querySelector('#proefles-filter').addEventListener('click', function (e) {
    e.preventDefault();
    var popup = document.getElementById('proefles-overlay');
    var filter = document.getElementById('proefles-filter');
    popup.classList.toggle('togglePopup');
    filter.classList.toggle('toggleFilter');
  });
  document.addEventListener("keyup", function (e) {
    if (e.keyCode == 27) {
      e.preventDefault();
      var popup = document.getElementById('proefles-overlay');
      var filter = document.getElementById('proefles-filter');
      popup.fade();
      filter.fade();
    }
  });
  /*
  ================================================================================
     LAZY LOADING IMAGES
   ================================================================================
  */

  var config = {
    threshold: 0,
    rootMargin: "100px"
  };

  function preloadImage(el) {
    el.src = el.dataset.src;
  }

  var observer = new IntersectionObserver(function (entries, self) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        preloadImage(entry.target);
        self.unobserve(entry.target);
      }
    });
  }, config);
  var imgs = document.querySelectorAll('img[data-src]');
  imgs.forEach(function (img) {
    observer.observe(img);
  });

  function preloadBackgroundImage(el) {
    el.style.backgroundImage = "url('" + el.dataset.background + "')";
  }

  var backgroundObserver = new IntersectionObserver(function (entries, self) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        preloadBackgroundImage(entry.target);
        self.unobserve(entry.target);
      }
    });
  }, config);
  var backgroundimg = document.querySelectorAll('div[data-background]');
  backgroundimg.forEach(function (backgroundimg) {
    backgroundObserver.observe(backgroundimg);
  });

  function preloadSection(el) {
    el.style.backgroundImage = "url('" + el.dataset.background + "')";
  }

  var sectionObserver = new IntersectionObserver(function (entries, self) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        preloadSection(entry.target);
        self.unobserve(entry.target);
      }
    });
  }, config);
  var sectionImg = document.querySelectorAll('section[data-background]');
  sectionImg.forEach(function (sectionImg) {
    sectionObserver.observe(sectionImg);
  });
  /*
  ================================================================================
     INK MODEL
   ================================================================================
  */
  //cache some jQuery objects

  var modalTrigger = document.querySelector('.cd-modal-trigger'),
      transitionLayer = document.querySelector('.cd-transition-layer'),
      transitionBackground = document.querySelector('.bg-layer'),
      modalWindow = document.querySelector('.cd-modal');
  var frameProportion = 1.78,
      //png frame aspect ratio
  frames = 25,
      //number of png frames
  resize = false;
  var open = false; //set transitionBackground dimentions

  setLayerDimensions();
  window.addEventListener("resize", function () {
    if (!resize) {
      resize = true;
      !window.requestAnimationFrame ? setTimeout(setLayerDimensions, 300) : window.requestAnimationFrame(setLayerDimensions);
    }
  }); //open modal window

  modalTrigger.addEventListener("click", function (event) {
    if (!open) {
      event.preventDefault();
      transitionLayer.classList.add('visible', 'opening');
      document.querySelector('.cd-main-content').style.display = 'block';
      modalTrigger.classList.add('open');
      modalTrigger.classList.remove('closed');
      var delay = document.getElementsByClassName('.no-cssanimations').length > 0 ? 0 : 600;
      setTimeout(function () {
        modalWindow.classList.add('visible');
      }, delay);
      open = true;
    } else if (open) {
      var listener = function listener() {
        transitionLayer.classList.remove('closing', 'opening', 'visible');
        transitionBackground.removeEventListener('webkitAnimationEnd', listener);
        transitionBackground.removeEventListener('oanimationend', listener);
        transitionBackground.removeEventListener('msAnimationEnd', listener);
        transitionBackground.removeEventListener('animationend', listener);
      };

      event.preventDefault();
      modalTrigger.classList.add('closed');
      modalTrigger.classList.remove('open');
      transitionLayer.classList.add('closing');
      modalWindow.classList.remove('visible');
      transitionBackground.addEventListener('webkitAnimationEnd', listener);
      transitionBackground.addEventListener('oanimationend', listener);
      transitionBackground.addEventListener('msAnimationEnd', listener);
      transitionBackground.addEventListener('animationend', listener);
      setTimeout(function () {
        document.querySelector('.cd-main-content').style.display = 'none';
      }, 1000);
      open = false;
    }
  });

  if (document.querySelector('main').id === 'homepage') {
    var navbuttons = document.querySelectorAll('#menu-main-menu-1 li a');
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = navbuttons[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var navbutton = _step.value;
        navbutton.addEventListener('click', function (e) {
          if (open) {
            var listener = function listener() {
              transitionLayer.classList.remove('closing', 'opening', 'visible');
              transitionBackground.removeEventListener('webkitAnimationEnd', listener);
              transitionBackground.removeEventListener('oanimationend', listener);
              transitionBackground.removeEventListener('msAnimationEnd', listener);
              transitionBackground.removeEventListener('animationend', listener);
            };

            modalTrigger.classList.add('closed');
            modalTrigger.classList.remove('open');
            transitionLayer.classList.add('closing');
            modalWindow.classList.remove('visible');
            transitionBackground.addEventListener('webkitAnimationEnd', listener);
            transitionBackground.addEventListener('oanimationend', listener);
            transitionBackground.addEventListener('msAnimationEnd', listener);
            transitionBackground.addEventListener('animationend', listener);
            setTimeout(function () {
              document.querySelector('.cd-main-content').style.display = 'none';
            }, 1000);
            open = false;
          }
        });
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }

  function setLayerDimensions() {
    var windowWidth = window.innerWidth,
        windowHeight = window.innerHeight,
        layerHeight,
        layerWidth;

    if (windowWidth / windowHeight > frameProportion) {
      layerWidth = windowWidth;
      layerHeight = layerWidth / frameProportion;
    } else {
      layerHeight = windowHeight * 1.2;
      layerWidth = layerHeight * frameProportion;
    }

    transitionBackground.style.width = layerWidth * frames + 'px';
    transitionBackground.style.height = layerHeight + 'px';
    resize = false;
  }
  /*
  ================================================================================
     MAILCHIMP
   ================================================================================
  */


  document.querySelector('#mc-embedded-subscribe').addEventListener("click", function () {
    var mpName = document.querySelector('#mce-FNAME').value;
    var mpMail = document.querySelector('#mce-EMAIL').value;

    if (!mpName.trim() == '' && !mpMail.trim() == '') {
      var message = "<p id='thank-you-mp'>Bedankt voor het aanmelden!</p>";
      document.querySelector('#mc_embed_signup').fadeOut(300);
      document.querySelector('#mc_embed_signup').promise().done(function () {
        document.querySelector('#mc_embed_signup').replaceWith(message);
      });
    }
  });
  /*
  ================================================================================
     CHECK IF ELEMENT IS IN THE VIEWPORT
   ================================================================================
  */

  var isReady = function isReady(elem) {
    var elementTop = elem.offsetTop;
    var viewportTop = document.body.scrollTop || document.documentElement.scrollTop;
    var viewportBottom = (viewportTop + window.innerHeight) * .9;
    return elementTop <= viewportBottom;
  };

  var isInViewport = function isInViewport(elem) {
    var elementTop = elem.offsetTop;
    var elementBottom = elementTop + elem.offsetHeight;
    var viewportTop = document.body.scrollTop || document.documentElement.scrollTop;
    var viewportBottom = (viewportTop + window.innerHeight) * .9;
    return elementBottom > viewportTop && elementTop < viewportBottom;
  };

  window.addEventListener('scroll', function () {
    var navBarsss = document.querySelectorAll('#nav-icon > span');
    var hero = document.querySelector('.hero');
    var over = document.querySelector('#over');
    var rooster = document.querySelector('#roosters');
    var docenten = document.querySelector('#docenten');
    var blog = document.querySelector('#blog');
    var contact = document.querySelector('#contact');

    if (!open) {
      if (isInViewport(hero)) {
        for (var i = 0; i < navBarsss.length; i++) {
          navBarsss[i].style.background = 'black';
        }
      } else if (isInViewport(over)) {
        for (var i = 0; i < navBarsss.length; i++) {
          navBarsss[i].style.background = 'white';
        }
      } else if (isInViewport(rooster)) {
        for (var i = 0; i < navBarsss.length; i++) {
          navBarsss[i].style.background = 'black';
        }
      } else if (isInViewport(docenten)) {
        for (var i = 0; i < navBarsss.length; i++) {
          navBarsss[i].style.background = 'white';
        }
      } else if (isInViewport(blog)) {
        for (var i = 0; i < navBarsss.length; i++) {
          navBarsss[i].style.background = 'black';
        }
      } else if (isInViewport(contact)) {
        for (var i = 0; i < navBarsss.length; i++) {
          navBarsss[i].style.background = 'white';
        }
      }
    }
  });
  /*
  ================================================================================
     IMG MOVEMENT ON SCROLL
   ================================================================================
  */

  var windowHeight = window.innerHeight;
  var windowWidth = window.innerWidth;
  var scrollArea = 10000 - windowHeight;
  var dancers = document.querySelector('.dancers-layer');
  window.addEventListener('scroll', function () {
    var scrollTop = window.pageYOffset || window.scrollTop;
    var scrollPercent = scrollTop / scrollArea || 0;
    dancers.style.bottom = scrollPercent * window.innerWidth + 'px';
  });
  /*
  ================================================================================
     TEXT TRIM BLOG
   ================================================================================
  */

  var txt = document.querySelectorAll('.blog-bericht .bottom p');
  var maxChar = 200;
  txt.forEach(function (txti) {
    var string = txti.text();

    if (string.length >= maxChar) {
      var newString = string.substring(0, maxChar);
      newString = newString.substr(0, Math.min(newString.length, newString.lastIndexOf(" "))) + "...";
      txti.text(newString);
    }
  });
  /*
  ================================================================================
     ANIMATIONS
   ================================================================================
  */

  var smcontroller = new ScrollMagic.Controller();
  var animationWrapper = document.querySelectorAll('.animation-wrapper');

  for (var i = 0; i < animationWrapper.length; i++) {
    var triggerHook = 0.95;
    animationWrapper[i].style.transitionDelay = animationWrapper[i].dataset.delay;
    var scene = new ScrollMagic.Scene({
      triggerElement: animationWrapper[i],
      triggerHook: triggerHook
    }).setClassToggle(animationWrapper[i], 'fadeIn').addTo(smcontroller);
  }
});
paceOptions = {
  // Disable the 'elements' source
  elements: false,
  document: true,
  eventLag: false,
  // disabled
  restartOnRequestAfter: false
};
/*! pace 1.0.0 */

(function () {
  var a,
      b,
      c,
      d,
      e,
      f,
      g,
      h,
      i,
      j,
      k,
      l,
      m,
      n,
      o,
      p,
      q,
      r,
      s,
      t,
      u,
      _v,
      w,
      x,
      y,
      z,
      A,
      B,
      C,
      D,
      E,
      F,
      G,
      H,
      I,
      J,
      K,
      L,
      M,
      N,
      O,
      P,
      Q,
      R,
      S,
      T,
      U,
      V,
      W,
      X = [].slice,
      Y = {}.hasOwnProperty,
      Z = function Z(a, b) {
    function c() {
      this.constructor = a;
    }

    for (var d in b) {
      Y.call(b, d) && (a[d] = b[d]);
    }

    return c.prototype = b.prototype, a.prototype = new c(), a.__super__ = b.prototype, a;
  },
      $ = [].indexOf || function (a) {
    for (var b = 0, c = this.length; c > b; b++) {
      if (b in this && this[b] === a) return b;
    }

    return -1;
  };

  for (u = {
    catchupTime: 100,
    initialRate: .03,
    minTime: 250,
    ghostTime: 100,
    maxProgressPerFrame: 20,
    easeFactor: 1.25,
    startOnPageLoad: !0,
    restartOnPushState: !0,
    restartOnRequestAfter: 500,
    target: "body",
    elements: {
      checkInterval: 100,
      selectors: ["body"]
    },
    eventLag: {
      minSamples: 10,
      sampleCount: 3,
      lagThreshold: 3
    },
    ajax: {
      trackMethods: ["GET"],
      trackWebSockets: !0,
      ignoreURLs: []
    }
  }, C = function C() {
    var a;
    return null != (a = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance.now() : void 0) ? a : +new Date();
  }, E = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame, t = window.cancelAnimationFrame || window.mozCancelAnimationFrame, null == E && (E = function E(a) {
    return setTimeout(a, 50);
  }, t = function t(a) {
    return clearTimeout(a);
  }), G = function G(a) {
    var b, _c;

    return b = C(), (_c = function c() {
      var d;
      return d = C() - b, d >= 33 ? (b = C(), a(d, function () {
        return E(_c);
      })) : setTimeout(_c, 33 - d);
    })();
  }, F = function F() {
    var a, b, c;
    return c = arguments[0], b = arguments[1], a = 3 <= arguments.length ? X.call(arguments, 2) : [], "function" == typeof c[b] ? c[b].apply(c, a) : c[b];
  }, _v = function v() {
    var a, b, c, d, e, f, g;

    for (b = arguments[0], d = 2 <= arguments.length ? X.call(arguments, 1) : [], f = 0, g = d.length; g > f; f++) {
      if (c = d[f]) for (a in c) {
        Y.call(c, a) && (e = c[a], null != b[a] && "object" == _typeof(b[a]) && null != e && "object" == _typeof(e) ? _v(b[a], e) : b[a] = e);
      }
    }

    return b;
  }, q = function q(a) {
    var b, c, d, e, f;

    for (c = b = 0, e = 0, f = a.length; f > e; e++) {
      d = a[e], c += Math.abs(d), b++;
    }

    return c / b;
  }, x = function x(a, b) {
    var c, d, e;

    if (null == a && (a = "options"), null == b && (b = !0), e = document.querySelector("[data-pace-" + a + "]")) {
      if (c = e.getAttribute("data-pace-" + a), !b) return c;

      try {
        return JSON.parse(c);
      } catch (f) {
        return d = f, "undefined" != typeof console && null !== console ? console.error("Error parsing inline pace options", d) : void 0;
      }
    }
  }, g = function () {
    function a() {}

    return a.prototype.on = function (a, b, c, d) {
      var e;
      return null == d && (d = !1), null == this.bindings && (this.bindings = {}), null == (e = this.bindings)[a] && (e[a] = []), this.bindings[a].push({
        handler: b,
        ctx: c,
        once: d
      });
    }, a.prototype.once = function (a, b, c) {
      return this.on(a, b, c, !0);
    }, a.prototype.off = function (a, b) {
      var c, d, e;

      if (null != (null != (d = this.bindings) ? d[a] : void 0)) {
        if (null == b) return delete this.bindings[a];

        for (c = 0, e = []; c < this.bindings[a].length;) {
          e.push(this.bindings[a][c].handler === b ? this.bindings[a].splice(c, 1) : c++);
        }

        return e;
      }
    }, a.prototype.trigger = function () {
      var a, b, c, d, e, f, g, h, i;

      if (c = arguments[0], a = 2 <= arguments.length ? X.call(arguments, 1) : [], null != (g = this.bindings) ? g[c] : void 0) {
        for (e = 0, i = []; e < this.bindings[c].length;) {
          h = this.bindings[c][e], d = h.handler, b = h.ctx, f = h.once, d.apply(null != b ? b : this, a), i.push(f ? this.bindings[c].splice(e, 1) : e++);
        }

        return i;
      }
    }, a;
  }(), j = window.Pace || {}, window.Pace = j, _v(j, g.prototype), D = j.options = _v({}, u, window.paceOptions, x()), U = ["ajax", "document", "eventLag", "elements"], Q = 0, S = U.length; S > Q; Q++) {
    K = U[Q], D[K] === !0 && (D[K] = u[K]);
  }

  i = function (a) {
    function b() {
      return V = b.__super__.constructor.apply(this, arguments);
    }

    return Z(b, a), b;
  }(Error), b = function () {
    function a() {
      this.progress = 0;
    }

    return a.prototype.getElement = function () {
      var a;

      if (null == this.el) {
        if (a = document.querySelector(D.target), !a) throw new i();
        this.el = document.createElement("div"), this.el.className = "pace pace-active", document.body.className = document.body.className.replace(/pace-done/g, ""), document.body.className += " pace-running", this.el.innerHTML = '<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>', null != a.firstChild ? a.insertBefore(this.el, a.firstChild) : a.appendChild(this.el);
      }

      return this.el;
    }, a.prototype.finish = function () {
      var a;
      return a = this.getElement(), a.className = a.className.replace("pace-active", ""), a.className += " pace-inactive", document.body.className = document.body.className.replace("pace-running", ""), document.body.className += " pace-done";
    }, a.prototype.update = function (a) {
      return this.progress = a, this.render();
    }, a.prototype.destroy = function () {
      try {
        this.getElement().parentNode.removeChild(this.getElement());
      } catch (a) {
        i = a;
      }

      return this.el = void 0;
    }, a.prototype.render = function () {
      var a, b, c, d, e, f, g;
      if (null == document.querySelector(D.target)) return !1;

      for (a = this.getElement(), d = "translate3d(" + this.progress + "%, 0, 0)", g = ["webkitTransform", "msTransform", "transform"], e = 0, f = g.length; f > e; e++) {
        b = g[e], a.children[0].style[b] = d;
      }

      return (!this.lastRenderedProgress || this.lastRenderedProgress | 0 !== this.progress | 0) && (a.children[0].setAttribute("data-progress-text", "" + (0 | this.progress) + "%"), this.progress >= 100 ? c = "99" : (c = this.progress < 10 ? "0" : "", c += 0 | this.progress), a.children[0].setAttribute("data-progress", "" + c)), this.lastRenderedProgress = this.progress;
    }, a.prototype.done = function () {
      return this.progress >= 100;
    }, a;
  }(), h = function () {
    function a() {
      this.bindings = {};
    }

    return a.prototype.trigger = function (a, b) {
      var c, d, e, f, g;

      if (null != this.bindings[a]) {
        for (f = this.bindings[a], g = [], d = 0, e = f.length; e > d; d++) {
          c = f[d], g.push(c.call(this, b));
        }

        return g;
      }
    }, a.prototype.on = function (a, b) {
      var c;
      return null == (c = this.bindings)[a] && (c[a] = []), this.bindings[a].push(b);
    }, a;
  }(), P = window.XMLHttpRequest, O = window.XDomainRequest, N = window.WebSocket, w = function w(a, b) {
    var c, d, e, f;
    f = [];

    for (d in b.prototype) {
      try {
        e = b.prototype[d], f.push(null == a[d] && "function" != typeof e ? a[d] = e : void 0);
      } catch (g) {
        c = g;
      }
    }

    return f;
  }, A = [], j.ignore = function () {
    var a, b, c;
    return b = arguments[0], a = 2 <= arguments.length ? X.call(arguments, 1) : [], A.unshift("ignore"), c = b.apply(null, a), A.shift(), c;
  }, j.track = function () {
    var a, b, c;
    return b = arguments[0], a = 2 <= arguments.length ? X.call(arguments, 1) : [], A.unshift("track"), c = b.apply(null, a), A.shift(), c;
  }, J = function J(a) {
    var b;
    if (null == a && (a = "GET"), "track" === A[0]) return "force";

    if (!A.length && D.ajax) {
      if ("socket" === a && D.ajax.trackWebSockets) return !0;
      if (b = a.toUpperCase(), $.call(D.ajax.trackMethods, b) >= 0) return !0;
    }

    return !1;
  }, k = function (a) {
    function b() {
      var a,
          c = this;
      b.__super__.constructor.apply(this, arguments), a = function a(_a) {
        var b;
        return b = _a.open, _a.open = function (d, e) {
          return J(d) && c.trigger("request", {
            type: d,
            url: e,
            request: _a
          }), b.apply(_a, arguments);
        };
      }, window.XMLHttpRequest = function (b) {
        var c;
        return c = new P(b), a(c), c;
      };

      try {
        w(window.XMLHttpRequest, P);
      } catch (d) {}

      if (null != O) {
        window.XDomainRequest = function () {
          var b;
          return b = new O(), a(b), b;
        };

        try {
          w(window.XDomainRequest, O);
        } catch (d) {}
      }

      if (null != N && D.ajax.trackWebSockets) {
        window.WebSocket = function (a, b) {
          var d;
          return d = null != b ? new N(a, b) : new N(a), J("socket") && c.trigger("request", {
            type: "socket",
            url: a,
            protocols: b,
            request: d
          }), d;
        };

        try {
          w(window.WebSocket, N);
        } catch (d) {}
      }
    }

    return Z(b, a), b;
  }(h), R = null, y = function y() {
    return null == R && (R = new k()), R;
  }, I = function I(a) {
    var b, c, d, e;

    for (e = D.ajax.ignoreURLs, c = 0, d = e.length; d > c; c++) {
      if (b = e[c], "string" == typeof b) {
        if (-1 !== a.indexOf(b)) return !0;
      } else if (b.test(a)) return !0;
    }

    return !1;
  }, y().on("request", function (b) {
    var c, d, e, f, g;
    return f = b.type, e = b.request, g = b.url, I(g) ? void 0 : j.running || D.restartOnRequestAfter === !1 && "force" !== J(f) ? void 0 : (d = arguments, c = D.restartOnRequestAfter || 0, "boolean" == typeof c && (c = 0), setTimeout(function () {
      var b, c, g, h, i, k;

      if (b = "socket" === f ? e.readyState < 2 : 0 < (h = e.readyState) && 4 > h) {
        for (j.restart(), i = j.sources, k = [], c = 0, g = i.length; g > c; c++) {
          if (K = i[c], K instanceof a) {
            K.watch.apply(K, d);
            break;
          }

          k.push(void 0);
        }

        return k;
      }
    }, c));
  }), a = function () {
    function a() {
      var a = this;
      this.elements = [], y().on("request", function () {
        return a.watch.apply(a, arguments);
      });
    }

    return a.prototype.watch = function (a) {
      var b, c, d, e;
      return d = a.type, b = a.request, e = a.url, I(e) ? void 0 : (c = "socket" === d ? new n(b) : new o(b), this.elements.push(c));
    }, a;
  }(), o = function () {
    function a(a) {
      var b,
          c,
          d,
          e,
          f,
          g,
          h = this;
      if (this.progress = 0, null != window.ProgressEvent) for (c = null, a.addEventListener("progress", function (a) {
        return h.progress = a.lengthComputable ? 100 * a.loaded / a.total : h.progress + (100 - h.progress) / 2;
      }, !1), g = ["load", "abort", "timeout", "error"], d = 0, e = g.length; e > d; d++) {
        b = g[d], a.addEventListener(b, function () {
          return h.progress = 100;
        }, !1);
      } else f = a.onreadystatechange, a.onreadystatechange = function () {
        var b;
        return 0 === (b = a.readyState) || 4 === b ? h.progress = 100 : 3 === a.readyState && (h.progress = 50), "function" == typeof f ? f.apply(null, arguments) : void 0;
      };
    }

    return a;
  }(), n = function () {
    function a(a) {
      var b,
          c,
          d,
          e,
          f = this;

      for (this.progress = 0, e = ["error", "open"], c = 0, d = e.length; d > c; c++) {
        b = e[c], a.addEventListener(b, function () {
          return f.progress = 100;
        }, !1);
      }
    }

    return a;
  }(), d = function () {
    function a(a) {
      var b, c, d, f;

      for (null == a && (a = {}), this.elements = [], null == a.selectors && (a.selectors = []), f = a.selectors, c = 0, d = f.length; d > c; c++) {
        b = f[c], this.elements.push(new e(b));
      }
    }

    return a;
  }(), e = function () {
    function a(a) {
      this.selector = a, this.progress = 0, this.check();
    }

    return a.prototype.check = function () {
      var a = this;
      return document.querySelector(this.selector) ? this.done() : setTimeout(function () {
        return a.check();
      }, D.elements.checkInterval);
    }, a.prototype.done = function () {
      return this.progress = 100;
    }, a;
  }(), c = function () {
    function a() {
      var a,
          b,
          c = this;
      this.progress = null != (b = this.states[document.readyState]) ? b : 100, a = document.onreadystatechange, document.onreadystatechange = function () {
        return null != c.states[document.readyState] && (c.progress = c.states[document.readyState]), "function" == typeof a ? a.apply(null, arguments) : void 0;
      };
    }

    return a.prototype.states = {
      loading: 0,
      interactive: 50,
      complete: 100
    }, a;
  }(), f = function () {
    function a() {
      var a,
          b,
          c,
          d,
          e,
          f = this;
      this.progress = 0, a = 0, e = [], d = 0, c = C(), b = setInterval(function () {
        var g;
        return g = C() - c - 50, c = C(), e.push(g), e.length > D.eventLag.sampleCount && e.shift(), a = q(e), ++d >= D.eventLag.minSamples && a < D.eventLag.lagThreshold ? (f.progress = 100, clearInterval(b)) : f.progress = 100 * (3 / (a + 3));
      }, 50);
    }

    return a;
  }(), m = function () {
    function a(a) {
      this.source = a, this.last = this.sinceLastUpdate = 0, this.rate = D.initialRate, this.catchup = 0, this.progress = this.lastProgress = 0, null != this.source && (this.progress = F(this.source, "progress"));
    }

    return a.prototype.tick = function (a, b) {
      var c;
      return null == b && (b = F(this.source, "progress")), b >= 100 && (this.done = !0), b === this.last ? this.sinceLastUpdate += a : (this.sinceLastUpdate && (this.rate = (b - this.last) / this.sinceLastUpdate), this.catchup = (b - this.progress) / D.catchupTime, this.sinceLastUpdate = 0, this.last = b), b > this.progress && (this.progress += this.catchup * a), c = 1 - Math.pow(this.progress / 100, D.easeFactor), this.progress += c * this.rate * a, this.progress = Math.min(this.lastProgress + D.maxProgressPerFrame, this.progress), this.progress = Math.max(0, this.progress), this.progress = Math.min(100, this.progress), this.lastProgress = this.progress, this.progress;
    }, a;
  }(), L = null, H = null, r = null, M = null, p = null, s = null, j.running = !1, z = function z() {
    return D.restartOnPushState ? j.restart() : void 0;
  }, null != window.history.pushState && (T = window.history.pushState, window.history.pushState = function () {
    return z(), T.apply(window.history, arguments);
  }), null != window.history.replaceState && (W = window.history.replaceState, window.history.replaceState = function () {
    return z(), W.apply(window.history, arguments);
  }), l = {
    ajax: a,
    elements: d,
    document: c,
    eventLag: f
  }, (B = function B() {
    var a, c, d, e, f, g, h, i;

    for (j.sources = L = [], g = ["ajax", "elements", "document", "eventLag"], c = 0, e = g.length; e > c; c++) {
      a = g[c], D[a] !== !1 && L.push(new l[a](D[a]));
    }

    for (i = null != (h = D.extraSources) ? h : [], d = 0, f = i.length; f > d; d++) {
      K = i[d], L.push(new K(D));
    }

    return j.bar = r = new b(), H = [], M = new m();
  })(), j.stop = function () {
    return j.trigger("stop"), j.running = !1, r.destroy(), s = !0, null != p && ("function" == typeof t && t(p), p = null), B();
  }, j.restart = function () {
    return j.trigger("restart"), j.stop(), j.start();
  }, j.go = function () {
    var a;
    return j.running = !0, r.render(), a = C(), s = !1, p = G(function (b, c) {
      var d, e, f, g, h, i, k, l, n, o, p, q, t, u, v, w;

      for (l = 100 - r.progress, e = p = 0, f = !0, i = q = 0, u = L.length; u > q; i = ++q) {
        for (K = L[i], o = null != H[i] ? H[i] : H[i] = [], h = null != (w = K.elements) ? w : [K], k = t = 0, v = h.length; v > t; k = ++t) {
          g = h[k], n = null != o[k] ? o[k] : o[k] = new m(g), f &= n.done, n.done || (e++, p += n.tick(b));
        }
      }

      return d = p / e, r.update(M.tick(b, d)), r.done() || f || s ? (r.update(100), j.trigger("done"), setTimeout(function () {
        return r.finish(), j.running = !1, j.trigger("hide");
      }, Math.max(D.ghostTime, Math.max(D.minTime - (C() - a), 0)))) : c();
    });
  }, j.start = function (a) {
    _v(D, a), j.running = !0;

    try {
      r.render();
    } catch (b) {
      i = b;
    }

    return document.querySelector(".pace") ? (j.trigger("start"), j.go()) : setTimeout(j.start, 50);
  },  true ? !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
    return j;
  }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
}).call(this);

/***/ }),

/***/ "./dev/scripts/vendor.js":
/*!*******************************!*\
  !*** ./dev/scripts/vendor.js ***!
  \*******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.js */ "./dev/scripts/main.js");
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_main_js__WEBPACK_IMPORTED_MODULE_0__);


/***/ }),

/***/ 0:
/*!*************************************!*\
  !*** multi ./dev/scripts/vendor.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/desleyaalderink/sites/studiohomebase/wp-content/themes/homebase/dev/scripts/vendor.js */"./dev/scripts/vendor.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGV2L3NjcmlwdHMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9kZXYvc2NyaXB0cy92ZW5kb3IuanMiXSwibmFtZXMiOlsiJCIsImpRdWVyeSIsImRvY3VtZW50IiwicmVhZHkiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJyZW1vdmUiLCJ3aW5kb3ciLCJtb2JpbGVBbmRUYWJsZXRjaGVjayIsImNoZWNrIiwiYSIsInRlc3QiLCJzdWJzdHIiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJ2ZW5kb3IiLCJvcGVyYSIsImNhbGVuZGFyQm9keSIsImNhbGVuZGFyUHJlcGVuZCIsImNyZWF0ZUVsZW1lbnQiLCJhZGQiLCJpbm5lckhUTUwiLCJpbnNlcnRCZWZvcmUiLCJmaXJzdENoaWxkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInBvcHVwIiwiZ2V0RWxlbWVudEJ5SWQiLCJmaWx0ZXIiLCJ0b2dnbGUiLCJrZXlDb2RlIiwiZmFkZSIsImNvbmZpZyIsInRocmVzaG9sZCIsInJvb3RNYXJnaW4iLCJwcmVsb2FkSW1hZ2UiLCJlbCIsInNyYyIsImRhdGFzZXQiLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsInNlbGYiLCJmb3JFYWNoIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsInRhcmdldCIsInVub2JzZXJ2ZSIsImltZ3MiLCJxdWVyeVNlbGVjdG9yQWxsIiwiaW1nIiwib2JzZXJ2ZSIsInByZWxvYWRCYWNrZ3JvdW5kSW1hZ2UiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmQiLCJiYWNrZ3JvdW5kT2JzZXJ2ZXIiLCJiYWNrZ3JvdW5kaW1nIiwicHJlbG9hZFNlY3Rpb24iLCJzZWN0aW9uT2JzZXJ2ZXIiLCJzZWN0aW9uSW1nIiwibW9kYWxUcmlnZ2VyIiwidHJhbnNpdGlvbkxheWVyIiwidHJhbnNpdGlvbkJhY2tncm91bmQiLCJtb2RhbFdpbmRvdyIsImZyYW1lUHJvcG9ydGlvbiIsImZyYW1lcyIsInJlc2l6ZSIsIm9wZW4iLCJzZXRMYXllckRpbWVuc2lvbnMiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJzZXRUaW1lb3V0IiwiZXZlbnQiLCJkaXNwbGF5IiwiZGVsYXkiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwibGVuZ3RoIiwibGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaWQiLCJuYXZidXR0b25zIiwibmF2YnV0dG9uIiwid2luZG93V2lkdGgiLCJpbm5lcldpZHRoIiwid2luZG93SGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJsYXllckhlaWdodCIsImxheWVyV2lkdGgiLCJ3aWR0aCIsImhlaWdodCIsIm1wTmFtZSIsInZhbHVlIiwibXBNYWlsIiwidHJpbSIsIm1lc3NhZ2UiLCJmYWRlT3V0IiwicHJvbWlzZSIsImRvbmUiLCJyZXBsYWNlV2l0aCIsImlzUmVhZHkiLCJlbGVtIiwiZWxlbWVudFRvcCIsIm9mZnNldFRvcCIsInZpZXdwb3J0VG9wIiwiYm9keSIsInNjcm9sbFRvcCIsImRvY3VtZW50RWxlbWVudCIsInZpZXdwb3J0Qm90dG9tIiwiaXNJblZpZXdwb3J0IiwiZWxlbWVudEJvdHRvbSIsIm9mZnNldEhlaWdodCIsIm5hdkJhcnNzcyIsImhlcm8iLCJvdmVyIiwicm9vc3RlciIsImRvY2VudGVuIiwiYmxvZyIsImNvbnRhY3QiLCJpIiwic2Nyb2xsQXJlYSIsImRhbmNlcnMiLCJwYWdlWU9mZnNldCIsInNjcm9sbFBlcmNlbnQiLCJib3R0b20iLCJ0eHQiLCJtYXhDaGFyIiwidHh0aSIsInN0cmluZyIsInRleHQiLCJuZXdTdHJpbmciLCJzdWJzdHJpbmciLCJNYXRoIiwibWluIiwibGFzdEluZGV4T2YiLCJzbWNvbnRyb2xsZXIiLCJTY3JvbGxNYWdpYyIsIkNvbnRyb2xsZXIiLCJhbmltYXRpb25XcmFwcGVyIiwidHJpZ2dlckhvb2siLCJ0cmFuc2l0aW9uRGVsYXkiLCJzY2VuZSIsIlNjZW5lIiwidHJpZ2dlckVsZW1lbnQiLCJzZXRDbGFzc1RvZ2dsZSIsImFkZFRvIiwicGFjZU9wdGlvbnMiLCJlbGVtZW50cyIsImV2ZW50TGFnIiwicmVzdGFydE9uUmVxdWVzdEFmdGVyIiwiYiIsImMiLCJkIiwiZiIsImciLCJoIiwiaiIsImsiLCJsIiwibSIsIm4iLCJvIiwicCIsInEiLCJyIiwicyIsInQiLCJ1IiwidiIsInciLCJ4IiwieSIsInoiLCJBIiwiQiIsIkMiLCJEIiwiRSIsIkYiLCJHIiwiSCIsIkkiLCJKIiwiSyIsIkwiLCJNIiwiTiIsIk8iLCJQIiwiUSIsIlIiLCJTIiwiVCIsIlUiLCJWIiwiVyIsIlgiLCJzbGljZSIsIlkiLCJoYXNPd25Qcm9wZXJ0eSIsIloiLCJjb25zdHJ1Y3RvciIsImNhbGwiLCJwcm90b3R5cGUiLCJfX3N1cGVyX18iLCJpbmRleE9mIiwiY2F0Y2h1cFRpbWUiLCJpbml0aWFsUmF0ZSIsIm1pblRpbWUiLCJnaG9zdFRpbWUiLCJtYXhQcm9ncmVzc1BlckZyYW1lIiwiZWFzZUZhY3RvciIsInN0YXJ0T25QYWdlTG9hZCIsInJlc3RhcnRPblB1c2hTdGF0ZSIsImNoZWNrSW50ZXJ2YWwiLCJzZWxlY3RvcnMiLCJtaW5TYW1wbGVzIiwic2FtcGxlQ291bnQiLCJsYWdUaHJlc2hvbGQiLCJhamF4IiwidHJhY2tNZXRob2RzIiwidHJhY2tXZWJTb2NrZXRzIiwiaWdub3JlVVJMcyIsInBlcmZvcm1hbmNlIiwibm93IiwiRGF0ZSIsIm1velJlcXVlc3RBbmltYXRpb25GcmFtZSIsIndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJtb3pDYW5jZWxBbmltYXRpb25GcmFtZSIsImNsZWFyVGltZW91dCIsImFyZ3VtZW50cyIsImFwcGx5IiwiYWJzIiwiZ2V0QXR0cmlidXRlIiwiSlNPTiIsInBhcnNlIiwiY29uc29sZSIsImVycm9yIiwib24iLCJiaW5kaW5ncyIsInB1c2giLCJoYW5kbGVyIiwiY3R4Iiwib25jZSIsIm9mZiIsInNwbGljZSIsInRyaWdnZXIiLCJQYWNlIiwib3B0aW9ucyIsIkVycm9yIiwicHJvZ3Jlc3MiLCJnZXRFbGVtZW50IiwiY2xhc3NOYW1lIiwicmVwbGFjZSIsImFwcGVuZENoaWxkIiwiZmluaXNoIiwidXBkYXRlIiwicmVuZGVyIiwiZGVzdHJveSIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImNoaWxkcmVuIiwibGFzdFJlbmRlcmVkUHJvZ3Jlc3MiLCJzZXRBdHRyaWJ1dGUiLCJYTUxIdHRwUmVxdWVzdCIsIlhEb21haW5SZXF1ZXN0IiwiV2ViU29ja2V0IiwiaWdub3JlIiwidW5zaGlmdCIsInNoaWZ0IiwidHJhY2siLCJ0b1VwcGVyQ2FzZSIsInR5cGUiLCJ1cmwiLCJyZXF1ZXN0IiwicHJvdG9jb2xzIiwicnVubmluZyIsInJlYWR5U3RhdGUiLCJyZXN0YXJ0Iiwic291cmNlcyIsIndhdGNoIiwiUHJvZ3Jlc3NFdmVudCIsImxlbmd0aENvbXB1dGFibGUiLCJsb2FkZWQiLCJ0b3RhbCIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInNlbGVjdG9yIiwic3RhdGVzIiwibG9hZGluZyIsImludGVyYWN0aXZlIiwiY29tcGxldGUiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJzb3VyY2UiLCJsYXN0Iiwic2luY2VMYXN0VXBkYXRlIiwicmF0ZSIsImNhdGNodXAiLCJsYXN0UHJvZ3Jlc3MiLCJ0aWNrIiwicG93IiwibWF4IiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsInJlcGxhY2VTdGF0ZSIsImV4dHJhU291cmNlcyIsImJhciIsInN0b3AiLCJzdGFydCIsImdvIiwiZGVmaW5lIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7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QyxJQS9XSCxDQStXUSxJQS9XUixFOzs7Ozs7Ozs7Ozs7QUMzZEE7QUFBQTtBQUFBIiwiZmlsZSI6InZlbmRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsInZhciAkID0galF1ZXJ5OyBcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuXG4gIC8qXG4gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgICBSZW1vdmUgTk9fSlMgY2xhc3Mgb24gYm9keSAoYmFja3VwIGlmIGlubGluZSByZW1vdmFsIGRlY2xpbmVzKVxuXG4gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICovXG5cbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5jbGFzc0xpc3QuY29udGFpbnMoJ25vX2pzJykpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5JykuY2xhc3NMaXN0LnJlbW92ZSgnbm9fanMnKTtcbiAgfVxuXG4gIC8qXG4gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgICBNT0JJTEUgQU5EIFRBQkxFVCBDSEVDS1xuXG4gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICovXG5cbiAgd2luZG93Lm1vYmlsZUFuZFRhYmxldGNoZWNrID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGNoZWNrID0gZmFsc2U7XG4gICAgKGZ1bmN0aW9uKGEpIHtcbiAgICAgIGlmICgvKGFuZHJvaWR8YmJcXGQrfG1lZWdvKS4rbW9iaWxlfGF2YW50Z298YmFkYVxcL3xibGFja2JlcnJ5fGJsYXplcnxjb21wYWx8ZWxhaW5lfGZlbm5lY3xoaXB0b3B8aWVtb2JpbGV8aXAoaG9uZXxvZCl8aXJpc3xraW5kbGV8bGdlIHxtYWVtb3xtaWRwfG1tcHxtb2JpbGUuK2ZpcmVmb3h8bmV0ZnJvbnR8b3BlcmEgbShvYnxpbilpfHBhbG0oIG9zKT98cGhvbmV8cChpeGl8cmUpXFwvfHBsdWNrZXJ8cG9ja2V0fHBzcHxzZXJpZXMoNHw2KTB8c3ltYmlhbnx0cmVvfHVwXFwuKGJyb3dzZXJ8bGluayl8dm9kYWZvbmV8d2FwfHdpbmRvd3MgY2V8eGRhfHhpaW5vfGFuZHJvaWR8aXBhZHxwbGF5Ym9va3xzaWxrL2kudGVzdChhKSB8fCAvMTIwN3w2MzEwfDY1OTB8M2dzb3w0dGhwfDUwWzEtNl1pfDc3MHN8ODAyc3xhIHdhfGFiYWN8YWMoZXJ8b298c1xcLSl8YWkoa298cm4pfGFsKGF2fGNhfGNvKXxhbW9pfGFuKGV4fG55fHl3KXxhcHR1fGFyKGNofGdvKXxhcyh0ZXx1cyl8YXR0d3xhdShkaXxcXC1tfHIgfHMgKXxhdmFufGJlKGNrfGxsfG5xKXxiaShsYnxyZCl8YmwoYWN8YXopfGJyKGV8dil3fGJ1bWJ8YndcXC0obnx1KXxjNTVcXC98Y2FwaXxjY3dhfGNkbVxcLXxjZWxsfGNodG18Y2xkY3xjbWRcXC18Y28obXB8bmQpfGNyYXd8ZGEoaXR8bGx8bmcpfGRidGV8ZGNcXC1zfGRldml8ZGljYXxkbW9ifGRvKGN8cClvfGRzKDEyfFxcLWQpfGVsKDQ5fGFpKXxlbShsMnx1bCl8ZXIoaWN8azApfGVzbDh8ZXooWzQtN10wfG9zfHdhfHplKXxmZXRjfGZseShcXC18Xyl8ZzEgdXxnNTYwfGdlbmV8Z2ZcXC01fGdcXC1tb3xnbyhcXC53fG9kKXxncihhZHx1bil8aGFpZXxoY2l0fGhkXFwtKG18cHx0KXxoZWlcXC18aGkocHR8dGEpfGhwKCBpfGlwKXxoc1xcLWN8aHQoYyhcXC18IHxffGF8Z3xwfHN8dCl8dHApfGh1KGF3fHRjKXxpXFwtKDIwfGdvfG1hKXxpMjMwfGlhYyggfFxcLXxcXC8pfGlicm98aWRlYXxpZzAxfGlrb218aW0xa3xpbm5vfGlwYXF8aXJpc3xqYSh0fHYpYXxqYnJvfGplbXV8amlnc3xrZGRpfGtlaml8a2d0KCB8XFwvKXxrbG9ufGtwdCB8a3djXFwtfGt5byhjfGspfGxlKG5vfHhpKXxsZyggZ3xcXC8oa3xsfHUpfDUwfDU0fFxcLVthLXddKXxsaWJ3fGx5bnh8bTFcXC13fG0zZ2F8bTUwXFwvfG1hKHRlfHVpfHhvKXxtYygwMXwyMXxjYSl8bVxcLWNyfG1lKHJjfHJpKXxtaShvOHxvYXx0cyl8bW1lZnxtbygwMXwwMnxiaXxkZXxkb3x0KFxcLXwgfG98dil8enopfG10KDUwfHAxfHYgKXxtd2JwfG15d2F8bjEwWzAtMl18bjIwWzItM118bjMwKDB8Mil8bjUwKDB8Mnw1KXxuNygwKDB8MSl8MTApfG5lKChjfG0pXFwtfG9ufHRmfHdmfHdnfHd0KXxub2soNnxpKXxuenBofG8yaW18b3AodGl8d3YpfG9yYW58b3dnMXxwODAwfHBhbihhfGR8dCl8cGR4Z3xwZygxM3xcXC0oWzEtOF18YykpfHBoaWx8cGlyZXxwbChheXx1Yyl8cG5cXC0yfHBvKGNrfHJ0fHNlKXxwcm94fHBzaW98cHRcXC1nfHFhXFwtYXxxYygwN3wxMnwyMXwzMnw2MHxcXC1bMi03XXxpXFwtKXxxdGVrfHIzODB8cjYwMHxyYWtzfHJpbTl8cm8odmV8em8pfHM1NVxcL3xzYShnZXxtYXxtbXxtc3xueXx2YSl8c2MoMDF8aFxcLXxvb3xwXFwtKXxzZGtcXC98c2UoYyhcXC18MHwxKXw0N3xtY3xuZHxyaSl8c2doXFwtfHNoYXJ8c2llKFxcLXxtKXxza1xcLTB8c2woNDV8aWQpfHNtKGFsfGFyfGIzfGl0fHQ1KXxzbyhmdHxueSl8c3AoMDF8aFxcLXx2XFwtfHYgKXxzeSgwMXxtYil8dDIoMTh8NTApfHQ2KDAwfDEwfDE4KXx0YShndHxsayl8dGNsXFwtfHRkZ1xcLXx0ZWwoaXxtKXx0aW1cXC18dFxcLW1vfHRvKHBsfHNoKXx0cyg3MHxtXFwtfG0zfG01KXx0eFxcLTl8dXAoXFwuYnxnMXxzaSl8dXRzdHx2NDAwfHY3NTB8dmVyaXx2aShyZ3x0ZSl8dmsoNDB8NVswLTNdfFxcLXYpfHZtNDB8dm9kYXx2dWxjfHZ4KDUyfDUzfDYwfDYxfDcwfDgwfDgxfDgzfDg1fDk4KXx3M2MoXFwtfCApfHdlYmN8d2hpdHx3aShnIHxuY3xudyl8d21sYnx3b251fHg3MDB8eWFzXFwtfHlvdXJ8emV0b3x6dGVcXC0vaS50ZXN0KGEuc3Vic3RyKDAsIDQpKSkgY2hlY2sgPSB0cnVlO1xuICAgIH0pKG5hdmlnYXRvci51c2VyQWdlbnQgfHwgbmF2aWdhdG9yLnZlbmRvciB8fCB3aW5kb3cub3BlcmEpO1xuICAgIHJldHVybiBjaGVjaztcbiAgfTtcblxuICAvKlxuICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgQUREIERBWVMgVE8gQUdFTkRBXG5cbiAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgKi9cblxuICB2YXIgY2FsZW5kYXJCb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndGJvZHknKVxuICB2YXIgY2FsZW5kYXJQcmVwZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKVxuICBjYWxlbmRhclByZXBlbmQuY2xhc3NMaXN0LmFkZCgnbWMtcm93JylcbiAgY2FsZW5kYXJQcmVwZW5kLmlubmVySFRNTCA9ICc8dGQgY2xhc3M9XCJuby1ldmVudHNcIj48c3BhbiBjbGFzcz1cIm1jLWRhdGUgYWdlbmRhLWRheSBuby1ldmVudHNcIj5NPC9zcGFuPjwvdGQ+PHRkIGNsYXNzPVwibm8tZXZlbnRzXCI+PHNwYW4gY2xhc3M9XCJtYy1kYXRlIGFnZW5kYS1kYXkgbm8tZXZlbnRzXCI+RDwvc3Bhbj48L3RkPjx0ZCBjbGFzcz1cIm5vLWV2ZW50c1wiPjxzcGFuIGNsYXNzPVwibWMtZGF0ZSBhZ2VuZGEtZGF5IG5vLWV2ZW50c1wiPlc8L3NwYW4+PC90ZD48dGQgY2xhc3M9XCJuby1ldmVudHNcIj48c3BhbiBjbGFzcz1cIm1jLWRhdGUgYWdlbmRhLWRheSBuby1ldmVudHNcIj5EPC9zcGFuPjwvdGQ+PHRkIGNsYXNzPVwibm8tZXZlbnRzXCI+PHNwYW4gY2xhc3M9XCJtYy1kYXRlIGFnZW5kYS1kYXkgbm8tZXZlbnRzXCI+Vjwvc3Bhbj48L3RkPjx0ZCBjbGFzcz1cIm5vLWV2ZW50c1wiPjxzcGFuIGNsYXNzPVwibWMtZGF0ZSBhZ2VuZGEtZGF5IG5vLWV2ZW50c1wiPlo8L3NwYW4+PC90ZD48dGQgY2xhc3M9XCJuby1ldmVudHNcIj48c3BhbiBjbGFzcz1cIm1jLWRhdGUgYWdlbmRhLWRheSBuby1ldmVudHNcIj5aPC9zcGFuPjwvdGQ+J1xuXG4gIGNhbGVuZGFyQm9keS5pbnNlcnRCZWZvcmUoY2FsZW5kYXJQcmVwZW5kLCBjYWxlbmRhckJvZHkuZmlyc3RDaGlsZClcblxuICAvKlxuICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgUFJPRUZMRVMgUE9QIFVQXG5cbiAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgKi9cblxuICAvL0ZpeCBmaXJzdCBvcHRpb25cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3dwY2Y3LWYxMzgtbzIgPiBmb3JtID4gZGl2LmN1c3RvbS1zZWxlY3QgPiBzcGFuID4gc2VsZWN0ID4gb3B0aW9uOm50aC1jaGlsZCgxKScpLmlubmVySFRNTCA9IFwiS2llcyBlZW4gZGFnXCJcblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udmVyc2lvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICB2YXIgcG9wdXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZWZsZXMtb3ZlcmxheScpXG4gICAgdmFyIGZpbHRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9lZmxlcy1maWx0ZXInKVxuXG4gICAgcG9wdXAuY2xhc3NMaXN0LnRvZ2dsZSgndG9nZ2xlUG9wdXAnKVxuICAgIGZpbHRlci5jbGFzc0xpc3QudG9nZ2xlKCd0b2dnbGVGaWx0ZXInKVxuXG4gIH0pXG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLXBvcHVwJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcbiAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgIHZhciBwb3B1cCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9lZmxlcy1vdmVybGF5JylcbiAgICB2YXIgZmlsdGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2VmbGVzLWZpbHRlcicpXG5cblxuICAgIHBvcHVwLmNsYXNzTGlzdC50b2dnbGUoJ3RvZ2dsZVBvcHVwJylcbiAgICBmaWx0ZXIuY2xhc3NMaXN0LnRvZ2dsZSgndG9nZ2xlRmlsdGVyJylcblxuICB9KVxuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9lZmxlcy1maWx0ZXInKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuICAgIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgdmFyIHBvcHVwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2VmbGVzLW92ZXJsYXknKVxuICAgIHZhciBmaWx0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZWZsZXMtZmlsdGVyJylcblxuICAgIHBvcHVwLmNsYXNzTGlzdC50b2dnbGUoJ3RvZ2dsZVBvcHVwJylcbiAgICBmaWx0ZXIuY2xhc3NMaXN0LnRvZ2dsZSgndG9nZ2xlRmlsdGVyJylcblxuICB9KVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBmdW5jdGlvbihlKSB7XG4gICAgaWYgKGUua2V5Q29kZSA9PSAyNykge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAgIHZhciBwb3B1cCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9lZmxlcy1vdmVybGF5JylcbiAgICAgIHZhciBmaWx0ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZWZsZXMtZmlsdGVyJylcblxuICAgICAgcG9wdXAuZmFkZSgpXG4gICAgICBmaWx0ZXIuZmFkZSgpXG4gICAgfVxuICB9KTtcbiAgLypcbiAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgIExBWlkgTE9BRElORyBJTUFHRVNcblxuICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAqL1xuXG4gIGNvbnN0IGNvbmZpZyA9IHtcbiAgICB0aHJlc2hvbGQ6IDAsXG4gICAgcm9vdE1hcmdpbjogXCIxMDBweFwiXG4gIH07XG5cbiAgZnVuY3Rpb24gcHJlbG9hZEltYWdlKGVsKSB7XG4gICAgZWwuc3JjID0gZWwuZGF0YXNldC5zcmNcbiAgfVxuXG4gIHZhciBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihmdW5jdGlvbihlbnRyaWVzLCBzZWxmKSB7XG4gICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICBwcmVsb2FkSW1hZ2UoZW50cnkudGFyZ2V0KTtcbiAgICAgICAgc2VsZi51bm9ic2VydmUoZW50cnkudGFyZ2V0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwgY29uZmlnKTtcblxuICBjb25zdCBpbWdzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW1nW2RhdGEtc3JjXScpO1xuICBpbWdzLmZvckVhY2goaW1nID0+IHtcbiAgICBvYnNlcnZlci5vYnNlcnZlKGltZyk7XG4gIH0pO1xuXG5cblxuXG5cbiAgZnVuY3Rpb24gcHJlbG9hZEJhY2tncm91bmRJbWFnZShlbCkge1xuICAgIGVsLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKCdcIiArIGVsLmRhdGFzZXQuYmFja2dyb3VuZCArIFwiJylcIlxuICB9XG5cbiAgdmFyIGJhY2tncm91bmRPYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihmdW5jdGlvbihlbnRyaWVzLCBzZWxmKSB7XG4gICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICBwcmVsb2FkQmFja2dyb3VuZEltYWdlKGVudHJ5LnRhcmdldCk7XG4gICAgICAgIHNlbGYudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIGNvbmZpZyk7XG5cbiAgY29uc3QgYmFja2dyb3VuZGltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2RpdltkYXRhLWJhY2tncm91bmRdJyk7XG4gIGJhY2tncm91bmRpbWcuZm9yRWFjaChiYWNrZ3JvdW5kaW1nID0+IHtcbiAgICBiYWNrZ3JvdW5kT2JzZXJ2ZXIub2JzZXJ2ZShiYWNrZ3JvdW5kaW1nKTtcbiAgfSk7XG5cblxuXG5cblxuICBmdW5jdGlvbiBwcmVsb2FkU2VjdGlvbihlbCkge1xuICAgIGVsLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwidXJsKCdcIiArIGVsLmRhdGFzZXQuYmFja2dyb3VuZCArIFwiJylcIlxuICB9XG5cbiAgdmFyIHNlY3Rpb25PYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihmdW5jdGlvbihlbnRyaWVzLCBzZWxmKSB7XG4gICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICBwcmVsb2FkU2VjdGlvbihlbnRyeS50YXJnZXQpO1xuICAgICAgICBzZWxmLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCBjb25maWcpO1xuXG4gIGNvbnN0IHNlY3Rpb25JbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdzZWN0aW9uW2RhdGEtYmFja2dyb3VuZF0nKTtcbiAgc2VjdGlvbkltZy5mb3JFYWNoKHNlY3Rpb25JbWcgPT4ge1xuICAgIHNlY3Rpb25PYnNlcnZlci5vYnNlcnZlKHNlY3Rpb25JbWcpO1xuICB9KTtcblxuICAvKlxuICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgSU5LIE1PREVMXG5cbiAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgKi9cblxuICAvL2NhY2hlIHNvbWUgalF1ZXJ5IG9iamVjdHNcbiAgdmFyIG1vZGFsVHJpZ2dlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jZC1tb2RhbC10cmlnZ2VyJyksXG4gICAgdHJhbnNpdGlvbkxheWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNkLXRyYW5zaXRpb24tbGF5ZXInKSxcbiAgICB0cmFuc2l0aW9uQmFja2dyb3VuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iZy1sYXllcicpLFxuICAgIG1vZGFsV2luZG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNkLW1vZGFsJyk7XG5cbiAgdmFyIGZyYW1lUHJvcG9ydGlvbiA9IDEuNzgsIC8vcG5nIGZyYW1lIGFzcGVjdCByYXRpb1xuICAgIGZyYW1lcyA9IDI1LCAvL251bWJlciBvZiBwbmcgZnJhbWVzXG4gICAgcmVzaXplID0gZmFsc2U7XG5cbiAgdmFyIG9wZW4gPSBmYWxzZTtcblxuICAvL3NldCB0cmFuc2l0aW9uQmFja2dyb3VuZCBkaW1lbnRpb25zXG4gIHNldExheWVyRGltZW5zaW9ucygpO1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXJlc2l6ZSkge1xuICAgICAgcmVzaXplID0gdHJ1ZTtcbiAgICAgICghd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSkgPyBzZXRUaW1lb3V0KHNldExheWVyRGltZW5zaW9ucywgMzAwKTogd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShzZXRMYXllckRpbWVuc2lvbnMpO1xuICAgIH1cbiAgfSk7XG5cbiAgLy9vcGVuIG1vZGFsIHdpbmRvd1xuICBtb2RhbFRyaWdnZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKCFvcGVuKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICB0cmFuc2l0aW9uTGF5ZXIuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScsICdvcGVuaW5nJyk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2QtbWFpbi1jb250ZW50Jykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICBtb2RhbFRyaWdnZXIuY2xhc3NMaXN0LmFkZCgnb3BlbicpXG4gICAgICBtb2RhbFRyaWdnZXIuY2xhc3NMaXN0LnJlbW92ZSgnY2xvc2VkJylcblxuICAgICAgdmFyIGRlbGF5ID0gKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJy5uby1jc3NhbmltYXRpb25zJykubGVuZ3RoID4gMCkgPyAwIDogNjAwO1xuXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICBtb2RhbFdpbmRvdy5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gICAgICB9LCBkZWxheSk7XG5cbiAgICAgIG9wZW4gPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAob3Blbikge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgbW9kYWxUcmlnZ2VyLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlZCcpO1xuICAgICAgbW9kYWxUcmlnZ2VyLmNsYXNzTGlzdC5yZW1vdmUoJ29wZW4nKTtcblxuICAgICAgdHJhbnNpdGlvbkxheWVyLmNsYXNzTGlzdC5hZGQoJ2Nsb3NpbmcnKTtcbiAgICAgIG1vZGFsV2luZG93LmNsYXNzTGlzdC5yZW1vdmUoJ3Zpc2libGUnKTtcblxuICAgICAgZnVuY3Rpb24gbGlzdGVuZXIoKSB7XG4gICAgICAgIHRyYW5zaXRpb25MYXllci5jbGFzc0xpc3QucmVtb3ZlKCdjbG9zaW5nJywgJ29wZW5pbmcnLCAndmlzaWJsZScpO1xuICAgICAgICB0cmFuc2l0aW9uQmFja2dyb3VuZC5yZW1vdmVFdmVudExpc3RlbmVyKCd3ZWJraXRBbmltYXRpb25FbmQnLCBsaXN0ZW5lcik7XG4gICAgICAgIHRyYW5zaXRpb25CYWNrZ3JvdW5kLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ29hbmltYXRpb25lbmQnLCBsaXN0ZW5lcik7XG4gICAgICAgIHRyYW5zaXRpb25CYWNrZ3JvdW5kLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21zQW5pbWF0aW9uRW5kJywgbGlzdGVuZXIpO1xuICAgICAgICB0cmFuc2l0aW9uQmFja2dyb3VuZC5yZW1vdmVFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCBsaXN0ZW5lcik7XG4gICAgICB9XG5cbiAgICAgIHRyYW5zaXRpb25CYWNrZ3JvdW5kLmFkZEV2ZW50TGlzdGVuZXIoJ3dlYmtpdEFuaW1hdGlvbkVuZCcsIGxpc3RlbmVyKTtcbiAgICAgIHRyYW5zaXRpb25CYWNrZ3JvdW5kLmFkZEV2ZW50TGlzdGVuZXIoJ29hbmltYXRpb25lbmQnLCBsaXN0ZW5lcik7XG4gICAgICB0cmFuc2l0aW9uQmFja2dyb3VuZC5hZGRFdmVudExpc3RlbmVyKCdtc0FuaW1hdGlvbkVuZCcsIGxpc3RlbmVyKTtcbiAgICAgIHRyYW5zaXRpb25CYWNrZ3JvdW5kLmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIGxpc3RlbmVyKTtcblxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNkLW1haW4tY29udGVudCcpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9LCAxMDAwKVxuXG4gICAgICBvcGVuID0gZmFsc2U7XG4gICAgfVxuICB9KTtcblxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbWFpbicpLmlkID09PSAnaG9tZXBhZ2UnKSB7XG4gICAgY29uc3QgbmF2YnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNtZW51LW1haW4tbWVudS0xIGxpIGEnKVxuICAgICAgZm9yIChjb25zdCBuYXZidXR0b24gb2YgbmF2YnV0dG9ucykge1xuICAgICAgICBuYXZidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG5cbiAgICAgICAgaWYgKG9wZW4pIHtcblxuICAgICAgICAgIG1vZGFsVHJpZ2dlci5jbGFzc0xpc3QuYWRkKCdjbG9zZWQnKTtcbiAgICAgICAgICBtb2RhbFRyaWdnZXIuY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xuXG4gICAgICAgICAgdHJhbnNpdGlvbkxheWVyLmNsYXNzTGlzdC5hZGQoJ2Nsb3NpbmcnKTtcbiAgICAgICAgICBtb2RhbFdpbmRvdy5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG5cbiAgICAgICAgICBmdW5jdGlvbiBsaXN0ZW5lcigpIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb25MYXllci5jbGFzc0xpc3QucmVtb3ZlKCdjbG9zaW5nJywgJ29wZW5pbmcnLCAndmlzaWJsZScpO1xuICAgICAgICAgICAgdHJhbnNpdGlvbkJhY2tncm91bmQucmVtb3ZlRXZlbnRMaXN0ZW5lcignd2Via2l0QW5pbWF0aW9uRW5kJywgbGlzdGVuZXIpO1xuICAgICAgICAgICAgdHJhbnNpdGlvbkJhY2tncm91bmQucmVtb3ZlRXZlbnRMaXN0ZW5lcignb2FuaW1hdGlvbmVuZCcsIGxpc3RlbmVyKTtcbiAgICAgICAgICAgIHRyYW5zaXRpb25CYWNrZ3JvdW5kLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21zQW5pbWF0aW9uRW5kJywgbGlzdGVuZXIpO1xuICAgICAgICAgICAgdHJhbnNpdGlvbkJhY2tncm91bmQucmVtb3ZlRXZlbnRMaXN0ZW5lcignYW5pbWF0aW9uZW5kJywgbGlzdGVuZXIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRyYW5zaXRpb25CYWNrZ3JvdW5kLmFkZEV2ZW50TGlzdGVuZXIoJ3dlYmtpdEFuaW1hdGlvbkVuZCcsIGxpc3RlbmVyKTtcbiAgICAgICAgICB0cmFuc2l0aW9uQmFja2dyb3VuZC5hZGRFdmVudExpc3RlbmVyKCdvYW5pbWF0aW9uZW5kJywgbGlzdGVuZXIpO1xuICAgICAgICAgIHRyYW5zaXRpb25CYWNrZ3JvdW5kLmFkZEV2ZW50TGlzdGVuZXIoJ21zQW5pbWF0aW9uRW5kJywgbGlzdGVuZXIpO1xuICAgICAgICAgIHRyYW5zaXRpb25CYWNrZ3JvdW5kLmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIGxpc3RlbmVyKTtcblxuICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2QtbWFpbi1jb250ZW50Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICB9LCAxMDAwKVxuXG4gICAgICAgICAgb3BlbiA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBzZXRMYXllckRpbWVuc2lvbnMoKSB7XG4gICAgdmFyIHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGgsXG4gICAgICB3aW5kb3dIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQsXG4gICAgICBsYXllckhlaWdodCwgbGF5ZXJXaWR0aDtcblxuICAgIGlmICh3aW5kb3dXaWR0aCAvIHdpbmRvd0hlaWdodCA+IGZyYW1lUHJvcG9ydGlvbikge1xuICAgICAgbGF5ZXJXaWR0aCA9IHdpbmRvd1dpZHRoO1xuICAgICAgbGF5ZXJIZWlnaHQgPSBsYXllcldpZHRoIC8gZnJhbWVQcm9wb3J0aW9uO1xuICAgIH0gZWxzZSB7XG4gICAgICBsYXllckhlaWdodCA9IHdpbmRvd0hlaWdodCAqIDEuMjtcbiAgICAgIGxheWVyV2lkdGggPSBsYXllckhlaWdodCAqIGZyYW1lUHJvcG9ydGlvbjtcbiAgICB9XG5cbiAgICB0cmFuc2l0aW9uQmFja2dyb3VuZC5zdHlsZS53aWR0aCA9IGxheWVyV2lkdGggKiBmcmFtZXMgKyAncHgnO1xuICAgIHRyYW5zaXRpb25CYWNrZ3JvdW5kLnN0eWxlLmhlaWdodCA9IGxheWVySGVpZ2h0ICsgJ3B4JztcbiAgICByZXNpemUgPSBmYWxzZTtcbiAgfVxuXG5cbiAgLypcbiAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgIE1BSUxDSElNUFxuXG4gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICovXG5cbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21jLWVtYmVkZGVkLXN1YnNjcmliZScpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICB2YXIgbXBOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21jZS1GTkFNRScpLnZhbHVlO1xuICAgIHZhciBtcE1haWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWNlLUVNQUlMJykudmFsdWU7XG5cbiAgICBpZiAoIW1wTmFtZS50cmltKCkgPT0gJycgJiYgIW1wTWFpbC50cmltKCkgPT0gJycpIHtcbiAgICAgIHZhciBtZXNzYWdlID0gXCI8cCBpZD0ndGhhbmsteW91LW1wJz5CZWRhbmt0IHZvb3IgaGV0IGFhbm1lbGRlbiE8L3A+XCI7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWNfZW1iZWRfc2lnbnVwJykuZmFkZU91dCgzMDApO1xuXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWNfZW1iZWRfc2lnbnVwJykucHJvbWlzZSgpLmRvbmUoZnVuY3Rpb24oKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtY19lbWJlZF9zaWdudXAnKS5yZXBsYWNlV2l0aChtZXNzYWdlKTtcbiAgICAgIH0pXG4gICAgfVxuICB9KVxuXG4gIC8qXG4gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgICBDSEVDSyBJRiBFTEVNRU5UIElTIElOIFRIRSBWSUVXUE9SVFxuXG4gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICovXG5cbiAgdmFyIGlzUmVhZHkgPSBmdW5jdGlvbihlbGVtKSB7XG4gICAgdmFyIGVsZW1lbnRUb3AgPSBlbGVtLm9mZnNldFRvcFxuXG4gICAgdmFyIHZpZXdwb3J0VG9wID0gZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcbiAgICB2YXIgdmlld3BvcnRCb3R0b20gPSAodmlld3BvcnRUb3AgKyB3aW5kb3cuaW5uZXJIZWlnaHQpICogLjk7XG5cbiAgICByZXR1cm4gZWxlbWVudFRvcCA8PSB2aWV3cG9ydEJvdHRvbVxuICB9O1xuXG4gIHZhciBpc0luVmlld3BvcnQgPSBmdW5jdGlvbihlbGVtKSB7XG4gICAgdmFyIGVsZW1lbnRUb3AgPSBlbGVtLm9mZnNldFRvcDtcblxuICAgIHZhciBlbGVtZW50Qm90dG9tID0gZWxlbWVudFRvcCArIGVsZW0ub2Zmc2V0SGVpZ2h0O1xuXG4gICAgdmFyIHZpZXdwb3J0VG9wID0gZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcblxuICAgIHZhciB2aWV3cG9ydEJvdHRvbSA9ICh2aWV3cG9ydFRvcCArIHdpbmRvdy5pbm5lckhlaWdodCkgKiAuOTtcblxuICAgIHJldHVybiBlbGVtZW50Qm90dG9tID4gdmlld3BvcnRUb3AgJiYgZWxlbWVudFRvcCA8IHZpZXdwb3J0Qm90dG9tO1xuICB9O1xuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbigpe1xuICAgIHZhciBuYXZCYXJzc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjbmF2LWljb24gPiBzcGFuJylcbiAgICB2YXIgaGVybyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZXJvJylcbiAgICB2YXIgb3ZlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvdmVyJylcbiAgICB2YXIgcm9vc3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyb29zdGVycycpXG4gICAgdmFyIGRvY2VudGVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2RvY2VudGVuJylcbiAgICB2YXIgYmxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNibG9nJylcbiAgICB2YXIgY29udGFjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWN0JylcblxuICAgIGlmICghb3Blbikge1xuICAgICAgaWYgKGlzSW5WaWV3cG9ydChoZXJvKSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5hdkJhcnNzcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIG5hdkJhcnNzc1tpXS5zdHlsZS5iYWNrZ3JvdW5kID0gJ2JsYWNrJ1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGlzSW5WaWV3cG9ydChvdmVyKSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5hdkJhcnNzcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIG5hdkJhcnNzc1tpXS5zdHlsZS5iYWNrZ3JvdW5kID0gJ3doaXRlJ1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGlzSW5WaWV3cG9ydChyb29zdGVyKSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5hdkJhcnNzcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIG5hdkJhcnNzc1tpXS5zdHlsZS5iYWNrZ3JvdW5kID0gJ2JsYWNrJ1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGlzSW5WaWV3cG9ydChkb2NlbnRlbikpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuYXZCYXJzc3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBuYXZCYXJzc3NbaV0uc3R5bGUuYmFja2dyb3VuZCA9ICd3aGl0ZSdcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChpc0luVmlld3BvcnQoYmxvZykpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuYXZCYXJzc3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBuYXZCYXJzc3NbaV0uc3R5bGUuYmFja2dyb3VuZCA9ICdibGFjaydcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChpc0luVmlld3BvcnQoY29udGFjdCkpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuYXZCYXJzc3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBuYXZCYXJzc3NbaV0uc3R5bGUuYmFja2dyb3VuZCA9ICd3aGl0ZSdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSlcblxuICAvKlxuICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgSU1HIE1PVkVNRU5UIE9OIFNDUk9MTFxuXG4gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICovXG5cbiAgdmFyIHdpbmRvd0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgdmFyIHdpbmRvd1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gIHZhciBzY3JvbGxBcmVhID0gMTAwMDAgLSB3aW5kb3dIZWlnaHQ7XG4gIHZhciBkYW5jZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRhbmNlcnMtbGF5ZXInKVxuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbigpe1xuICAgIHZhciBzY3JvbGxUb3AgPSB3aW5kb3cucGFnZVlPZmZzZXQgfHwgd2luZG93LnNjcm9sbFRvcDtcbiAgICB2YXIgc2Nyb2xsUGVyY2VudCA9IHNjcm9sbFRvcC9zY3JvbGxBcmVhIHx8IDA7XG5cbiAgICBkYW5jZXJzLnN0eWxlLmJvdHRvbSA9IHNjcm9sbFBlcmNlbnQqd2luZG93LmlubmVyV2lkdGggKyAncHgnO1xuXG4gIH0pXG5cbiAgLypcbiAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgIFRFWFQgVFJJTSBCTE9HXG5cbiAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgKi9cblxuICB2YXIgdHh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJsb2ctYmVyaWNodCAuYm90dG9tIHAnKVxuICB2YXIgbWF4Q2hhciA9IDIwMFxuXG4gIHR4dC5mb3JFYWNoKGZ1bmN0aW9uKHR4dGkpIHtcbiAgICB2YXIgc3RyaW5nID0gdHh0aS50ZXh0KClcbiAgICBpZiAoc3RyaW5nLmxlbmd0aCA+PSBtYXhDaGFyKSB7XG4gICAgICB2YXIgbmV3U3RyaW5nID0gc3RyaW5nLnN1YnN0cmluZygwLCBtYXhDaGFyKVxuXG4gICAgICBuZXdTdHJpbmcgPSBuZXdTdHJpbmcuc3Vic3RyKDAsIE1hdGgubWluKG5ld1N0cmluZy5sZW5ndGgsIG5ld1N0cmluZy5sYXN0SW5kZXhPZihcIiBcIikpKSArIFwiLi4uXCJcblxuICAgICAgdHh0aS50ZXh0KG5ld1N0cmluZylcbiAgICB9XG4gIH0pXG5cblxuICAvKlxuICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgQU5JTUFUSU9OU1xuXG4gID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gICovXG5cbiAgdmFyIHNtY29udHJvbGxlciA9IG5ldyBTY3JvbGxNYWdpYy5Db250cm9sbGVyKCk7XG5cbiAgdmFyIGFuaW1hdGlvbldyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYW5pbWF0aW9uLXdyYXBwZXInKVxuICBmb3IgKHZhciBpID0gMDsgaSA8IGFuaW1hdGlvbldyYXBwZXIubGVuZ3RoOyBpKyspIHtcblxuICAgIGxldCB0cmlnZ2VySG9vayA9IDAuOTU7XG4gICAgYW5pbWF0aW9uV3JhcHBlcltpXS5zdHlsZS50cmFuc2l0aW9uRGVsYXkgPSBhbmltYXRpb25XcmFwcGVyW2ldLmRhdGFzZXQuZGVsYXlcblxuICAgIGxldCBzY2VuZSA9IG5ldyBTY3JvbGxNYWdpYy5TY2VuZSh7XG4gICAgICB0cmlnZ2VyRWxlbWVudDogYW5pbWF0aW9uV3JhcHBlcltpXSxcbiAgICAgIHRyaWdnZXJIb29rOiB0cmlnZ2VySG9va1xuICAgIH0pXG4gICAgLnNldENsYXNzVG9nZ2xlKGFuaW1hdGlvbldyYXBwZXJbaV0sICdmYWRlSW4nKVxuICAgIC5hZGRUbyhzbWNvbnRyb2xsZXIpO1xuICB9XG5cbn0pO1xuXG5wYWNlT3B0aW9ucyA9IHtcbiAgLy8gRGlzYWJsZSB0aGUgJ2VsZW1lbnRzJyBzb3VyY2VcbiAgZWxlbWVudHM6IGZhbHNlLFxuICBkb2N1bWVudDogdHJ1ZSxcbiAgZXZlbnRMYWc6IGZhbHNlLCAvLyBkaXNhYmxlZFxuICByZXN0YXJ0T25SZXF1ZXN0QWZ0ZXI6IGZhbHNlXG59XG5cbjsgLyohIHBhY2UgMS4wLjAgKi9cbihmdW5jdGlvbigpIHtcbiAgdmFyIGEsIGIsIGMsIGQsIGUsIGYsIGcsIGgsIGksIGosIGssIGwsIG0sIG4sIG8sIHAsIHEsIHIsIHMsIHQsIHUsIHYsIHcsIHgsIHksIHosIEEsIEIsIEMsIEQsIEUsIEYsIEcsIEgsIEksIEosIEssIEwsIE0sIE4sIE8sIFAsIFEsIFIsIFMsIFQsIFUsIFYsIFcsIFggPSBbXS5zbGljZSxcbiAgICBZID0ge30uaGFzT3duUHJvcGVydHksXG4gICAgWiA9IGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgIGZ1bmN0aW9uIGMoKSB7XG4gICAgICAgIHRoaXMuY29uc3RydWN0b3IgPSBhXG4gICAgICB9XG4gICAgICBmb3IgKHZhciBkIGluIGIpIFkuY2FsbChiLCBkKSAmJiAoYVtkXSA9IGJbZF0pO1xuICAgICAgcmV0dXJuIGMucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIGEucHJvdG90eXBlID0gbmV3IGMsIGEuX19zdXBlcl9fID0gYi5wcm90b3R5cGUsIGFcbiAgICB9LFxuICAgICQgPSBbXS5pbmRleE9mIHx8IGZ1bmN0aW9uKGEpIHtcbiAgICAgIGZvciAodmFyIGIgPSAwLCBjID0gdGhpcy5sZW5ndGg7IGMgPiBiOyBiKyspXG4gICAgICAgIGlmIChiIGluIHRoaXMgJiYgdGhpc1tiXSA9PT0gYSkgcmV0dXJuIGI7XG4gICAgICByZXR1cm4gLTFcbiAgICB9O1xuICBmb3IgKHUgPSB7XG4gICAgICBjYXRjaHVwVGltZTogMTAwLFxuICAgICAgaW5pdGlhbFJhdGU6IC4wMyxcbiAgICAgIG1pblRpbWU6IDI1MCxcbiAgICAgIGdob3N0VGltZTogMTAwLFxuICAgICAgbWF4UHJvZ3Jlc3NQZXJGcmFtZTogMjAsXG4gICAgICBlYXNlRmFjdG9yOiAxLjI1LFxuICAgICAgc3RhcnRPblBhZ2VMb2FkOiAhMCxcbiAgICAgIHJlc3RhcnRPblB1c2hTdGF0ZTogITAsXG4gICAgICByZXN0YXJ0T25SZXF1ZXN0QWZ0ZXI6IDUwMCxcbiAgICAgIHRhcmdldDogXCJib2R5XCIsXG4gICAgICBlbGVtZW50czoge1xuICAgICAgICBjaGVja0ludGVydmFsOiAxMDAsXG4gICAgICAgIHNlbGVjdG9yczogW1wiYm9keVwiXVxuICAgICAgfSxcbiAgICAgIGV2ZW50TGFnOiB7XG4gICAgICAgIG1pblNhbXBsZXM6IDEwLFxuICAgICAgICBzYW1wbGVDb3VudDogMyxcbiAgICAgICAgbGFnVGhyZXNob2xkOiAzXG4gICAgICB9LFxuICAgICAgYWpheDoge1xuICAgICAgICB0cmFja01ldGhvZHM6IFtcIkdFVFwiXSxcbiAgICAgICAgdHJhY2tXZWJTb2NrZXRzOiAhMCxcbiAgICAgICAgaWdub3JlVVJMczogW11cbiAgICAgIH1cbiAgICB9LCBDID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgYTtcbiAgICAgIHJldHVybiBudWxsICE9IChhID0gXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgcGVyZm9ybWFuY2UgJiYgbnVsbCAhPT0gcGVyZm9ybWFuY2UgJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBwZXJmb3JtYW5jZS5ub3cgPyBwZXJmb3JtYW5jZS5ub3coKSA6IHZvaWQgMCkgPyBhIDogK25ldyBEYXRlXG4gICAgfSwgRSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZSwgdCA9IHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cubW96Q2FuY2VsQW5pbWF0aW9uRnJhbWUsIG51bGwgPT0gRSAmJiAoRSA9IGZ1bmN0aW9uKGEpIHtcbiAgICAgIHJldHVybiBzZXRUaW1lb3V0KGEsIDUwKVxuICAgIH0sIHQgPSBmdW5jdGlvbihhKSB7XG4gICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KGEpXG4gICAgfSksIEcgPSBmdW5jdGlvbihhKSB7XG4gICAgICB2YXIgYiwgYztcbiAgICAgIHJldHVybiBiID0gQygpLCAoYyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZDtcbiAgICAgICAgcmV0dXJuIGQgPSBDKCkgLSBiLCBkID49IDMzID8gKGIgPSBDKCksIGEoZCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIEUoYylcbiAgICAgICAgfSkpIDogc2V0VGltZW91dChjLCAzMyAtIGQpXG4gICAgICB9KSgpXG4gICAgfSwgRiA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGEsIGIsIGM7XG4gICAgICByZXR1cm4gYyA9IGFyZ3VtZW50c1swXSwgYiA9IGFyZ3VtZW50c1sxXSwgYSA9IDMgPD0gYXJndW1lbnRzLmxlbmd0aCA/IFguY2FsbChhcmd1bWVudHMsIDIpIDogW10sIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgY1tiXSA/IGNbYl0uYXBwbHkoYywgYSkgOiBjW2JdXG4gICAgfSwgdiA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGEsIGIsIGMsIGQsIGUsIGYsIGc7XG4gICAgICBmb3IgKGIgPSBhcmd1bWVudHNbMF0sIGQgPSAyIDw9IGFyZ3VtZW50cy5sZW5ndGggPyBYLmNhbGwoYXJndW1lbnRzLCAxKSA6IFtdLCBmID0gMCwgZyA9IGQubGVuZ3RoOyBnID4gZjsgZisrKVxuICAgICAgICBpZiAoYyA9IGRbZl0pXG4gICAgICAgICAgZm9yIChhIGluIGMpIFkuY2FsbChjLCBhKSAmJiAoZSA9IGNbYV0sIG51bGwgIT0gYlthXSAmJiBcIm9iamVjdFwiID09IHR5cGVvZiBiW2FdICYmIG51bGwgIT0gZSAmJiBcIm9iamVjdFwiID09IHR5cGVvZiBlID8gdihiW2FdLCBlKSA6IGJbYV0gPSBlKTtcbiAgICAgIHJldHVybiBiXG4gICAgfSwgcSA9IGZ1bmN0aW9uKGEpIHtcbiAgICAgIHZhciBiLCBjLCBkLCBlLCBmO1xuICAgICAgZm9yIChjID0gYiA9IDAsIGUgPSAwLCBmID0gYS5sZW5ndGg7IGYgPiBlOyBlKyspIGQgPSBhW2VdLCBjICs9IE1hdGguYWJzKGQpLCBiKys7XG4gICAgICByZXR1cm4gYyAvIGJcbiAgICB9LCB4ID0gZnVuY3Rpb24oYSwgYikge1xuICAgICAgdmFyIGMsIGQsIGU7XG4gICAgICBpZiAobnVsbCA9PSBhICYmIChhID0gXCJvcHRpb25zXCIpLCBudWxsID09IGIgJiYgKGIgPSAhMCksIGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtcGFjZS1cIiArIGEgKyBcIl1cIikpIHtcbiAgICAgICAgaWYgKGMgPSBlLmdldEF0dHJpYnV0ZShcImRhdGEtcGFjZS1cIiArIGEpLCAhYikgcmV0dXJuIGM7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoYylcbiAgICAgICAgfSBjYXRjaCAoZikge1xuICAgICAgICAgIHJldHVybiBkID0gZiwgXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgY29uc29sZSAmJiBudWxsICE9PSBjb25zb2xlID8gY29uc29sZS5lcnJvcihcIkVycm9yIHBhcnNpbmcgaW5saW5lIHBhY2Ugb3B0aW9uc1wiLCBkKSA6IHZvaWQgMFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgZyA9IGZ1bmN0aW9uKCkge1xuICAgICAgZnVuY3Rpb24gYSgpIHt9XG4gICAgICByZXR1cm4gYS5wcm90b3R5cGUub24gPSBmdW5jdGlvbihhLCBiLCBjLCBkKSB7XG4gICAgICAgIHZhciBlO1xuICAgICAgICByZXR1cm4gbnVsbCA9PSBkICYmIChkID0gITEpLCBudWxsID09IHRoaXMuYmluZGluZ3MgJiYgKHRoaXMuYmluZGluZ3MgPSB7fSksIG51bGwgPT0gKGUgPSB0aGlzLmJpbmRpbmdzKVthXSAmJiAoZVthXSA9IFtdKSwgdGhpcy5iaW5kaW5nc1thXS5wdXNoKHtcbiAgICAgICAgICBoYW5kbGVyOiBiLFxuICAgICAgICAgIGN0eDogYyxcbiAgICAgICAgICBvbmNlOiBkXG4gICAgICAgIH0pXG4gICAgICB9LCBhLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24oYSwgYiwgYykge1xuICAgICAgICByZXR1cm4gdGhpcy5vbihhLCBiLCBjLCAhMClcbiAgICAgIH0sIGEucHJvdG90eXBlLm9mZiA9IGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgdmFyIGMsIGQsIGU7XG4gICAgICAgIGlmIChudWxsICE9IChudWxsICE9IChkID0gdGhpcy5iaW5kaW5ncykgPyBkW2FdIDogdm9pZCAwKSkge1xuICAgICAgICAgIGlmIChudWxsID09IGIpIHJldHVybiBkZWxldGUgdGhpcy5iaW5kaW5nc1thXTtcbiAgICAgICAgICBmb3IgKGMgPSAwLCBlID0gW107IGMgPCB0aGlzLmJpbmRpbmdzW2FdLmxlbmd0aDspIGUucHVzaCh0aGlzLmJpbmRpbmdzW2FdW2NdLmhhbmRsZXIgPT09IGIgPyB0aGlzLmJpbmRpbmdzW2FdLnNwbGljZShjLCAxKSA6IGMrKyk7XG4gICAgICAgICAgcmV0dXJuIGVcbiAgICAgICAgfVxuICAgICAgfSwgYS5wcm90b3R5cGUudHJpZ2dlciA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgYSwgYiwgYywgZCwgZSwgZiwgZywgaCwgaTtcbiAgICAgICAgaWYgKGMgPSBhcmd1bWVudHNbMF0sIGEgPSAyIDw9IGFyZ3VtZW50cy5sZW5ndGggPyBYLmNhbGwoYXJndW1lbnRzLCAxKSA6IFtdLCBudWxsICE9IChnID0gdGhpcy5iaW5kaW5ncykgPyBnW2NdIDogdm9pZCAwKSB7XG4gICAgICAgICAgZm9yIChlID0gMCwgaSA9IFtdOyBlIDwgdGhpcy5iaW5kaW5nc1tjXS5sZW5ndGg7KSBoID0gdGhpcy5iaW5kaW5nc1tjXVtlXSwgZCA9IGguaGFuZGxlciwgYiA9IGguY3R4LCBmID0gaC5vbmNlLCBkLmFwcGx5KG51bGwgIT0gYiA/IGIgOiB0aGlzLCBhKSwgaS5wdXNoKGYgPyB0aGlzLmJpbmRpbmdzW2NdLnNwbGljZShlLCAxKSA6IGUrKyk7XG4gICAgICAgICAgcmV0dXJuIGlcbiAgICAgICAgfVxuICAgICAgfSwgYVxuICAgIH0oKSwgaiA9IHdpbmRvdy5QYWNlIHx8IHt9LCB3aW5kb3cuUGFjZSA9IGosIHYoaiwgZy5wcm90b3R5cGUpLCBEID0gai5vcHRpb25zID0gdih7fSwgdSwgd2luZG93LnBhY2VPcHRpb25zLCB4KCkpLCBVID0gW1wiYWpheFwiLCBcImRvY3VtZW50XCIsIFwiZXZlbnRMYWdcIiwgXCJlbGVtZW50c1wiXSwgUSA9IDAsIFMgPSBVLmxlbmd0aDsgUyA+IFE7IFErKykgSyA9IFVbUV0sIERbS10gPT09ICEwICYmIChEW0tdID0gdVtLXSk7XG4gIGkgPSBmdW5jdGlvbihhKSB7XG4gICAgZnVuY3Rpb24gYigpIHtcbiAgICAgIHJldHVybiBWID0gYi5fX3N1cGVyX18uY29uc3RydWN0b3IuYXBwbHkodGhpcywgYXJndW1lbnRzKVxuICAgIH1cbiAgICByZXR1cm4gWihiLCBhKSwgYlxuICB9KEVycm9yKSwgYiA9IGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIGEoKSB7XG4gICAgICB0aGlzLnByb2dyZXNzID0gMFxuICAgIH1cbiAgICByZXR1cm4gYS5wcm90b3R5cGUuZ2V0RWxlbWVudCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGE7XG4gICAgICBpZiAobnVsbCA9PSB0aGlzLmVsKSB7XG4gICAgICAgIGlmIChhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihELnRhcmdldCksICFhKSB0aHJvdyBuZXcgaTtcbiAgICAgICAgdGhpcy5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksIHRoaXMuZWwuY2xhc3NOYW1lID0gXCJwYWNlIHBhY2UtYWN0aXZlXCIsIGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lID0gZG9jdW1lbnQuYm9keS5jbGFzc05hbWUucmVwbGFjZSgvcGFjZS1kb25lL2csIFwiXCIpLCBkb2N1bWVudC5ib2R5LmNsYXNzTmFtZSArPSBcIiBwYWNlLXJ1bm5pbmdcIiwgdGhpcy5lbC5pbm5lckhUTUwgPSAnPGRpdiBjbGFzcz1cInBhY2UtcHJvZ3Jlc3NcIj5cXG4gIDxkaXYgY2xhc3M9XCJwYWNlLXByb2dyZXNzLWlubmVyXCI+PC9kaXY+XFxuPC9kaXY+XFxuPGRpdiBjbGFzcz1cInBhY2UtYWN0aXZpdHlcIj48L2Rpdj4nLCBudWxsICE9IGEuZmlyc3RDaGlsZCA/IGEuaW5zZXJ0QmVmb3JlKHRoaXMuZWwsIGEuZmlyc3RDaGlsZCkgOiBhLmFwcGVuZENoaWxkKHRoaXMuZWwpXG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5lbFxuICAgIH0sIGEucHJvdG90eXBlLmZpbmlzaCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGE7XG4gICAgICByZXR1cm4gYSA9IHRoaXMuZ2V0RWxlbWVudCgpLCBhLmNsYXNzTmFtZSA9IGEuY2xhc3NOYW1lLnJlcGxhY2UoXCJwYWNlLWFjdGl2ZVwiLCBcIlwiKSwgYS5jbGFzc05hbWUgKz0gXCIgcGFjZS1pbmFjdGl2ZVwiLCBkb2N1bWVudC5ib2R5LmNsYXNzTmFtZSA9IGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lLnJlcGxhY2UoXCJwYWNlLXJ1bm5pbmdcIiwgXCJcIiksIGRvY3VtZW50LmJvZHkuY2xhc3NOYW1lICs9IFwiIHBhY2UtZG9uZVwiXG4gICAgfSwgYS5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oYSkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvZ3Jlc3MgPSBhLCB0aGlzLnJlbmRlcigpXG4gICAgfSwgYS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy5nZXRFbGVtZW50KCkucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmdldEVsZW1lbnQoKSlcbiAgICAgIH0gY2F0Y2ggKGEpIHtcbiAgICAgICAgaSA9IGFcbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzLmVsID0gdm9pZCAwXG4gICAgfSwgYS5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgYSwgYiwgYywgZCwgZSwgZiwgZztcbiAgICAgIGlmIChudWxsID09IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoRC50YXJnZXQpKSByZXR1cm4gITE7XG4gICAgICBmb3IgKGEgPSB0aGlzLmdldEVsZW1lbnQoKSwgZCA9IFwidHJhbnNsYXRlM2QoXCIgKyB0aGlzLnByb2dyZXNzICsgXCIlLCAwLCAwKVwiLCBnID0gW1wid2Via2l0VHJhbnNmb3JtXCIsIFwibXNUcmFuc2Zvcm1cIiwgXCJ0cmFuc2Zvcm1cIl0sIGUgPSAwLCBmID0gZy5sZW5ndGg7IGYgPiBlOyBlKyspIGIgPSBnW2VdLCBhLmNoaWxkcmVuWzBdLnN0eWxlW2JdID0gZDtcbiAgICAgIHJldHVybiAoIXRoaXMubGFzdFJlbmRlcmVkUHJvZ3Jlc3MgfHwgdGhpcy5sYXN0UmVuZGVyZWRQcm9ncmVzcyB8IDAgIT09IHRoaXMucHJvZ3Jlc3MgfCAwKSAmJiAoYS5jaGlsZHJlblswXS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2dyZXNzLXRleHRcIiwgXCJcIiArICgwIHwgdGhpcy5wcm9ncmVzcykgKyBcIiVcIiksIHRoaXMucHJvZ3Jlc3MgPj0gMTAwID8gYyA9IFwiOTlcIiA6IChjID0gdGhpcy5wcm9ncmVzcyA8IDEwID8gXCIwXCIgOiBcIlwiLCBjICs9IDAgfCB0aGlzLnByb2dyZXNzKSwgYS5jaGlsZHJlblswXS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByb2dyZXNzXCIsIFwiXCIgKyBjKSksIHRoaXMubGFzdFJlbmRlcmVkUHJvZ3Jlc3MgPSB0aGlzLnByb2dyZXNzXG4gICAgfSwgYS5wcm90b3R5cGUuZG9uZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvZ3Jlc3MgPj0gMTAwXG4gICAgfSwgYVxuICB9KCksIGggPSBmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiBhKCkge1xuICAgICAgdGhpcy5iaW5kaW5ncyA9IHt9XG4gICAgfVxuICAgIHJldHVybiBhLnByb3RvdHlwZS50cmlnZ2VyID0gZnVuY3Rpb24oYSwgYikge1xuICAgICAgdmFyIGMsIGQsIGUsIGYsIGc7XG4gICAgICBpZiAobnVsbCAhPSB0aGlzLmJpbmRpbmdzW2FdKSB7XG4gICAgICAgIGZvciAoZiA9IHRoaXMuYmluZGluZ3NbYV0sIGcgPSBbXSwgZCA9IDAsIGUgPSBmLmxlbmd0aDsgZSA+IGQ7IGQrKykgYyA9IGZbZF0sIGcucHVzaChjLmNhbGwodGhpcywgYikpO1xuICAgICAgICByZXR1cm4gZ1xuICAgICAgfVxuICAgIH0sIGEucHJvdG90eXBlLm9uID0gZnVuY3Rpb24oYSwgYikge1xuICAgICAgdmFyIGM7XG4gICAgICByZXR1cm4gbnVsbCA9PSAoYyA9IHRoaXMuYmluZGluZ3MpW2FdICYmIChjW2FdID0gW10pLCB0aGlzLmJpbmRpbmdzW2FdLnB1c2goYilcbiAgICB9LCBhXG4gIH0oKSwgUCA9IHdpbmRvdy5YTUxIdHRwUmVxdWVzdCwgTyA9IHdpbmRvdy5YRG9tYWluUmVxdWVzdCwgTiA9IHdpbmRvdy5XZWJTb2NrZXQsIHcgPSBmdW5jdGlvbihhLCBiKSB7XG4gICAgdmFyIGMsIGQsIGUsIGY7XG4gICAgZiA9IFtdO1xuICAgIGZvciAoZCBpbiBiLnByb3RvdHlwZSkgdHJ5IHtcbiAgICAgIGUgPSBiLnByb3RvdHlwZVtkXSwgZi5wdXNoKG51bGwgPT0gYVtkXSAmJiBcImZ1bmN0aW9uXCIgIT0gdHlwZW9mIGUgPyBhW2RdID0gZSA6IHZvaWQgMClcbiAgICB9IGNhdGNoIChnKSB7XG4gICAgICBjID0gZ1xuICAgIH1cbiAgICByZXR1cm4gZlxuICB9LCBBID0gW10sIGouaWdub3JlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGEsIGIsIGM7XG4gICAgcmV0dXJuIGIgPSBhcmd1bWVudHNbMF0sIGEgPSAyIDw9IGFyZ3VtZW50cy5sZW5ndGggPyBYLmNhbGwoYXJndW1lbnRzLCAxKSA6IFtdLCBBLnVuc2hpZnQoXCJpZ25vcmVcIiksIGMgPSBiLmFwcGx5KG51bGwsIGEpLCBBLnNoaWZ0KCksIGNcbiAgfSwgai50cmFjayA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBhLCBiLCBjO1xuICAgIHJldHVybiBiID0gYXJndW1lbnRzWzBdLCBhID0gMiA8PSBhcmd1bWVudHMubGVuZ3RoID8gWC5jYWxsKGFyZ3VtZW50cywgMSkgOiBbXSwgQS51bnNoaWZ0KFwidHJhY2tcIiksIGMgPSBiLmFwcGx5KG51bGwsIGEpLCBBLnNoaWZ0KCksIGNcbiAgfSwgSiA9IGZ1bmN0aW9uKGEpIHtcbiAgICB2YXIgYjtcbiAgICBpZiAobnVsbCA9PSBhICYmIChhID0gXCJHRVRcIiksIFwidHJhY2tcIiA9PT0gQVswXSkgcmV0dXJuIFwiZm9yY2VcIjtcbiAgICBpZiAoIUEubGVuZ3RoICYmIEQuYWpheCkge1xuICAgICAgaWYgKFwic29ja2V0XCIgPT09IGEgJiYgRC5hamF4LnRyYWNrV2ViU29ja2V0cykgcmV0dXJuICEwO1xuICAgICAgaWYgKGIgPSBhLnRvVXBwZXJDYXNlKCksICQuY2FsbChELmFqYXgudHJhY2tNZXRob2RzLCBiKSA+PSAwKSByZXR1cm4gITBcbiAgICB9XG4gICAgcmV0dXJuICExXG4gIH0sIGsgPSBmdW5jdGlvbihhKSB7XG4gICAgZnVuY3Rpb24gYigpIHtcbiAgICAgIHZhciBhLCBjID0gdGhpcztcbiAgICAgIGIuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyksIGEgPSBmdW5jdGlvbihhKSB7XG4gICAgICAgIHZhciBiO1xuICAgICAgICByZXR1cm4gYiA9IGEub3BlbiwgYS5vcGVuID0gZnVuY3Rpb24oZCwgZSkge1xuICAgICAgICAgIHJldHVybiBKKGQpICYmIGMudHJpZ2dlcihcInJlcXVlc3RcIiwge1xuICAgICAgICAgICAgdHlwZTogZCxcbiAgICAgICAgICAgIHVybDogZSxcbiAgICAgICAgICAgIHJlcXVlc3Q6IGFcbiAgICAgICAgICB9KSwgYi5hcHBseShhLCBhcmd1bWVudHMpXG4gICAgICAgIH1cbiAgICAgIH0sIHdpbmRvdy5YTUxIdHRwUmVxdWVzdCA9IGZ1bmN0aW9uKGIpIHtcbiAgICAgICAgdmFyIGM7XG4gICAgICAgIHJldHVybiBjID0gbmV3IFAoYiksIGEoYyksIGNcbiAgICAgIH07XG4gICAgICB0cnkge1xuICAgICAgICB3KHdpbmRvdy5YTUxIdHRwUmVxdWVzdCwgUClcbiAgICAgIH0gY2F0Y2ggKGQpIHt9XG4gICAgICBpZiAobnVsbCAhPSBPKSB7XG4gICAgICAgIHdpbmRvdy5YRG9tYWluUmVxdWVzdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciBiO1xuICAgICAgICAgIHJldHVybiBiID0gbmV3IE8sIGEoYiksIGJcbiAgICAgICAgfTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB3KHdpbmRvdy5YRG9tYWluUmVxdWVzdCwgTylcbiAgICAgICAgfSBjYXRjaCAoZCkge31cbiAgICAgIH1cbiAgICAgIGlmIChudWxsICE9IE4gJiYgRC5hamF4LnRyYWNrV2ViU29ja2V0cykge1xuICAgICAgICB3aW5kb3cuV2ViU29ja2V0ID0gZnVuY3Rpb24oYSwgYikge1xuICAgICAgICAgIHZhciBkO1xuICAgICAgICAgIHJldHVybiBkID0gbnVsbCAhPSBiID8gbmV3IE4oYSwgYikgOiBuZXcgTihhKSwgSihcInNvY2tldFwiKSAmJiBjLnRyaWdnZXIoXCJyZXF1ZXN0XCIsIHtcbiAgICAgICAgICAgIHR5cGU6IFwic29ja2V0XCIsXG4gICAgICAgICAgICB1cmw6IGEsXG4gICAgICAgICAgICBwcm90b2NvbHM6IGIsXG4gICAgICAgICAgICByZXF1ZXN0OiBkXG4gICAgICAgICAgfSksIGRcbiAgICAgICAgfTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB3KHdpbmRvdy5XZWJTb2NrZXQsIE4pXG4gICAgICAgIH0gY2F0Y2ggKGQpIHt9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBaKGIsIGEpLCBiXG4gIH0oaCksIFIgPSBudWxsLCB5ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIG51bGwgPT0gUiAmJiAoUiA9IG5ldyBrKSwgUlxuICB9LCBJID0gZnVuY3Rpb24oYSkge1xuICAgIHZhciBiLCBjLCBkLCBlO1xuICAgIGZvciAoZSA9IEQuYWpheC5pZ25vcmVVUkxzLCBjID0gMCwgZCA9IGUubGVuZ3RoOyBkID4gYzsgYysrKVxuICAgICAgaWYgKGIgPSBlW2NdLCBcInN0cmluZ1wiID09IHR5cGVvZiBiKSB7XG4gICAgICAgIGlmICgtMSAhPT0gYS5pbmRleE9mKGIpKSByZXR1cm4gITBcbiAgICAgIH0gZWxzZSBpZiAoYi50ZXN0KGEpKSByZXR1cm4gITA7XG4gICAgcmV0dXJuICExXG4gIH0sIHkoKS5vbihcInJlcXVlc3RcIiwgZnVuY3Rpb24oYikge1xuICAgIHZhciBjLCBkLCBlLCBmLCBnO1xuICAgIHJldHVybiBmID0gYi50eXBlLCBlID0gYi5yZXF1ZXN0LCBnID0gYi51cmwsIEkoZykgPyB2b2lkIDAgOiBqLnJ1bm5pbmcgfHwgRC5yZXN0YXJ0T25SZXF1ZXN0QWZ0ZXIgPT09ICExICYmIFwiZm9yY2VcIiAhPT0gSihmKSA/IHZvaWQgMCA6IChkID0gYXJndW1lbnRzLCBjID0gRC5yZXN0YXJ0T25SZXF1ZXN0QWZ0ZXIgfHwgMCwgXCJib29sZWFuXCIgPT0gdHlwZW9mIGMgJiYgKGMgPSAwKSwgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIHZhciBiLCBjLCBnLCBoLCBpLCBrO1xuICAgICAgaWYgKGIgPSBcInNvY2tldFwiID09PSBmID8gZS5yZWFkeVN0YXRlIDwgMiA6IDAgPCAoaCA9IGUucmVhZHlTdGF0ZSkgJiYgNCA+IGgpIHtcbiAgICAgICAgZm9yIChqLnJlc3RhcnQoKSwgaSA9IGouc291cmNlcywgayA9IFtdLCBjID0gMCwgZyA9IGkubGVuZ3RoOyBnID4gYzsgYysrKSB7XG4gICAgICAgICAgaWYgKEsgPSBpW2NdLCBLIGluc3RhbmNlb2YgYSkge1xuICAgICAgICAgICAgSy53YXRjaC5hcHBseShLLCBkKTtcbiAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgfVxuICAgICAgICAgIGsucHVzaCh2b2lkIDApXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGtcbiAgICAgIH1cbiAgICB9LCBjKSlcbiAgfSksIGEgPSBmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiBhKCkge1xuICAgICAgdmFyIGEgPSB0aGlzO1xuICAgICAgdGhpcy5lbGVtZW50cyA9IFtdLCB5KCkub24oXCJyZXF1ZXN0XCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gYS53YXRjaC5hcHBseShhLCBhcmd1bWVudHMpXG4gICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gYS5wcm90b3R5cGUud2F0Y2ggPSBmdW5jdGlvbihhKSB7XG4gICAgICB2YXIgYiwgYywgZCwgZTtcbiAgICAgIHJldHVybiBkID0gYS50eXBlLCBiID0gYS5yZXF1ZXN0LCBlID0gYS51cmwsIEkoZSkgPyB2b2lkIDAgOiAoYyA9IFwic29ja2V0XCIgPT09IGQgPyBuZXcgbihiKSA6IG5ldyBvKGIpLCB0aGlzLmVsZW1lbnRzLnB1c2goYykpXG4gICAgfSwgYVxuICB9KCksIG8gPSBmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiBhKGEpIHtcbiAgICAgIHZhciBiLCBjLCBkLCBlLCBmLCBnLCBoID0gdGhpcztcbiAgICAgIGlmICh0aGlzLnByb2dyZXNzID0gMCwgbnVsbCAhPSB3aW5kb3cuUHJvZ3Jlc3NFdmVudClcbiAgICAgICAgZm9yIChjID0gbnVsbCwgYS5hZGRFdmVudExpc3RlbmVyKFwicHJvZ3Jlc3NcIiwgZnVuY3Rpb24oYSkge1xuICAgICAgICAgICAgcmV0dXJuIGgucHJvZ3Jlc3MgPSBhLmxlbmd0aENvbXB1dGFibGUgPyAxMDAgKiBhLmxvYWRlZCAvIGEudG90YWwgOiBoLnByb2dyZXNzICsgKDEwMCAtIGgucHJvZ3Jlc3MpIC8gMlxuICAgICAgICAgIH0sICExKSwgZyA9IFtcImxvYWRcIiwgXCJhYm9ydFwiLCBcInRpbWVvdXRcIiwgXCJlcnJvclwiXSwgZCA9IDAsIGUgPSBnLmxlbmd0aDsgZSA+IGQ7IGQrKykgYiA9IGdbZF0sIGEuYWRkRXZlbnRMaXN0ZW5lcihiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gaC5wcm9ncmVzcyA9IDEwMFxuICAgICAgICB9LCAhMSk7XG4gICAgICBlbHNlIGYgPSBhLm9ucmVhZHlzdGF0ZWNoYW5nZSwgYS5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGI7XG4gICAgICAgIHJldHVybiAwID09PSAoYiA9IGEucmVhZHlTdGF0ZSkgfHwgNCA9PT0gYiA/IGgucHJvZ3Jlc3MgPSAxMDAgOiAzID09PSBhLnJlYWR5U3RhdGUgJiYgKGgucHJvZ3Jlc3MgPSA1MCksIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgZiA/IGYuYXBwbHkobnVsbCwgYXJndW1lbnRzKSA6IHZvaWQgMFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYVxuICB9KCksIG4gPSBmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiBhKGEpIHtcbiAgICAgIHZhciBiLCBjLCBkLCBlLCBmID0gdGhpcztcbiAgICAgIGZvciAodGhpcy5wcm9ncmVzcyA9IDAsIGUgPSBbXCJlcnJvclwiLCBcIm9wZW5cIl0sIGMgPSAwLCBkID0gZS5sZW5ndGg7IGQgPiBjOyBjKyspIGIgPSBlW2NdLCBhLmFkZEV2ZW50TGlzdGVuZXIoYiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBmLnByb2dyZXNzID0gMTAwXG4gICAgICB9LCAhMSlcbiAgICB9XG4gICAgcmV0dXJuIGFcbiAgfSgpLCBkID0gZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gYShhKSB7XG4gICAgICB2YXIgYiwgYywgZCwgZjtcbiAgICAgIGZvciAobnVsbCA9PSBhICYmIChhID0ge30pLCB0aGlzLmVsZW1lbnRzID0gW10sIG51bGwgPT0gYS5zZWxlY3RvcnMgJiYgKGEuc2VsZWN0b3JzID0gW10pLCBmID0gYS5zZWxlY3RvcnMsIGMgPSAwLCBkID0gZi5sZW5ndGg7IGQgPiBjOyBjKyspIGIgPSBmW2NdLCB0aGlzLmVsZW1lbnRzLnB1c2gobmV3IGUoYikpXG4gICAgfVxuICAgIHJldHVybiBhXG4gIH0oKSwgZSA9IGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIGEoYSkge1xuICAgICAgdGhpcy5zZWxlY3RvciA9IGEsIHRoaXMucHJvZ3Jlc3MgPSAwLCB0aGlzLmNoZWNrKClcbiAgICB9XG4gICAgcmV0dXJuIGEucHJvdG90eXBlLmNoZWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgYSA9IHRoaXM7XG4gICAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNlbGVjdG9yKSA/IHRoaXMuZG9uZSgpIDogc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGEuY2hlY2soKVxuICAgICAgfSwgRC5lbGVtZW50cy5jaGVja0ludGVydmFsKVxuICAgIH0sIGEucHJvdG90eXBlLmRvbmUgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb2dyZXNzID0gMTAwXG4gICAgfSwgYVxuICB9KCksIGMgPSBmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiBhKCkge1xuICAgICAgdmFyIGEsIGIsIGMgPSB0aGlzO1xuICAgICAgdGhpcy5wcm9ncmVzcyA9IG51bGwgIT0gKGIgPSB0aGlzLnN0YXRlc1tkb2N1bWVudC5yZWFkeVN0YXRlXSkgPyBiIDogMTAwLCBhID0gZG9jdW1lbnQub25yZWFkeXN0YXRlY2hhbmdlLCBkb2N1bWVudC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIG51bGwgIT0gYy5zdGF0ZXNbZG9jdW1lbnQucmVhZHlTdGF0ZV0gJiYgKGMucHJvZ3Jlc3MgPSBjLnN0YXRlc1tkb2N1bWVudC5yZWFkeVN0YXRlXSksIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgYSA/IGEuYXBwbHkobnVsbCwgYXJndW1lbnRzKSA6IHZvaWQgMFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYS5wcm90b3R5cGUuc3RhdGVzID0ge1xuICAgICAgbG9hZGluZzogMCxcbiAgICAgIGludGVyYWN0aXZlOiA1MCxcbiAgICAgIGNvbXBsZXRlOiAxMDBcbiAgICB9LCBhXG4gIH0oKSwgZiA9IGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIGEoKSB7XG4gICAgICB2YXIgYSwgYiwgYywgZCwgZSwgZiA9IHRoaXM7XG4gICAgICB0aGlzLnByb2dyZXNzID0gMCwgYSA9IDAsIGUgPSBbXSwgZCA9IDAsIGMgPSBDKCksIGIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGc7XG4gICAgICAgIHJldHVybiBnID0gQygpIC0gYyAtIDUwLCBjID0gQygpLCBlLnB1c2goZyksIGUubGVuZ3RoID4gRC5ldmVudExhZy5zYW1wbGVDb3VudCAmJiBlLnNoaWZ0KCksIGEgPSBxKGUpLCArK2QgPj0gRC5ldmVudExhZy5taW5TYW1wbGVzICYmIGEgPCBELmV2ZW50TGFnLmxhZ1RocmVzaG9sZCA/IChmLnByb2dyZXNzID0gMTAwLCBjbGVhckludGVydmFsKGIpKSA6IGYucHJvZ3Jlc3MgPSAxMDAgKiAoMyAvIChhICsgMykpXG4gICAgICB9LCA1MClcbiAgICB9XG4gICAgcmV0dXJuIGFcbiAgfSgpLCBtID0gZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gYShhKSB7XG4gICAgICB0aGlzLnNvdXJjZSA9IGEsIHRoaXMubGFzdCA9IHRoaXMuc2luY2VMYXN0VXBkYXRlID0gMCwgdGhpcy5yYXRlID0gRC5pbml0aWFsUmF0ZSwgdGhpcy5jYXRjaHVwID0gMCwgdGhpcy5wcm9ncmVzcyA9IHRoaXMubGFzdFByb2dyZXNzID0gMCwgbnVsbCAhPSB0aGlzLnNvdXJjZSAmJiAodGhpcy5wcm9ncmVzcyA9IEYodGhpcy5zb3VyY2UsIFwicHJvZ3Jlc3NcIikpXG4gICAgfVxuICAgIHJldHVybiBhLnByb3RvdHlwZS50aWNrID0gZnVuY3Rpb24oYSwgYikge1xuICAgICAgdmFyIGM7XG4gICAgICByZXR1cm4gbnVsbCA9PSBiICYmIChiID0gRih0aGlzLnNvdXJjZSwgXCJwcm9ncmVzc1wiKSksIGIgPj0gMTAwICYmICh0aGlzLmRvbmUgPSAhMCksIGIgPT09IHRoaXMubGFzdCA/IHRoaXMuc2luY2VMYXN0VXBkYXRlICs9IGEgOiAodGhpcy5zaW5jZUxhc3RVcGRhdGUgJiYgKHRoaXMucmF0ZSA9IChiIC0gdGhpcy5sYXN0KSAvIHRoaXMuc2luY2VMYXN0VXBkYXRlKSwgdGhpcy5jYXRjaHVwID0gKGIgLSB0aGlzLnByb2dyZXNzKSAvIEQuY2F0Y2h1cFRpbWUsIHRoaXMuc2luY2VMYXN0VXBkYXRlID0gMCwgdGhpcy5sYXN0ID0gYiksIGIgPiB0aGlzLnByb2dyZXNzICYmICh0aGlzLnByb2dyZXNzICs9IHRoaXMuY2F0Y2h1cCAqIGEpLCBjID0gMSAtIE1hdGgucG93KHRoaXMucHJvZ3Jlc3MgLyAxMDAsIEQuZWFzZUZhY3RvciksIHRoaXMucHJvZ3Jlc3MgKz0gYyAqIHRoaXMucmF0ZSAqIGEsIHRoaXMucHJvZ3Jlc3MgPSBNYXRoLm1pbih0aGlzLmxhc3RQcm9ncmVzcyArIEQubWF4UHJvZ3Jlc3NQZXJGcmFtZSwgdGhpcy5wcm9ncmVzcyksIHRoaXMucHJvZ3Jlc3MgPSBNYXRoLm1heCgwLCB0aGlzLnByb2dyZXNzKSwgdGhpcy5wcm9ncmVzcyA9IE1hdGgubWluKDEwMCwgdGhpcy5wcm9ncmVzcyksIHRoaXMubGFzdFByb2dyZXNzID0gdGhpcy5wcm9ncmVzcywgdGhpcy5wcm9ncmVzc1xuICAgIH0sIGFcbiAgfSgpLCBMID0gbnVsbCwgSCA9IG51bGwsIHIgPSBudWxsLCBNID0gbnVsbCwgcCA9IG51bGwsIHMgPSBudWxsLCBqLnJ1bm5pbmcgPSAhMSwgeiA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBELnJlc3RhcnRPblB1c2hTdGF0ZSA/IGoucmVzdGFydCgpIDogdm9pZCAwXG4gIH0sIG51bGwgIT0gd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlICYmIChUID0gd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlLCB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4geigpLCBULmFwcGx5KHdpbmRvdy5oaXN0b3J5LCBhcmd1bWVudHMpXG4gIH0pLCBudWxsICE9IHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSAmJiAoVyA9IHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSwgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHooKSwgVy5hcHBseSh3aW5kb3cuaGlzdG9yeSwgYXJndW1lbnRzKVxuICB9KSwgbCA9IHtcbiAgICBhamF4OiBhLFxuICAgIGVsZW1lbnRzOiBkLFxuICAgIGRvY3VtZW50OiBjLFxuICAgIGV2ZW50TGFnOiBmXG4gIH0sIChCID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGEsIGMsIGQsIGUsIGYsIGcsIGgsIGk7XG4gICAgZm9yIChqLnNvdXJjZXMgPSBMID0gW10sIGcgPSBbXCJhamF4XCIsIFwiZWxlbWVudHNcIiwgXCJkb2N1bWVudFwiLCBcImV2ZW50TGFnXCJdLCBjID0gMCwgZSA9IGcubGVuZ3RoOyBlID4gYzsgYysrKSBhID0gZ1tjXSwgRFthXSAhPT0gITEgJiYgTC5wdXNoKG5ldyBsW2FdKERbYV0pKTtcbiAgICBmb3IgKGkgPSBudWxsICE9IChoID0gRC5leHRyYVNvdXJjZXMpID8gaCA6IFtdLCBkID0gMCwgZiA9IGkubGVuZ3RoOyBmID4gZDsgZCsrKSBLID0gaVtkXSwgTC5wdXNoKG5ldyBLKEQpKTtcbiAgICByZXR1cm4gai5iYXIgPSByID0gbmV3IGIsIEggPSBbXSwgTSA9IG5ldyBtXG4gIH0pKCksIGouc3RvcCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBqLnRyaWdnZXIoXCJzdG9wXCIpLCBqLnJ1bm5pbmcgPSAhMSwgci5kZXN0cm95KCksIHMgPSAhMCwgbnVsbCAhPSBwICYmIChcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIHQgJiYgdChwKSwgcCA9IG51bGwpLCBCKClcbiAgfSwgai5yZXN0YXJ0ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGoudHJpZ2dlcihcInJlc3RhcnRcIiksIGouc3RvcCgpLCBqLnN0YXJ0KClcbiAgfSwgai5nbyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBhO1xuICAgIHJldHVybiBqLnJ1bm5pbmcgPSAhMCwgci5yZW5kZXIoKSwgYSA9IEMoKSwgcyA9ICExLCBwID0gRyhmdW5jdGlvbihiLCBjKSB7XG4gICAgICB2YXIgZCwgZSwgZiwgZywgaCwgaSwgaywgbCwgbiwgbywgcCwgcSwgdCwgdSwgdiwgdztcbiAgICAgIGZvciAobCA9IDEwMCAtIHIucHJvZ3Jlc3MsIGUgPSBwID0gMCwgZiA9ICEwLCBpID0gcSA9IDAsIHUgPSBMLmxlbmd0aDsgdSA+IHE7IGkgPSArK3EpXG4gICAgICAgIGZvciAoSyA9IExbaV0sIG8gPSBudWxsICE9IEhbaV0gPyBIW2ldIDogSFtpXSA9IFtdLCBoID0gbnVsbCAhPSAodyA9IEsuZWxlbWVudHMpID8gdyA6IFtLXSwgayA9IHQgPSAwLCB2ID0gaC5sZW5ndGg7IHYgPiB0OyBrID0gKyt0KSBnID0gaFtrXSwgbiA9IG51bGwgIT0gb1trXSA/IG9ba10gOiBvW2tdID0gbmV3IG0oZyksIGYgJj0gbi5kb25lLCBuLmRvbmUgfHwgKGUrKywgcCArPSBuLnRpY2soYikpO1xuICAgICAgcmV0dXJuIGQgPSBwIC8gZSwgci51cGRhdGUoTS50aWNrKGIsIGQpKSwgci5kb25lKCkgfHwgZiB8fCBzID8gKHIudXBkYXRlKDEwMCksIGoudHJpZ2dlcihcImRvbmVcIiksIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiByLmZpbmlzaCgpLCBqLnJ1bm5pbmcgPSAhMSwgai50cmlnZ2VyKFwiaGlkZVwiKVxuICAgICAgfSwgTWF0aC5tYXgoRC5naG9zdFRpbWUsIE1hdGgubWF4KEQubWluVGltZSAtIChDKCkgLSBhKSwgMCkpKSkgOiBjKClcbiAgICB9KVxuICB9LCBqLnN0YXJ0ID0gZnVuY3Rpb24oYSkge1xuICAgIHYoRCwgYSksIGoucnVubmluZyA9ICEwO1xuICAgIHRyeSB7XG4gICAgICByLnJlbmRlcigpXG4gICAgfSBjYXRjaCAoYikge1xuICAgICAgaSA9IGJcbiAgICB9XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGFjZVwiKSA/IChqLnRyaWdnZXIoXCJzdGFydFwiKSwgai5nbygpKSA6IHNldFRpbWVvdXQoai5zdGFydCwgNTApXG4gIH0sIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgZGVmaW5lICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGpcbiAgfSkgOiBcIm9iamVjdFwiID09IHR5cGVvZiBleHBvcnRzID8gbW9kdWxlLmV4cG9ydHMgPSBqIDogRC5zdGFydE9uUGFnZUxvYWQgJiYgai5zdGFydCgpXG59KS5jYWxsKHRoaXMpO1xuIiwiaW1wb3J0IFwiLi9tYWluLmpzXCI7XG4iXSwic291cmNlUm9vdCI6IiJ9