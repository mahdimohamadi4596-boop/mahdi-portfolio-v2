// ==========================================================================
// صفحه Ideas: لیست عمودی مینیمال از data/ideas.js
// ==========================================================================
function renderIdeasPage() {
  const list = document.getElementById("ideas-list");
  if (!list) return;

  const lang = document.documentElement.getAttribute("lang") || "en";
  const ui = ideasUI[lang];

  document.getElementById("id-title").textContent = ui.pageTitle;
  document.getElementById("id-sub").textContent = ui.pageSubtitle;

  list.innerHTML = ideas.map(idea => `
    <a class="idea-row" href="idea.html?id=${encodeURIComponent(idea.id)}">
      <div class="idea-thumb">
        <span class="idea-thumb-fallback">${esc(idea.title[lang].charAt(0))}</span>
        ${idea.image ? `<img src="${esc(idea.image)}" alt="${esc(idea.title[lang])}" loading="lazy" onerror="this.remove()">` : ""}
      </div>
      <div class="idea-info">
        <h3>${esc(idea.title[lang])}</h3>
        <p>${esc(idea.description[lang])}</p>
        <span class="card-cta idea-cta"><span>${ui.readMore}</span><span class="btn-ico" data-icon="arrow-right" aria-hidden="true">${iconSvg("arrow-right")}</span></span>
      </div>
    </a>`).join("");
}

document.addEventListener("DOMContentLoaded", renderIdeasPage);
document.addEventListener("languagechange", renderIdeasPage);