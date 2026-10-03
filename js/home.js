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

// ==========================================================================
// دکمه شناور ایده‌ها: بعد از کمی اسکرول ظاهر میشه (نمایشش فقط در موبایل با CSS کنترل میشه)
// ==========================================================================
function initIdeaFab() {
  const fab = document.getElementById("idea-fab");
  const closeBtn = document.getElementById("idea-fab-close");
  if (!fab) return;

  let idleTimer = null;
  let introShown = false;

  const hideFab = () => fab.classList.remove("show");

  const handleScroll = () => {
    clearTimeout(idleTimer);

    if (window.scrollY <= 200) {
      hideFab();
      return;
    }

    // برچسب "Ideas" فقط بار اول نمایش داده میشه
    if (!introShown) {
      fab.classList.add("intro");
      introShown = true;
    }

    fab.classList.add("show");
    // اگه کاربر ۵ ثانیه اسکرول نکرد، دکمه ناپدید میشه تا اسکرول بعدی
    idleTimer = setTimeout(hideFab, 5000);
  };

  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();

  // کلیک روی ضربدر = حذف دکمه تا رفرش صفحه یا باز کردن مجدد برنامه
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(idleTimer);
      fab.remove();
      closeBtn.remove();
    });
  }
}

document.addEventListener("DOMContentLoaded", initIdeaFab);