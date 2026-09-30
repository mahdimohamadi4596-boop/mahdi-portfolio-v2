// ==========================================================================
// افکت تایپ متحرک برای نقش‌های Hero
// ==========================================================================
const roles = [
  "AI Developer",
  "AI Product Builder",
  "LLM Engineer",
  "AI Agent Engineer",
  "Python Developer"
];

function initTypingEffect(elementId) {
  const el = document.getElementById(elementId);
  if (!el) return;

  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function type() {
    const currentRole = roles[roleIndex];

    if (!deleting) {
      el.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      if (charIndex === currentRole.length) {
        deleting = true;
        setTimeout(type, 1500); // مکث روی کلمه کامل
        return;
      }
    } else {
      el.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    }

    setTimeout(type, deleting ? 40 : 80);
  }

  type();
}

document.addEventListener("DOMContentLoaded", () => {
  initTypingEffect("typing-text");
});