// ==========================================================================
// صفحه جزئیات Idea: مشترک و Dynamic — idea.html?id=xyz
// ==========================================================================
// تبدیل بلوک‌ها به HTML. فیلد level اختیاریه:
// "root" = تیتر اصلی درخت، "sub" = شاخه (با بلوک‌های بدون heading بعدش)
// درخت با اولین بلوکی که heading دارد ولی level ندارد بسته می‌شود.
function renderIdeaBlocks(blocks) {
  let html = "";
  let tree = false;
  let branch = false;
  const closeBranch = () => { if (branch) { html += "</div>"; branch = false; } };
  const closeTree = () => { closeBranch(); if (tree) { html += "</div>"; tree = false; } };

  blocks.forEach(b => {
    if (b.level === "root") {
      closeTree();
      html += `<h2 class="idea-h2 idea-h2--root">${esc(b.heading)}</h2><div class="idea-tree">`;
      tree = true;
    } else if (b.level === "sub") {
      closeBranch();
      html += `<div class="idea-branch"><h2 class="idea-h2 idea-h2--sub">${esc(b.heading)}</h2>`;
      branch = true;
    } else if (b.heading) {
      closeTree();
      html += `<h2 class="idea-h2">${esc(b.heading)}</h2>`;
    }
    if (b.text) html += `<p class="idea-p">${esc(b.text)}</p>`;
  });

  closeTree();
  return html;
}

// ==========================================================================
// Share + Open Graph (فقط صفحه جزئیات Idea)
// ==========================================================================
const IDEA_DEFAULT_IMAGE = "assets/images/profile.jpg";

const ideaIconAttrs = 'viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"';
const ideaIcons = {
  share: `<svg ${ideaIconAttrs}><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>`,
  telegram: `<svg ${ideaIconAttrs}><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>`,
  link: `<svg ${ideaIconAttrs}><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>`,
  more: `<svg ${ideaIconAttrs}><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>`,
  check: `<svg ${ideaIconAttrs}><polyline points="20 6 9 17 4 12"></polyline></svg>`
};

// URL دقیق همین Idea (ساختار فعلی idea.html?id=... حفظ میشه)
function getIdeaUrl(id) {
  const url = new URL(location.href);
  url.search = `?id=${encodeURIComponent(id)}`;
  url.hash = "";
  return url.href;
}

function setMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

// Open Graph + Twitter Card (dynamic، برای مرورگر و کرالرهایی که JS اجرا می‌کنن)
function updateIdeaMeta(idea, lang, url) {
  const title = idea.title[lang];
  const description = idea.description[lang];
  const image = new URL((idea.image || IDEA_DEFAULT_IMAGE).replace(/\\/g, "/"), location.href).href;

  setMeta("property", "og:type", "article");
  setMeta("property", "og:title", title);
  setMeta("property", "og:description", description);
  setMeta("property", "og:image", image);
  setMeta("property", "og:url", url);

  setMeta("name", "twitter:card", idea.image ? "summary_large_image" : "summary");
  setMeta("name", "twitter:title", title);
  setMeta("name", "twitter:description", description);
  setMeta("name", "twitter:image", image);
}

