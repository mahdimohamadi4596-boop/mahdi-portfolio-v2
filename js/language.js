// ==========================================================================
// مدیریت زبان — تشخیص خودکار از مرورگر + سوییچ دستی + RTL/LTR
// ==========================================================================

function detectDefaultLanguage() {
  const saved = localStorage.getItem("lang");
  if (saved) return saved;

  return "fa";
}

function setLanguage(lang) {
  localStorage.setItem("lang", lang);
  document.documentElement.setAttribute("lang", lang);
  document.documentElement.setAttribute("dir", lang === "fa" ? "rtl" : "ltr");
  applyTranslations(lang);
  updateLangIcon(lang);

  // خط جدید: به بقیه اسکریپت‌ها (مثل home.js) خبر بده زبان عوض شد
  document.dispatchEvent(new CustomEvent("languagechange", { detail: { lang } }));
}

// هر المانی که attribute="data-i18n" داشته باشه، متنش از translations.js پر میشه
// مثال استفاده تو HTML: <a href="about.html" data-i18n="nav.about">About</a>
function applyTranslations(lang) {
  const dict = translations[lang];
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const keyPath = el.getAttribute("data-i18n").split(".");
    let value = dict;
    keyPath.forEach((k) => (value = value?.[k]));
    if (value) el.textContent = value;
  });
}

function toggleLanguage() {
  const current = document.documentElement.getAttribute("lang");
  const next = current === "fa" ? "en" : "fa";
  setLanguage(next);
}

function updateLangIcon(lang) {
  const btn = document.getElementById("lang-toggle");
  if (btn) {
    btn.textContent = lang === "fa" ? "EN" : "fa";
  }
}

// اجرا موقع لود صفحه
const initialLang = detectDefaultLanguage();
setLanguage(initialLang);