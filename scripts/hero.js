(function () {
  var canvas = document.getElementById('hero-canvas');
  var stage = document.getElementById('portrait-stage');
  if (!canvas || !stage) return;

  var ctx = canvas.getContext('2d');
  var nodes = [];
  var floats = [];
  var floatDeck = null;
  var visibleLayers = {};
  var mouse = { x: 0.5, y: 0.5 };
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var mobile = window.matchMedia('(max-width: 900px)').matches;
  var FLOAT_ZONES = [
    { id: 'home', count: 3, mobile: 2, faint: true },
    { id: 'about', count: 6, mobile: 4 },
    { id: 'skills', count: 7, mobile: 4 },
    { id: 'projects', count: 8, mobile: 5 },
    { id: 'testimonials', count: 6, mobile: 3 },
    { id: 'achievements', count: 6, mobile: 3 },
    { id: 'contact', count: 6, mobile: 3 },
  ];

  function accent() {
    return getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#22d3ee';
  }

  function heroSize() {
    var rect = canvas.parentElement.getBoundingClientRect();
    return { w: rect.width, h: rect.height };
  }

  function resize() {
    var size = heroSize();
    var dpr = Math.min(window.devicePixelRatio || 1, mobile ? 1 : 1.5);
    canvas.width = Math.floor(size.w * dpr);
    canvas.height = Math.floor(size.h * dpr);
    canvas.style.width = size.w + 'px';
    canvas.style.height = size.h + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function uniqueMarks() {
    if (floatDeck) return floatDeck.slice();
    var icons = window.SKILL_ICONS || {};
    var keys = Object.keys(icons);
    for (var i = keys.length - 1; i > 0; i -= 1) {
      var j = Math.floor(Math.random() * (i + 1));
      var hold = keys[i];
      keys[i] = keys[j];
      keys[j] = hold;
    }
    floatDeck = keys;
    return floatDeck.slice();
  }

  function seedFloats() {
    var icons = window.SKILL_ICONS || {};
    var marks = uniqueMarks();
    var used = {};
    floats = [];
    document.querySelectorAll('.page-floats').forEach(function (layer) {
      layer.innerHTML = '';
    });

    FLOAT_ZONES.forEach(function (zone) {
      var layer = document.querySelector('.page-floats[data-float-zone="' + zone.id + '"]');
      if (!layer) return;
      var measured = layerSize(layer);
      var size = {
        w: measured.w || window.innerWidth,
        h: measured.h || 400,
      };
      var count = mobile ? zone.mobile : zone.count;
      var placed = 0;
      var guard = 0;
      while (placed < count && guard < marks.length + 8) {
        guard += 1;
        var id = marks.shift();
        if (!id || used[id] || !icons[id]) continue;
        used[id] = true;
        var mark = document.createElement('span');
        mark.className = 'hero-float';
        mark.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor">' + icons[id] + '</svg>';
        var dim = zone.faint
          ? (mobile ? 22 + Math.random() * 12 : 28 + Math.random() * 16)
          : (mobile ? 26 + Math.random() * 16 : 36 + Math.random() * 22);
        var x = Math.random() * Math.max(1, size.w - dim);
        var y = Math.random() * Math.max(1, size.h - dim);
        mark.style.width = dim + 'px';
        mark.style.height = dim + 'px';
        mark.style.opacity = String(zone.faint
          ? (mobile ? 0.16 + Math.random() * 0.1 : 0.18 + Math.random() * 0.12)
          : (mobile ? 0.28 + Math.random() * 0.16 : 0.34 + Math.random() * 0.18));
        layer.appendChild(mark);
        floats.push({
          el: mark,
          layer: layer,
          x: x,
          y: y,
          vx: (Math.random() - 0.5) * (mobile ? 0.2 : 0.3),
          vy: (Math.random() - 0.5) * (mobile ? 0.2 : 0.3),
          rot: Math.random() * 360,
          vr: (Math.random() - 0.5) * 0.18,
          size: dim,
          fx: 0.0006 + Math.random() * 0.0011,
          fy: 0.0005 + Math.random() * 0.001,
          ph: Math.random() * Math.PI * 2,
          ready: measured.w >= 8 && measured.h >= 8,
          layerVisible: !!visibleLayers[zone.id],
        });
        placed += 1;
      }
    });
    syncLayerFlags();
    placeFloats();
  }

  function placeFloats() {
    for (var i = 0; i < floats.length; i += 1) {
      var item = floats[i];
      item.el.style.transform = 'translate3d(' + item.x + 'px,' + item.y + 'px,0) rotate(' + item.rot + 'deg)';
    }
  }

  function layerSize(layer) {
    return {
      w: layer.clientWidth || 0,
      h: layer.clientHeight || 0,
    };
  }

  function scatterLayer(layer) {
    var size = layerSize(layer);
    if (size.w < 8 || size.h < 8) return false;
    for (var i = 0; i < floats.length; i += 1) {
      var item = floats[i];
      if (item.layer !== layer || item.ready) continue;
      item.x = Math.random() * Math.max(1, size.w - item.size);
      item.y = Math.random() * Math.max(1, size.h - item.size);
      item.ready = true;
    }
    return true;
  }

  function syncLayerFlags() {
    for (var i = 0; i < floats.length; i += 1) {
      var item = floats[i];
      var id = item.layer.getAttribute('data-float-zone');
      item.layerVisible = !!visibleLayers[id];
      if (item.layerVisible) scatterLayer(item.layer);
    }
  }

  function driftFloats(now) {
    for (var i = 0; i < floats.length; i += 1) {
      var item = floats[i];
      if (!item.ready) continue;
      var size = layerSize(item.layer);
      if (size.w < 8 || size.h < 8) continue;
      item.x += item.vx + Math.sin(now * item.fx + item.ph) * 0.22;
      item.y += item.vy + Math.cos(now * item.fy + item.ph) * 0.22;
      item.rot += item.vr;
      if (item.x < -item.size) item.x = size.w;
      else if (item.x > size.w) item.x = -item.size;
      if (item.y < -item.size) item.y = size.h;
      else if (item.y > size.h) item.y = -item.size;
      item.el.style.transform = 'translate3d(' + item.x + 'px,' + item.y + 'px,0) rotate(' + item.rot + 'deg)';
    }
  }

  function seed() {
    var count = mobile ? 16 : 36;
    nodes = [];
    for (var i = 0; i < count; i += 1) {
      nodes.push({
        x: Math.random(),
        y: Math.random(),
        z: 0.4 + Math.random() * 0.6,
        vx: (Math.random() - 0.5) * 0.0004,
        vy: (Math.random() - 0.5) * 0.0004,
      });
    }
  }

  function tilt() {
    if (reduce || mobile) {
      stage.style.transform = 'none';
      return;
    }
    var y = (mouse.x - 0.5) * -16;
    var x = (mouse.y - 0.5) * 10;
    stage.style.transform = 'rotateY(' + y + 'deg) rotateX(' + x + 'deg)';
  }

  function draw() {
    var w = canvas.clientWidth;
    var h = canvas.clientHeight;
    ctx.clearRect(0, 0, w, h);
    var color = accent();
    var cx = mobile ? 0.5 : 0.76;
    var cy = mobile ? 0.28 : 0.48;
    var radius = mobile ? 0.2 : 0.24;

    ctx.lineWidth = 1;
    for (var i = 0; i < nodes.length; i += 1) {
      var a = nodes[i];
      a.x += a.vx;
      a.y += a.vy;
      if (a.x < 0.08 || a.x > 0.92) a.vx *= -1;
      if (a.y < 0.1 || a.y > 0.9) a.vy *= -1;

      var px = (cx + (a.x - 0.5) * radius * 2.1 + (mouse.x - 0.5) * 0.04) * w;
      var py = (cy + (a.y - 0.5) * radius * 1.7 + (mouse.y - 0.5) * 0.03) * h;

      for (var j = i + 1; j < nodes.length; j += 1) {
        var b = nodes[j];
        var dx = a.x - b.x;
        var dy = a.y - b.y;
        var dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 0.15) {
          ctx.globalAlpha = (1 - dist / 0.15) * 0.28;
          ctx.strokeStyle = color;
          var qx = (cx + (b.x - 0.5) * radius * 2.1) * w;
          var qy = (cy + (b.y - 0.5) * radius * 1.7) * h;
          ctx.beginPath();
          ctx.moveTo(px, py);
          ctx.lineTo(qx, qy);
          ctx.stroke();
        }
      }

      ctx.globalAlpha = 0.5;
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(px, py, 1.3 + a.z, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
  }

  var pageVisible = true;
  var heroVisible = true;
  var raf = 0;

  function loop(now) {
    if (!pageVisible) {
      raf = 0;
      return;
    }
    if (heroVisible) draw();
    driftFloats(now || 0);
    raf = requestAnimationFrame(loop);
  }

  function startLoop() {
    if (reduce || raf) return;
    raf = requestAnimationFrame(loop);
  }

  var resizeTimer = 0;
  window.addEventListener('resize', function () {
    mobile = window.matchMedia('(max-width: 900px)').matches;
    resize();
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(seedFloats, 180);
  });
  window.addEventListener('pointermove', function (e) {
    mouse.x = e.clientX / window.innerWidth;
    mouse.y = e.clientY / window.innerHeight;
    tilt();
  }, { passive: true });
  document.addEventListener('visibilitychange', function () {
    pageVisible = document.visibilityState !== 'hidden';
    if (pageVisible) startLoop();
  });

  if (canvas.parentElement && 'IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      heroVisible = entries.some(function (entry) { return entry.isIntersecting; });
    }, { threshold: 0.05 }).observe(canvas.parentElement);
  }

  if ('IntersectionObserver' in window) {
    var layerWatch = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var id = entry.target.getAttribute('data-float-zone');
        visibleLayers[id] = entry.isIntersecting;
        if (entry.isIntersecting) scatterLayer(entry.target);
      });
      syncLayerFlags();
    }, { threshold: 0.05, rootMargin: '120px 0px' });
    document.querySelectorAll('.page-floats').forEach(function (layer) {
      layerWatch.observe(layer);
    });
  } else {
    FLOAT_ZONES.forEach(function (zone) { visibleLayers[zone.id] = true; });
    syncLayerFlags();
  }

  resize();
  seed();
  seedFloats();
  requestAnimationFrame(seedFloats);
  window.addEventListener('load', seedFloats);
  if (!reduce) startLoop();
  else placeFloats();
})();
