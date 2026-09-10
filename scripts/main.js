(function () {
  var site = window.SITE || {};

  var year = document.getElementById('year');
  if (year) year.textContent = site.year || new Date().getFullYear();

  var nav = document.getElementById('nav');
  var menuBtn = document.getElementById('menu-btn');
  var mobileLinks = document.getElementById('mobile-links');

  function onScrollNav() {
    if (!nav) return;
    nav.classList.toggle('is-scrolled', window.scrollY > 12);
  }
  var navLinks = document.querySelectorAll('.nav-links a[href^="#"], .mobile-panel a[href^="#"]');
  var sectionIds = ['home', 'about', 'skills', 'projects', 'testimonials', 'achievements', 'contact'];

  function setActiveNav(id) {
    navLinks.forEach(function (link) {
      var on = link.getAttribute('href') === '#' + id;
      link.classList.toggle('is-active', on);
      if (on) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }

  var navSpyTick = 0;
  function updateActiveNav() {
    if (navSpyTick) return;
    navSpyTick = requestAnimationFrame(function () {
      navSpyTick = 0;
      var offset = 90;
      var current = sectionIds[0];
      for (var i = 0; i < sectionIds.length; i++) {
        var el = document.getElementById(sectionIds[i]);
        if (!el) continue;
        if (el.getBoundingClientRect().top - offset <= 0) current = sectionIds[i];
      }
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 6) {
        current = sectionIds[sectionIds.length - 1];
      }
      setActiveNav(current);
    });
  }

  window.addEventListener('scroll', onScrollNav, { passive: true });
  window.addEventListener('scroll', updateActiveNav, { passive: true });
  onScrollNav();
  updateActiveNav();

  function focusables(root) {
    return Array.prototype.filter.call(
      root.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]):not([type="hidden"]), textarea:not([disabled]), iframe, [tabindex]:not([tabindex="-1"])'),
      function (el) {
        return !el.hasAttribute('hidden') && !el.closest('[hidden]');
      }
    );
  }

  function trapTab(container, e) {
    if (e.key !== 'Tab') return;
    var items = focusables(container);
    if (!items.length) return;
    var first = items[0];
    var last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  }

  function setMenu(open, restore) {
    if (!nav || !menuBtn) return;
    nav.classList.toggle('is-open', open);
    menuBtn.setAttribute('aria-expanded', open ? 'true' : 'false');
    menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    if (mobileLinks) mobileLinks.setAttribute('aria-hidden', open ? 'false' : 'true');
    document.body.style.overflow = open ? 'hidden' : '';
    if (open && mobileLinks) {
      var firstLink = mobileLinks.querySelector('a');
      if (firstLink) firstLink.focus();
    } else if (!open && restore !== false) {
      menuBtn.focus();
    }
  }
  if (menuBtn) {
    menuBtn.addEventListener('click', function () {
      setMenu(!nav.classList.contains('is-open'));
    });
  }
  if (mobileLinks) {
    mobileLinks.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') setMenu(false, false);
    });
  }
  document.addEventListener('keydown', function (e) {
    if (!nav || !nav.classList.contains('is-open')) return;
    if (e.key === 'Escape') setMenu(false);
    else trapTab(nav, e);
  });

  var toggle = document.getElementById('theme-toggle');
  var sun = document.getElementById('icon-sun');
  var moon = document.getElementById('icon-moon');

  function syncThemeIcons() {
    var light = document.documentElement.classList.contains('light');
    if (sun) sun.hidden = light;
    if (moon) moon.hidden = !light;
  }
  syncThemeIcons();

  if (toggle) {
    toggle.addEventListener('click', function () {
      var root = document.documentElement;
      var next = root.classList.contains('dark') ? 'light' : 'dark';
      root.classList.remove('dark', 'light');
      root.classList.add(next);
      root.style.colorScheme = next;
      localStorage.setItem('noman-theme', next);
      syncThemeIcons();
      toggle.setAttribute('aria-label', next === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
    });
  }
  if (toggle) {
    toggle.setAttribute('aria-label', document.documentElement.classList.contains('dark') ? 'Switch to light theme' : 'Switch to dark theme');
  }

  function pictureTag(src, width, height) {
    var base = String(src || '').replace(/\.(jpe?g|png|webp)$/i, '');
    if (!base) return '';
    return (
      '<picture>' +
        '<source type="image/webp" srcset="' + base + '.webp" />' +
        '<img src="' + base + '.jpg" alt="" width="' + width + '" height="' + height + '" loading="lazy" decoding="async" />' +
      '</picture>'
    );
  }

  function skillMark(id) {
    var icons = window.SKILL_ICONS || {};
    var path = icons[id];
    if (!path) return '';
    return '<span class="skill-ico" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor">' + path + '</svg></span>';
  }

  var featured = document.getElementById('stack-featured');
  if (featured && site.featured) {
    featured.innerHTML = site.featured.map(function (item) {
      return (
        '<article class="stack-card surface">' +
          skillMark(item.icon) +
          '<small>' + item.role + '</small>' +
          '<h3 class="display">' + item.name + '</h3>' +
          '<p>' + item.blurb + '</p>' +
        '</article>'
      );
    }).join('');
  }

  function skillTile(item) {
    return (
      '<article class="skill-tile surface">' +
        skillMark(item.icon) +
        '<strong>' + item.name + '</strong>' +
      '</article>'
    );
  }

  var skillTabs = document.getElementById('skill-tabs');
  var skillGroups = document.getElementById('skill-groups');
  if (skillGroups && site.skillGroups) {
    if (skillTabs) {
      skillTabs.innerHTML = site.skillGroups.map(function (group, index) {
        var on = index === 0;
        return (
          '<button type="button" class="skill-tab' + (on ? ' is-on' : '') + '" id="skill-tab-' + index + '" data-skill-tab="' + index + '" role="tab" aria-selected="' + on + '" aria-controls="skill-panel-' + index + '" tabindex="' + (on ? '0' : '-1') + '">' +
            (group.tab || group.title) +
          '</button>'
        );
      }).join('');
    }

    skillGroups.innerHTML = site.skillGroups.map(function (group, index) {
      var html = '<div class="stack-block" id="skill-panel-' + index + '" role="tabpanel" data-skill-panel="' + index + '" aria-labelledby="skill-tab-' + index + '"' + (index === 0 ? '' : ' hidden') + '>';
      (group.sections || []).forEach(function (section) {
        html += '<div class="stack-group">';
        if (section.label) html += '<p class="stack-label">' + section.label + '</p>';
        html += '<div class="skill-grid">' + (section.items || []).map(skillTile).join('') + '</div>';
        html += '</div>';
      });
      html += '</div>';
      return html;
    }).join('');

    if (skillTabs) {
      function activateSkillTab(button, moveFocus) {
        var next = button.getAttribute('data-skill-tab');
        skillTabs.querySelectorAll('[data-skill-tab]').forEach(function (tab) {
          var on = tab === button;
          tab.classList.toggle('is-on', on);
          tab.setAttribute('aria-selected', on ? 'true' : 'false');
          tab.tabIndex = on ? 0 : -1;
        });
        skillGroups.querySelectorAll('[data-skill-panel]').forEach(function (panel) {
          panel.hidden = panel.getAttribute('data-skill-panel') !== next;
        });
        if (moveFocus) button.focus();
      }

      skillTabs.addEventListener('click', function (event) {
        var button = event.target.closest('[data-skill-tab]');
        if (!button) return;
        activateSkillTab(button, false);
      });

      skillTabs.addEventListener('keydown', function (event) {
        var tabs = Array.prototype.slice.call(skillTabs.querySelectorAll('[data-skill-tab]'));
        var current = tabs.indexOf(document.activeElement);
        if (current < 0) return;
        var dest = current;
        if (event.key === 'ArrowRight' || event.key === 'ArrowDown') dest = (current + 1) % tabs.length;
        else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') dest = (current - 1 + tabs.length) % tabs.length;
        else if (event.key === 'Home') dest = 0;
        else if (event.key === 'End') dest = tabs.length - 1;
        else return;
        event.preventDefault();
        activateSkillTab(tabs[dest], true);
      });
    }
  }

  var projectGrid = document.getElementById('project-grid');
  var loadMore = document.getElementById('load-more');
  var PAGE_SIZE = 3;
  var projectFilter = 'shopify';
  var projectShown = PAGE_SIZE;

  function matchingProjectCards() {
    return Array.prototype.filter.call(document.querySelectorAll('#project-grid .card'), function (card) {
      var tags = card.getAttribute('data-tags') || '';
      return projectFilter === 'all' || tags.indexOf(projectFilter) !== -1;
    });
  }

  function applyProjectView() {
    var match = matchingProjectCards();
    document.querySelectorAll('#project-grid .card').forEach(function (card) {
      var index = match.indexOf(card);
      card.classList.toggle('is-hidden', index === -1 || index >= projectShown);
    });
    var allShown = match.length <= PAGE_SIZE || projectShown >= match.length;
    if (loadMore) loadMore.hidden = allShown;
    if (loadMore && loadMore.parentElement) {
      loadMore.parentElement.classList.toggle('is-hidden', allShown);
    }
  }

  if (projectGrid && site.projects) {
    projectGrid.innerHTML = site.projects.map(function (project) {
      var media = project.image
        ? pictureTag(project.image, 640, 440)
        : '<strong class="display">' + project.name + '</strong>';
      return (
        '<article class="card surface" data-tags="' + project.tags.join(' ') + '">' +
          '<div class="card-media">' + media +
            '<div class="card-hover">' +
              '<p>' + project.description + '</p>' +
              '<div class="row">' +
                '<a class="mini mini-accent" href="' + project.url + '" target="_blank" rel="noopener noreferrer">View project <span class="sr-only">for ' + project.name + ' (opens in a new tab)</span></a>' +
                '<a class="mini mini-ghost" href="' + project.url + '" target="_blank" rel="noopener noreferrer">Learn more <span class="sr-only">about ' + project.name + ' (opens in a new tab)</span></a>' +
              '</div>' +
            '</div>' +
          '</div>' +
          '<div class="card-body">' +
            '<h3 class="display"><a href="' + project.url + '" target="_blank" rel="noopener noreferrer">' + project.name + ' <span class="sr-only">(opens in a new tab)</span></a></h3>' +
            '<p>' + project.stack + '</p>' +
          '</div>' +
        '</article>'
      );
    }).join('');
    applyProjectView();
  }

  var filters = document.getElementById('filters');
  if (filters) {
    filters.addEventListener('click', function (e) {
      var btn = e.target.closest('.filter');
      if (!btn) return;
      filters.querySelectorAll('.filter').forEach(function (el) {
        el.classList.remove('is-on');
        el.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('is-on');
      btn.setAttribute('aria-pressed', 'true');
      projectFilter = btn.getAttribute('data-filter') || 'all';
      projectShown = PAGE_SIZE;
      applyProjectView();
    });
  }

  if (loadMore) {
    loadMore.addEventListener('click', function () {
      projectShown += PAGE_SIZE;
      applyProjectView();
    });
  }

  var certGrid = document.getElementById('cert-grid');
  var certDots = document.getElementById('cert-dots');
  var certSlider = document.getElementById('cert-slider');
  if (certGrid && site.certificates && site.certificates.length) {
    certGrid.innerHTML = site.certificates.map(function (item) {
      return (
        '<a class="cert surface" href="' + item.url + '" target="_blank" rel="noopener noreferrer">' +
          '<div class="cert-media">' + pictureTag(item.image, 640, 400) + '</div>' +
          '<div class="cert-body">' +
            '<small>' + item.issuer + '</small>' +
            '<h3 class="display">' + item.name + '</h3>' +
            '<p>' + item.issued + '</p>' +
            '<span>' + item.detail + '</span>' +
            '<em>Show credential <span class="sr-only">for ' + item.name + ' (opens in a new tab)</span></em>' +
          '</div>' +
        '</a>'
      );
    }).join('');

    var certIndex = 0;
    var certTimer = 0;
    var certCount = site.certificates.length;

    function certVisible() {
      if (window.innerWidth <= 860) return 1;
      if (window.innerWidth <= 1100) return 2;
      return 3;
    }

    function certMax() {
      return Math.max(0, certCount - certVisible());
    }

    function renderCertDots() {
      if (!certDots) return;
      var total = certMax() + 1;
      certDots.innerHTML = Array.from({ length: total }, function (_, i) {
        return '<button class="cert-dot' + (i === certIndex ? ' is-on' : '') + '" type="button" aria-label="Show certificate group ' + (i + 1) + ' of ' + total + '"' + (i === certIndex ? ' aria-current="true"' : '') + '></button>';
      }).join('');
    }

    function goCert(next) {
      certIndex = Math.max(0, Math.min(next, certMax()));
      var card = certGrid.querySelector('.cert');
      var gap = 16;
      var width = card ? card.getBoundingClientRect().width : 0;
      certGrid.style.transform = 'translateX(-' + (certIndex * (width + gap)) + 'px)';
      if (certDots) {
        certDots.querySelectorAll('.cert-dot').forEach(function (dot, i) {
          var on = i === certIndex;
          dot.classList.toggle('is-on', on);
          if (on) dot.setAttribute('aria-current', 'true');
          else dot.removeAttribute('aria-current');
        });
      }
    }

    function playCerts() {
      clearInterval(certTimer);
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      certTimer = setInterval(function () {
        goCert(certIndex >= certMax() ? 0 : certIndex + 1);
      }, 4200);
    }

    if (certDots) {
      certDots.addEventListener('click', function (e) {
        var dot = e.target.closest('.cert-dot');
        if (!dot) return;
        goCert(Array.prototype.indexOf.call(certDots.children, dot));
        playCerts();
      });
    }

    if (certSlider) {
      certSlider.addEventListener('mouseenter', function () { clearInterval(certTimer); });
      certSlider.addEventListener('mouseleave', playCerts);
      certSlider.addEventListener('focusin', function () { clearInterval(certTimer); });
      certSlider.addEventListener('focusout', playCerts);
      certSlider.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowRight') { e.preventDefault(); goCert(certIndex + 1); playCerts(); }
        if (e.key === 'ArrowLeft') { e.preventDefault(); goCert(certIndex - 1); playCerts(); }
      });

      var certStartX = 0;
      var certStartY = 0;
      var certDrag = false;
      var certSwiped = false;
      var certFrom = 0;
      var certViewport = certSlider.querySelector('.cert-viewport');

      function certOffset() {
        var card = certGrid.querySelector('.cert');
        var width = card ? card.getBoundingClientRect().width : 0;
        return certIndex * (width + 16);
      }

      function onCertPointerDown(e) {
        if (e.pointerType === 'mouse' && e.button !== 0) return;
        certDrag = true;
        certSwiped = false;
        certStartX = e.clientX;
        certStartY = e.clientY;
        certFrom = certOffset();
        clearInterval(certTimer);
        certGrid.style.transition = 'none';
        if (certViewport.setPointerCapture) certViewport.setPointerCapture(e.pointerId);
      }

      function onCertPointerMove(e) {
        if (!certDrag) return;
        var dx = e.clientX - certStartX;
        var dy = e.clientY - certStartY;
        if (Math.abs(dx) < 8 || Math.abs(dx) < Math.abs(dy)) return;
        certSwiped = true;
        certGrid.style.transform = 'translateX(' + (-certFrom + dx) + 'px)';
      }

      function onCertPointerUp(e) {
        if (!certDrag) return;
        certDrag = false;
        certGrid.style.transition = '';
        var dx = e.clientX - certStartX;
        if (certSwiped && Math.abs(dx) > 46) goCert(dx < 0 ? certIndex + 1 : certIndex - 1);
        else goCert(certIndex);
        playCerts();
      }

      if (certViewport) {
        certViewport.addEventListener('pointerdown', onCertPointerDown);
        certViewport.addEventListener('pointermove', onCertPointerMove);
        certViewport.addEventListener('pointerup', onCertPointerUp);
        certViewport.addEventListener('pointercancel', onCertPointerUp);
        certViewport.addEventListener('click', function (e) {
          if (!certSwiped) return;
          e.preventDefault();
          e.stopPropagation();
          certSwiped = false;
        }, true);
      }
    }

    window.addEventListener('resize', function () {
      certIndex = Math.min(certIndex, certMax());
      renderCertDots();
      goCert(certIndex);
    });

    renderCertDots();
    goCert(0);
    playCerts();
  }

  var reels = document.getElementById('reels');
  if (reels && site.testimonials) {
    reels.innerHTML = site.testimonials.map(function (item) {
      var source = item.src ? '<source src="' + item.src + '" type="video/mp4" />' : '';
      var poster = item.poster ? ' poster="' + item.poster + '"' : '';
      var quote = item.quote ? '<p>“' + item.quote + '”</p>' : '';
      return (
        '<article class="reel">' +
          '<div class="reel-frame" data-reel>' +
            '<video muted loop playsinline preload="none"' + poster + ' title="Video testimonial from ' + item.name + '" aria-label="Video testimonial from ' + item.name + '">' + source + '</video>' +
            '<button class="play-reel" type="button" aria-label="Play testimonial from ' + item.name + ' with sound">▶</button>' +
            '<button class="unmute" type="button" hidden aria-label="Mute testimonial from ' + item.name + '">🔊</button>' +
            '<div class="reel-meta"><strong>' + item.name + '</strong><span>' + item.title + '</span></div>' +
          '</div>' +
          quote +
        '</article>'
      );
    }).join('');

    var activeReel = null;
    var reelWatch = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        var video = entry.target.querySelector('video');
        if (!video) return;
        if (entry.isIntersecting && entry.intersectionRatio > 0.45) {
          if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
          if (video.muted) video.play().catch(function () {});
        } else {
          video.pause();
        }
      });
    }, { threshold: [0.2, 0.45, 0.8] });

    function setSound(frame, on) {
      var video = frame.querySelector('video');
      var playBtn = frame.querySelector('.play-reel');
      var muteBtn = frame.querySelector('.unmute');
      if (!video) return;
      video.muted = !on;
      if (playBtn) playBtn.hidden = on;
      if (muteBtn) muteBtn.hidden = !on;
      if (on) video.play().catch(function () {});
    }

    document.querySelectorAll('[data-reel]').forEach(function (frame) {
      reelWatch.observe(frame);
      var video = frame.querySelector('video');
      var playBtn = frame.querySelector('.play-reel');
      var muteBtn = frame.querySelector('.unmute');
      if (!video) return;

      function startWithSound() {
        if (activeReel && activeReel !== frame) setSound(activeReel, false);
        activeReel = frame;
        setSound(frame, true);
      }

      if (playBtn) playBtn.addEventListener('click', startWithSound);
      video.addEventListener('click', startWithSound);
      if (muteBtn) {
        muteBtn.addEventListener('click', function (e) {
          e.stopPropagation();
          setSound(frame, false);
          if (activeReel === frame) activeReel = null;
        });
      }
    });
  }

  var aboutCover = document.querySelector('[data-about-cover]');
  if (aboutCover) {
    var aboutVideo = aboutCover.querySelector('video');
    var aboutMute = aboutCover.querySelector('.unmute');
    var aboutExpand = aboutCover.querySelector('.about-expand');
    var aboutLightbox = document.getElementById('about-lightbox');
    var aboutFull = document.getElementById('about-walkthrough-full');
    var aboutClose = aboutLightbox ? aboutLightbox.querySelector('.video-lightbox-close') : null;

    function syncMuteUi() {
      if (!aboutMute || !aboutVideo) return;
      aboutMute.textContent = aboutVideo.muted ? '♪' : '🔊';
      aboutMute.setAttribute('aria-label', aboutVideo.muted ? 'Unmute walkthrough' : 'Mute walkthrough');
    }

    function setAboutMute(muted) {
      if (!aboutVideo) return;
      aboutVideo.muted = muted;
      syncMuteUi();
      aboutVideo.play().catch(function () {});
    }

    var lastFocus = null;
    function closeLightbox() {
      if (!aboutLightbox || !aboutFull) return;
      aboutLightbox.hidden = true;
      document.body.style.overflow = '';
      if (aboutVideo) {
        aboutVideo.currentTime = aboutFull.currentTime || aboutVideo.currentTime;
        aboutVideo.play().catch(function () {});
      }
      aboutFull.pause();
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    }

    function openLightbox() {
      if (!aboutLightbox || !aboutFull || !aboutVideo) return;
      lastFocus = document.activeElement;
      aboutFull.src = site.walkthroughFull || aboutVideo.currentSrc;
      aboutFull.currentTime = aboutVideo.currentTime || 0;
      aboutFull.muted = false;
      aboutLightbox.hidden = false;
      document.body.style.overflow = 'hidden';
      aboutVideo.pause();
      aboutFull.play().catch(function () {});
      if (aboutClose) aboutClose.focus();
    }

    if (aboutVideo) {
      aboutVideo.muted = true;
      aboutVideo.setAttribute('playsinline', '');
      if (site.walkthroughPoster) aboutVideo.setAttribute('poster', site.walkthroughPoster);
      function ensureAboutSrc() {
        if (!aboutVideo.getAttribute('src')) {
          aboutVideo.src = site.walkthrough || 'video/walkthrough-v4.mp4';
        }
      }
      function playAbout() {
        if (aboutLightbox && !aboutLightbox.hidden) return;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        ensureAboutSrc();
        aboutVideo.play().catch(function () {});
      }
      aboutVideo.addEventListener('loadeddata', playAbout);
      aboutVideo.addEventListener('canplay', playAbout);
      var aboutWatch = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (aboutLightbox && !aboutLightbox.hidden) return;
          if (entry.isIntersecting) playAbout();
          else aboutVideo.pause();
        });
      }, { threshold: 0.15 });
      aboutWatch.observe(aboutCover);
      playAbout();

      aboutCover.addEventListener('click', function (e) {
        if (e.target.closest('.about-expand')) return;
        setAboutMute(!aboutVideo.muted);
      });

      if (aboutExpand) aboutExpand.addEventListener('click', function (e) {
        e.stopPropagation();
        openLightbox();
      });
      if (aboutClose) aboutClose.addEventListener('click', closeLightbox);
      if (aboutLightbox) {
        aboutLightbox.addEventListener('click', function (e) {
          if (e.target === aboutLightbox) closeLightbox();
        });
      }
      document.addEventListener('keydown', function (e) {
        if (!aboutLightbox || aboutLightbox.hidden) return;
        if (e.key === 'Escape') closeLightbox();
        else trapTab(aboutLightbox, e);
      });
    }
  }

  var resumePath = site.resume || 'resume/noman-ullah-full-stack.pdf';
  var resumeView = document.getElementById('resume-view');
  var resumeLightbox = document.getElementById('resume-lightbox');
  var resumeFrame = document.getElementById('resume-frame');
  var resumeClose = resumeLightbox ? resumeLightbox.querySelector('.resume-lightbox-close') : null;
  var resumeLinks = document.querySelectorAll('#resume-download, #resume-lightbox-download');
  var resumeFocus = null;

  resumeLinks.forEach(function (link) {
    link.setAttribute('href', resumePath);
    link.setAttribute('download', 'noman-ullah-jannat.pdf');
  });

  function closeResume() {
    if (!resumeLightbox) return;
    resumeLightbox.hidden = true;
    document.body.style.overflow = '';
    if (resumeFrame) resumeFrame.removeAttribute('src');
    if (resumeFocus && resumeFocus.focus) resumeFocus.focus();
  }

  function openResume() {
    if (!resumeLightbox || !resumeFrame) return;
    resumeFocus = document.activeElement;
    resumeFrame.src = resumePath + '#view=FitH';
    resumeLightbox.hidden = false;
    document.body.style.overflow = 'hidden';
    if (resumeClose) resumeClose.focus();
  }

  if (resumeView) resumeView.addEventListener('click', openResume);
  if (resumeClose) resumeClose.addEventListener('click', closeResume);
  if (resumeLightbox) {
    resumeLightbox.addEventListener('click', function (e) {
      if (e.target === resumeLightbox) closeResume();
    });
  }
  document.addEventListener('keydown', function (e) {
    if (!resumeLightbox || resumeLightbox.hidden) return;
    if (e.key === 'Escape') closeResume();
    else trapTab(resumeLightbox, e);
  });

  var form = document.getElementById('contact-form');
  var formNext = document.getElementById('form-next');
  if (formNext) {
    formNext.value = window.location.origin + window.location.pathname + '?sent=1#contact';
  }
  if (/[?&]sent=1/.test(window.location.search)) {
    var note = document.getElementById('form-note');
    if (note) {
      note.hidden = false;
      note.classList.add('is-on');
    }
  }

  if (site.whatsapp) {
    var wa = document.getElementById('wa-bubble');
    if (wa) wa.href = site.whatsapp;
  }
})();
