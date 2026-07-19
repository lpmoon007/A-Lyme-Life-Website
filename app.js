/* A Lyme Life — interactions (vanilla) */
/* Mark that JS is live so the .reveal hidden state can apply; if this script
   never ran, content stays visible (no html.js-anim class = no opacity:0). */
document.documentElement.classList.add('js-anim');
(function () {
  // ---- Header shadow on scroll ----
  const header = document.getElementById('header');
  const onScroll = () => {
    if (window.scrollY > 24) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ---- Mobile menu ----
  const toggle = document.getElementById('menuToggle');
  const links = document.getElementById('navLinks');
  if (toggle) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
    links.querySelectorAll('a').forEach((a) =>
      a.addEventListener('click', () => links.classList.remove('open'))
    );
  }

  // ---- FAQ accordion ----
  document.querySelectorAll('.faq-q').forEach((q) => {
    q.addEventListener('click', () => {
      const item = q.closest('.faq-item');
      const ans = item.querySelector('.faq-a');
      const open = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach((other) => {
        other.classList.remove('open');
        other.querySelector('.faq-a').style.maxHeight = null;
      });
      if (!open) {
        item.classList.add('open');
        ans.style.maxHeight = ans.scrollHeight + 'px';
      }
    });
  });

  // ---- Form validation + success ----
  const form = document.getElementById('consultForm');
  if (form) {
    const setInvalid = (input, bad) => {
      const row = input.closest('.form-row');
      if (row) row.classList.toggle('invalid', bad);
    };
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let ok = true;
      const email = form.querySelector('#email');
      const stage = form.querySelector('#stage');
      const fname = form.querySelector('#fname');
      const lname = form.querySelector('#lname');
      [fname, lname].forEach((f) => {
        const bad = !f.value.trim();
        if (bad) ok = false;
      });
      const emailBad = !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());
      setInvalid(email, emailBad);
      if (emailBad) ok = false;
      const stageBad = !stage.value;
      setInvalid(stage, stageBad);
      if (stageBad) ok = false;
      if (!ok) return;

      // ---- Send to the form backend (Formspree etc.) without leaving the page ----
      const action = form.getAttribute('action') || '';
      const submitBtn = form.querySelector('button[type="submit"]');
      const showSuccess = () => {
        form.classList.add('sent');
        document.getElementById('formSuccess').classList.add('show');
      };

      // If the endpoint hasn't been configured yet, just show success (demo mode)
      // so the page is testable. Once YOUR_FORM_ID is replaced, it really sends.
      if (action.indexOf('YOUR_FORM_ID') !== -1 || !action) {
        showSuccess();
        return;
      }

      if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = 'Sending…'; }
      fetch(action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      })
        .then((res) => {
          if (res.ok) {
            showSuccess();
          } else {
            if (submitBtn) { submitBtn.disabled = false; submitBtn.innerHTML = 'Request My Free Consultation <span class="arrow">→</span>'; }
            res.json().then((data) => {
              var msg = (data && data.errors && data.errors.length)
                ? data.errors.map(function (er) { return er.message; }).join(' ')
                : ('Form service returned status ' + res.status + '.');
              alert("Couldn't send your message: " + msg + "\n\nYou can also email Christina directly at christina@alymelife.com.");
            }).catch(function () {
              alert("Couldn't send your message (status " + res.status + "). Please try again, or email Christina directly at christina@alymelife.com.");
            });
          }
        })
        .catch(() => {
          if (submitBtn) { submitBtn.disabled = false; submitBtn.innerHTML = 'Request My Free Consultation <span class="arrow">→</span>'; }
          alert("Sorry — something went wrong sending your message. Please check your connection and try again.");
        });
    });
    // clear error as user types
    form.querySelectorAll('input, select').forEach((el) => {
      el.addEventListener('input', () => setInvalid(el, false));
    });
  }

  // ---- Reveal on scroll ----
  const reveals = document.querySelectorAll('.reveal');
  // Hard guarantee: after a short window, force the visible end-state with no
  // transition dependency. In runtimes where IntersectionObserver and CSS
  // transitions never tick, this ensures content is NEVER stuck invisible.
  setTimeout(() => document.documentElement.classList.add('reveal-off'), 1600);

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add('in');
            io.unobserve(en.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    document.documentElement.classList.add('reveal-off');
  }

  // ---- Mobile sticky "Book a free call" bar ----
  if (!document.querySelector('.mobile-cta-bar')) {
    var hasContact = !!document.getElementById('contact');
    var ctaHref = hasContact ? '#contact' : 'index.html#contact';
    var bar = document.createElement('div');
    bar.className = 'mobile-cta-bar';
    bar.innerHTML = '<a href="' + ctaHref + '"><span>Free, no-pressure call with someone who\u2019s been there</span><strong>Book&nbsp;Now&nbsp;\u2192</strong></a>';
    document.body.appendChild(bar);
  }

  // ---- Newsletter popup: exit-intent (desktop) + scroll-depth (mobile), once per visitor ----
  (function () {
    var seen = false, sub = false;
    try { seen = localStorage.getItem('nlPopupSeen') === '1'; sub = localStorage.getItem('nlSub') === '1'; } catch (e) {}
    if (seen || sub) return;
    var pop = document.createElement('div');
    pop.className = 'nl-pop';
    pop.setAttribute('aria-hidden', 'true');
    pop.innerHTML = ''
      + '<div class="nl-pop-card" role="dialog" aria-modal="true" aria-labelledby="nlPopTitle">'
      +   '<button class="nl-pop-close" type="button" aria-label="Close">\u00d7</button>'
      +   '<div class="nl-pop-mark">\uD83D\uDC9B</div>'
      +   '<h3 id="nlPopTitle">Get Christina\u2019s Lyme guidance in your inbox</h3>'
      +   '<p>Honest updates from our family\u2019s Lyme journey \u2014 new guides and the hard-won lessons behind them. No spam, unsubscribe anytime.</p>'
      +   '<form class="c-sub-form nl-pop-form" action="https://formspree.io/f/mkoajneb" method="POST">'
      +     '<input type="text" name="_gotcha" tabindex="-1" autocomplete="off" aria-hidden="true" style="position:absolute;left:-9999px;opacity:0;height:0;width:0;">'
      +     '<input type="hidden" name="_subject" value="New newsletter subscriber (popup)">'
      +     '<input type="email" name="email" required placeholder="you@email.com" aria-label="Your email">'
      +     '<button class="btn btn-primary" type="submit">Subscribe</button>'
      +   '</form>'
      +   '<button class="nl-pop-dismiss" type="button">No thanks</button>'
      + '</div>';
    document.body.appendChild(pop);

    var shown = false, armed = false;
    var cleanup = function () {
      document.removeEventListener('mouseout', onExit);
      window.removeEventListener('scroll', onScrollDepth);
    };
    var open = function () {
      if (shown) return; shown = true;
      pop.classList.add('open'); pop.setAttribute('aria-hidden', 'false');
      try { localStorage.setItem('nlPopupSeen', '1'); } catch (e) {}
      cleanup();
    };
    var close = function () { pop.classList.remove('open'); pop.setAttribute('aria-hidden', 'true'); };
    pop.querySelector('.nl-pop-close').addEventListener('click', close);
    pop.querySelector('.nl-pop-dismiss').addEventListener('click', close);
    pop.addEventListener('click', function (e) { if (e.target === pop) close(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && shown) close(); });
    pop.querySelector('form').addEventListener('submit', function () { try { localStorage.setItem('nlSub', '1'); } catch (e) {} });

    var onExit = function (e) { if (armed && e.clientY <= 0) open(); };
    var onScrollDepth = function () {
      if (!armed) return;
      var reached = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight;
      if (reached >= 0.55) open();
    };
    setTimeout(function () { armed = true; }, 6000);
    document.addEventListener('mouseout', onExit);
    window.addEventListener('scroll', onScrollDepth, { passive: true });
  })();

  // ---- Chronicles subscribe forms: AJAX so the reader isn't bounced off-site ----
  document.querySelectorAll('form.c-sub-form').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var data = new FormData(form);
      var done = function () {
        var ok = document.createElement('p');
        ok.className = 'c-sub-ok';
        ok.textContent = 'Thank you — you\u2019re on the list. 💛';
        form.parentNode.replaceChild(ok, form);
      };
      fetch(form.action, { method: 'POST', body: data, headers: { 'Accept': 'application/json' } })
        .then(done).catch(done);
    });
  });
})();