function renderIdeaShare(idea, lang, ui, url) {
  const title = idea.title[lang];
  const text = idea.description[lang];
  const telegram = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(`${title}\n${text}`)}`;
  const canNative = typeof navigator.share === "function";

  return `
    <div class="idea-share" data-url="${esc(url)}" data-title="${esc(title)}" data-text="${esc(text)}">
      <button type="button" class="btn btn-outline idea-share-btn" aria-haspopup="true" aria-expanded="false">
        ${ideaIcons.share}<span>${esc(ui.share)}</span>
      </button>
      <div class="idea-share-menu" role="menu">
        <a class="idea-share-item" role="menuitem" href="${esc(telegram)}" target="_blank" rel="noopener noreferrer">
          ${ideaIcons.telegram}<span>${esc(ui.shareTelegram)}</span>
        </a>
        <button type="button" class="idea-share-item" role="menuitem" data-share="copy" aria-live="polite">
          ${ideaIcons.link}<span>${esc(ui.shareCopy)}</span>
        </button>
        ${canNative ? `
        <button type="button" class="idea-share-item" role="menuitem" data-share="native">
          ${ideaIcons.more}<span>${esc(ui.shareNative)}</span>
        </button>` : ""}
      </div>
    </div>`;
}

async function copyIdeaLink(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (_) {
    // fallback برای مرورگرهای قدیمی یا بدون HTTPS
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.cssText = "position:fixed;opacity:0;";
    document.body.appendChild(ta);
    ta.select();
    let ok = false;
    try { ok = document.execCommand("copy"); } catch (_) {}
    ta.remove();
    return ok;
  }
}

// عکس Idea برای Web Share؛ از قبل آماده می‌شه تا share داخل همون کلیک انجام بشه
let ideaShareFile = null;

async function prepareIdeaShareFile(idea) {
  if (!idea.image || typeof navigator.canShare !== "function") return;
  if (ideaShareFile && ideaShareFile.id === idea.id) return;
  try {
    const blob = await (await fetch(idea.image.replace(/\\/g, "/"))).blob();
    const ext = (blob.type.split("/")[1] || "jpg").replace("jpeg", "jpg");
    const file = new File([blob], `${idea.id}.${ext}`, { type: blob.type });
    if (navigator.canShare({ files: [file] })) ideaShareFile = { id: idea.id, file };
  } catch (_) { /* بدون عکس ادامه می‌ده */ }
}

function closeIdeaShareMenus() {
  document.querySelectorAll(".idea-share.open").forEach(box => {
    box.classList.remove("open");
    box.querySelector(".idea-share-btn")?.setAttribute("aria-expanded", "false");
  });
}

// یک بار اجرا میشه (event delegation)؛ با تغییر زبان و رندر دوباره هم کار می‌کنه
function initIdeaShare() {
  const root = document.getElementById("idea-root");
  if (!root) return;

  root.addEventListener("click", async (e) => {
    const toggle = e.target.closest(".idea-share-btn");
    if (toggle) {
      const box = toggle.closest(".idea-share");
      const willOpen = !box.classList.contains("open");
      closeIdeaShareMenus();
      box.classList.toggle("open", willOpen);
      toggle.setAttribute("aria-expanded", String(willOpen));
      return;
    }

    const item = e.target.closest(".idea-share-item");
    if (!item) return;

    const { url, title, text } = item.closest(".idea-share").dataset;
    const ui = ideasUI[document.documentElement.getAttribute("lang") || "en"];

    if (item.dataset.share === "copy") {
      if (item.classList.contains("copied")) return;
      if (!(await copyIdeaLink(url))) { window.prompt(ui.shareCopy, url); return; }
      const original = item.innerHTML;
      item.classList.add("copied");
      item.innerHTML = `${ideaIcons.check}<span>${esc(ui.copied)}</span>`;
      setTimeout(() => { item.classList.remove("copied"); item.innerHTML = original; }, 1800);
    } else if (item.dataset.share === "native") {
      closeIdeaShareMenus();
            // اگه عکس آماده و قابل ارسال بود، عکس + عنوان + توضیح + لینک با هم می‌رن
      const withImage = ideaShareFile && navigator.canShare({ files: [ideaShareFile.file] });
      const data = withImage
        ? { files: [ideaShareFile.file], title, text: `${title}\n${text}\n${url}` }
        : { title, text, url };
      try { await navigator.share(data); } catch (_) { /* لغو توسط کاربر */ }
    } else {
      closeIdeaShareMenus(); // لینک Telegram
    }
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".idea-share")) closeIdeaShareMenus();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeIdeaShareMenus();
  });
}

function renderIdeaDetails() {
  const root = document.getElementById("idea-root");
  if (!root) return;

  const lang = document.documentElement.getAttribute("lang") || "en";
  const ui = ideasUI[lang];
  const id = new URLSearchParams(location.search).get("id");
  const idea = ideas.find(x => x.id === id);

  if (!idea) {
    root.innerHTML = `<section class="pd-hero section"><div class="container">
      <p class="pd-text">${ui.notFound}</p>
      <a class="btn btn-outline" href="ideas.html">${ui.back}</a></div></section>`;
    return;
  }

  document.title = `${idea.title[lang]} | Mahdi`;
  const blocks = idea.content[lang] || idea.content.en;
  const url = getIdeaUrl(idea.id);
  updateIdeaMeta(idea, lang, url);
  prepareIdeaShareFile(idea);

  root.innerHTML = `
    <article class="idea-article pd-glass container">
      <section class="pd-hero">
        <div class="idea-article-head">
          <a class="pd-back" href="ideas.html">${ui.back}</a>
          <h1 class="pd-title idea-title">${esc(idea.title[lang])}</h1>
          <p class="pd-caption">${esc(idea.description[lang])}</p>
          ${renderIdeaShare(idea, lang, ui, url)}
          ${idea.image ? `<div class="pd-cover idea-cover"><img src="${esc(idea.image)}" alt="${esc(idea.title[lang])}" onerror="this.closest('.idea-cover').remove()"></div>` : ""}
        </div>
      </section>
      <section class="pd-section">
        <div class="idea-body">
          ${renderIdeaBlocks(blocks)}
        </div>
      </section>
    </article>`;
}

document.addEventListener("DOMContentLoaded", renderIdeaDetails);
document.addEventListener("DOMContentLoaded", initIdeaShare);
document.addEventListener("languagechange", renderIdeaDetails);