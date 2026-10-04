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

  root.innerHTML = `
    <article class="idea-article pd-glass container">
      <section class="pd-hero">
        <div class="idea-article-head">
          <a class="pd-back" href="ideas.html">${ui.back}</a>
          <h1 class="pd-title idea-title">${esc(idea.title[lang])}</h1>
          <p class="pd-caption">${esc(idea.description[lang])}</p>
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
document.addEventListener("languagechange", renderIdeaDetails);