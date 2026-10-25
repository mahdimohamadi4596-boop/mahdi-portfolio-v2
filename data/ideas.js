// ==========================================================================
// دیتای مرکزی Ideas — برای ایده جدید فقط یک آبجکت به آرایه ideas اضافه کن.
// image اختیاریه؛ اگه نباشه فقط متن نمایش داده میشه.
// content: آرایه‌ای از بلوک‌ها { heading, text } — heading اختیاریه (برای جمع‌بندی خالی بذار)
// ==========================================================================
const ideas = [
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
  },



  {
    id: "file-management-agent",
    date: "2026",
    image: "assets\\images\\idea\\file-agent-cover.jpg",
    title: {
      en: "AI File Management Agent",
      fa: "ایجنت هوشمند مدیریت فایل"
    },
    description: {
      en: "An AI-powered file management agent that runs in the terminal, understands natural language requests, searches file contents, analyzes documents, and performs file operations with user-controlled permissions.",
      fa: "یک ایجنت هوش مصنوعی برای مدیریت فایل‌های شخصی که در محیط ترمینال اجرا می‌شود، درخواست‌های زبان طبیعی را درک می‌کند، محتوای فایل‌ها را جست‌وجو و تحلیل می‌کند و عملیات مدیریتی را با کنترل دسترسی توسط کاربر انجام می‌دهد."
    },
    content: {
      en: [
        { heading: "Overview", text: "AI File Management Agent is an intelligent file management system designed to simplify working with personal files on a computer." },
        { text: "The Agent runs in a terminal environment and can access the files and folders that the user has authorized. It can read, summarize, and analyze supported files, find specific documents, examine their contents, and answer questions based on the information they contain." },
        { text: "It can also perform file management operations such as creating, copying, and moving files. Instead of manually searching through folders and opening numerous documents, users can describe what they need in natural language and let the Agent identify relevant files, extract information, or perform the requested operation." },
        { text: "The main focus of this project is intelligent file management, content-based search, natural language interaction, increased productivity, and the protection of user data." },

        { heading: "Problem", text: "People who work extensively with computers, such as programmers and researchers, often create large numbers of files and folders. As their collections grow, finding a specific file becomes increasingly difficult and time-consuming." },
        { text: "For example, a user may have hundreds of PDF files whose names do not clearly indicate their contents. Finding a document about a particular subject may require manually opening and reviewing numerous files." },
        { text: "Similarly, identifying all files with a specific extension in a folder and moving them to another location can take considerable time when performed manually." },
        { text: "Searching for files by their contents, reviewing documents, analyzing information, locating related files, and performing repetitive operations such as copying and moving files can become tedious, inefficient, and frustrating." },
        { text: "The main problem is the lack of a simple and intelligent way to search, inspect, and manage files according to the user's actual needs without repeatedly performing manual searches and routine operations." },

        { heading: "Solution", text: "The NEXRA team plans to develop a dedicated AI Agent for intelligent file management. The Agent will be able to read, analyze, and summarize authorized files and perform management operations such as creating, copying, and moving files." },
        { text: "With this Agent, users will no longer need to inspect numerous documents manually to find a file containing specific information or spend excessive time organizing folders and drives." },
        { text: "Users simply install and run the Agent, grant the required permissions, and describe their requests in natural language. The Agent then interprets the request, examines the authorized files, and attempts to achieve the desired result as quickly and accurately as possible." },
        { text: "The goal is to transform file management from a manual and time-consuming process into a simple, fast, and intelligent experience while keeping the user in control of access permissions and operations." },

        { heading: "Features", text: "", level: "root" },

        { heading: "1. Intelligent Task Execution", text: "Unlike conventional automation systems that rely on predefined commands, the Agent is designed to understand natural language requests and determine the steps required to complete a task.", level: "sub" },
        { text: "The user describes the desired outcome, and the Agent analyzes the request, selects appropriate tools, and executes the necessary steps within its authorized permissions." },
        { text: "Example:" },
        { text: "\"Find the document containing my AI project notes and show me its full path.\"" },
        { text: "The Agent identifies relevant files, examines their contents, and returns the most relevant results." },

        { heading: "2. Intelligent File Copying and Moving", text: "The Agent can identify files based on the user's instructions and help perform repetitive file operations without requiring the user to select every file manually.", level: "sub" },
        { text: "For example, the user can request that all TXT files in a specific folder be moved to another folder." },
        { text: "Before performing operations that require confirmation, the Agent asks for the user's approval and reports the result after execution." },

        { heading: "3. Reading, Summarization, and File Creation", text: "The Agent can examine supported file formats, summarize their contents, analyze relevant information, count files, and save results in a new file.", level: "sub" },
        { text: "This allows users to review information from multiple documents without opening each file individually." },
        { text: "For example, the Agent can summarize several research documents and save the collected summaries into a single file." },

        { heading: "4. Intelligent and Content-Based Search", text: "The Agent can search for files using their names, paths, file types, and contents. This makes it possible to find documents even when their filenames do not clearly describe their information.", level: "sub" },
        { text: "Example:" },
        { text: "\"Find book.txt, examine its contents, and show me its full path if it is actually about a lesson.\"" },
        { text: "The Agent locates the file, examines its contents, checks whether it matches the requested subject, and reports the result." },
        { text: "Users can also ask questions about their documents and receive answers based on the information found in authorized files." },

        { heading: "5. Security and Access Control", text: "The Agent operates only within the scope of the permissions granted by the user. Access to files and folders is controlled, and sensitive operations can require explicit confirmation before execution.", level: "sub" },
        { text: "The system is designed to verify operation results and report failures rather than assuming that every task has succeeded." },
        { text: "For remote access, only authorized Telegram accounts should be allowed to issue commands. Sensitive operations, such as deleting files, should require separate confirmation." },
        { text: "Security and user control are fundamental design requirements, not optional additions." },

        { heading: "6. Simple Terminal-Based Execution", text: "The Agent is designed to run in a command-line interface (CLI), providing a lightweight way to interact with the system without requiring a heavy graphical interface.", level: "sub" },
        { text: "After the project has been installed and configured, the user can launch the Agent with a command and interact with it through a conversational terminal environment." },

        { heading: "7. Remote Access Through Telegram", text: "A future extension of the project may connect the File Agent to a Telegram bot, allowing users to send text commands remotely and receive results from their personal computer.", level: "sub" },
        { text: "For example, users could ask the Agent to find PDF documents about artificial intelligence, summarize a specific document, or report the number of files in a folder." },
        { text: "The Agent would process the request on the user's computer and send back relevant information, file paths, or an operation report through Telegram." },
        { text: "The computer must be powered on, and the Agent must be running for remote requests to work. Access should be restricted to authorized Telegram accounts, and sensitive operations should require separate confirmation." },

        { heading: "Future Vision", text: "The ultimate goal is to develop an intelligent, reliable, and extensible file management system that reduces the time spent on routine computer tasks." },
        { text: "Users should be able to perform everyday operations by expressing their intentions in natural language, including searching, reviewing, analyzing, organizing, copying, and moving files." },
        { text: "The long-term vision is to make file management a simple, intelligent, and controllable process, allowing users to focus their time and attention on more important work instead of repetitive tasks." },
        { text: "Over time, the project could evolve from a lightweight terminal-based Agent into a more comprehensive file management system with advanced content search, document analysis, and secure remote access." }
      ],

      fa: [
        { heading: "تعریف ایده (Overview)", text: "ایجنت هوشمند مدیریت فایل، سیستمی مبتنی بر هوش مصنوعی است که با هدف ساده‌سازی مدیریت فایل‌های شخصی در کامپیوتر توسعه داده می‌شود." },
        { text: "این ایجنت در محیط ترمینال اجرا می‌شود و به فایل‌ها و پوشه‌هایی که کاربر مجوز دسترسی به آن‌ها را داده است، دسترسی دارد. ایجنت می‌تواند فایل‌های پشتیبانی‌شده را بخواند، خلاصه‌سازی و تحلیل کند، اسناد مشخصی را پیدا کند، محتوای آن‌ها را بررسی کند و بر اساس اطلاعات موجود در آن‌ها به سؤالات کاربر پاسخ دهد." },
        { text: "همچنین می‌تواند عملیات مدیریتی مانند ایجاد، کپی‌کردن و جابه‌جایی فایل‌ها را انجام دهد. به‌جای جست‌وجوی دستی میان پوشه‌ها و بازکردن تعداد زیادی سند، کاربر می‌تواند نیاز خود را به زبان طبیعی بیان کند تا ایجنت فایل‌های مرتبط را شناسایی کند، اطلاعات موردنیاز را استخراج کند یا عملیات درخواستی را انجام دهد." },
        { text: "تمرکز اصلی این پروژه بر مدیریت هوشمند فایل‌ها، جست‌وجوی مبتنی بر محتوا، تعامل به زبان طبیعی، افزایش بهره‌وری و محافظت از اطلاعات کاربر است." },

        { heading: "مشکل (Problem)", text: "افرادی که به‌طور گسترده با کامپیوتر کار می‌کنند، مانند برنامه‌نویسان و پژوهشگران، معمولاً تعداد زیادی فایل و پوشه ایجاد می‌کنند. با افزایش حجم اطلاعات، پیدا کردن فایل موردنظر به‌تدریج دشوارتر و زمان‌برتر می‌شود." },
        { text: "برای مثال، ممکن است کاربر صدها فایل PDF داشته باشد که نام آن‌ها به‌تنهایی اطلاعات کافی درباره محتوایشان ارائه نمی‌دهد. پیدا کردن سندی درباره یک موضوع مشخص می‌تواند مستلزم بازکردن و بررسی دستی تعداد زیادی فایل باشد." },
        { text: "همچنین، شناسایی تمام فایل‌های دارای یک پسوند مشخص در یک پوشه و انتقال آن‌ها به مکانی دیگر، در صورت انجام دستی، می‌تواند زمان زیادی نیاز داشته باشد." },
        { text: "جست‌وجوی فایل‌ها بر اساس محتوا، بررسی اسناد، تحلیل اطلاعات، پیدا کردن فایل‌های مرتبط و انجام عملیات تکراری مانند کپی‌کردن و جابه‌جایی فایل‌ها می‌تواند فرایندی خسته‌کننده، ناکارآمد و زمان‌بر باشد." },
        { text: "مشکل اصلی، نبود روشی ساده و هوشمند برای جست‌وجو، بررسی و مدیریت فایل‌ها بر اساس نیاز واقعی کاربر، بدون نیاز به جست‌وجوهای دستی مکرر و انجام عملیات تکراری است." },

        { heading: "راه‌حل (Solution)", text: "تیم NEXRA قصد دارد یک ایجنت هوش مصنوعی اختصاصی برای مدیریت هوشمند فایل‌ها توسعه دهد. این ایجنت می‌تواند فایل‌های مجاز کاربر را بخواند، تحلیل و خلاصه‌سازی کند و عملیات مدیریتی مانند ایجاد، کپی‌کردن و جابه‌جایی فایل‌ها را انجام دهد." },
        { text: "با استفاده از این ایجنت، کاربران دیگر نیازی ندارند برای پیدا کردن فایلی با محتوای مشخص، اسناد متعدد را به‌صورت دستی بررسی کنند یا برای مرتب‌سازی پوشه‌ها و درایوها زمان زیادی صرف کنند." },
        { text: "کافی است کاربر ایجنت را نصب و اجرا کند، دسترسی‌های موردنیاز را به آن بدهد و درخواست خود را به زبان طبیعی بیان کند. ایجنت درخواست را تحلیل می‌کند، فایل‌های مجاز را بررسی می‌کند و تلاش می‌کند در کوتاه‌ترین زمان ممکن و با دقت مناسب به نتیجه موردنظر برسد." },
        { text: "هدف این راه‌حل، تبدیل مدیریت فایل‌ها از فرایندی دستی و زمان‌بر به تجربه‌ای ساده، سریع و هوشمند است؛ درحالی‌که کنترل دسترسی‌ها و عملیات انجام‌شده در اختیار کاربر باقی می‌ماند." },

        { heading: "قابلیت‌های اصلی (Features)", text: "", level: "root" },

        { heading: "1. هوشمندی در انجام وظایف", text: "تفاوت این ایجنت با سیستم‌های اتوماسیون معمولی، توانایی درک درخواست‌های زبان طبیعی و تشخیص مراحل لازم برای انجام یک وظیفه است.", level: "sub" },
        { text: "کاربر نتیجه موردنظر خود را توضیح می‌دهد و ایجنت با تحلیل درخواست، انتخاب ابزار مناسب و اجرای مراحل موردنیاز، برای رسیدن به هدف اقدام می‌کند؛ البته فقط در محدوده دسترسی‌های مجاز." },
        { text: "مثال:" },
        { text: "«سندی را که حاوی یادداشت‌های پروژه هوش مصنوعی من است پیدا کن و مسیر کامل آن را نشان بده.»" },
        { text: "ایجنت فایل‌های مرتبط را شناسایی می‌کند، محتوای آن‌ها را بررسی می‌کند و نتایج مرتبط را در اختیار کاربر قرار می‌دهد." },

        { heading: "2. کپی و جابه‌جایی هوشمند فایل‌ها", text: "ایجنت می‌تواند فایل‌ها را بر اساس درخواست کاربر شناسایی کند و عملیات تکراری را بدون نیاز به انتخاب دستی تک‌تک فایل‌ها انجام دهد.", level: "sub" },
        { text: "برای مثال، کاربر می‌تواند درخواست کند تمام فایل‌های TXT موجود در یک پوشه به پوشه دیگری منتقل شوند." },
        { text: "پیش از انجام عملیات‌هایی که نیازمند تأیید هستند، ایجنت از کاربر اجازه می‌گیرد و پس از اجرا، نتیجه عملیات را گزارش می‌دهد." },

        { heading: "3. خواندن، خلاصه‌سازی و ساخت فایل", text: "ایجنت می‌تواند فایل‌های پشتیبانی‌شده را بررسی کند، محتوای آن‌ها را خلاصه‌سازی کند، اطلاعات مرتبط را تحلیل کند، تعداد فایل‌ها را مشخص کند و نتایج را در قالب یک فایل جدید ذخیره کند.", level: "sub" },
        { text: "این قابلیت به کاربر امکان می‌دهد بدون بازکردن جداگانه هر فایل، اطلاعات موجود در چندین سند را بررسی کند." },
        { text: "برای مثال، ایجنت می‌تواند چند سند پژوهشی را خلاصه کند و خلاصه‌های استخراج‌شده را در یک فایل واحد ذخیره کند." },

        { heading: "4. جست‌وجوی هوشمند و مبتنی بر محتوا", text: "ایجنت می‌تواند فایل‌ها را بر اساس نام، مسیر، نوع فایل و محتوای آن‌ها جست‌وجو کند. به این ترتیب، حتی زمانی که نام فایل اطلاعات کافی درباره محتوای آن ارائه نمی‌دهد، امکان پیدا کردن سند موردنظر وجود دارد.", level: "sub" },
        { text: "مثال:" },
        { text: "«فایل book.txt را پیدا کن، محتوایش را بررسی کن و اگر واقعاً درباره یک درس است، مسیر کامل آن را به من نشان بده.»" },
        { text: "ایجنت فایل را پیدا می‌کند، محتوای آن را بررسی می‌کند، ارتباط آن با موضوع موردنظر را می‌سنجد و نتیجه را گزارش می‌دهد." },
        { text: "کاربر همچنین می‌تواند درباره محتوای اسناد خود سؤال بپرسد و پاسخ را بر اساس اطلاعات موجود در فایل‌های مجاز دریافت کند." },

        { heading: "5. امنیت و کنترل دسترسی", text: "ایجنت فقط در محدوده مجوزهایی که کاربر تعیین کرده است فعالیت می‌کند. دسترسی به فایل‌ها و پوشه‌ها کنترل می‌شود و عملیات حساس می‌توانند پیش از اجرا به تأیید صریح کاربر نیاز داشته باشند.", level: "sub" },
        { text: "سیستم به‌گونه‌ای طراحی می‌شود که نتیجه عملیات را بررسی کند و در صورت بروز خطا، آن را گزارش دهد؛ نه اینکه بدون بررسی فرض کند تمام وظایف با موفقیت انجام شده‌اند." },
        { text: "در قابلیت دسترسی از راه دور، فقط حساب‌های تلگرام تأییدشده باید اجازه ارسال دستور داشته باشند. عملیات حساس، مانند حذف فایل، باید به تأیید جداگانه نیاز داشته باشند." },
        { text: "امنیت و حفظ کنترل کاربر، از اصول اصلی طراحی این پروژه هستند و نباید به قابلیت‌هایی اختیاری تبدیل شوند." },

        { heading: "6. اجرای ساده از طریق ترمینال", text: "این ایجنت برای اجرا در محیط خط فرمان (CLI) طراحی می‌شود تا بدون نیاز به یک رابط گرافیکی سنگین، روشی سبک برای تعامل با سیستم فراهم کند.", level: "sub" },
        { text: "پس از نصب و پیکربندی پروژه، کاربر می‌تواند ایجنت را با اجرای یک دستور راه‌اندازی کند و از طریق محیط تعاملی ترمینال با آن ارتباط برقرار کند." },

        { heading: "7. دسترسی از راه دور از طریق تلگرام", text: "در توسعه‌های آینده، امکان اتصال File Agent به یک ربات تلگرام وجود دارد تا کاربران بتوانند از راه دور به کامپیوتر شخصی خود دستور بدهند و نتیجه را دریافت کنند.", level: "sub" },
        { text: "برای مثال، کاربر می‌تواند از ایجنت بخواهد اسناد PDF مرتبط با هوش مصنوعی را پیدا کند، یک سند مشخص را خلاصه کند یا تعداد فایل‌های یک پوشه را گزارش دهد." },
        { text: "ایجنت درخواست را روی کامپیوتر کاربر پردازش می‌کند و اطلاعات مرتبط، مسیر فایل‌ها یا گزارش عملیات را از طریق تلگرام ارسال می‌کند." },
        { text: "برای اجرای درخواست‌های از راه دور، کامپیوتر باید روشن باشد و ایجنت در حال اجرا باشد. دسترسی باید به حساب‌های تلگرام مجاز محدود شود و عملیات حساس به تأیید جداگانه نیاز داشته باشند." },

        { heading: "هدف آینده (Future Vision)", text: "هدف نهایی، توسعه سیستمی هوشمند، قابل‌اعتماد و توسعه‌پذیر برای مدیریت فایل‌هاست که زمان موردنیاز برای انجام کارهای تکراری کامپیوتری را کاهش دهد." },
        { text: "کاربران باید بتوانند با بیان درخواست خود به زبان طبیعی، عملیات روزمره‌ای مانند جست‌وجو، بررسی، تحلیل، مرتب‌سازی، کپی‌کردن و جابه‌جایی فایل‌ها را انجام دهند." },
        { text: "چشم‌انداز بلندمدت این پروژه، تبدیل مدیریت فایل‌ها به فرایندی ساده، هوشمند و قابل‌کنترل است تا کاربران بتوانند به‌جای انجام کارهای تکراری، زمان و تمرکز خود را صرف فعالیت‌های مهم‌تر کنند." },
        { text: "این پروژه می‌تواند به‌مرور از یک ایجنت سبک مبتنی بر ترمینال به سیستمی جامع‌تر برای مدیریت فایل‌ها، جست‌وجوی پیشرفته در محتوا، تحلیل اسناد و دسترسی امن از راه دور تبدیل شود." }
      ]
    }
  },




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
    en: { pageTitle: "Ideas", pageSubtitle: "Thoughts, technical notes, and perspectives on AI and technology.", readMore: "Read More", back: "All Ideas", notFound: "This idea wasn't found.", share: "Share", shareTelegram: "Telegram", shareCopy: "Copy Link", shareNative: "More options…", copied: "Link copied" },
      fa: { pageTitle: "ایده‌ها", pageSubtitle: "دیدگاه‌ها، یادداشت‌های فنی و تحلیل‌های من درباره هوش مصنوعی و تکنولوژی.", readMore: "بیشتر بخوانید", back: "همه ایده‌ها", notFound: "این ایده پیدا نشد.", share: "اشتراک‌گذاری", shareTelegram: "تلگرام", shareCopy: "کپی لینک", shareNative: "گزینه‌های بیشتر…", copied: "لینک کپی شد" }
};