// Mycology & Foraging Education Hub - Fully Responsive Navbar
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  // Theme Colors:
  // Primary (Brand/CTA): #C65D3B (Rust Orange)
  // Secondary (Highlights/Active): #6C7A4E (Olive Green)
  // Text Primary: #1A1A1A (Soft Black)
  // Text Secondary: #FFFFFF (White)
  // Backgrounds: Light (#F7F5F0 - Earthy Off-White), Dark (#1A1A1A - Soft Black)

  navbar.innerHTML = `
<nav class="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-[#F7F5F0] dark:bg-[#1A1A1A] border-b border-[#6C7A4E30] shadow-sm">
  <div class="container mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-20 md:h-24">

      <a href="index.html" class="flex items-center gap-3 group shrink-0 z-[60]">
        <div class="w-1.5 h-10 bg-[#C65D3B] rounded-full group-hover:bg-[#6C7A4E] transition-colors duration-300"></div>
        <div class="flex flex-col">
          <span class="text-xl font-serif font-black tracking-widest uppercase text-[#1A1A1A] dark:text-[#FFFFFF]">
            MYCO<span class="text-[#C65D3B]">SPORE</span>
          </span>
          <span class="text-[9px] tracking-[0.25em] uppercase text-[#6C7A4E] font-bold leading-none mt-1">Foraging & Education</span>
        </div>
      </a>

      <div id="desktopNav" class="nav hidden xl:flex flex-1 justify-center items-center space-x-2 font-medium text-[14px]">
        
        <div class="relative group/home">
          <button id="homeBtn" class="nav-link flex items-center space-x-1 px-3 py-2 transition-all duration-300 text-[#1A1A1A] dark:text-gray-200">
            <span>Home</span>
            <i class="fas fa-chevron-down text-[10px] transition-transform duration-300 group-hover/home:rotate-180 text-[#6C7A4E]"></i>
          </button>
          <div id="homeMenu" class="hidden absolute left-0 mt-2 w-48 bg-[#F7F5F0] dark:bg-[#242424] rounded-md shadow-xl py-2 z-50 border border-[#6C7A4E30]">
            <a href="index.html" class="dropdown-link block px-4 py-2 text-sm text-[#1A1A1A] dark:text-gray-200 hover:bg-[#6C7A4E15] hover:text-[#6C7A4E]">Home 1</a>
            <a href="home2.html" class="dropdown-link block px-4 py-2 text-sm text-[#1A1A1A] dark:text-gray-200 hover:bg-[#6C7A4E15] hover:text-[#6C7A4E]">Home 2</a>
          </div>
        </div>
        <a href="about.html" class="nav-link px-3 py-2 text-[#1A1A1A] dark:text-gray-200">About</a>
        <a href="blog.html" class="nav-link px-3 py-2 text-[#1A1A1A] dark:text-gray-200">Blog</a>


        <a href="guide.html" class="nav-link px-3 py-2 text-[#1A1A1A] dark:text-gray-200">Field Guide</a>
        <a href="courses.html" class="nav-link px-3 py-2 text-[#1A1A1A] dark:text-gray-200">Courses</a>
        <a href="community.html" class="nav-link px-3 py-2 text-[#1A1A1A] dark:text-gray-200">Community</a>
        <a href="contact.html" class="nav-link px-3 py-2 text-[#1A1A1A] dark:text-gray-200">Contact</a>

        <div class="relative group/dash">
          <button id="dashboardBtn" class="nav-link flex items-center space-x-1 px-3 py-2 transition-all duration-300 text-[#1A1A1A] dark:text-gray-200">
            <span>Dashboard</span>
            <i class="fas fa-chevron-down text-[10px] transition-transform duration-300 group-hover/dash:rotate-180 text-[#6C7A4E]"></i>
          </button>
          <div id="dashboardMenu" class="hidden absolute left-0 mt-2 w-56 bg-[#F7F5F0] dark:bg-[#242424] rounded-md shadow-xl py-2 z-50 border border-[#6C7A4E30]">
            <a href="user.html" class="dropdown-link block px-4 py-2 text-sm text-[#1A1A1A] dark:text-gray-200 hover:bg-[#6C7A4E15] hover:text-[#6C7A4E]"><i class="fas fa-chart-line w-5"></i> User</a>
            <a href="admin.html" class="dropdown-link block px-4 py-2 text-sm text-[#1A1A1A] dark:text-gray-200 hover:bg-[#6C7A4E15] hover:text-[#6C7A4E]"><i class="fas fa-book-open w-5"></i> Admin</a>
            </div>
        </div>
      </div>

      <div class="hidden xl:flex items-center gap-5 shrink-0">
        <div class="flex items-center gap-2">
          <button id="rtlToggle" class="w-10 h-10 flex items-center justify-center bg-[#EBE7DF] dark:bg-[#2A2A2A] border border-[#6C7A4E30] rounded-full text-[11px] font-bold text-gray-600 dark:text-gray-300 hover:text-[#C65D3B] hover:border-[#C65D3B] transition-all">
            RTL
          </button>
          <button id="darkToggle" class="w-10 h-10 flex items-center justify-center bg-[#EBE7DF] dark:bg-[#2A2A2A] border border-[#6C7A4E30] rounded-full text-gray-600 dark:text-gray-300 hover:text-[#C65D3B] hover:border-[#C65D3B] transition-all">
            <i id="darkIcon" class="fas fa-moon"></i>
          </button>
        </div>
        <div class="flex items-center gap-3">
            <a href="login.html" class="px-6 py-2.5 bg-[#6C7A4E] text-[#FFFFFF] rounded-md font-bold text-[12px] uppercase tracking-widest hover:bg-black shadow-lg shadow-[#C65D3B]/20 transition-all">Log In</a>
            <a href="signup.html" class="px-6 py-2.5 bg-[#C65D3B] text-[#FFFFFF] rounded-md font-bold text-[12px] uppercase tracking-widest hover:bg-black shadow-lg shadow-[#C65D3B]/20 transition-all">Sign Up</a>
        </div>
      </div>

      <div class="xl:hidden flex items-center h-full z-[60]">
        <button id="mobileBtn" class="w-10 h-10 flex items-center justify-center text-[#C65D3B] focus:outline-none">
          <i id="mobileIcon" class="fas fa-bars text-2xl"></i>
        </button>
      </div>
    </div>

    <div id="mobileMenu" class="fixed inset-0 bg-[#F7F5F0] dark:bg-[#1A1A1A] z-50 flex-col px-6 pt-24 pb-20 xl:hidden hidden overflow-y-auto">
      <div id="mobileNavLinks" class="flex flex-col gap-1 text-lg font-medium">
        
        <div class="w-full border-b border-[#6C7A4E20]">
          <button id="mobileHomeBtn" class="flex items-center justify-between w-full py-4 text-[#1A1A1A] dark:text-[#FFFFFF]">
            <span>Home</span>
            <i id="mobileHomeIcon" class="fas fa-chevron-down text-sm transition-transform duration-300"></i>
          </button>
          <div id="mobileHomeMenu" class="hidden flex-col bg-[#6C7A4E08] border-l-2 border-[#6C7A4E] ml-2 mb-2 rounded-r-md">
            <a href="index.html" class="mobile-sublink px-6 py-3 text-[#1A1A1A] dark:text-gray-300">Home 1</a>
            <a href="home2.html" class="mobile-sublink px-6 py-3 text-[#1A1A1A] dark:text-gray-300">Home 2</a>
          </div>
        </div>
        <a href="about.html" class="mobile-link py-4 border-b border-[#6C7A4E20] text-[#1A1A1A] dark:text-[#FFFFFF]">About</a>
        <a href="blog.html" class="mobile-link py-4 border-b border-[#6C7A4E20] text-[#1A1A1A] dark:text-[#FFFFFF]">Blog</a>

        <a href="guide.html" class="mobile-link py-4 border-b border-[#6C7A4E20] text-[#1A1A1A] dark:text-[#FFFFFF]">Field Guide</a>
        <a href="courses.html" class="mobile-link py-4 border-b border-[#6C7A4E20] text-[#1A1A1A] dark:text-[#FFFFFF]">Courses</a>
        <a href="community.html" class="mobile-link py-4 border-b border-[#6C7A4E20] text-[#1A1A1A] dark:text-[#FFFFFF]">Community</a>
        <a href="contact.html" class="mobile-link py-4 border-b border-[#6C7A4E20] text-[#1A1A1A] dark:text-[#FFFFFF]">contact</a>

        <div class="w-full border-b border-[#6C7A4E20]">
          <button id="mobileDashboardBtn" class="flex items-center justify-between w-full py-4 text-[#1A1A1A] dark:text-[#FFFFFF]">
            <span class="flex items-center gap-2"> Dashboard</span>
            <i id="mobileDashboardIcon" class="fas fa-chevron-down text-sm transition-transform duration-300"></i>
          </button>
          <div id="mobileDashboardMenu" class="hidden flex-col bg-[#6C7A4E08] border-l-2 border-[#6C7A4E] ml-2 mb-2 rounded-r-md">
            <a href="user.html" class="mobile-sublink px-6 py-3 text-[#1A1A1A] dark:text-gray-300"><i class="fas fa-chart-line w-5 text-[#C65D3B]"></i> User</a>
            <a href="admin.html" class="mobile-sublink px-6 py-3 text-[#1A1A1A] dark:text-gray-300"><i class="fas fa-book-open w-5 text-[#C65D3B]"></i> Admin</a>
           </div>
        </div>

      </div>

      <div class="btns mt-auto pt-8 flex flex-col gap-6">
        <div class="flex items-center gap-4">
          <button id="mobileRtlToggle" class="flex-1 flex items-center justify-center gap-2 bg-[#EBE7DF] dark:bg-[#2A2A2A] p-4 rounded-md border border-[#6C7A4E30] font-bold text-gray-700 dark:text-gray-300 hover:text-[#C65D3B] transition-all">
            <i class="fas fa-language text-xl"></i> RTL
          </button>
          <button id="mobileDarkToggle" class="flex-1 flex items-center justify-center gap-2 bg-[#EBE7DF] dark:bg-[#2A2A2A] p-4 rounded-md border border-[#6C7A4E30] font-bold text-gray-700 dark:text-gray-300 hover:text-[#C65D3B] transition-all">
            <i id="mobileDarkIcon" class="fas fa-moon text-xl"></i> Theme
          </button>
        </div>
        <div class="flex flex-col gap-3">
          <a href="login.html" class="w-full py-4 text-center bg-transparent border-2 border-[#C65D3B] text-[#C65D3B] rounded-md font-bold uppercase text-sm tracking-widest hover:bg-[#C65D3B] hover:text-[#FFFFFF] transition-all">Log In</a>
          <a href="signup.html" class="w-full py-4 text-center bg-[#C65D3B] border-2 border-[#C65D3B] text-[#FFFFFF] rounded-md font-bold uppercase text-sm tracking-widest hover:bg-[#6C7A4E] hover:border-[#6C7A4E] shadow-lg shadow-[#C65D3B]/20 transition-all">Sign Up</a>
        </div>
      </div>
    </div>
  </div>
</nav>
`;

  /* --- CSS STYLES --- */
  const style = document.createElement('style');
  style.textContent = `
    .nav-link { position: relative; transition: color 0.3s ease; }
    .nav-link::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 0;
      height: 2px;
      background: #6C7A4E; /* Olive Green Highlight */
      transition: width 0.3s ease;
      border-radius: 2px;
    }
    .nav-link:hover::after, .nav-link.active::after { width: 100%; }
    
    /* Active State Colors */
    .nav-link.active, .dropdown-link.active { color: #6C7A4E !important; font-weight: 700; }
    .mobile-link.active, .mobile-sublink.active, #mobileHomeBtn.active, #mobileDashboardBtn.active { 
      color: #6C7A4E !important; 
      font-weight: 800;
    }
    
    #mobileMenu.hidden { display: none; }
    #mobileMenu:not(.hidden) { display: flex; }
    body.menu-open { overflow: hidden; }

    /* Scrollbar styling for a cleaner look */
    ::-webkit-scrollbar { width: 8px; }
    ::-webkit-scrollbar-track { background: #F7F5F0; }
    .dark ::-webkit-scrollbar-track { background: #1A1A1A; }
    ::-webkit-scrollbar-thumb { background: #6C7A4E; border-radius: 4px; }
    ::-webkit-scrollbar-thumb:hover { background: #C65D3B; }
  `;
  document.head.appendChild(style);

  /* --- INTERACTION & HIGHLIGHT LOGIC --- */
  // Elements
  const homeBtn = document.getElementById("homeBtn");
  const homeMenu = document.getElementById("homeMenu");
  const dashboardBtn = document.getElementById("dashboardBtn");
  const dashboardMenu = document.getElementById("dashboardMenu");
  
  const mobileBtn = document.getElementById("mobileBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileIcon = document.getElementById("mobileIcon");
  
  const mobileHomeBtn = document.getElementById("mobileHomeBtn");
  const mobileHomeMenu = document.getElementById("mobileHomeMenu");
  const mobileHomeIcon = document.getElementById("mobileHomeIcon");
  
  const mobileDashboardBtn = document.getElementById("mobileDashboardBtn");
  const mobileDashboardMenu = document.getElementById("mobileDashboardMenu");
  const mobileDashboardIcon = document.getElementById("mobileDashboardIcon");

  // Highlight Active Path
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const allNavLinks = document.querySelectorAll('.nav-link, .mobile-link, .dropdown-link, .mobile-sublink');
  
  allNavLinks.forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
      
      // Auto-highlight parent menu
      if (link.closest('#homeMenu')) homeBtn?.classList.add('active');
      if (link.closest('#dashboardMenu')) dashboardBtn?.classList.add('active');
      
      if (link.closest('#mobileHomeMenu')) {
        mobileHomeBtn?.classList.add('active');
        mobileHomeMenu.classList.remove('hidden');
        if (mobileHomeIcon) mobileHomeIcon.style.transform = "rotate(180deg)";
      }

      if (link.closest('#mobileDashboardMenu')) {
        mobileDashboardBtn?.classList.add('active');
        mobileDashboardMenu.classList.remove('hidden');
        if (mobileDashboardIcon) mobileDashboardIcon.style.transform = "rotate(180deg)";
      }
    }
  });

  // Desktop Dropdown Logic
  const closeAllDesktopMenus = () => {
    homeMenu?.classList.add("hidden");
    dashboardMenu?.classList.add("hidden");
  };

  homeBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    const isHidden = homeMenu.classList.contains("hidden");
    closeAllDesktopMenus();
    if (isHidden) homeMenu.classList.remove("hidden");
  });

  dashboardBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    const isHidden = dashboardMenu.classList.contains("hidden");
    closeAllDesktopMenus();
    if (isHidden) dashboardMenu.classList.remove("hidden");
  });

  document.addEventListener("click", closeAllDesktopMenus);

  // Mobile Submenu Logic
  mobileHomeBtn?.addEventListener("click", () => {
    const isHidden = mobileHomeMenu.classList.toggle("hidden");
    mobileHomeIcon.style.transform = isHidden ? "rotate(0deg)" : "rotate(180deg)";
  });

  mobileDashboardBtn?.addEventListener("click", () => {
    const isHidden = mobileDashboardMenu.classList.toggle("hidden");
    mobileDashboardIcon.style.transform = isHidden ? "rotate(0deg)" : "rotate(180deg)";
  });

  // Mobile Menu Overlay Toggle
  mobileBtn.onclick = () => {
    const isHidden = mobileMenu.classList.toggle("hidden");
    document.body.classList.toggle("menu-open");
    mobileIcon.className = isHidden ? "fas fa-bars text-2xl" : "fas fa-times text-2xl";
  };

  // Theme Logic
  const themeToggles = [document.getElementById("darkToggle"), document.getElementById("mobileDarkToggle")];
  const updateIcons = (isDark) => {
    const iconClass = isDark ? "fas fa-sun" : "fas fa-moon";
    if(document.getElementById("darkIcon")) document.getElementById("darkIcon").className = iconClass;
    if(document.getElementById("mobileDarkIcon")) document.getElementById("mobileDarkIcon").className = iconClass;
  };

  themeToggles.forEach(btn => btn?.addEventListener("click", () => {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("myco-dark", isDark);
    updateIcons(isDark);
  }));

  // Init Theme
  if (localStorage.getItem("myco-dark") === "true") {
    document.documentElement.classList.add("dark");
    updateIcons(true);
  }

  // RTL Logic
  const rtlToggles = [document.getElementById("rtlToggle"), document.getElementById("mobileRtlToggle")];
  rtlToggles.forEach(btn => btn?.addEventListener("click", () => {
    const currentDir = document.documentElement.dir;
    const isRtl = currentDir === "rtl";
    
    // Toggle the dir attribute on the HTML tag
    document.documentElement.dir = isRtl ? "ltr" : "rtl";
    
    // Save preference to local storage
    localStorage.setItem("myco-rtl", !isRtl);
  }));

  // Init RTL from storage on page load
  if (localStorage.getItem("myco-rtl") === "true") {
    document.documentElement.dir = "rtl";
  }
});