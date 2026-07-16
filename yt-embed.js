/* ============================================================
   Lite YouTube embed — shows the real video thumbnail + play
   button, and swaps in an autoplaying iframe ON CLICK so the
   video plays INSIDE the page (no heavy player until needed).

   Markup:
   <div class="yt" data-yt="VIDEO_ID"></div>
   (optional data-start="seconds")
   ============================================================ */
(function () {
  function buildThumb(el) {
    const id = el.getAttribute('data-yt');
    if (!id || el.dataset.ready) return;
    el.dataset.ready = '1';
    const img = document.createElement('img');
    img.className = 'yt-thumb';
    img.loading = 'lazy';
    img.alt = '';
    // hqdefault exists for every video; cropped to 16:9 by CSS.
    img.src = 'https://i.ytimg.com/vi/' + id + '/hqdefault.jpg';
    const btn = document.createElement('button');
    btn.className = 'yt-play';
    btn.type = 'button';
    btn.setAttribute('aria-label', 'Play video');
    btn.innerHTML = '<svg viewBox="0 0 68 48" width="68" height="48" aria-hidden="true"><path class="yt-play-bg" d="M66.5 7.7c-.8-2.9-3-5.2-5.9-6C55.4.5 34 .5 34 .5S12.6.5 7.4 1.7c-2.9.8-5.1 3.1-5.9 6C.3 12.9.3 24 .3 24s0 11.1 1.2 16.3c.8 2.9 3 5.1 5.9 5.9C12.6 47.5 34 47.5 34 47.5s21.4 0 26.6-1.3c2.9-.8 5.1-3 5.9-5.9C67.7 35.1 67.7 24 67.7 24s0-11.1-1.2-16.3z"/><path d="M27 34V14l18 10-18 10z" fill="#fff"/></svg>';
    el.appendChild(img);
    el.appendChild(btn);
  }

  function play(el) {
    const id = el.getAttribute('data-yt');
    if (!id || el.dataset.playing) return;
    el.dataset.playing = '1';
    const start = el.getAttribute('data-start');
    const params = 'autoplay=1&rel=0&modestbranding=1&playsinline=1' + (start ? '&start=' + start : '');
    const iframe = document.createElement('iframe');
    iframe.src = 'https://www.youtube-nocookie.com/embed/' + id + '?' + params;
    iframe.title = 'YouTube video player';
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    iframe.allowFullscreen = true;
    iframe.frameBorder = '0';
    el.innerHTML = '';
    el.appendChild(iframe);
  }

  function init() {
    const slots = document.querySelectorAll('.yt[data-yt]');
    slots.forEach(buildThumb);
    document.addEventListener('click', function (e) {
      const el = e.target.closest('.yt[data-yt]');
      if (el) { e.preventDefault(); play(el); }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
