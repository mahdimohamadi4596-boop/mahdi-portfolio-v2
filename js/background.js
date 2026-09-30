// ==========================================================================
// جلوه‌های پس‌زمینه: ذرات شناور، نور موضعی موس، درخشش داخل کارت‌ها
// همه‌چیز فقط در تم تاریک دیده میشه (CSS کنترلش می‌کنه)
// ==========================================================================
(function () {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const hasHover = window.matchMedia("(hover: hover)").matches;

  /* ---------- ۱) ذرات شناور (تعداد خیلی کم) ---------- */
  function initParticles() {
    const canvas = document.createElement("canvas");
    canvas.id = "particles";
    document.body.appendChild(canvas);
    const ctx = canvas.getContext("2d");

    const COUNT = window.innerWidth < 768 ? 14 : 28;
    let w = 0;
    let h = 0;
    let particles = [];

    function resize() {
      const dpr = window.devicePixelRatio || 1;
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function createParticle() {
      return {
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.4 + 0.6,          // شعاع 0.6 تا 2 پیکسل
        vx: (Math.random() - 0.5) * 0.15,      // حرکت افقی خیلی آروم
        vy: -(Math.random() * 0.2 + 0.05),     // آروم به سمت بالا
        a: Math.random() * 0.3 + 0.15          // شفافیت
      };
    }

    function draw(move) {
      ctx.clearRect(0, 0, w, h);
      if (document.documentElement.getAttribute("data-theme") !== "dark") return;

      particles.forEach((p) => {
        if (move) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.y < -5) { p.y = h + 5; p.x = Math.random() * w; }
          if (p.x < -5) p.x = w + 5;
          if (p.x > w + 5) p.x = -5;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(150, 170, 255, " + p.a + ")";
        ctx.fill();
      });
    }

    function loop() {
      draw(true);
      requestAnimationFrame(loop);
    }

    resize();
    particles = Array.from({ length: COUNT }, createParticle);
    window.addEventListener("resize", resize);

    if (reduceMotion) {
      draw(false); // فقط یه فریم ثابت
    } else {
      loop();
    }
  }

  /* ---------- ۲) نور موضعی که دنبال موس حرکت می‌کنه ---------- */
  function initCursorGlow() {
    if (!hasHover || reduceMotion) return;

    const glow = document.createElement("div");
    glow.id = "cursor-glow";
    document.body.appendChild(glow);

    let x = 0;
    let y = 0;
    let ticking = false;

    document.addEventListener("mousemove", (e) => {
      x = e.clientX;
      y = e.clientY;
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          glow.style.setProperty("--mx", x + "px");
          glow.style.setProperty("--my", y + "px");
          glow.classList.add("active");
          ticking = false;
        });
      }
    });

    document.documentElement.addEventListener("mouseleave", () => {
      glow.classList.remove("active");
    });
  }

  /* ---------- ۳) درخشش داخل کارت‌ها موقع hover ---------- */
  function initCardGlow() {
    if (!hasHover) return;

    // event delegation: برای کارت‌هایی که با JS ساخته میشن (پروژه‌ها، Timeline) هم کار می‌کنه
    document.addEventListener("mousemove", (e) => {
      const card = e.target.closest(".project-card, .path-card, .goal-card, .timeline-card");
      if (!card) return;
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--cx", e.clientX - rect.left + "px");
      card.style.setProperty("--cy", e.clientY - rect.top + "px");
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initParticles();
    initCardGlow();
  });
})();