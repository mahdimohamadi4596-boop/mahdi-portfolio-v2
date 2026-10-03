// ==========================================================================
// جزئیات پروژه: یک صفحه مشترک — project.html?id=lumi
// بخش‌هایی که دیتا ندارن اصلاً ساخته نمیشن
// ==========================================================================
const PREVIEW_LINES = 8; // تعداد خط‌های اولیه Code Showcase قبل از More

function renderProjectDetails() {
  const root = document.getElementById("project-root");
  if (!root) return;

  const lang = document.documentElement.getAttribute("lang") || "en";
  const ui = projectsUI[lang];
  const id = new URLSearchParams(location.search).get("id");
  const p = projects.find(x => x.id === id);

  if (!p) {
    root.innerHTML = `<section class="pd-hero section"><div class="container">
      <p class="pd-text">${ui.notFound}</p>
      <a class="btn btn-outline" href="projects.html">${ui.back}</a></div></section>`;
    return;
  }

  document.title = `${p.name} | Mahdi`;

  const list = o => (o && (o[lang] || o.en)) || [];
  const features = list(p.features);
  const steps = list(p.architecture);
  const gallery = p.gallery || [];
  const overview = pText(p.overview, lang);
  const problem = pText(p.problem, lang);
  const solution = pText(p.solution, lang);

  const section = (title, body) =>
    `<section class="pd-section"><div class="container"><h2 class="pd-h2">${title}</h2>${body}</div></section>`;

  const actions =
    (p.demo ? `<a class="btn btn-primary" href="${esc(p.demo)}" target="_blank" rel="noopener">${ui.demo}</a>` : "") +
    (p.github ? `<a class="btn btn-outline" href="${esc(p.github)}" target="_blank" rel="noopener">${ui.github}</a>` : "");

  const hero = `
    <section class="pd-hero section"><div class="container">
      <a class="pd-back" href="projects.html">${ui.back}</a>
      <h1 class="pd-title">${esc(p.name)}</h1>
      <p class="pd-caption">${esc(pText(p.description, lang))}</p>
      ${actions ? `<div class="pd-actions">${actions}</div>` : ""}
      ${p.cover ? `<div class="pd-cover"><img src="${esc(p.cover)}" alt="${esc(p.name)}" onerror="this.closest('.pd-cover').remove()"></div>` : ""}
    </div></section>`;

  const overviewHtml = overview ? section(ui.overview, `<p class="pd-text">${esc(overview)}</p>`) : "";

  const psHtml = (problem || solution) ? `
    <section class="pd-section"><div class="container"><div class="pd-two">
      ${problem ? `<div class="path-card"><h3>${ui.problem}</h3><p>${esc(problem)}</p></div>` : ""}
      ${solution ? `<div class="path-card"><h3>${ui.solution}</h3><p>${esc(solution)}</p></div>` : ""}
    </div></div></section>` : "";

  const featuresHtml = features.length ? section(ui.features,
    `<div class="pd-features">${features.map(f =>
      `<div class="path-card pd-feature"><span class="pd-check">✓</span><p>${esc(f)}</p></div>`).join("")}</div>`) : "";

  const stackHtml = (p.tech && p.tech.length) ? section(ui.stack,
    `<div class="project-tech">${p.tech.map(t => `<span class="tech-tag">${esc(t)}</span>`).join("")}</div>`) : "";

  const archHtml = steps.length ? section(ui.how,
    `<div class="pd-arch">${steps.map((s, i) =>
      `<div class="path-card"><span class="path-number">${String(i + 1).padStart(2, "0")}</span><p>${esc(s)}</p></div>`).join("")}</div>`) : "";

  const galleryHtml = gallery.length ? section(ui.gallery, `
    <div class="carousel">
      <div class="carousel-track" id="g-track">
        ${gallery.map((src, i) => `<div class="carousel-slide"><img src="${esc(src)}" alt="${esc(p.name)} ${i + 1}" loading="lazy" draggable="false" onerror="this.style.visibility='hidden'"></div>`).join("")}
      </div>
      ${gallery.length > 1 ? `
        <span class="g-count" id="g-count"></span>
        <button class="g-btn g-prev" id="g-prev" aria-label="Previous">‹</button>
        <button class="g-btn g-next" id="g-next" aria-label="Next">›</button>
        <div class="g-dots">${gallery.map(() => `<button class="g-dot" aria-label="Slide"></button>`).join("")}</div>` : ""}
    </div>`) : "";

  const hasCode = p.code && p.code.snippet;
  const codeHtml = hasCode ? section(ui.code, `
    <div class="code-box">
            <div class="code-head"><span>${esc(p.code.title || p.code.language || "code")}</span>
        <button class="code-copy" id="code-copy" title="${ui.copy}" aria-label="${ui.copy}">
          <svg class="icon-copy" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
          <svg class="icon-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
        </button>
      </div>
      <pre class="code-pre"><code id="code-el" class="language-${esc(p.code.language || "plaintext")}"></code></pre>
      ${p.code.snippet.trim().split("\n").length > PREVIEW_LINES ? `<button class="btn btn-outline code-more" id="code-more">${ui.more}</button>` : ""}
    </div>`) : "";

    root.innerHTML = `<div class="pd-glass container">${hero + overviewHtml + psHtml + featuresHtml + stackHtml + archHtml + galleryHtml + codeHtml}</div>`;

  initCarousel();
  initLightbox(gallery, p.name);
  if (hasCode) initCode(p, ui);
}

