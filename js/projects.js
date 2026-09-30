// ==========================================================================
// صفحه Projects: لیست کارت‌ها از data/projects.js
// ==========================================================================
function renderProjectsPage() {
  const list = document.getElementById("projects-list");
  if (!list) return;

  const lang = document.documentElement.getAttribute("lang") || "en";
  const ui = projectsUI[lang];

  document.getElementById("pl-title").textContent = ui.title;
  document.getElementById("pl-sub").textContent = ui.subtitle;

  list.innerHTML = projects.map(p => {
    const shown = p.tech.slice(0, 5);
    const extra = p.tech.length - shown.length;
    return `
      <a class="project-card pcard" href="project.html?id=${encodeURIComponent(p.id)}">
        <div class="pcard-cover">
          <span class="pcard-fallback">${esc(p.name.charAt(0))}</span>
          ${p.cover ? `<img src="${esc(p.cover)}" alt="${esc(p.name)}" loading="lazy" onerror="this.remove()">` : ""}
        </div>
        <div class="pcard-body">
          <h3>${esc(p.name)}</h3>
          <p>${esc(pText(p.description, lang))}</p>
          <div class="project-tech">
            ${shown.map(t => `<span class="tech-tag">${esc(t)}</span>`).join("")}
            ${extra > 0 ? `<span class="tech-tag">+${extra}</span>` : ""}
          </div>
          <span class="pcard-link">${ui.view}</span>
        </div>
      </a>`;
  }).join("");
}

document.addEventListener("DOMContentLoaded", renderProjectsPage);
document.addEventListener("languagechange", renderProjectsPage);