/* ---- Social share (delegated; progressive enhancement) ---- */
(function () {
  document.addEventListener('click', function (e) {
    var copy = e.target.closest ? e.target.closest('.share-copy') : null;
    if (copy) {
      e.preventDefault();
      var url = copy.getAttribute('data-url');
      var lbl = copy.querySelector('.lbl');
      var setTxt = function (t) { if (lbl) lbl.textContent = t; };
      var flash = function () { copy.classList.add('share-copied'); setTxt('Copied!'); setTimeout(function () { copy.classList.remove('share-copied'); setTxt('Copy link'); }, 1800); };
      if (navigator.clipboard && navigator.clipboard.writeText) { navigator.clipboard.writeText(url).then(flash, flash); }
      else { try { var t = document.createElement('textarea'); t.value = url; document.body.appendChild(t); t.select(); document.execCommand('copy'); document.body.removeChild(t); flash(); } catch (err) {} }
      return;
    }
    var nat = e.target.closest ? e.target.closest('.share-native') : null;
    if (nat) {
      e.preventDefault();
      if (navigator.share) { navigator.share({ title: nat.getAttribute('data-title'), url: nat.getAttribute('data-url') }).catch(function () {}); }
      return;
    }
    var pop = e.target.closest ? e.target.closest('[data-share-pop]') : null;
    if (pop) { e.preventDefault(); window.open(pop.href, 'share', 'width=600,height=540,noopener,noreferrer'); return; }
  });
  if (navigator.share) {
    document.querySelectorAll('.share-native').forEach(function (b) { b.style.display = 'inline-flex'; });
  }
})();

