var $ = jQuery; 
$(document).ready(function() {

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

  window.mobileAndTabletcheck = function() {
    var check = false;
    (function(a) {
      if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
  };

  /*
  ================================================================================

    ADD DAYS TO AGENDA

  ================================================================================
  */

  var calendarBody = document.querySelector('tbody')
  var calendarPrepend = document.createElement('tr')
  calendarPrepend.classList.add('mc-row')
  calendarPrepend.innerHTML = '<td class="no-events"><span class="mc-date agenda-day no-events">M</span></td><td class="no-events"><span class="mc-date agenda-day no-events">D</span></td><td class="no-events"><span class="mc-date agenda-day no-events">W</span></td><td class="no-events"><span class="mc-date agenda-day no-events">D</span></td><td class="no-events"><span class="mc-date agenda-day no-events">V</span></td><td class="no-events"><span class="mc-date agenda-day no-events">Z</span></td><td class="no-events"><span class="mc-date agenda-day no-events">Z</span></td>'

  calendarBody.insertBefore(calendarPrepend, calendarBody.firstChild)

  /*
  ================================================================================

    PROEFLES POP UP

  ================================================================================
  */

  //Fix first option
  document.querySelector('#wpcf7-f138-o2 > form > div.custom-select > span > select > option:nth-child(1)').innerHTML = "Kies een dag"

  document.querySelector('.conversion').addEventListener('click', function(e){
    e.preventDefault()

    var popup = document.getElementById('proefles-overlay')
    var filter = document.getElementById('proefles-filter')

    popup.classList.toggle('togglePopup')
    filter.classList.toggle('toggleFilter')

  })

  document.querySelector('.close-popup').addEventListener('click', function(e){
    e.preventDefault()

    var popup = document.getElementById('proefles-overlay')
    var filter = document.getElementById('proefles-filter')


    popup.classList.toggle('togglePopup')
    filter.classList.toggle('toggleFilter')

  })

  document.querySelector('#proefles-filter').addEventListener('click', function(e){
    e.preventDefault()

    var popup = document.getElementById('proefles-overlay')
    var filter = document.getElementById('proefles-filter')

    popup.classList.toggle('togglePopup')
    filter.classList.toggle('toggleFilter')

  })

  document.addEventListener("keyup", function(e) {
    if (e.keyCode == 27) {
      e.preventDefault()

      var popup = document.getElementById('proefles-overlay')
      var filter = document.getElementById('proefles-filter')

      popup.fade()
      filter.fade()
    }
  });
  /*
  ================================================================================

    LAZY LOADING IMAGES

  ================================================================================
  */

  const config = {
    threshold: 0,
    rootMargin: "100px"
  };

  function preloadImage(el) {
    el.src = el.dataset.src
  }

  var observer = new IntersectionObserver(function(entries, self) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        preloadImage(entry.target);
        self.unobserve(entry.target);
      }
    });
  }, config);

  const imgs = document.querySelectorAll('img[data-src]');
  imgs.forEach(img => {
    observer.observe(img);
  });





  function preloadBackgroundImage(el) {
    el.style.backgroundImage = "url('" + el.dataset.background + "')"
  }

  var backgroundObserver = new IntersectionObserver(function(entries, self) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        preloadBackgroundImage(entry.target);
        self.unobserve(entry.target);
      }
    });
  }, config);

  const backgroundimg = document.querySelectorAll('div[data-background]');
  backgroundimg.forEach(backgroundimg => {
    backgroundObserver.observe(backgroundimg);
  });





  function preloadSection(el) {
    el.style.backgroundImage = "url('" + el.dataset.background + "')"
  }

  var sectionObserver = new IntersectionObserver(function(entries, self) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        preloadSection(entry.target);
        self.unobserve(entry.target);
      }
    });
  }, config);

  const sectionImg = document.querySelectorAll('section[data-background]');
  sectionImg.forEach(sectionImg => {
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

  var frameProportion = 1.78, //png frame aspect ratio
    frames = 25, //number of png frames
    resize = false;

  var open = false;

  //set transitionBackground dimentions
  setLayerDimensions();
  window.addEventListener("resize", function() {
    if (!resize) {
      resize = true;
      (!window.requestAnimationFrame) ? setTimeout(setLayerDimensions, 300): window.requestAnimationFrame(setLayerDimensions);
    }
  });

  //open modal window
  modalTrigger.addEventListener("click", function(event) {
    if (!open) {
      event.preventDefault();

      transitionLayer.classList.add('visible', 'opening');
      document.querySelector('.cd-main-content').style.display = 'block';
      modalTrigger.classList.add('open')
      modalTrigger.classList.remove('closed')

      var delay = (document.getElementsByClassName('.no-cssanimations').length > 0) ? 0 : 600;

      setTimeout(function() {
        modalWindow.classList.add('visible');
      }, delay);

      open = true;
    } else if (open) {
      event.preventDefault();

      modalTrigger.classList.add('closed');
      modalTrigger.classList.remove('open');

      transitionLayer.classList.add('closing');
      modalWindow.classList.remove('visible');

      function listener() {
        transitionLayer.classList.remove('closing', 'opening', 'visible');
        transitionBackground.removeEventListener('webkitAnimationEnd', listener);
        transitionBackground.removeEventListener('oanimationend', listener);
        transitionBackground.removeEventListener('msAnimationEnd', listener);
        transitionBackground.removeEventListener('animationend', listener);
      }

      transitionBackground.addEventListener('webkitAnimationEnd', listener);
      transitionBackground.addEventListener('oanimationend', listener);
      transitionBackground.addEventListener('msAnimationEnd', listener);
      transitionBackground.addEventListener('animationend', listener);

      setTimeout(function() {
        document.querySelector('.cd-main-content').style.display = 'none';
      }, 1000)

      open = false;
    }
  });

  if (document.querySelector('main').id === 'homepage') {
    const navbuttons = document.querySelectorAll('#menu-main-menu-1 li a')
      for (const navbutton of navbuttons) {
        navbutton.addEventListener('click', function(e) {

        if (open) {

          modalTrigger.classList.add('closed');
          modalTrigger.classList.remove('open');

          transitionLayer.classList.add('closing');
          modalWindow.classList.remove('visible');

          function listener() {
            transitionLayer.classList.remove('closing', 'opening', 'visible');
            transitionBackground.removeEventListener('webkitAnimationEnd', listener);
            transitionBackground.removeEventListener('oanimationend', listener);
            transitionBackground.removeEventListener('msAnimationEnd', listener);
            transitionBackground.removeEventListener('animationend', listener);
          }

          transitionBackground.addEventListener('webkitAnimationEnd', listener);
          transitionBackground.addEventListener('oanimationend', listener);
          transitionBackground.addEventListener('msAnimationEnd', listener);
          transitionBackground.addEventListener('animationend', listener);

          setTimeout(function() {
            document.querySelector('.cd-main-content').style.display = 'none';
          }, 1000)

          open = false;
        }
      })
    }
  }
  function setLayerDimensions() {
    var windowWidth = window.innerWidth,
      windowHeight = window.innerHeight,
      layerHeight, layerWidth;

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

  document.querySelector('#mc-embedded-subscribe').addEventListener("click", function() {
    var mpName = document.querySelector('#mce-FNAME').value;
    var mpMail = document.querySelector('#mce-EMAIL').value;

    if (!mpName.trim() == '' && !mpMail.trim() == '') {
      var message = "<p id='thank-you-mp'>Bedankt voor het aanmelden!</p>";
      document.querySelector('#mc_embed_signup').fadeOut(300);

      document.querySelector('#mc_embed_signup').promise().done(function() {
        document.querySelector('#mc_embed_signup').replaceWith(message);
      })
    }
  })

  /*
  ================================================================================

    CHECK IF ELEMENT IS IN THE VIEWPORT

  ================================================================================
  */

  var isReady = function(elem) {
    var elementTop = elem.offsetTop

    var viewportTop = document.body.scrollTop || document.documentElement.scrollTop;
    var viewportBottom = (viewportTop + window.innerHeight) * .9;

    return elementTop <= viewportBottom
  };

  var isInViewport = function(elem) {
    var elementTop = elem.offsetTop;

    var elementBottom = elementTop + elem.offsetHeight;

    var viewportTop = document.body.scrollTop || document.documentElement.scrollTop;

    var viewportBottom = (viewportTop + window.innerHeight) * .9;

    return elementBottom > viewportTop && elementTop < viewportBottom;
  };

  window.addEventListener('scroll', function(){
    var navBarsss = document.querySelectorAll('#nav-icon > span')
    var hero = document.querySelector('.hero')
    var over = document.querySelector('#over')
    var rooster = document.querySelector('#roosters')
    var docenten = document.querySelector('#docenten')
    var blog = document.querySelector('#blog')
    var contact = document.querySelector('#contact')

    if (!open) {
      if (isInViewport(hero)) {
        for (var i = 0; i < navBarsss.length; i++) {
          navBarsss[i].style.background = 'black'
        }
      } else if (isInViewport(over)) {
        for (var i = 0; i < navBarsss.length; i++) {
          navBarsss[i].style.background = 'white'
        }
      } else if (isInViewport(rooster)) {
        for (var i = 0; i < navBarsss.length; i++) {
          navBarsss[i].style.background = 'black'
        }
      } else if (isInViewport(docenten)) {
        for (var i = 0; i < navBarsss.length; i++) {
          navBarsss[i].style.background = 'white'
        }
      } else if (isInViewport(blog)) {
        for (var i = 0; i < navBarsss.length; i++) {
          navBarsss[i].style.background = 'black'
        }
      } else if (isInViewport(contact)) {
        for (var i = 0; i < navBarsss.length; i++) {
          navBarsss[i].style.background = 'white'
        }
      }
    }
  })

  /*
  ================================================================================

    IMG MOVEMENT ON SCROLL

  ================================================================================
  */

  var windowHeight = window.innerHeight;
  var windowWidth = window.innerWidth;
  var scrollArea = 10000 - windowHeight;
  var dancers = document.querySelector('.dancers-layer')

  window.addEventListener('scroll', function(){
    var scrollTop = window.pageYOffset || window.scrollTop;
    var scrollPercent = scrollTop/scrollArea || 0;

    dancers.style.bottom = scrollPercent*window.innerWidth + 'px';

  })

  /*
  ================================================================================

    TEXT TRIM BLOG

  ================================================================================
  */

  var txt = document.querySelectorAll('.blog-bericht .bottom p')
  var maxChar = 200

  txt.forEach(function(txti) {
    var string = txti.text()
    if (string.length >= maxChar) {
      var newString = string.substring(0, maxChar)

      newString = newString.substr(0, Math.min(newString.length, newString.lastIndexOf(" "))) + "..."

      txti.text(newString)
    }
  })


  /*
  ================================================================================

    ANIMATIONS

  ================================================================================
  */

  var smcontroller = new ScrollMagic.Controller();

  var animationWrapper = document.querySelectorAll('.animation-wrapper')
  for (var i = 0; i < animationWrapper.length; i++) {

    let triggerHook = 0.95;
    animationWrapper[i].style.transitionDelay = animationWrapper[i].dataset.delay

    let scene = new ScrollMagic.Scene({
      triggerElement: animationWrapper[i],
      triggerHook: triggerHook
    })
    .setClassToggle(animationWrapper[i], 'fadeIn')
    .addTo(smcontroller);
  }

});

paceOptions = {
  // Disable the 'elements' source
  elements: false,
  document: true,
  eventLag: false, // disabled
  restartOnRequestAfter: false
}

; /*! pace 1.0.0 */
(function() {
  var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X = [].slice,
    Y = {}.hasOwnProperty,
    Z = function(a, b) {
      function c() {
        this.constructor = a
      }
      for (var d in b) Y.call(b, d) && (a[d] = b[d]);
      return c.prototype = b.prototype, a.prototype = new c, a.__super__ = b.prototype, a
    },
    $ = [].indexOf || function(a) {
      for (var b = 0, c = this.length; c > b; b++)
        if (b in this && this[b] === a) return b;
      return -1
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
    }, C = function() {
      var a;
      return null != (a = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance.now() : void 0) ? a : +new Date
    }, E = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame, t = window.cancelAnimationFrame || window.mozCancelAnimationFrame, null == E && (E = function(a) {
      return setTimeout(a, 50)
    }, t = function(a) {
      return clearTimeout(a)
    }), G = function(a) {
      var b, c;
      return b = C(), (c = function() {
        var d;
        return d = C() - b, d >= 33 ? (b = C(), a(d, function() {
          return E(c)
        })) : setTimeout(c, 33 - d)
      })()
    }, F = function() {
      var a, b, c;
      return c = arguments[0], b = arguments[1], a = 3 <= arguments.length ? X.call(arguments, 2) : [], "function" == typeof c[b] ? c[b].apply(c, a) : c[b]
    }, v = function() {
      var a, b, c, d, e, f, g;
      for (b = arguments[0], d = 2 <= arguments.length ? X.call(arguments, 1) : [], f = 0, g = d.length; g > f; f++)
        if (c = d[f])
          for (a in c) Y.call(c, a) && (e = c[a], null != b[a] && "object" == typeof b[a] && null != e && "object" == typeof e ? v(b[a], e) : b[a] = e);
      return b
    }, q = function(a) {
      var b, c, d, e, f;
      for (c = b = 0, e = 0, f = a.length; f > e; e++) d = a[e], c += Math.abs(d), b++;
      return c / b
    }, x = function(a, b) {
      var c, d, e;
      if (null == a && (a = "options"), null == b && (b = !0), e = document.querySelector("[data-pace-" + a + "]")) {
        if (c = e.getAttribute("data-pace-" + a), !b) return c;
        try {
          return JSON.parse(c)
        } catch (f) {
          return d = f, "undefined" != typeof console && null !== console ? console.error("Error parsing inline pace options", d) : void 0
        }
      }
    }, g = function() {
      function a() {}
      return a.prototype.on = function(a, b, c, d) {
        var e;
        return null == d && (d = !1), null == this.bindings && (this.bindings = {}), null == (e = this.bindings)[a] && (e[a] = []), this.bindings[a].push({
          handler: b,
          ctx: c,
          once: d
        })
      }, a.prototype.once = function(a, b, c) {
        return this.on(a, b, c, !0)
      }, a.prototype.off = function(a, b) {
        var c, d, e;
        if (null != (null != (d = this.bindings) ? d[a] : void 0)) {
          if (null == b) return delete this.bindings[a];
          for (c = 0, e = []; c < this.bindings[a].length;) e.push(this.bindings[a][c].handler === b ? this.bindings[a].splice(c, 1) : c++);
          return e
        }
      }, a.prototype.trigger = function() {
        var a, b, c, d, e, f, g, h, i;
        if (c = arguments[0], a = 2 <= arguments.length ? X.call(arguments, 1) : [], null != (g = this.bindings) ? g[c] : void 0) {
          for (e = 0, i = []; e < this.bindings[c].length;) h = this.bindings[c][e], d = h.handler, b = h.ctx, f = h.once, d.apply(null != b ? b : this, a), i.push(f ? this.bindings[c].splice(e, 1) : e++);
          return i
        }
      }, a
    }(), j = window.Pace || {}, window.Pace = j, v(j, g.prototype), D = j.options = v({}, u, window.paceOptions, x()), U = ["ajax", "document", "eventLag", "elements"], Q = 0, S = U.length; S > Q; Q++) K = U[Q], D[K] === !0 && (D[K] = u[K]);
  i = function(a) {
    function b() {
      return V = b.__super__.constructor.apply(this, arguments)
    }
    return Z(b, a), b
  }(Error), b = function() {
    function a() {
      this.progress = 0
    }
    return a.prototype.getElement = function() {
      var a;
      if (null == this.el) {
        if (a = document.querySelector(D.target), !a) throw new i;
        this.el = document.createElement("div"), this.el.className = "pace pace-active", document.body.className = document.body.className.replace(/pace-done/g, ""), document.body.className += " pace-running", this.el.innerHTML = '<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>', null != a.firstChild ? a.insertBefore(this.el, a.firstChild) : a.appendChild(this.el)
      }
      return this.el
    }, a.prototype.finish = function() {
      var a;
      return a = this.getElement(), a.className = a.className.replace("pace-active", ""), a.className += " pace-inactive", document.body.className = document.body.className.replace("pace-running", ""), document.body.className += " pace-done"
    }, a.prototype.update = function(a) {
      return this.progress = a, this.render()
    }, a.prototype.destroy = function() {
      try {
        this.getElement().parentNode.removeChild(this.getElement())
      } catch (a) {
        i = a
      }
      return this.el = void 0
    }, a.prototype.render = function() {
      var a, b, c, d, e, f, g;
      if (null == document.querySelector(D.target)) return !1;
      for (a = this.getElement(), d = "translate3d(" + this.progress + "%, 0, 0)", g = ["webkitTransform", "msTransform", "transform"], e = 0, f = g.length; f > e; e++) b = g[e], a.children[0].style[b] = d;
      return (!this.lastRenderedProgress || this.lastRenderedProgress | 0 !== this.progress | 0) && (a.children[0].setAttribute("data-progress-text", "" + (0 | this.progress) + "%"), this.progress >= 100 ? c = "99" : (c = this.progress < 10 ? "0" : "", c += 0 | this.progress), a.children[0].setAttribute("data-progress", "" + c)), this.lastRenderedProgress = this.progress
    }, a.prototype.done = function() {
      return this.progress >= 100
    }, a
  }(), h = function() {
    function a() {
      this.bindings = {}
    }
    return a.prototype.trigger = function(a, b) {
      var c, d, e, f, g;
      if (null != this.bindings[a]) {
        for (f = this.bindings[a], g = [], d = 0, e = f.length; e > d; d++) c = f[d], g.push(c.call(this, b));
        return g
      }
    }, a.prototype.on = function(a, b) {
      var c;
      return null == (c = this.bindings)[a] && (c[a] = []), this.bindings[a].push(b)
    }, a
  }(), P = window.XMLHttpRequest, O = window.XDomainRequest, N = window.WebSocket, w = function(a, b) {
    var c, d, e, f;
    f = [];
    for (d in b.prototype) try {
      e = b.prototype[d], f.push(null == a[d] && "function" != typeof e ? a[d] = e : void 0)
    } catch (g) {
      c = g
    }
    return f
  }, A = [], j.ignore = function() {
    var a, b, c;
    return b = arguments[0], a = 2 <= arguments.length ? X.call(arguments, 1) : [], A.unshift("ignore"), c = b.apply(null, a), A.shift(), c
  }, j.track = function() {
    var a, b, c;
    return b = arguments[0], a = 2 <= arguments.length ? X.call(arguments, 1) : [], A.unshift("track"), c = b.apply(null, a), A.shift(), c
  }, J = function(a) {
    var b;
    if (null == a && (a = "GET"), "track" === A[0]) return "force";
    if (!A.length && D.ajax) {
      if ("socket" === a && D.ajax.trackWebSockets) return !0;
      if (b = a.toUpperCase(), $.call(D.ajax.trackMethods, b) >= 0) return !0
    }
    return !1
  }, k = function(a) {
    function b() {
      var a, c = this;
      b.__super__.constructor.apply(this, arguments), a = function(a) {
        var b;
        return b = a.open, a.open = function(d, e) {
          return J(d) && c.trigger("request", {
            type: d,
            url: e,
            request: a
          }), b.apply(a, arguments)
        }
      }, window.XMLHttpRequest = function(b) {
        var c;
        return c = new P(b), a(c), c
      };
      try {
        w(window.XMLHttpRequest, P)
      } catch (d) {}
      if (null != O) {
        window.XDomainRequest = function() {
          var b;
          return b = new O, a(b), b
        };
        try {
          w(window.XDomainRequest, O)
        } catch (d) {}
      }
      if (null != N && D.ajax.trackWebSockets) {
        window.WebSocket = function(a, b) {
          var d;
          return d = null != b ? new N(a, b) : new N(a), J("socket") && c.trigger("request", {
            type: "socket",
            url: a,
            protocols: b,
            request: d
          }), d
        };
        try {
          w(window.WebSocket, N)
        } catch (d) {}
      }
    }
    return Z(b, a), b
  }(h), R = null, y = function() {
    return null == R && (R = new k), R
  }, I = function(a) {
    var b, c, d, e;
    for (e = D.ajax.ignoreURLs, c = 0, d = e.length; d > c; c++)
      if (b = e[c], "string" == typeof b) {
        if (-1 !== a.indexOf(b)) return !0
      } else if (b.test(a)) return !0;
    return !1
  }, y().on("request", function(b) {
    var c, d, e, f, g;
    return f = b.type, e = b.request, g = b.url, I(g) ? void 0 : j.running || D.restartOnRequestAfter === !1 && "force" !== J(f) ? void 0 : (d = arguments, c = D.restartOnRequestAfter || 0, "boolean" == typeof c && (c = 0), setTimeout(function() {
      var b, c, g, h, i, k;
      if (b = "socket" === f ? e.readyState < 2 : 0 < (h = e.readyState) && 4 > h) {
        for (j.restart(), i = j.sources, k = [], c = 0, g = i.length; g > c; c++) {
          if (K = i[c], K instanceof a) {
            K.watch.apply(K, d);
            break
          }
          k.push(void 0)
        }
        return k
      }
    }, c))
  }), a = function() {
    function a() {
      var a = this;
      this.elements = [], y().on("request", function() {
        return a.watch.apply(a, arguments)
      })
    }
    return a.prototype.watch = function(a) {
      var b, c, d, e;
      return d = a.type, b = a.request, e = a.url, I(e) ? void 0 : (c = "socket" === d ? new n(b) : new o(b), this.elements.push(c))
    }, a
  }(), o = function() {
    function a(a) {
      var b, c, d, e, f, g, h = this;
      if (this.progress = 0, null != window.ProgressEvent)
        for (c = null, a.addEventListener("progress", function(a) {
            return h.progress = a.lengthComputable ? 100 * a.loaded / a.total : h.progress + (100 - h.progress) / 2
          }, !1), g = ["load", "abort", "timeout", "error"], d = 0, e = g.length; e > d; d++) b = g[d], a.addEventListener(b, function() {
          return h.progress = 100
        }, !1);
      else f = a.onreadystatechange, a.onreadystatechange = function() {
        var b;
        return 0 === (b = a.readyState) || 4 === b ? h.progress = 100 : 3 === a.readyState && (h.progress = 50), "function" == typeof f ? f.apply(null, arguments) : void 0
      }
    }
    return a
  }(), n = function() {
    function a(a) {
      var b, c, d, e, f = this;
      for (this.progress = 0, e = ["error", "open"], c = 0, d = e.length; d > c; c++) b = e[c], a.addEventListener(b, function() {
        return f.progress = 100
      }, !1)
    }
    return a
  }(), d = function() {
    function a(a) {
      var b, c, d, f;
      for (null == a && (a = {}), this.elements = [], null == a.selectors && (a.selectors = []), f = a.selectors, c = 0, d = f.length; d > c; c++) b = f[c], this.elements.push(new e(b))
    }
    return a
  }(), e = function() {
    function a(a) {
      this.selector = a, this.progress = 0, this.check()
    }
    return a.prototype.check = function() {
      var a = this;
      return document.querySelector(this.selector) ? this.done() : setTimeout(function() {
        return a.check()
      }, D.elements.checkInterval)
    }, a.prototype.done = function() {
      return this.progress = 100
    }, a
  }(), c = function() {
    function a() {
      var a, b, c = this;
      this.progress = null != (b = this.states[document.readyState]) ? b : 100, a = document.onreadystatechange, document.onreadystatechange = function() {
        return null != c.states[document.readyState] && (c.progress = c.states[document.readyState]), "function" == typeof a ? a.apply(null, arguments) : void 0
      }
    }
    return a.prototype.states = {
      loading: 0,
      interactive: 50,
      complete: 100
    }, a
  }(), f = function() {
    function a() {
      var a, b, c, d, e, f = this;
      this.progress = 0, a = 0, e = [], d = 0, c = C(), b = setInterval(function() {
        var g;
        return g = C() - c - 50, c = C(), e.push(g), e.length > D.eventLag.sampleCount && e.shift(), a = q(e), ++d >= D.eventLag.minSamples && a < D.eventLag.lagThreshold ? (f.progress = 100, clearInterval(b)) : f.progress = 100 * (3 / (a + 3))
      }, 50)
    }
    return a
  }(), m = function() {
    function a(a) {
      this.source = a, this.last = this.sinceLastUpdate = 0, this.rate = D.initialRate, this.catchup = 0, this.progress = this.lastProgress = 0, null != this.source && (this.progress = F(this.source, "progress"))
    }
    return a.prototype.tick = function(a, b) {
      var c;
      return null == b && (b = F(this.source, "progress")), b >= 100 && (this.done = !0), b === this.last ? this.sinceLastUpdate += a : (this.sinceLastUpdate && (this.rate = (b - this.last) / this.sinceLastUpdate), this.catchup = (b - this.progress) / D.catchupTime, this.sinceLastUpdate = 0, this.last = b), b > this.progress && (this.progress += this.catchup * a), c = 1 - Math.pow(this.progress / 100, D.easeFactor), this.progress += c * this.rate * a, this.progress = Math.min(this.lastProgress + D.maxProgressPerFrame, this.progress), this.progress = Math.max(0, this.progress), this.progress = Math.min(100, this.progress), this.lastProgress = this.progress, this.progress
    }, a
  }(), L = null, H = null, r = null, M = null, p = null, s = null, j.running = !1, z = function() {
    return D.restartOnPushState ? j.restart() : void 0
  }, null != window.history.pushState && (T = window.history.pushState, window.history.pushState = function() {
    return z(), T.apply(window.history, arguments)
  }), null != window.history.replaceState && (W = window.history.replaceState, window.history.replaceState = function() {
    return z(), W.apply(window.history, arguments)
  }), l = {
    ajax: a,
    elements: d,
    document: c,
    eventLag: f
  }, (B = function() {
    var a, c, d, e, f, g, h, i;
    for (j.sources = L = [], g = ["ajax", "elements", "document", "eventLag"], c = 0, e = g.length; e > c; c++) a = g[c], D[a] !== !1 && L.push(new l[a](D[a]));
    for (i = null != (h = D.extraSources) ? h : [], d = 0, f = i.length; f > d; d++) K = i[d], L.push(new K(D));
    return j.bar = r = new b, H = [], M = new m
  })(), j.stop = function() {
    return j.trigger("stop"), j.running = !1, r.destroy(), s = !0, null != p && ("function" == typeof t && t(p), p = null), B()
  }, j.restart = function() {
    return j.trigger("restart"), j.stop(), j.start()
  }, j.go = function() {
    var a;
    return j.running = !0, r.render(), a = C(), s = !1, p = G(function(b, c) {
      var d, e, f, g, h, i, k, l, n, o, p, q, t, u, v, w;
      for (l = 100 - r.progress, e = p = 0, f = !0, i = q = 0, u = L.length; u > q; i = ++q)
        for (K = L[i], o = null != H[i] ? H[i] : H[i] = [], h = null != (w = K.elements) ? w : [K], k = t = 0, v = h.length; v > t; k = ++t) g = h[k], n = null != o[k] ? o[k] : o[k] = new m(g), f &= n.done, n.done || (e++, p += n.tick(b));
      return d = p / e, r.update(M.tick(b, d)), r.done() || f || s ? (r.update(100), j.trigger("done"), setTimeout(function() {
        return r.finish(), j.running = !1, j.trigger("hide")
      }, Math.max(D.ghostTime, Math.max(D.minTime - (C() - a), 0)))) : c()
    })
  }, j.start = function(a) {
    v(D, a), j.running = !0;
    try {
      r.render()
    } catch (b) {
      i = b
    }
    return document.querySelector(".pace") ? (j.trigger("start"), j.go()) : setTimeout(j.start, 50)
  }, "function" == typeof define && define.amd ? define(function() {
    return j
  }) : "object" == typeof exports ? module.exports = j : D.startOnPageLoad && j.start()
}).call(this);
