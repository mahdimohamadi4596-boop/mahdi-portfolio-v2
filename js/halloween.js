// ==========================================================================
// HALLOWEEN THEME v2 — موقتی
// - تم رنگی + خفاش، عنکبوت، چکه، تار عنکبوت، رعد و برق نرم، جرقه‌ی موس
// - مینی‌بازی «شکار روح»: ۷ روح رو بگیر!
// - بین ۲۰ اکتبر تا ۲ نوامبر ۲۰۲۶ فعاله و بعدش خودش خاموش میشه
// - تست: ?halloween=1 (همیشه روشن)  |  ?halloween=0 (خاموش)
// - حذف کامل: خط <script src="js/halloween.js"> از صفحه‌ها + css/halloween.css + همین فایل
// ==========================================================================
(function () {
  "use strict";

  const START = new Date(2026, 9, 20);            // 20 Oct 2026
  const END = new Date(2026, 10, 2, 23, 59, 59);  // 2 Nov 2026
  const GOAL = 7;                                  // تعداد روح‌ها برای برد
  const STORE_KEY = "hw26-ghosts";

  const qs = location.search;
  const now = new Date();
  let active = now >= START && now <= END;
  if (/[?&]halloween=1/.test(qs)) active = true;
  if (/[?&]halloween=0/.test(qs)) active = false;
  if (!active) return;

  /* ---------- CSS (همزمان با لود صفحه، تا فلش رنگ آبی دیده نشه) ---------- */
  const me = document.currentScript;
  const cssHref = me && me.src
    ? me.src.replace(/js\/halloween\.js.*$/, "css/halloween.css?v=2")
    : "css/halloween.css?v=2";
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = cssHref;
  document.head.appendChild(link);
  document.documentElement.classList.add("halloween");

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const hasHover = window.matchMedia("(hover: hover)").matches;
  const canAnimate = typeof Element.prototype.animate === "function";
  const isMobile = () => window.innerWidth < 768;
  const rand = (a, b) => a + Math.random() * (b - a);
  const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
  const isFa = () => document.documentElement.getAttribute("lang") === "fa";
  const isDark = () => document.documentElement.getAttribute("data-theme") !== "light";

  /* ---------- ذخیره‌ی امتیاز (اگه storage بسته بود، فقط تو همین صفحه میمونه) ---------- */
  let count = 0;
  try { count = parseInt(localStorage.getItem(STORE_KEY) || "0", 10) || 0; } catch (e) { /* ignore */ }
  function saveCount() { try { localStorage.setItem(STORE_KEY, String(count)); } catch (e) { /* ignore */ } }

  /* ---------- SVGها ---------- */
  const BAT_SVG =
    '<svg class="hw-bat" viewBox="0 0 64 32" aria-hidden="true">' +
    '<g class="hw-wing hw-wing-l"><path d="M32 16C26 4 14 2 2 8c6 2 8 6 8 12 4-4 8-4 12 0 2-2 6-2 10 2z"/></g>' +
    '<g class="hw-wing hw-wing-r"><path d="M32 16C38 4 50 2 62 8c-6 2-8 6-8 12-4-4-8-4-12 0-2-2-6-2-10 2z"/></g>' +
    '<ellipse cx="32" cy="18" rx="4" ry="7"/>' +
    '<path d="M29 12l1-6 2 4 2-4 1 6z"/></svg>';

  const SPIDER_SVG =
    '<svg viewBox="0 0 32 32" aria-hidden="true">' +
    '<path fill="none" d="M16 17L5 9M16 18L3 15M16 19L3 24M16 20L7 29M16 17l11-8M16 18l13 3M16 19l13 5M16 20l9 9"/>' +
    '<circle cx="16" cy="21" r="6.5"/><circle cx="16" cy="13.5" r="4"/>' +
    '<circle cx="14.5" cy="13" r="0.9" fill="#ff5a3c" stroke="none"/>' +
    '<circle cx="17.5" cy="13" r="0.9" fill="#ff5a3c" stroke="none"/></svg>';

  const PUMPKIN_SVG =
    '<svg viewBox="0 0 64 64" aria-hidden="true">' +
    '<defs><radialGradient id="hwg" cx="50%" cy="40%" r="65%">' +
    '<stop offset="0" stop-color="#FFB347"/><stop offset="0.6" stop-color="#FF7A18"/><stop offset="1" stop-color="#C2410C"/>' +
    '</radialGradient></defs>' +
    '<path d="M30 14c0-4 2-8 6-10l3 2c-2 2-3 4-3 8z" fill="#4C8B2F"/>' +
    '<ellipse cx="20" cy="38" rx="14" ry="19" fill="url(#hwg)"/>' +
    '<ellipse cx="44" cy="38" rx="14" ry="19" fill="url(#hwg)"/>' +
    '<ellipse cx="32" cy="38" rx="13" ry="21" fill="url(#hwg)"/>' +
    '<path d="M22 19C14 32 14 46 22 58M42 19c8 13 8 27 0 39" stroke="#B93A0A" stroke-width="1.6" fill="none" opacity=".55"/>' +
    '<g class="hw-face" fill="#FFD84D">' +
    '<path d="M17 34l7-8 5 9zM47 34l-7-8-5 9z"/><path d="M32 38l-3 5h6z"/>' +
    '<path d="M15 46c5 3 7 8 11 8l3-5 3 6 3-6 3 5c4 0 6-5 11-8-3 11-10 15-17 15S18 57 15 46z"/></g></svg>';

  const GHOST_SVG =
    '<svg viewBox="0 0 64 72" aria-hidden="true">' +
    '<path fill="#f4eeff" d="M8 34C8 16 18 4 32 4s24 12 24 30v34l-6-5-6 5-6-5-6 5-6-5-6 5-6-5-6 5z"/>' +
    '<ellipse cx="24" cy="30" rx="4.2" ry="6" fill="#2a1238"/><ellipse cx="40" cy="30" rx="4.2" ry="6" fill="#2a1238"/>' +
    '<ellipse cx="32" cy="45" rx="5" ry="6.5" fill="#2a1238"/>' +
    '<ellipse cx="17" cy="40" rx="4" ry="2.4" fill="#ffb3c7" opacity=".7"/><ellipse cx="47" cy="40" rx="4" ry="2.4" fill="#ffb3c7" opacity=".7"/></svg>';

  /* تار عنکبوت گوشه‌ای: ۶ رشته‌ی شعاعی + ۴ کمان شُل */
  function webSVG() {
    const R = 140, threads = 6, rings = [34, 62, 92, 124];
    const pt = (r, a) => [(r * Math.cos(a)).toFixed(1), (r * Math.sin(a)).toFixed(1)];
    let d = "";
    for (let i = 0; i < threads; i++) {
      const a = (Math.PI / 2) * (i / (threads - 1));
      const p = pt(R, a);
      d += "M0 0L" + p[0] + " " + p[1];
    }
    rings.forEach((r) => {
      for (let i = 0; i < threads - 1; i++) {
        const a1 = (Math.PI / 2) * (i / (threads - 1));
        const a2 = (Math.PI / 2) * ((i + 1) / (threads - 1));
        const p1 = pt(r, a1), p2 = pt(r, a2), c = pt(r * 0.8, (a1 + a2) / 2);
        d += "M" + p1[0] + " " + p1[1] + "Q" + c[0] + " " + c[1] + " " + p2[0] + " " + p2[1];
      }
    });
    return '<svg class="hw-web" viewBox="0 0 150 150" aria-hidden="true"><path d="' + d + '"/></svg>';
  }

  /* چکه‌ی لزج: کاشی ۲۰۰×۳۶ که تکرار میشه */
  const DRIPS = [[18, 12, 3], [52, 7, 2.5], [88, 22, 3.4], [128, 10, 2.8], [160, 17, 3.1]]; // [x, طول, شعاع]
  function dripImage() {
    let s = '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="36" viewBox="0 0 200 36">' +
      '<defs><linearGradient id="g" x1="0" x2="1"><stop offset="0" stop-color="#FF7A18"/><stop offset=".55" stop-color="#C26BFF"/><stop offset="1" stop-color="#FF7A18"/></linearGradient></defs>' +
      '<g fill="url(#g)"><rect x="0" y="0" width="200" height="5"/>';
    DRIPS.forEach((d) => {
      s += '<rect x="' + (d[0] - d[2] * 0.6) + '" y="0" width="' + d[2] * 1.2 + '" height="' + (5 + d[1]) + '" rx="' + d[2] * 0.6 + '"/>' +
           '<circle cx="' + d[0] + '" cy="' + (5 + d[1]) + '" r="' + d[2] + '"/>';
    });
    s += "</g></svg>";
    return 'url("data:image/svg+xml,' + encodeURIComponent(s) + '")';
  }

  /* ---------- جرقه‌ها ---------- */
  let sparkCount = 0;
  function burst(x, y, n, opts) {
    if (!canAnimate || reduceMotion) return;
    opts = opts || {};
    const colors = opts.colors || ["#FFB347", "#FF7A18", "#C26BFF", "#FFD84D"];
    const spread = opts.spread || 70;
    for (let i = 0; i < n; i++) {
      if (sparkCount > 70) return;
      const s = document.createElement("span");
      const size = rand(3, opts.big ? 8 : 6);
      const c = pick(colors);
      s.className = "hw-spark";
      s.style.cssText = "left:" + x + "px;top:" + y + "px;width:" + size + "px;height:" + size + "px;background:" + c + ";box-shadow:0 0 8px 2px " + c;
      document.body.appendChild(s);
      sparkCount++;
      const ang = rand(0, Math.PI * 2), dist = rand(spread * 0.4, spread);
      const a = s.animate(
        [
          { transform: "translate(0,0) scale(1)", opacity: 1 },
          { transform: "translate(" + Math.cos(ang) * dist + "px," + (Math.sin(ang) * dist + rand(10, 40)) + "px) scale(0.2)", opacity: 0 }
        ],
        { duration: rand(550, 1000), easing: "cubic-bezier(.2,.7,.3,1)", fill: "forwards" }
      );
      a.onfinish = function () { s.remove(); sparkCount--; };
    }
  }

  function build() {
    if (document.getElementById("hw-layer")) return;
    const mobile = isMobile();
    const layer = document.createElement("div");
    layer.id = "hw-layer";
    layer.setAttribute("aria-hidden", "true");

    /* --- ماه + پارالاکس --- */
    const moon = document.createElement("div");
    moon.className = "hw-moon";
    document.body.appendChild(moon);
    if (!reduceMotion) {
      let tick = false;
      window.addEventListener("scroll", function () {
        if (tick) return;
        tick = true;
        requestAnimationFrame(function () {
          document.documentElement.style.setProperty("--hw-py", (-window.scrollY * 0.07).toFixed(1) + "px");
          tick = false;
        });
      }, { passive: true });
    }

    /* --- مه (دو لایه) --- */
    ["", "b"].forEach(function (cls) {
      const f = document.createElement("div");
      f.className = "hw-fog " + cls;
      layer.appendChild(f);
    });

    /* --- جرقه‌های رو به بالا + خفاش‌ها + چشم‌ها --- */
    if (!reduceMotion) {
      const embers = mobile ? 9 : 18;
      for (let i = 0; i < embers; i++) {
        const e = document.createElement("span");
        e.className = "hw-ember";
        e.style.left = rand(2, 98).toFixed(1) + "%";
        e.style.setProperty("--s", rand(2.5, 5).toFixed(1) + "px");
        e.style.setProperty("--d", rand(11, 22).toFixed(1) + "s");
        e.style.setProperty("--delay", (-rand(0, 20)).toFixed(1) + "s");
        e.style.setProperty("--x", rand(-60, 60).toFixed(0) + "px");
        layer.appendChild(e);
      }

      const bats = mobile ? 2 : 5;
      for (let i = 0; i < bats; i++) {
        const w = document.createElement("div");
        w.className = "hw-bat-wrap" + (i % 2 ? " rev" : "");
        w.style.setProperty("--top", rand(12, 62).toFixed(0) + "vh");
        w.style.setProperty("--w", rand(24, 46).toFixed(0) + "px");
        w.style.setProperty("--dur", rand(20, 36).toFixed(0) + "s");
        w.style.setProperty("--delay", (-rand(0, 30)).toFixed(0) + "s");
        w.innerHTML = BAT_SVG;
        layer.appendChild(w);
      }

      const eyeSpots = mobile
        ? [{ left: "3%", top: "62vh" }]
        : [{ left: "2.5%", top: "58vh" }, { right: "3%", top: "72vh" }, { left: "46%", top: "88vh" }];
      eyeSpots.forEach(function (pos, i) {
        const e = document.createElement("div");
        e.className = "hw-eyes";
        Object.keys(pos).forEach(function (k) { e.style[k] = pos[k]; });
        e.style.setProperty("--d", rand(14, 22).toFixed(0) + "s");
        e.style.setProperty("--delay", (-rand(0, 14) - i).toFixed(0) + "s");
        e.innerHTML = "<i></i><i></i>";
        layer.appendChild(e);
      });
    }

    /* --- عنکبوت --- */
    const spider = document.createElement("div");
    spider.className = "hw-spider";
    spider.innerHTML = '<div class="hw-thread"></div>' + SPIDER_SVG;
    layer.appendChild(spider);

    document.body.appendChild(layer);

    /* --- تار عنکبوت + چکه + قطره‌های افتان (زیر navbar) --- */
    document.body.insertAdjacentHTML("beforeend", webSVG());
    const drip = document.createElement("div");
    drip.className = "hw-drip";
    drip.setAttribute("aria-hidden", "true");
    drip.style.backgroundImage = dripImage();
    document.body.appendChild(drip);

    if (!reduceMotion) {
      const tileW = mobile ? 150 : 200, k = tileW / 200;
      const tiles = Math.ceil(window.innerWidth / tileW);
      const drops = mobile ? 3 : 5;
      for (let i = 0; i < drops; i++) {
        const t = Math.floor(rand(0, tiles)), d = pick(DRIPS);
        const el = document.createElement("span");
        el.className = "hw-dropl";
        el.setAttribute("aria-hidden", "true");
        el.style.left = (t * tileW + d[0] * k - 3.5).toFixed(1) + "px";
        el.style.setProperty("--d", rand(5, 9).toFixed(1) + "s");
        el.style.setProperty("--delay", (-rand(0, 8)).toFixed(1) + "s");
        document.body.appendChild(el);
      }
    }

    /* --- رعد و برق نرم: یک درخشش آروم هر ۱۶ تا ۳۴ ثانیه --- */
    if (canAnimate && !reduceMotion) {
      const flash = document.createElement("div");
      flash.className = "hw-flash";
      flash.setAttribute("aria-hidden", "true");
      document.body.appendChild(flash);
      (function nextFlash(first) {
        setTimeout(function () {
          if (!document.hidden && isDark()) {
            flash.animate(
              [{ opacity: 0 }, { opacity: 1, offset: 0.1 }, { opacity: 0 }],
              { duration: 1700, easing: "ease-out" }
            );
          }
          nextFlash(false);
        }, first ? 7000 : rand(16000, 34000));
      })(true);
    }

    /* --- نور دنبال موس + دنباله‌ی جرقه (فقط دسکتاپ) --- */
    if (hasHover && canAnimate && !reduceMotion) {
      const glow = document.createElement("div");
      glow.className = "hw-cursor";
      glow.setAttribute("aria-hidden", "true");
      document.body.appendChild(glow);
      let tx = 0, ty = 0, cx = 0, cy = 0, lastSpark = 0, running = false;
      function loop() {
        cx += (tx - cx) * 0.16;
        cy += (ty - cy) * 0.16;
        glow.style.transform = "translate3d(" + cx.toFixed(1) + "px," + cy.toFixed(1) + "px,0)";
        if (Math.abs(tx - cx) > 0.5 || Math.abs(ty - cy) > 0.5) requestAnimationFrame(loop);
        else running = false;
      }
      document.addEventListener("pointermove", function (e) {
        if (e.pointerType && e.pointerType !== "mouse") return;
        tx = e.clientX; ty = e.clientY;
        glow.classList.add("on");
        if (!running) { running = true; requestAnimationFrame(loop); }
        const t = performance.now();
        if (t - lastSpark > 45) {
          lastSpark = t;
          burst(tx, ty, 1, { spread: 28 });
        }
      });
      document.documentElement.addEventListener("mouseleave", function () { glow.classList.remove("on"); });
    }

    /* --- جرقه با هر کلیک/تاچ --- */
    document.addEventListener("pointerdown", function (e) {
      if (e.target.closest && e.target.closest(".hw-ghost, .hw-pumpkin")) return;
      burst(e.clientX, e.clientY, 7, { spread: 60 });
    });

    /* --- کدو، شمارنده، حباب --- */
    const pumpkin = document.createElement("button");
    pumpkin.className = "hw-pumpkin";
    pumpkin.type = "button";
    pumpkin.setAttribute("aria-label", "Happy Halloween");
    pumpkin.innerHTML = PUMPKIN_SVG;
    const badge = document.createElement("div");
    badge.className = "hw-badge";
    badge.setAttribute("aria-hidden", "true");
    const bubble = document.createElement("div");
    bubble.className = "hw-bubble";
    document.body.appendChild(pumpkin);
    document.body.appendChild(badge);
    document.body.appendChild(bubble);

    function renderBadge(pop) {
      const done = count >= GOAL;
      badge.textContent = "👻 " + Math.min(count, GOAL) + "/" + GOAL + (done ? " ✓" : "");
      badge.classList.toggle("done", done);
      if (pop) {
        badge.classList.add("pop");
        setTimeout(function () { badge.classList.remove("pop"); }, 260);
      }
    }
    renderBadge(false);

    let hideTimer;
    function say(text, ms) {
      bubble.textContent = text;
      bubble.classList.add("show");
      clearTimeout(hideTimer);
      hideTimer = setTimeout(function () { bubble.classList.remove("show"); }, ms || 2200);
    }

    pumpkin.addEventListener("click", function () {
      if (count >= GOAL) say(isFa() ? "تو شکارچی روح‌ها هستی! 👑" : "Ghost Hunter! 👑 Happy Halloween", 2600);
      else say(isFa() ? "بوووو! 🎃 روح‌ها رو بگیر!" : "Boo! 🎃 Catch the ghosts!", 2600);
      if (reduceMotion || !canAnimate) return;
      const r = pumpkin.getBoundingClientRect();
      for (let i = 0; i < 7; i++) {
        const b = document.createElement("div");
        b.className = "hw-burst";
        b.innerHTML = BAT_SVG;
        b.style.left = r.left + r.width / 2 - 14 + "px";
        b.style.top = r.top + 4 + "px";
        document.body.appendChild(b);
        const anim = b.animate(
          [
            { transform: "translate(0,0) scale(0.6)", opacity: 1 },
            { transform: "translate(" + rand(-40, 220) + "px," + -rand(120, 360) + "px) scale(1.1)", opacity: 0 }
          ],
          { duration: rand(1100, 1800), easing: "cubic-bezier(.2,.7,.3,1)", fill: "forwards" }
        );
        anim.onfinish = function () { b.remove(); };
      }
    });

    /* --- روح‌ها --- */
    function catchGhost(g) {
      const r = g.getBoundingClientRect();
      burst(r.left + r.width / 2, r.top + r.height / 2, 16, { spread: 90, big: true, colors: ["#f4eeff", "#C26BFF", "#FFB347", "#ffffff"] });
      g.remove();
      count++;
      saveCount();
      renderBadge(true);
      if (count === GOAL) celebrate();
      else say(pick(isFa() ? ["گرفتمش! 👻", "ووووش! 💨", "یکی دیگه! 👻"] : ["Got one! 👻", "Whoooosh! 💨", "Spooky! 👻"]), 1500);
    }

    function spawnGhost() {
      if (document.hidden) return;
      const max = isMobile() ? 1 : 2;
      if (layer.querySelectorAll(".hw-ghost").length >= max) return;
      const size = Math.round(rand(50, 68));
      const ltr = Math.random() < 0.5;
      const vw = window.innerWidth, vh = window.innerHeight;
      const g = document.createElement("button");
      g.type = "button";
      g.className = "hw-ghost" + (ltr ? "" : " flip");
      g.setAttribute("aria-hidden", "true");
      g.tabIndex = -1;
      g.style.setProperty("--w", size + "px");
      g.style.top = Math.round(rand(vh * 0.16, vh * 0.68)) + "px";
      g.innerHTML = '<span class="hw-ghost-in">' + GHOST_SVG + "</span>";
      layer.appendChild(g);
      const from = ltr ? -size - 10 : vw + 10, to = ltr ? vw + 10 : -size - 10;
      const a = g.animate(
        [{ transform: "translateX(" + from + "px)" }, { transform: "translateX(" + to + "px)" }],
        { duration: rand(13000, 21000) * (vw < 768 ? 0.8 : 1), easing: "linear" }
      );
      a.onfinish = function () { g.remove(); };
      g.addEventListener("click", function (e) { e.stopPropagation(); catchGhost(g); });
    }

    if (canAnimate && !reduceMotion) {
      (function loopGhost(first) {
        setTimeout(function () { spawnGhost(); loopGhost(false); }, first ? 3500 : rand(5500, 10500));
      })(true);
    }

    /* --- جشن برد --- */
    function celebrate() {
      const win = document.createElement("div");
      win.className = "hw-win";
      win.innerHTML = isFa()
        ? "<b>👑 شکارچی روح‌ها شدی!</b><span>هر ۷ روح رو گرفتی — هالووین مبارک 🎃</span>"
        : "<b>👑 Ghost Hunter!</b><span>You caught all 7 ghosts — Happy Halloween 🎃</span>";
      document.body.appendChild(win);
      requestAnimationFrame(function () { win.classList.add("show"); });
      setTimeout(function () { win.classList.remove("show"); setTimeout(function () { win.remove(); }, 500); }, 3600);

      if (reduceMotion || !canAnimate) return;
      const vw = window.innerWidth, vh = window.innerHeight;
      const n = isMobile() ? 18 : 30;
      for (let i = 0; i < n; i++) {
        const el = document.createElement("span");
        el.className = "hw-rain";
        el.textContent = pick(["🎃", "🎃", "🦇", "👻", "🕸️", "🍬"]);
        el.style.left = rand(0, vw - 30) + "px";
        el.style.fontSize = rand(22, 40).toFixed(0) + "px";
        document.body.appendChild(el);
        const an = el.animate(
          [
            { transform: "translateY(0) rotate(0deg)", opacity: 1 },
            { transform: "translateY(" + (vh + 100) + "px) rotate(" + rand(-360, 360).toFixed(0) + "deg)", opacity: 1 }
          ],
          { duration: rand(2200, 4200), delay: rand(0, 900), easing: "cubic-bezier(.4,.1,.7,.9)", fill: "backwards" }
        );
        an.onfinish = function () { el.remove(); };
      }
      burst(vw / 2, vh * 0.38, 30, { spread: 220, big: true });
    }

    /* --- موقعیت عنکبوت/چکه/تار: دقیقاً زیر navbar --- */
    function placeUnderNav() {
      const nav = document.querySelector(".navbar");
      const h = nav ? nav.offsetHeight : 68;
      document.documentElement.style.setProperty("--hw-nav", h + "px");
    }
    placeUnderNav();
    window.addEventListener("resize", placeUnderNav);
    setTimeout(placeUnderNav, 600); // بعد از رندر navbar توسط main.js
  }

  if (document.readyState === "complete") build();
  else window.addEventListener("load", build);
})();