/* ============================================================
   Analytics events (GA4 / gtag) — measures the funnel so we can
   optimize it. Fires nothing if gtag is unavailable (e.g. blocked).
   Events: cta_book_call, newsletter_signup, assessment_submit,
   outbound_partner_click, outbound_click, share, scroll_depth.
   Mark cta_book_call / newsletter_signup / assessment_submit as
   conversions in GA4 → Admin → Events.
   ============================================================ */
(function () {
  function track(name, params) {
    if (typeof window.gtag === 'function') window.gtag('event', name, params || {});
  }
  var path = location.pathname + location.search;

  // ---- Clicks: CTAs, partner/outbound links, share ----
  document.addEventListener('click', function (e) {
    var a = e.target.closest ? e.target.closest('a, button.share-btn') : null;
    if (!a) return;
    var href = a.getAttribute && a.getAttribute('href') || '';
    var text = (a.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 80);

    // Primary conversion CTA — every "Book a Free Call" / "Talk with Christina" points at #contact
    if (href.indexOf('#contact') !== -1) {
      track('cta_book_call', { link_text: text, page_path: path });
      return;
    }
    // Share buttons
    if (a.classList && a.classList.contains('share-btn')) {
      track('share', { method: text || 'share', page_path: path });
      return;
    }
    // Outbound links
    if (/^https?:\/\//i.test(href) && href.indexOf(location.host) === -1) {
      var isPartner = /thelymespecialist\.com|lymeimmunotherapy\.com/i.test(href);
      track(isPartner ? 'outbound_partner_click' : 'outbound_click', { link_url: href, link_text: text, page_path: path });
    }
  }, true);

  // ---- Form submits: newsletter vs. self-assessment ----
  document.addEventListener('submit', function (e) {
    var form = e.target;
    if (!form || form.tagName !== 'FORM') return;
    var action = form.getAttribute('action') || '';
    if (action.indexOf('mkoajneb') !== -1) track('newsletter_signup', { page_path: path });
    else if (action.indexOf('xjgnbyye') !== -1) track('assessment_submit', { page_path: path });
  }, true);

  // ---- Scroll depth (25/50/75/90%), once each ----
  var marks = [25, 50, 75, 90], hit = {}, ticking = false;
  function checkDepth() {
    ticking = false;
    var doc = document.documentElement, body = document.body;
    var scrollable = Math.max(doc.scrollHeight, body ? body.scrollHeight : 0) - window.innerHeight;
    if (scrollable <= 0) return;
    var pct = Math.round((window.scrollY / scrollable) * 100);
    for (var i = 0; i < marks.length; i++) {
      var m = marks[i];
      if (pct >= m && !hit[m]) { hit[m] = 1; track('scroll_depth', { percent: m, page_path: path }); }
    }
  }
  window.addEventListener('scroll', function () {
    if (!ticking) { ticking = true; (window.requestAnimationFrame || setTimeout)(checkDepth); }
  }, { passive: true });
})();

/* ---- Lead-magnet opt-in: AJAX submit, reveal instant download, fire GA lead event ---- */
(function () {
  var form = document.getElementById('guideForm');
  if (!form) return;
  var success = document.getElementById('guideSuccess');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var data = new FormData(form);
    var reveal = function () {
      if (typeof window.gtag === 'function') {
        window.gtag('event', 'generate_lead', {
          lead_source: 'lead_magnet',
          content_id: 'lyme-treatment-questions',
          page_path: location.pathname
        });
      }
      if (success) { form.hidden = true; success.hidden = false; }
      var dl = document.getElementById('guideDownload');
      if (dl) { try { dl.focus(); } catch (err) {} }
    };
    fetch(form.action, { method: 'POST', body: data, headers: { 'Accept': 'application/json' } })
      .then(reveal).catch(reveal);
  });
})();
