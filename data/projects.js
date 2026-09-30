// ==========================================================================
// دیتای مرکزی پروژه‌ها — برای پروژه جدید فقط یک آبجکت به آرایه projects اضافه کن.
// فیلدهای اختیاری (نذاری یا خالی باشه => آن بخش نمایش داده نمیشه):
//   cover, overview, problem, solution, features, architecture, gallery, github, demo, code
// تصاویر: assets/images/projects/<id>/  (cover.jpg و 1.jpg, 2.jpg, ...)
// ==========================================================================
const projects = [
  {
    id: "lumi",
    name: "LUMI",
    description: { // Caption
      en: "A Persian AI psychological assistant designed for self-reflection, emotional support, and improving focus, motivation, and personal growth.",
      fa: "دستیار هوش مصنوعی روان‌شناختی فارسی برای خودشناسی، حمایت احساسی و بهبود تمرکز، انگیزه و رشد فردی."
    },
    cover: "assets/images/projects/lumi/lumi-cover.jpg",
    overview: {
      en: "LUMI is a Persian AI assistant designed to help users through natural conversation with self-reflection, better understanding and management of emotions, focus, motivation, and personal growth.",
      fa: "LUMI یک دستیار هوش مصنوعی فارسی است که از طریق گفت‌وگوی طبیعی، به کاربران در خودشناسی، مدیریت و درک بهتر احساسات، تمرکز، انگیزه و رشد فردی کمک می‌کند."
    },
    problem: {
      en: "Many AI assistants are primarily developed for English and general-purpose use, while access to a Persian experience focused on self-reflection and emotional support, with awareness of conversational context, is more limited.",
      fa: "بسیاری از دستیارهای هوش مصنوعی با تمرکز بر زبان انگلیسی و کاربردهای عمومی توسعه یافته‌اند؛ در حالی که دسترسی به یک تجربه فارسی، متناسب با زمینه گفتگو و متمرکز بر خودشناسی و حمایت احساسی، محدودتر است."
    },
    solution: {
      en: "LUMI combines a language model with Retrieval-Augmented Generation (RAG) and a vector database to provide relevant information to the model and generate responses that are better aligned with the conversation context and content.",
      fa: "LUMI یک مدل زبانی را با سیستم بازیابی اطلاعات (RAG) و پایگاه داده برداری ترکیب می‌کند تا اطلاعات مرتبط را در اختیار مدل قرار داده و پاسخ‌هایی متناسب‌تر با زمینه و محتوای گفتگو تولید کند."
    },
    features: {
      en: ["Natural Persian conversation", "Context retrieval with RAG and ChromaDB", "Local (Ollama) and cloud (OpenRouter) model support", "Focus on reflection, motivation, and personal development"],
      fa: ["گفتگوی طبیعی به زبان فارسی", "بازیابی زمینه با RAG و ChromaDB", "پشتیبانی از مدل‌های محلی (Ollama) و ابری (OpenRouter)", "تمرکز بر خودشناسی، انگیزه و رشد فردی"]
    },
    tech: ["Python", "FastAPI", "LLM", "RAG", "ChromaDB", "Ollama", "OpenRouter"],
    architecture: {
      en: ["User sends a message", "FastAPI backend receives the request", "Relevant context is retrieved from ChromaDB", "LLM (Ollama / OpenRouter) generates the reply"],
      fa: ["کاربر پیام می‌فرستد", "بک‌اند FastAPI درخواست را دریافت می‌کند", "اطلاعات مرتبط از ChromaDB بازیابی می‌شود", "مدل زبانی (Ollama / OpenRouter) پاسخ را تولید می‌کند"]
    },
    gallery: [
      "assets/images/projects/lumi/1.jpg",
      "assets/images/projects/lumi/2.jpg",
      "assets/images/projects/lumi/3.jpg",
      "assets/images/projects/lumi/4.jpg"
    ],
    github: "",
    demo: ""
  },


  {
    id: "ai-file-agent",
    name: "AI File Management Agent",
    description: {
      en: "An AI agent that can understand user requests and safely interact with files through controlled tools and permissions.",
      fa: "یک ایجنت هوش مصنوعی که درخواست کاربر را می‌فهمد و از طریق ابزارها و دسترسی‌های کنترل‌شده با فایل‌ها تعامل امن برقرار می‌کند."
    },
    cover: "assets/images/projects/ai-file-agent/cover.jpg",
    overview: {
      en: "An AI agent that understands natural-language requests and works with files through a controlled set of tools, always within defined permissions.",
      fa: "ایجنتی هوش مصنوعی که درخواست‌های زبان طبیعی را می‌فهمد و از طریق مجموعه‌ای از ابزارهای کنترل‌شده و در چارچوب دسترسی‌های تعریف‌شده با فایل‌ها کار می‌کند."
    },
    problem: {
      en: "Giving an AI direct access to files is risky: without limits, a wrong action can modify or delete important data.",
      fa: "دادن دسترسی مستقیم به فایل‌ها به هوش مصنوعی پرریسک است: بدون محدودیت، یک اقدام اشتباه می‌تواند داده مهمی را تغییر دهد یا حذف کند."
    },
    solution: {
      en: "Every action goes through explicit tools and permission checks, so the agent can only do what it is allowed to do.",
      fa: "هر اقدام از طریق ابزارهای مشخص و بررسی دسترسی انجام می‌شود، بنابراین ایجنت فقط کارهای مجاز را انجام می‌دهد."
    },
    features: {
      en: ["Natural-language file requests", "Tool calling for every action", "Permission checks before execution", "Fast inference with Groq"],
      fa: ["درخواست‌های فایل به زبان طبیعی", "Tool Calling برای هر اقدام", "بررسی دسترسی پیش از اجرا", "استنتاج سریع با Groq"]
    },
    tech: ["Python", "LLM", "Groq", "Tool Calling", "Agent Architecture"],
    architecture: {
      en: ["User describes the task", "LLM (Groq) chooses a tool", "Permission layer validates the action", "Tool runs and returns the result"],
      fa: ["کاربر کار را توضیح می‌دهد", "مدل زبانی (Groq) ابزار مناسب را انتخاب می‌کند", "لایه دسترسی اقدام را اعتبارسنجی می‌کند", "ابزار اجرا می‌شود و نتیجه برمی‌گردد"]
    },
    gallery: [], // خالی => بخش Gallery نمایش داده نمیشه
    github: "",
    demo: "",
    code: { // نمونه — با کد واقعی خودت عوض کن؛ اگه نخوای این بخش رو حذف کن
      language: "python",
      snippet: `import os

WORK_DIR = "agent_files"


def list_files():
    return os.listdir(WORK_DIR)


def read_file(name):
    path = os.path.join(WORK_DIR, name)
    with open(path, "r", encoding="utf-8") as f:
        return f.read()


def write_file(name, content):
    path = os.path.join(WORK_DIR, name)
    with open(path, "w", encoding="utf-8") as f:
        f.write(content)


def delete_file(name):
    path = os.path.join(WORK_DIR, name)
    if os.path.exists(path):
        os.remove(path)
        return "Deleted"
    return "File not found"


def agent(command):
    parts = command.split(" ", 2)
    action = parts[0]

    if action == "list":
        return list_files()

    elif action == "read":
        return read_file(parts[1])

    elif action == "write":
        write_file(parts[1], parts[2])
        return "Created"

    elif action == "delete":
        return delete_file(parts[1])

    return "Unknown command"


os.makedirs(WORK_DIR, exist_ok=True)

while True:
    command = input("Agent > ")

    if command == "exit":
        break

    try:
        print(agent(command))
    except Exception as e:
        print("Error:", e)`
    }
  },


  {
    id: "lumina",
    name: "LUMINA",
    description: { // Caption
      en: "A smart Windows CLI assistant for faster, more convenient command execution and file interaction.",
      fa: "دستیار هوشمند ویندوز CLI برای اجرای راحت و سریع تر دستورات و ارتباط با فایل ها"
    },
    cover: "assets/images/projects/lumina/cover.jpg",
    overview: {
      en: "LUMINA is a smart Windows command-line assistant designed to speed up tasks—such as creating files or generating PDFs from templates—allowing you to have a smart assistant by your side while you work on a project.",
      fa: "لومینا یک دستیار هوشمند ویندوز کامند فرمان برای اجرای سریع‌تر دستورات مانند ساخت فایل یا ساخت PDF با قالب آماده که به شما این امکان را میدهد زمانی که دارید روی یک پروژه کار میکنید یک دستیار هوشمند کنار خود داشته باشد برای کار با فایل ها ساخت PDF ارتبا با سخت افزار و ..."
    },
    problem: {
      en: "For example, when you are coding and need to create a file, copy it, and place it elsewhere, you have to switch between files to ultimately place that single file in multiple locations.",
      fa: "برای مثال زمانی که شما درحال کدنویسی هستید نیاز دارید یک فایل بسازید ان را کپی کنید و در جای دیگری بگذاری و برای این کار باید بین فایل ها جابجا شوید تا در نهایت یک فایل را در چند جا بگذارید."
    },
    solution: {
      en: "Lumina allows you to access all your files and hardware through a simple application with a terminal-like interface, and simplifies your tasks using pre-designed scripts.",
      fa: "لومینا به شما این امکان را میدهد با یک برنامه ساده که محیطی شبیه به ترمینال دارد به تمام فایل های خود دسترسی داشته باشید، به سخت افزار دسترسی داشته باشید و با اسکریپت های از قبل طراحی شده کار خود را راحت تر کنید."
    },
    features: {
      en: ["High-speed file management", "A lightweight application compatible with all types of hardware.", "Ready-made PDF and Word templates", "Reading and writing documents"],
      fa: ["سرعت بالای مدیریت فایل", "برنامه سبک و قابل استفاده در همه نوع سخت‌افزار", "قالب های اماده PDFو word", "خواندن نوشتن در اسناد"]
    },
    tech: ["Python", "CustomTkinter", "Machine Learning (ML)", "Windows API / OS", "File System", "PDF Generation", "Audio Playback"],
    architecture: {
      en: ["Receives commands such as help, cf, or cp.", "Identifies the command and routes it to the appropriate tool.", "Collects the required inputs for the operation.", "Executes the operation on Windows and displays the result."],
      fa: ["دریافت دستور از کاربر مثل help، cf یا cp.", "تشخیص دستور و هدایت آن به ابزار مربوطه.", "گرفتن ورودی‌های موردنیاز برای اجرای عملیات.", "اجرای عملیات روی ویندوز و نمایش نتیجه."]
    },
    gallery: [],
    github: "",
    demo: "",
      code: { // نمونه — با کد واقعی خودت عوض کن؛ اگه نخوای این بخش رو حذف کن
      language: "python",
      snippet: `
# Example code for creating a file
# This is only a simple example and is not part of LUMINA.

filename = input("File name: ")

with open(filename, "w") as file:
    pass

print(f"{filename} created successfully.")

**Note:** This is a standalone example to demonstrate the basic file creation process and is not part of the LUMINA source code.
`
    }  
  },
];