// Carousel شبیه اینستاگرام: Swipe با scroll-snap + دکمه‌ها + نقطه‌ها
function initCarousel() {
  const track = document.getElementById("g-track");
  if (!track) return;

  const total = track.children.length;
  const dots = [...document.querySelectorAll(".g-dot")];
  const counter = document.getElementById("g-count");
  const prev = document.getElementById("g-prev");
  const next = document.getElementById("g-next");

  const index = () => Math.round(track.scrollLeft / track.clientWidth);
  const go = i => track.scrollTo({ left: i * track.clientWidth, behavior: "smooth" });
  const update = () => {
    const i = index();
    dots.forEach((d, n) => d.classList.toggle("active", n === i));
    if (counter) counter.textContent = `${i + 1} / ${total}`;
  };

  track.addEventListener("scroll", update, { passive: true });
  dots.forEach((d, n) => (d.onclick = () => go(n)));
  if (prev) prev.onclick = () => go(Math.max(0, index() - 1));
  if (next) next.onclick = () => go(Math.min(total - 1, index() + 1));
  update();
}

// Lightbox گالری: نمایش تمام‌صفحه عکس با Swipe، کیبورد و دکمه‌ها
const lb = { images: [], name: "", index: 0, box: null, startX: 0 };

function buildLightbox() {
  if (lb.box) return;

  const box = document.createElement("div");
  box.className = "lightbox";
  box.setAttribute("role", "dialog");
  box.setAttribute("aria-modal", "true");
  box.innerHTML = `
    <div class="lb-backdrop"></div>
    <div class="lb-top">
      <span class="lb-count"></span>
      <button class="lb-close" aria-label="Close">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      </button>
    </div>
    <button class="lb-nav lb-prev" aria-label="Previous">‹</button>
    <div class="lb-stage"><img class="lb-img" alt="" draggable="false"></div>
    <button class="lb-nav lb-next" aria-label="Next">›</button>
    <div class="lb-caption"></div>`;
  document.body.appendChild(box);
  lb.box = box;

  box.querySelector(".lb-close").onclick = lbClose;
  box.querySelector(".lb-backdrop").onclick = lbClose;
  box.querySelector(".lb-prev").onclick = () => lbShow(lb.index - 1);
  box.querySelector(".lb-next").onclick = () => lbShow(lb.index + 1);

  // کلیک روی فضای خالی دور عکس = بستن
  box.querySelector(".lb-stage").onclick = e => { if (e.target.tagName !== "IMG") lbClose(); };

  // Swipe در موبایل
  const stage = box.querySelector(".lb-stage");
  stage.addEventListener("touchstart", e => { lb.startX = e.touches[0].clientX; }, { passive: true });
  stage.addEventListener("touchend", e => {
    const dx = e.changedTouches[0].clientX - lb.startX;
    if (Math.abs(dx) > 50 && lb.images.length > 1) lbShow(lb.index + (dx < 0 ? 1 : -1));
  }, { passive: true });

  // کیبورد: Esc و فلش‌ها
  document.addEventListener("keydown", e => {
    if (!box.classList.contains("open")) return;
    if (e.key === "Escape") lbClose();
    if (lb.images.length > 1 && e.key === "ArrowRight") lbShow(lb.index + 1);
    if (lb.images.length > 1 && e.key === "ArrowLeft") lbShow(lb.index - 1);
  });
}

function lbShow(i) {
  const n = lb.images.length;
  lb.index = (i + n) % n;

  const img = lb.box.querySelector(".lb-img");
  img.classList.add("loading");
  img.onload = () => img.classList.remove("loading");
  img.src = lb.images[lb.index];
  if (img.complete) img.classList.remove("loading");
  img.alt = `${lb.name} ${lb.index + 1}`;

  lb.box.querySelector(".lb-count").textContent = `${lb.index + 1} / ${n}`;
  lb.box.querySelector(".lb-caption").textContent = lb.name;
  lb.box.classList.toggle("single", n < 2);

  // پیش‌لود عکس قبلی و بعدی
  [lb.index + 1, lb.index - 1].forEach(k => { new Image().src = lb.images[(k + n) % n]; });
}

function lbOpen(i) {
  lbShow(i);
  lb.box.classList.add("open");
  document.body.classList.add("lb-open");
  lb.box.querySelector(".lb-close").focus({ preventScroll: true });
}

function lbClose() {
  lb.box.classList.remove("open");
  document.body.classList.remove("lb-open");
}

function initLightbox(gallery, name) {
  const track = document.getElementById("g-track");
  if (!track || !gallery.length) return;

  buildLightbox();
  lb.images = gallery;
  lb.name = name;

  [...track.children].forEach((slide, i) => slide.addEventListener("click", () => lbOpen(i)));
}

// Code Showcase: چند خط اول + دکمه More/Less + Copy

// Code Showcase: چند خط اول + دکمه More/Less + Copy
function initCode(p, ui) {
  const el = document.getElementById("code-el");
  if (!el) return;

  const full = p.code.snippet.trim();
  const lines = full.split("\n");
  const more = document.getElementById("code-more");
  const copy = document.getElementById("code-copy");
  let open = lines.length <= PREVIEW_LINES;

  const paint = () => {
    el.textContent = open ? full : lines.slice(0, PREVIEW_LINES).join("\n");
    el.parentElement.classList.toggle("collapsed", !open);
    if (more) more.textContent = open ? ui.less : ui.more;
    delete el.dataset.highlighted;      // اجازه بده hljs دوباره روش اجرا بشه
    if (window.hljs) hljs.highlightElement(el);
  };

  paint();
  if (more) more.onclick = () => { open = !open; paint(); };
  copy.onclick = () => {
    navigator.clipboard.writeText(full).then(() => {
      copy.classList.add("copied");
      copy.title = ui.copied;
      setTimeout(() => { copy.classList.remove("copied"); copy.title = ui.copy; }, 1500);
    }).catch(() => {});
  };
}

document.addEventListener("DOMContentLoaded", renderProjectDetails);
document.addEventListener("languagechange", renderProjectDetails);