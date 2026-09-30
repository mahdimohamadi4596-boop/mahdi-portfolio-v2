// ==========================================================================
// دیتای صفحه Skills — دسته‌بندی سلسله‌مراتبی + ارتباط با پروژه‌های واقعی
// ==========================================================================
const skillsData = {
  identityPath: {
    en: ["AI Developer", "AI Engineer", "AI Product Builder"],
    fa: ["توسعه‌دهنده هوش مصنوعی", "مهندس هوش مصنوعی", "سازنده محصول هوش مصنوعی"]
  },
  tagline: {
    en: "AI Engineering · Python · LLMs · Agents · Backend · Web",
    fa: "مهندسی هوش مصنوعی · Python · LLM · ایجنت‌ها · Backend · وب"
  },
  // سه حوزه اصلی — tier کنترل اندازه بصری کارت رو تو CSS انجام میده
  expertise: [
    {
      tier: "primary",
      title: { en: "AI & LLM Engineering", fa: "مهندسی هوش مصنوعی و LLM" },
      desc: {
        en: "Building intelligent systems using LLMs, RAG, AI agents, prompt engineering, and modern AI APIs.",
        fa: "ساخت سیستم‌های هوشمند با استفاده از LLM، RAG، ایجنت‌های هوش مصنوعی، مهندسی پرامپت و APIهای مدرن هوش مصنوعی."
      },
      chips: ["LLM Engineering", "RAG", "AI Agents", "Prompt Engineering", "Embeddings", "Semantic Search"]
    },
    {
      tier: "secondary",
      title: { en: "Python Development", fa: "توسعه Python" },
      desc: {
        en: "Building backend services, AI applications, APIs, and automation systems with Python.",
        fa: "ساخت سرویس‌های بک‌اند، اپلیکیشن‌های هوش مصنوعی، API‌ها و سیستم‌های اتوماسیون با Python."
      },
      chips: ["Python", "FastAPI", "Async Programming"]
    },
    {
      tier: "secondary",
      title: { en: "AI Product Engineering", fa: "مهندسی محصول هوش مصنوعی" },
      desc: {
        en: "Turning AI capabilities into structured, practical, usable products.",
        fa: "تبدیل قابلیت‌های هوش مصنوعی به محصولاتی ساختاریافته، کاربردی و قابل‌استفاده."
      },
      chips: ["Agent Architecture", "Backend Integration", "Deployment", "Error Handling"]
    }
  ],
  // جزئیات کامل هر دسته + لینک به پروژه‌هایی که ازش استفاده شده
  breakdown: [
    {
      title: { en: "AI & LLM Engineering", fa: "مهندسی هوش مصنوعی و LLM" },
      skills: ["LLM", "RAG", "Prompt Engineering", "AI Agents", "Embeddings", "Semantic Search", "Vector Search", "Tool Calling", "Context & Memory", "LLM API Integration"],
      usedIn: [{ name: "LUMI", id: "lumi" }, { name: "AI File Management Agent", id: "ai-file-agent" }]
    },
    {
      title: { en: "Python Development", fa: "توسعه Python" },
      skills: ["Python", "FastAPI", "JSON", "API Integration", "Async Programming"],
      usedIn: [{ name: "LUMI", id: "lumi" }, { name: "AI File Management Agent", id: "ai-file-agent" }]
    },
    {
      title: { en: "AI Product Engineering", fa: "مهندسی محصول هوش مصنوعی" },
      skills: ["AI Application Architecture", "Agent Architecture", "Backend Integration", "Authentication", "Database & Storage", "Error Handling", "Deployment"],
      usedIn: [{ name: "LUMI", id: "lumi" }, { name: "AI File Management Agent", id: "ai-file-agent" }]
    }
  ],

  // بخش ۴ — Technology Stack (فرضی؛ اگه چیز دیگه‌ای مدنظرته بگو عوضش کنم)
  techStack: [
    { group: { en: "Languages & Web", fa: "زبان‌ها و وب" }, items: ["Python", "HTML", "CSS", "JavaScript"] },
    { group: { en: "AI & LLM", fa: "هوش مصنوعی و LLM" }, items: ["LLM", "RAG", "Embeddings", "Prompt Engineering"] },
    { group: { en: "Frameworks & Tools", fa: "فریم‌ورک‌ها و ابزارها" }, items: ["FastAPI", "ChromaDB", "Ollama", "OpenRouter", "Groq"] },
    { group: { en: "Dev Tools", fa: "ابزارهای توسعه" }, items: ["Git", "GitHub"] }
  ],

  // بخش ۵ — Capability Map: زنجیره خطی نشون‌دهنده ارتباط مهارت‌ها
  capabilityMap: {
    en: ["LLM", "RAG / Agents", "Python", "Backend", "AI Application", "Product"],
    fa: ["LLM", "RAG / ایجنت‌ها", "Python", "Backend", "اپلیکیشن هوش مصنوعی", "محصول"]
  },

  // بخش ۶ — How I Build
  howIBuild: [
    { title: { en: "Understand", fa: "شناخت" }, text: { en: "Understanding the problem.", fa: "شناخت مسئله." } },
    { title: { en: "Design", fa: "طراحی" }, text: { en: "Designing the solution and architecture.", fa: "طراحی راه‌حل و معماری." } },
    { title: { en: "Build", fa: "پیاده‌سازی" }, text: { en: "Implementation.", fa: "پیاده‌سازی." } },
    { title: { en: "Integrate AI", fa: "اتصال هوش مصنوعی" }, text: { en: "Connecting the model and AI capabilities.", fa: "اتصال مدل و قابلیت‌های هوش مصنوعی." } },
    { title: { en: "Test", fa: "تست" }, text: { en: "Testing and refining.", fa: "تست و اصلاح." } },
    { title: { en: "Deploy", fa: "انتشار" }, text: { en: "Preparing and shipping.", fa: "آماده‌سازی و انتشار." } }
  ],

  // بخش ۷ — Skills in Action: اتصال مهارت به پروژه واقعی
  skillsInAction: [
    { skill: "RAG", project: { name: "LUMI", id: "lumi" } },
    { skill: "AI Agents", project: { name: "AI File Management Agent", id: "ai-file-agent" } },
    { skill: "LLM Integration", project: { name: "LUMI", id: "lumi" } },
    { skill: "FastAPI / Backend", project: { name: "LUMI", id: "lumi" } }
  ],

  // بخش ۸ — Services
  services: [
    { title: { en: "AI Application Development", fa: "توسعه اپلیکیشن هوش مصنوعی" }, desc: { en: "Building and developing applications powered by AI and LLMs.", fa: "ساخت و توسعه اپلیکیشن‌های مبتنی بر هوش مصنوعی و LLM." }, chips: ["LLM Integration", "Backend Integration"], project: "lumi" },
    { title: { en: "AI Agent Development", fa: "توسعه ایجنت هوش مصنوعی" }, desc: { en: "Designing and building agents that interact with tools, files, APIs, and data.", fa: "طراحی و پیاده‌سازی ایجنت‌هایی که با ابزارها، فایل‌ها، API‌ها و داده تعامل دارند." }, chips: ["Tool Calling", "Agent Architecture"], project: "ai-file-agent" },
    { title: { en: "RAG Systems", fa: "سیستم‌های RAG" }, desc: { en: "Building RAG systems to connect language models to your data and documents.", fa: "ساخت سیستم‌های RAG برای اتصال مدل‌های زبانی به داده‌ها و اسناد اختصاصی." }, chips: ["RAG", "Vector Search", "Embeddings"], project: "lumi" },
    { title: { en: "LLM Integration", fa: "یکپارچه‌سازی LLM" }, desc: { en: "Connecting and using different language models in products and backends.", fa: "اتصال و استفاده از مدل‌های زبانی مختلف در محصولات و Backend." }, chips: ["LLM API Integration", "Prompt Engineering"] },
    { title: { en: "AI Backend Development", fa: "توسعه Backend هوش مصنوعی" }, desc: { en: "Building the backend and APIs AI applications need, with Python and FastAPI.", fa: "ساخت Backend و API‌های موردنیاز اپلیکیشن‌های AI با Python و FastAPI." }, chips: ["Python", "FastAPI", "REST API"] },
    { title: { en: "AI Product Prototyping", fa: "پروتوتایپ محصول هوش مصنوعی" }, desc: { en: "Turning an AI idea into a testable prototype or MVP.", fa: "تبدیل یک ایده هوش مصنوعی به Prototype یا MVP قابل آزمایش." }, chips: ["AI Application Architecture"] },
    { title: { en: "AI Automation", fa: "اتوماسیون هوش مصنوعی" }, desc: { en: "Designing AI-driven automation systems for specific processes.", fa: "طراحی سیستم‌های اتوماسیون مبتنی بر هوش مصنوعی برای فرآیندهای مشخص." }, chips: ["Agent Architecture"] }
  ],

  // بخش ۹ — Collaboration
  collaboration: [
    { title: { en: "AI Project", fa: "پروژه هوش مصنوعی" }, desc: { en: "Collaborating on a specific project, from idea to prototype or first product.", fa: "همکاری برای ساخت یک پروژه مشخص، از ایده تا Prototype یا محصول اولیه." } },
    { title: { en: "MVP Development", fa: "توسعه MVP" }, desc: { en: "Turning an AI idea into a testable, extendable MVP.", fa: "تبدیل یک ایده هوش مصنوعی به MVP قابل آزمایش و توسعه." } },
    { title: { en: "AI Feature Integration", fa: "افزودن قابلیت هوش مصنوعی" }, desc: { en: "Adding AI capabilities to an existing product or project.", fa: "اضافه کردن قابلیت‌های هوش مصنوعی به یک محصول یا پروژه موجود." } },
    { title: { en: "Custom AI Agent", fa: "ایجنت اختصاصی" }, desc: { en: "Building a custom agent for a specific workflow or need.", fa: "ساخت ایجنت اختصاصی متناسب با یک Workflow یا نیاز مشخص." } },
    { title: { en: "Collaboration", fa: "همکاری فنی" }, desc: { en: "Technical collaboration on AI and software projects.", fa: "همکاری فنی در پروژه‌های هوش مصنوعی و نرم‌افزار به‌صورت مشارکتی." } }
  ],

  // بخش ۱۰ — Currently Exploring
  exploring: {
    en: ["Advanced AI Agent Engineering", "Advanced LLM Systems", "AI Product Architecture"],
    fa: ["مهندسی پیشرفته ایجنت‌های هوش مصنوعی", "سیستم‌های پیشرفته LLM", "معماری محصول هوش مصنوعی"]
  }
};

