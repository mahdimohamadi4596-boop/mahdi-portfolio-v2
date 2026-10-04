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
  },



  {
    id: "python-ai-coding-mentor",
    date: "2026",
    image: "assets\\images\\idea\\ai-coding-mentor-cover.jpg",
    title: {
      en: "Python AI Coding Mentor",
      fa: "منتور هوشمند کدنویسی Python"
    },
    description: {
      en: "Python AI Coding Mentor is an Agent-based smart coding assistant designed to help programmers, especially those on their Python learning path.",
      fa: "Python AI Coding Mentor یک دستیار هوشمند کدنویسی مبتنی بر Agent است که برای کمک به برنامه‌نویسان، مخصوصاً افراد در مسیر یادگیری Python، طراحی می‌شود."
    },
    content: {
      en: [
        { heading: "Overview", text: "Python AI Coding Mentor is an Agent-based smart coding assistant designed to help programmers, especially those on their Python learning path." },
        { text: "This Agent runs in a CLI environment and, by sitting alongside the user's project, can examine the project structure and its files, find problems in the code, suggest solutions, and, with the user's approval, apply the necessary changes." },
        { text: "The goal of this project is to build a lightweight, open-source, customizable smart assistant that, besides helping with software development, also helps the programmer learn better." },

        { heading: "Problem", text: "Beginner and even intermediate programmers usually face the following problems:" },
        { text: "• Finding the cause of programming errors takes a lot of time." },
        { text: "• Constantly using general-purpose AI tools requires manually sending files and re-explaining the project." },
        { text: "• Professional Coding Agent tools usually have a monthly subscription cost." },
        { text: "• Many tools only give answers, but don't explain the cause of the problem in an educational way." },

        { heading: "Solution", text: "Python AI Coding Mentor sits alongside the user's project as an Agent." },
        { text: "How it works:" },
        { text: "1. The user places the Agent inside their Python project." },
        { text: "2. The Agent runs and gets access to the project files." },
        { text: "3. The user makes their request." },
        { text: "Example:" },
        { text: "Review the main.py file and find its error." },
        { text: "The Agent:" },
        { text: "• Examines the project structure." },
        { text: "• Finds the related files." },
        { text: "• Analyzes the problem." },
        { text: "• Explains the cause of the error." },
        { text: "• Suggests a solution." },
        { text: "• With the user's approval, applies the changes." },
        { text: "• Runs tests to make sure the problem is solved." },

        { heading: "Features", text: "", level: "root" },

        { heading: "1. Auto Testing Loop", text: "After making a change, the Agent doesn't just hand over the code.", level: "sub" },
        { text: "Process:" },
        { text: "Analyze → Modify → Test → Fix" },
        { text: "It performs this to make sure the changes haven't caused new problems." },

        { heading: "2. Multi Model Support", text: "The user can use different models depending on their needs:", level: "sub" },
        { text: "• Powerful models for complex analysis" },
        { text: "• Fast models for simple tasks" },
        { text: "• Local models to reduce cost and preserve privacy" },

        { heading: "3. Specialized Focus on Python", text: "Instead of competing directly with general-purpose tools, this Agent focuses on Python:", level: "sub" },
        { text: "• Analyzing Python errors" },
        { text: "• Explaining programming concepts" },
        { text: "• Suggesting better ways to write code" },
        { text: "• Helping with step-by-step learning" },

        { heading: "4. Learning Mode", text: "The Agent's goal isn't only to fix code; it's to help the programmer grow.", level: "sub" },
        { text: "Example:" },
        { text: "Instead of:" },
        { text: "\"Change line 34\"" },
        { text: "The Agent explains:" },
        { text: "\"The problem with this line is caused by using a variable before it was assigned a value. In Python, the assignment must come first.\"" },

        { heading: "Future Vision", text: "The ultimate goal is to turn this project into a smart Python assistant that acts like a Mentor alongside the programmer." },
        { text: "An open-source Agent that:" },
        { text: "• Understands the project." },
        { text: "• Pays attention to the user's coding style." },
        { text: "• Finds problems." },
        { text: "• Provides solutions." },
        { text: "• Alongside the user, helps them learn programming better." },
        { text: "Over time, this project can grow from a simple CLI tool into a complete platform for learning and developing Python." }
      ],
      fa: [
        { heading: "تعریف ایده (Overview)", text: "Python AI Coding Mentor یک دستیار هوشمند کدنویسی مبتنی بر Agent است که برای کمک به برنامه‌نویسان، مخصوصاً افراد در مسیر یادگیری Python، طراحی می‌شود." },
        { text: "این Agent در محیط CLI اجرا می‌شود و با قرار گرفتن در کنار پروژه کاربر، می‌تواند ساختار پروژه و فایل‌های آن را بررسی کند، مشکلات کد را پیدا کند، راه‌حل پیشنهاد دهد و در صورت تأیید کاربر تغییرات لازم را اعمال کند." },
        { text: "هدف این پروژه ساخت یک دستیار هوشمند سبک، متن‌باز و قابل شخصی‌سازی است که علاوه بر کمک در توسعه نرم‌افزار، باعث یادگیری بهتر برنامه‌نویس نیز شود." },

        { heading: "مشکل (Problem)", text: "برنامه‌نویسان تازه‌کار و حتی متوسط معمولاً با مشکلات زیر روبه‌رو هستند:" },
        { text: "• پیدا کردن دلیل خطاهای برنامه‌نویسی زمان زیادی می‌گیرد." },
        { text: "• استفاده مداوم از ابزارهای هوش مصنوعی عمومی نیازمند ارسال دستی فایل‌ها و توضیح دوباره پروژه است." },
        { text: "• ابزارهای حرفه‌ای Coding Agent معمولاً هزینه اشتراک ماهانه دارند." },
        { text: "• بسیاری از ابزارها فقط جواب می‌دهند، اما دلیل مشکل را به شکل آموزشی توضیح نمی‌دهند." },

        { heading: "راه‌حل (Solution)", text: "Python AI Coding Mentor به عنوان یک Agent همراه پروژه کاربر قرار می‌گیرد." },
        { text: "روند کار:" },
        { text: "1. کاربر Agent را داخل پروژه Python خود قرار می‌دهد." },
        { text: "2. Agent اجرا می‌شود و به فایل‌های پروژه دسترسی پیدا می‌کند." },
        { text: "3. کاربر درخواست خود را مطرح می‌کند." },
        { text: "مثال:" },
        { text: "فایل main.py را بررسی کن، خطای آن را پیدا کن." },
        { text: "Agent:" },
        { text: "• ساختار پروژه را بررسی می‌کند." },
        { text: "• فایل‌های مرتبط را پیدا می‌کند." },
        { text: "• مشکل را تحلیل می‌کند." },
        { text: "• دلیل خطا را توضیح می‌دهد." },
        { text: "• راه‌حل پیشنهاد می‌دهد." },
        { text: "• در صورت تأیید کاربر، تغییرات را اعمال می‌کند." },
        { text: "• تست اجرا می‌کند تا مطمئن شود مشکل حل شده است." },

        { heading: "قابلیت‌های اصلی (Features)", text: "", level: "root" },

        { heading: "1. تست و اصلاح خودکار (Auto Testing Loop)", text: "Agent بعد از ایجاد تغییر فقط کد را تحویل نمی‌دهد.", level: "sub" },
        { text: "فرآیند:" },
        { text: "Analyze → Modify → Test → Fix" },
        { text: "را انجام می‌دهد تا مطمئن شود تغییرات باعث ایجاد مشکل جدید نشده‌اند." },

        { heading: "2. پشتیبانی از مدل‌های مختلف هوش مصنوعی (Multi Model Support)", text: "کاربر می‌تواند با توجه به نیاز خود از مدل‌های مختلف استفاده کند:", level: "sub" },
        { text: "• مدل‌های قدرتمند برای تحلیل‌های پیچیده" },
        { text: "• مدل‌های سریع برای کارهای ساده" },
        { text: "• مدل‌های محلی برای کاهش هزینه و حفظ حریم خصوصی" },

        { heading: "3. تمرکز تخصصی روی Python", text: "به جای رقابت مستقیم با ابزارهای عمومی، این Agent روی Python تمرکز می‌کند:", level: "sub" },
        { text: "• تحلیل خطاهای Python" },
        { text: "• توضیح مفاهیم برنامه‌نویسی" },
        { text: "• پیشنهاد روش بهتر نوشتن کد" },
        { text: "• کمک در یادگیری مرحله‌به‌مرحله" },

        { heading: "4. حالت آموزشی (Learning Mode)", text: "هدف Agent فقط اصلاح کد نیست؛ بلکه کمک به رشد برنامه‌نویس است.", level: "sub" },
        { text: "مثال:" },
        { text: "به جای:" },
        { text: "\"خط 34 را تغییر بده\"" },
        { text: "Agent توضیح می‌دهد:" },
        { text: "\"مشکل این خط به دلیل استفاده از متغیری است که قبل از مقداردهی استفاده شده. در Python باید ابتدا مقداردهی انجام شود.\"" },

        { heading: "هدف آینده (Future Vision)", text: "هدف نهایی تبدیل این پروژه به یک دستیار هوشمند Python است که مانند یک Mentor همراه برنامه‌نویس عمل کند." },
        { text: "یک Agent متن‌باز که:" },
        { text: "• پروژه را درک می‌کند." },
        { text: "• به سبک کدنویسی کاربر توجه می‌کند." },
        { text: "• مشکلات را پیدا می‌کند." },
        { text: "• راه‌حل ارائه می‌دهد." },
        { text: "• در کنار کاربر باعث یادگیری بهتر برنامه‌نویسی می‌شود." },
        { text: "این پروژه می‌تواند به مرور از یک ابزار CLI ساده به یک پلتفرم کامل برای یادگیری و توسعه Python تبدیل شود." }
      ]
    }
  }
];

const ideasUI = {
    en: { pageTitle: "Ideas", pageSubtitle: "Thoughts, technical notes, and perspectives on AI and technology.", readMore: "Read More", back: "All Ideas", notFound: "This idea wasn't found.", share: "Share", shareTelegram: "Telegram", shareCopy: "Copy Link", shareNative: "More options…", copied: "Link copied" },
      fa: { pageTitle: "ایده‌ها", pageSubtitle: "دیدگاه‌ها، یادداشت‌های فنی و تحلیل‌های من درباره هوش مصنوعی و تکنولوژی.", readMore: "بیشتر بخوانید", back: "همه ایده‌ها", notFound: "این ایده پیدا نشد.", share: "اشتراک‌گذاری", shareTelegram: "تلگرام", shareCopy: "کپی لینک", shareNative: "گزینه‌های بیشتر…", copied: "لینک کپی شد" }
};