// متن‌های رابط صفحات Projects (دوزبانه)
const projectsUI = {
  en: {
    title: "Projects", subtitle: "A selection of AI products and agents I've built.",
    view: "View Project", back: "All Projects", notFound: "Project not found.",
    overview: "Overview", problem: "Problem", solution: "Solution", features: "Features",
    stack: "Tech Stack", how: "Architecture / How It Works", gallery: "Gallery",
    demo: "Live Demo", github: "Source Code", code: "Code Showcase",
    more: "More", less: "Less", copy: "Copy", copied: "Copied!"
  },
  fa: {
    title: "پروژه‌ها", subtitle: "مجموعه‌ای از محصولات و ایجنت‌های هوش مصنوعی که ساخته‌ام.",
    view: "مشاهده پروژه", back: "همه پروژه‌ها", notFound: "پروژه‌ای پیدا نشد.",
    overview: "درباره پروژه", problem: "مسئله", solution: "راه‌حل", features: "ویژگی‌ها",
    stack: "تکنولوژی‌ها", how: "معماری / نحوه کار", gallery: "گالری",
    demo: "دموی آنلاین", github: "کد منبع", code: "نمونه کد",
    more: "بیشتر", less: "کمتر", copy: "کپی", copied: "کپی شد!"
  }
};

// توابع کمکی مشترک بین صفحات
function pText(obj, lang) { return (obj && (obj[lang] || obj.en)) || ""; }
function esc(s) {
  return String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}