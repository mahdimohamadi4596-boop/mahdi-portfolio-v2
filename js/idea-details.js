// ==========================================================================
// صفحه جزئیات Idea: مشترک و Dynamic — idea.html?id=xyz
// ==========================================================================
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
          ${blocks.map(b => `
            ${b.heading ? `<h2 class="idea-h2">${esc(b.heading)}</h2>` : ""}
            <p class="idea-p">${esc(b.text)}</p>
          `).join("")}
        </div>
      </section>
    </article>`;
}

document.addEventListener("DOMContentLoaded", renderIdeaDetails);
document.addEventListener("languagechange", renderIdeaDetails);