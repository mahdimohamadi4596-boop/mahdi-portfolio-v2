// ==========================================================================
// رندر Timeline صفحه About از translations.js (با تغییر زبان دوباره رندر میشه)
// ==========================================================================
function renderTimeline() {
  const container = document.getElementById("timeline");
  if (!container) return;


  const lang = document.documentElement.getAttribute("lang") || "en";
  const items = translations[lang].about.timeline;

  container.innerHTML = items.map(item => `
    <div class="timeline-item">
      <div class="timeline-card">
        <span class="timeline-date">${item.date}</span>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
      </div>
      <span class="timeline-dot"></span>
    </div>
  `).join("");
}

document.addEventListener("DOMContentLoaded", renderTimeline);
document.addEventListener("languagechange", renderTimeline);