// Mycology & Foraging Education Hub - Fully Responsive Footer
// Theme: Primary: #6C7A4E | Secondary: #C65D3B | Background Light: #F7F5F0 | Background Dark: #000000

document.addEventListener("DOMContentLoaded", () => {
  const footer = document.getElementById("footer");
  if (!footer) return;

  footer.innerHTML = `
<footer class="w-full transition-colors duration-300 bg-[#F7F5F0] dark:bg-[#000000] border-t-[2px] border-[#6C7A4E]">
  
  <div class="mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid gap-12 grid-cols-1 md:grid-cols-12">

    <div class="md:col-span-12 lg:col-span-4 pr-0 lg:pr-8">
      <a href="index.html" class="flex items-center space-x-3 rtl:space-x-reverse group mb-6">
        <div class="w-1.5 h-10 bg-[#C65D3B] rounded-full group-hover:bg-[#6C7A4E] transition-colors duration-300"></div>
        <div class="flex flex-col">
          <span class="text-xl font-serif font-black tracking-widest uppercase text-[#1A1A1A] dark:text-[#FFFFFF]">
            MYCO<span class="text-[#C65D3B]">SPORE</span>
          </span>
          <span class="text-[9px] tracking-[0.25em] uppercase text-[#6C7A4E] font-bold leading-none mt-1">Foraging & Education</span>
        </div>
      </a>
      <p class="text-sm font-serif italic text-gray-700 dark:text-gray-400 leading-relaxed mb-6">
        "Connecting mycophiles to the fungal kingdom through ethical foraging, science-based education, and a thriving local community."
      </p>
      
      <div class="mt-8 flex gap-3">
        <a href="#" class="social-icon w-10 h-10 flex items-center justify-center rounded-full border border-[#6C7A4E]/50 text-[#6C7A4E] transition-all duration-300 hover:bg-[#6C7A4E] hover:border-[#6C7A4E] hover:text-white dark:border-[#6C7A4E] dark:text-[#8b9c67]">
          <i class="fab fa-instagram text-lg"></i>
        </a>
        <a href="#" class="social-icon w-10 h-10 flex items-center justify-center rounded-full border border-[#6C7A4E]/50 text-[#6C7A4E] transition-all duration-300 hover:bg-[#6C7A4E] hover:border-[#6C7A4E] hover:text-white dark:border-[#6C7A4E] dark:text-[#8b9c67]">
          <i class="fab fa-facebook-f text-lg"></i>
        </a>
        <a href="#" class="social-icon w-10 h-10 flex items-center justify-center rounded-full border border-[#6C7A4E]/50 text-[#6C7A4E] transition-all duration-300 hover:bg-[#6C7A4E] hover:border-[#6C7A4E] hover:text-white dark:border-[#6C7A4E] dark:text-[#8b9c67]">
          <i class="fab fa-youtube text-lg"></i>
        </a>
      </div>
    </div>

    <div class="md:col-span-4 lg:col-span-2">
      <h3 class="text-base font-bold mb-6 uppercase tracking-widest text-[#1A1A1A] dark:text-[#FFFFFF] border-b-2 inline-block pb-1 border-[#6C7A4E]">Explore</h3>
      <ul class="space-y-3 text-sm font-medium">
        <li><a href="guide.html" class="footer-link block text-gray-600 dark:text-gray-400 transition-all duration-300">Field Guide</a></li>
        <li><a href="courses.html" class="footer-link block text-gray-600 dark:text-gray-400 transition-all duration-300">Courses</a></li>
        <li><a href="events.html" class="footer-link block text-gray-600 dark:text-gray-400 transition-all duration-300">Workshops</a></li>
        <li><a href="shop.html" class="footer-link block text-gray-600 dark:text-gray-400 transition-all duration-300">Spores & Gear</a></li>
      </ul>
    </div>

    <div class="md:col-span-4 lg:col-span-2">
      <h3 class="text-base font-bold mb-6 uppercase tracking-widest text-[#1A1A1A] dark:text-[#FFFFFF] border-b-2 inline-block pb-1 border-[#6C7A4E]">The Hub</h3>
      <ul class="space-y-3 text-sm font-medium">
        <li><a href="dashboard.html" class="footer-link block text-gray-600 dark:text-gray-400 transition-all duration-300">Dashboard</a></li>
        <li><a href="my-courses.html" class="footer-link block text-gray-600 dark:text-gray-400 transition-all duration-300">My Courses</a></li>
        <li><a href="foraging-log.html" class="footer-link block text-gray-600 dark:text-gray-400 transition-all duration-300">Foraging Logs</a></li>
        <li><a href="community.html" class="footer-link block text-gray-600 dark:text-gray-400 transition-all duration-300">Community Forum</a></li>
      </ul>
    </div>

    <div class="md:col-span-4 lg:col-span-4">
      <h3 class="text-base font-bold mb-6 uppercase tracking-widest text-[#1A1A1A] dark:text-[#FFFFFF] border-b-2 inline-block pb-1 border-[#6C7A4E]">Field Notes Dispatch</h3>
      <p class="text-sm text-gray-600 dark:text-gray-400 mb-5 leading-relaxed">
        Subscribe for seasonal foraging alerts, rare spore drops, and community event updates directly to your inbox.
      </p>

      <form class="flex flex-col gap-3" id="footerNewsletterForm">
        <div class="relative">
          <input type="email" placeholder="Enter your email address..." required class="w-full px-4 py-3.5 bg-[#FFFFFF] dark:bg-[#111111] text-[#1A1A1A] dark:text-[#FFFFFF] border border-[#6C7A4E]/30 focus:outline-none focus:border-[#C65D3B] focus:ring-1 focus:ring-[#C65D3B] transition-all rounded-md shadow-inner">
        </div>
        <button type="submit" class="w-full py-3.5 font-bold uppercase tracking-widest text-[#FFFFFF] rounded-md transition-all duration-300 hover:shadow-lg active:scale-95 bg-[#6C7A4E] hover:bg-[#C65D3B]">
          Subscribe
        </button>
      </form>
    </div>
  </div>

  <div class="border-t border-[#6C7A4E]/20 bg-[#EBE7DF] dark:bg-[#0A0A0A] transition-colors duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row gap-4 justify-between items-center text-[10px] uppercase tracking-[0.2em] font-bold text-gray-500 dark:text-gray-500">
      
      <p>© 2026 MycoSpore Hub. Cultivating Knowledge.</p>

      <div class="flex gap-6">
        <a href="#" class="hover:text-[#C65D3B] transition-colors duration-300">Privacy Policy</a>
        <a href="#" class="hover:text-[#C65D3B] transition-colors duration-300">Terms of Service</a>
        <a href="#" class="hover:text-[#C65D3B] transition-colors duration-300">Safety Disclaimer</a>
      </div>
    </div>
  </div>
</footer>
`;

  /* ===============================
     INJECT MYCOLOGY STYLES
  =============================== */
  const footerStyles = document.createElement('style');
  footerStyles.textContent = `
    /* Smooth hover slide effect for links */
    .footer-link {
      display: inline-block;
      transform: translateX(0);
    }
    
    .footer-link:hover {
      color: #C65D3B !important; /* Rust Orange highlight */
      transform: translateX(6px);
    }

    /* RTL Support for slide effect */
    [dir="rtl"] .footer-link:hover {
      transform: translateX(-6px);
    }

    #footerNewsletterForm input::placeholder {
      opacity: 0.5;
      font-style: italic;
    }
  `;
  document.head.appendChild(footerStyles);

  /* ===============================
     FORM LOGIC
  =============================== */
  const form = document.getElementById('footerNewsletterForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Welcome to the Mycelial Network! Your first Field Notes dispatch is on the way.');
      form.reset();
    });
  }
});