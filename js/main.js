// ==========================================================================
// تزریق Navbar و Footer در همه صفحات + اتصال دکمه‌های تم/زبان
// این فایل باید بعد از theme.js و language.js لود بشه
// ==========================================================================

function renderNavbar() {
  const nav = document.getElementById("navbar-container");
  if (!nav) return;

  nav.innerHTML = `
    <nav class="navbar">
      <div class="navbar-inner">
        <a href="index.html" class="navbar-logo">Mahdi</a>
        <div class="navbar-links" id="navbar-links">
          <a href="index.html" data-i18n="nav.home">Home</a>
          <a href="about.html" data-i18n="nav.about">About</a>
          <a href="projects.html" data-i18n="nav.projects">Projects</a>
          <a href="skills.html" data-i18n="nav.skills">Skills</a>
          <a href="ideas.html" data-i18n="nav.ideas">Ideas</a>
          <a href="contact.html" data-i18n="nav.contact">Contact</a>
        </div>
        <div class="navbar-actions">
          <button id="lang-toggle" class="icon-btn" onclick="toggleLanguage()">EN</button>
          <button id="theme-toggle" class="icon-btn" onclick="toggleTheme()">
            <svg id="icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"></circle><line x1="12" y1="2" x2="12" y2="4"></line><line x1="12" y1="20" x2="12" y2="22"></line><line x1="4.93" y1="4.93" x2="6.34" y2="6.34"></line><line x1="17.66" y1="17.66" x2="19.07" y2="19.07"></line><line x1="2" y1="12" x2="4" y2="12"></line><line x1="20" y1="12" x2="22" y2="12"></line><line x1="4.93" y1="19.07" x2="6.34" y2="17.66"></line><line x1="17.66" y1="6.34" x2="19.07" y2="4.93"></line></svg>
            <svg id="icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
          </button>
          <button id="menu-toggle" class="icon-btn menu-toggle" aria-label="Menu" aria-expanded="false">
            <svg class="icon-burger" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="7" x2="20" y2="7"></line><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="17" x2="20" y2="17"></line></svg>
            <svg class="icon-close" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
      </div>
    </nav>
  `;

  initMobileMenu();
}

// باز/بسته کردن منوی موبایل + بسته‌شدن با کلیک بیرون یا روی یه لینک
function initMobileMenu() {
  const btn = document.getElementById("menu-toggle");
  const links = document.getElementById("navbar-links");
  if (!btn || !links) return;

  const close = () => {
    links.classList.remove("open");
    btn.classList.remove("active");
    btn.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
  };

  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    const isOpen = links.classList.toggle("open");
    btn.classList.toggle("active", isOpen);
    btn.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("menu-open", isOpen);
  });

  links.querySelectorAll("a").forEach((a) => a.addEventListener("click", close));
  document.addEventListener("click", (e) => {
    if (links.classList.contains("open") && !links.contains(e.target) && e.target !== btn) close();
  });
}

function renderFooter() {
  const footer = document.getElementById("footer-container");
  if (!footer) return;

  footer.innerHTML = `
    <footer class="footer">
      <div class="container">
        <div class="footer-links">
          <a href="https://github.com/mahdimohamadi4596-boop" target="_blank" aria-label="GitHub" title="GitHub">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.58.1.79-.25.79-.56 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.34-1.28-1.7-1.28-1.7-1.04-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.56-.29-5.25-1.28-5.25-5.72 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.24 2.77.12 3.06.74.81 1.18 1.84 1.18 3.1 0 4.45-2.7 5.42-5.27 5.71.41.36.78 1.07.78 2.16 0 1.56-.01 2.82-.01 3.2 0 .31.2.67.8.56A11.5 11.5 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5z"/></svg>
          </a>
          <a href="mahdimohamadi4596@gmail.com" aria-label="Email" title="Email">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 6-10 7L2 6"></path></svg>
          </a>
        </div>
        <p>© 2026 Mahdi — <span data-i18n="footer.rights">All rights reserved.</span></p>
      </div>
    </footer>
  `;
}

// بعد از رندر navbar/footer، دوباره ترجمه‌ها رو اعمال کن و آیکون‌ها رو درست کن
document.addEventListener("DOMContentLoaded", () => {
  renderNavbar();
  renderFooter();

  const currentLang = document.documentElement.getAttribute("lang");
  applyTranslations(currentLang);
  updateLangIcon(currentLang);
});