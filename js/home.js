// ==========================================================================
// رندر پروژه‌های منتخب در صفحه Home از data/projects.js
// ==========================================================================
function renderFeaturedProjects() {
  const container = document.getElementById("featured-projects");
  if (!container) return;

  const lang = document.documentElement.getAttribute("lang") || "en";
  const featured = projects.slice(0, 2); // ۲ پروژه اول به‌عنوان منتخب

  container.innerHTML = featured.map(p => `
    <div class="project-card">
      <h3>${p.name}</h3>
      <p>${p.description[lang]}</p>
      <div class="project-tech">
        ${p.tech.map(t => `<span class="tech-tag">${t}</span>`).join("")}
      </div>
      <div class="project-links">
        ${p.github ? `<a href="${p.github}" target="_blank">GitHub</a>` : ""}
        ${p.demo ? `<a href="${p.demo}" target="_blank">Demo</a>` : ""}
        <a href="project.html?id=${p.id}" data-i18n="home.viewProject">View Details</a>
      </div>
    </div>
  `).join("");
}

document.addEventListener("DOMContentLoaded", renderFeaturedProjects);
// وقتی زبان عوض شد، دوباره رندر کن تا description به زبان جدید نشون داده بشه
document.addEventListener("languagechange", renderFeaturedProjects);