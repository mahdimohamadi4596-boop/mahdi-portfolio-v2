// ==========================================================================
// رندر صفحه Skills از data/skills.js
// ==========================================================================
function escSkill(s) {
  return String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function renderSkillsPage() {
  const grid = document.getElementById("expertise-grid");
  if (!grid) return;

  const lang = document.documentElement.getAttribute("lang") || "en";
  const rtl = document.documentElement.getAttribute("dir") === "rtl";
  const ui = skillsUI[lang];

  document.getElementById("sk-title").textContent = ui.heroTitle;
  document.getElementById("sk-sub").textContent = ui.heroSubtitle;
  document.getElementById("sk-tagline").textContent = skillsData.tagline[lang];
  document.getElementById("core-title").textContent = ui.coreTitle;
  document.getElementById("breakdown-title").textContent = ui.breakdownTitle;

  // مسیر هویتی: AI Developer → AI Engineer → AI Product Builder
  const steps = skillsData.identityPath[lang];
  document.getElementById("identity-path").innerHTML = steps.map((s, i) =>
    `<span class="identity-step">${escSkill(s)}</span>` +
    (i < steps.length - 1 ? `<span class="identity-arrow">${rtl ? "←" : "→"}</span>` : "")
  ).join("");

  // Core Expertise
  grid.innerHTML = skillsData.expertise.map(e => `
    <div class="expertise-card expertise-${e.tier}">
      <h3>${escSkill(e.title[lang])}</h3>
      <p class="expertise-desc">${escSkill(e.desc[lang])}</p>
      <div class="expertise-chips">${e.chips.map(c => `<span class="tech-tag">${escSkill(c)}</span>`).join("")}</div>
    </div>`).join("");

  // Skills Breakdown
  document.getElementById("breakdown-grid").innerHTML = skillsData.breakdown.map(cat => `
    <div class="path-card skill-category-card">
      <h3>${escSkill(cat.title[lang])}</h3>
      <div class="project-tech">${cat.skills.map(s => `<span class="tech-tag">${escSkill(s)}</span>`).join("")}</div>
      <div class="skill-used-in">
        <span>${ui.usedIn}:</span>
        ${cat.usedIn.map(p => `<a href="project.html?id=${encodeURIComponent(p.id)}">${escSkill(p.name)}</a>`).join(" · ")}
      </div>
    </div>`).join("");

  // Technology Stack
  document.getElementById("stack-title").textContent = ui.stackTitle;
  document.getElementById("stack-grid").innerHTML = skillsData.techStack.map(g => `
    <div class="path-card">
      <h3>${escSkill(g.group[lang])}</h3>
      <div class="project-tech">${g.items.map(i => `<span class="tech-tag">${escSkill(i)}</span>`).join("")}</div>
    </div>`).join("");

  // Capability Map
  document.getElementById("map-title").textContent = ui.mapTitle;
  const nodes = skillsData.capabilityMap[lang];
  document.getElementById("capability-map").innerHTML = nodes.map((n, i) =>
    `<div class="cap-node">${escSkill(n)}</div>` + (i < nodes.length - 1 ? `<div class="cap-arrow">${rtl ? "↑" : "↓"}</div>` : "")
  ).join("");

  // How I Build
  document.getElementById("how-title").textContent = ui.howTitle;
  document.getElementById("how-grid").innerHTML = skillsData.howIBuild.map((s, i) => `
    <div class="path-card">
      <span class="path-number">${String(i + 1).padStart(2, "0")}</span>
      <h3>${escSkill(s.title[lang])}</h3>
      <p>${escSkill(s.text[lang])}</p>
    </div>`).join("");

  // Skills in Action
  document.getElementById("action-title").textContent = ui.actionTitle;
  document.getElementById("action-list").innerHTML = skillsData.skillsInAction.map(item => `
    <a class="action-item" href="project.html?id=${encodeURIComponent(item.project.id)}">
      <span class="tech-tag">${escSkill(item.skill)}</span>
      <span class="action-arrow">${rtl ? "←" : "→"}</span>
      <span class="action-project">${escSkill(item.project.name)}</span>
    </a>`).join("");

  // Services
  document.getElementById("services-title").textContent = ui.servicesTitle;
  document.getElementById("services-grid").innerHTML = skillsData.services.map(s => `
    <div class="path-card service-card">
      <h3>${escSkill(s.title[lang])}</h3>
      <p>${escSkill(s.desc[lang])}</p>
      <div class="project-tech">${s.chips.map(c => `<span class="tech-tag">${escSkill(c)}</span>`).join("")}</div>
      ${s.project ? `<a class="pcard-link" href="project.html?id=${encodeURIComponent(s.project)}">${ui.usedIn}</a>` : ""}
    </div>`).join("");

  // Collaboration
  document.getElementById("collab-title").textContent = ui.collabTitle;
  document.getElementById("collab-grid").innerHTML = skillsData.collaboration.map(c => `
    <div class="path-card">
      <h3>${escSkill(c.title[lang])}</h3>
      <p>${escSkill(c.desc[lang])}</p>
    </div>`).join("");
  document.getElementById("collab-cta-title").textContent = ui.ctaTitle;
  document.getElementById("collab-cta-sub").textContent = ui.ctaSubtitle;
  document.getElementById("collab-cta-btn").textContent = ui.ctaButton;

  // Currently Exploring
  document.getElementById("exploring-title").textContent = ui.exploringTitle;
  document.getElementById("exploring-list").innerHTML = skillsData.exploring[lang].map(e => `<span class="skill-chip">${escSkill(e)}</span>`).join("");
}

document.addEventListener("DOMContentLoaded", renderSkillsPage);
document.addEventListener("languagechange", renderSkillsPage);