// ==========================================================================
// دیتای مرکزی Ideas — برای ایده جدید فقط یک آبجکت به آرایه ideas اضافه کن.
// image اختیاریه؛ اگه نباشه فقط متن نمایش داده میشه.
// content: آرایه‌ای از بلوک‌ها { heading, text } — heading اختیاریه (برای جمع‌بندی خالی بذار)
// ==========================================================================
const ideas = [
  {
    id: "rag-in-ai-products",
    date: "2026",
    image: "assets\\images\\idea\\RAG-cover.jpg",
    title: {
      en: "The Impact of RAG in AI Products",
      fa: "تأثیر سیستم‌های RAG در محصولات AI"
    },
    description: {
      en: "How can RAG give language models access to private data and make AI systems more useful?",
      fa: "چطور می‌توان با استفاده از RAG، اطلاعات اختصاصی را در اختیار مدل‌های زبانی قرار داد و کاربردپذیری سیستم‌های AI را افزایش داد؟"
    },
    content: {
      en: [
        { heading: "Introduction", text: "Language models on their own don't always have access to a business's private or up-to-date information. RAG can retrieve relevant information from an external source and provide it to the model at the moment of generating a response." },
        { heading: "What problem does RAG solve?", text: "Instead of putting all the information directly into the model, the required documents and data can be kept in a retrieval system, and the relevant parts can be found when the user makes a request." },
        { heading: "Use in products", text: "This architecture can be used in enterprise assistants, Q&A systems, knowledge bases, and many other AI products." },
        { heading: "My take", text: "In my view, the value of RAG isn't just \"giving the model more information\" — it's designing a controllable system for the model's access to relevant information." }
      ],
      fa: [
        { heading: "مقدمه", text: "مدل‌های زبانی به‌تنهایی همیشه به اطلاعات اختصاصی یا به‌روز یک کسب‌وکار دسترسی ندارند. RAG می‌تواند با بازیابی اطلاعات مرتبط از یک منبع خارجی، این اطلاعات را در زمان تولید پاسخ در اختیار مدل قرار دهد." },
        { heading: "RAG چه مشکلی را حل می‌کند؟", text: "به جای اینکه همه اطلاعات را مستقیماً داخل مدل قرار دهیم، می‌توان اسناد و داده‌های موردنیاز را در یک سیستم بازیابی نگهداری کرد و هنگام درخواست کاربر، بخش‌های مرتبط را پیدا کرد." },
        { heading: "کاربرد در محصولات", text: "این معماری می‌تواند در دستیارهای سازمانی، سیستم‌های پرسش‌وپاسخ، پایگاه دانش و بسیاری از محصولات AI مورد استفاده قرار بگیرد." },
        { heading: "دیدگاه", text: "به نظر من ارزش RAG فقط در «دادن اطلاعات بیشتر به مدل» نیست؛ بلکه در طراحی یک سیستم قابل‌کنترل برای دسترسی مدل به اطلاعات مرتبط است." }
      ]
    }
  },
  {
    id: "ai-agent-beyond-chatbot",
    date: "2026",
    image: "assets\\images\\idea\\ai-agent-cover.jpg",
    title: {
      en: "AI Agents: Beyond a Chatbot",
      fa: "AI Agent؛ فراتر از یک Chatbot"
    },
    description: {
      en: "When a language model doesn't just answer, but can interact with tools, the idea of an AI agent begins.",
      fa: "وقتی یک مدل زبانی فقط پاسخ نمی‌دهد و می‌تواند با ابزارها تعامل کند، مفهوم AI Agent وارد می‌شود."
    },
    content: {
      en: [
        { heading: "Introduction", text: "A chatbot usually takes a user's input and generates a text reply. An AI agent, however, can also use defined tools to actually carry out a task." },
        { heading: "From answering to doing", text: "For example, an agent can analyze a user's request, choose the right tool, and check the result of running it. In a file management agent, a user can ask to read, create, or manage a file, and the agent performs the action using its defined tools." },
        { heading: "Why tool calling matters", text: "The model shouldn't have direct access to the whole system on its own. Well-defined tools can constrain the agent's scope and make its actions more predictable." },
        { heading: "My take", text: "For me, the real difference between an agent and a chatbot is that an agent doesn't just talk about doing something — within a defined boundary, it can actually act to do it." }
      ],
      fa: [
        { heading: "مقدمه", text: "یک Chatbot معمولاً ورودی کاربر را دریافت می‌کند و پاسخ متنی تولید می‌کند. اما یک AI Agent می‌تواند علاوه بر تولید پاسخ، از ابزارهای مشخص برای انجام یک کار استفاده کند." },
        { heading: "از پاسخ دادن تا انجام دادن", text: "برای مثال، یک Agent می‌تواند درخواست کاربر را تحلیل کند، ابزار مناسب را انتخاب کند و نتیجه اجرای آن ابزار را بررسی کند. در یک File Management Agent، کاربر می‌تواند درخواست‌هایی مثل خواندن، ایجاد یا مدیریت یک فایل را مطرح کند و Agent با استفاده از ابزارهای تعریف‌شده این عملیات را انجام دهد." },
        { heading: "چرا Tool Calling مهم است؟", text: "مدل به‌تنهایی نباید مستقیماً به تمام سیستم دسترسی داشته باشد. ابزارهای مشخص می‌توانند محدوده کاری Agent را کنترل کنند و اجرای عملیات را قابل‌پیش‌بینی‌تر کنند." },
        { heading: "دیدگاه", text: "برای من، تفاوت اصلی Agent با یک Chatbot در این است که Agent فقط درباره انجام یک کار صحبت نمی‌کند؛ بلکه می‌تواند در یک محدوده مشخص، برای انجام آن کار اقدام کند." }
      ]
    }
  }
];

const ideasUI = {
  en: { pageTitle: "Ideas", pageSubtitle: "Thoughts, technical notes, and perspectives on AI and technology.", readMore: "Read More", back: "All Ideas", notFound: "This idea wasn't found." },
  fa: { pageTitle: "ایده‌ها", pageSubtitle: "دیدگاه‌ها، یادداشت‌های فنی و تحلیل‌های من درباره هوش مصنوعی و تکنولوژی.", readMore: "بیشتر بخوانید", back: "همه ایده‌ها", notFound: "این ایده پیدا نشد." }
};