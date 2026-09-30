// ==========================================================================
// صفحه Contact: لیست عمودی مینیمال از data/contact.js
// ==========================================================================
const CONTACT_ICONS = {
  mail: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 6-10 7L2 6"></path></svg>`,
  instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>`,
  telegram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M22 2 11 13"></path><path d="M22 2 15 22l-4-9-9-4 20-7Z"></path></svg>`,
  github: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"></path></svg>`
};

function renderContactPage() {
  const list = document.getElementById("contact-list");
  if (!list) return;

  const lang = document.documentElement.getAttribute("lang") || "en";
  const rtl = document.documentElement.getAttribute("dir") === "rtl";
  const ui = contactUI[lang];

  document.getElementById("ct-title").textContent = ui.title;
  document.getElementById("ct-sub").textContent = ui.subtitle;

  list.innerHTML = contactLinks.map(item => `
    <a class="contact-row" href="${esc(item.href)}" target="_blank" rel="noopener">
      <span class="contact-icon">${CONTACT_ICONS[item.icon]}</span>
      <span class="contact-info">
        <span class="contact-label">${esc(item.label[lang])}</span>
        <span class="contact-value">${esc(item.value)}</span>
      </span>
      <span class="contact-arrow">${rtl ? "←" : "→"}</span>
    </a>`).join("");
}

document.addEventListener("DOMContentLoaded", renderContactPage);
document.addEventListener("languagechange", renderContactPage);