const skillsUI = {
  en: {
    heroTitle: "Skills & Expertise",
    heroSubtitle: "Technologies and capabilities I use to design and build AI-powered products.",
    coreTitle: "Core Expertise",
    breakdownTitle: "Skills Breakdown",
    usedIn: "Used in",
    stackTitle: "Technology Stack",
    mapTitle: "Capability Map",
    howTitle: "How I Build",
    actionTitle: "Skills in Action",
    servicesTitle: "Services",
    collabTitle: "Collaboration",
    exploringTitle: "Currently Exploring",
    ctaTitle: "Have an AI project in mind?",
    ctaSubtitle: "Let's build it.",
    ctaButton: "Contact Me"
  },
  fa: {
    heroTitle: "مهارت‌ها و تخصص",
    heroSubtitle: "تکنولوژی‌ها و توانمندی‌هایی که برای طراحی و ساخت محصولات مبتنی بر هوش مصنوعی استفاده می‌کنم.",
    coreTitle: "تخصص اصلی",
    breakdownTitle: "جزئیات مهارت‌ها",
    usedIn: "استفاده‌شده در",
    stackTitle: "پشته تکنولوژی",
    mapTitle: "نقشه توانمندی",
    howTitle: "روش ساخت من",
    actionTitle: "مهارت‌ها در عمل",
    servicesTitle: "خدمات",
    collabTitle: "نوع همکاری",
    exploringTitle: "در حال یادگیری",
    ctaTitle: "پروژه هوش مصنوعی‌ای تو ذهنته؟",
    ctaSubtitle: "بیا با هم بسازیمش.",
    ctaButton: "تماس با من"
  }
};