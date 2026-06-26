/**
 * NestFlow - Global JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initRTL();
  initMobileNav();
  initScrollEffects();
  initActiveNavlink();
});

function initActiveNavlink() {
  const currentPath = window.location.pathname.split('?')[0].split('#')[0].split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('#navbar a, #mobile-menu a');
  
  navLinks.forEach(link => {
    // Skip action buttons
    if (link.classList.contains('bg-primary-500') || link.classList.contains('border-slate-200') || link.classList.contains('border-white/20') || link.classList.contains('border')) {
      return;
    }

    const linkPath = link.getAttribute('href');
    if (linkPath) {
      const linkFile = linkPath.split('?')[0].split('#')[0].split('/').pop();
      if (linkFile === currentPath) {
        // Highlight the link
        // Dynamically strip any text color classes to prevent Tailwind specificity overrides
        const classesToRemove = [];
        link.classList.forEach(className => {
          if ((className.startsWith('text-') && className !== 'text-primary-500') || 
              (className.startsWith('dark:text-') && className !== 'dark:text-primary-500')) {
            classesToRemove.push(className);
          }
        });
        classesToRemove.forEach(c => link.classList.remove(c));
        
        link.classList.add('text-primary-500', 'font-bold');
        
        // If inside a desktop dropdown, highlight the parent dropdown button
        const dropdown = link.closest('.group');
        if (dropdown) {
          const btn = dropdown.querySelector('button');
          if (btn) {
            const btnClassesToRemove = [];
            btn.classList.forEach(className => {
              if ((className.startsWith('text-') && className !== 'text-primary-500') || 
                  (className.startsWith('dark:text-') && className !== 'dark:text-primary-500')) {
                btnClassesToRemove.push(className);
              }
            });
            btnClassesToRemove.forEach(c => btn.classList.remove(c));
            
            btn.classList.add('text-primary-500', 'font-bold');
          }
        }
        
        // If inside a mobile details dropdown, highlight the summary and open it
        const details = link.closest('details');
        if (details) {
          details.setAttribute('open', '');
          const summary = details.querySelector('summary');
          if (summary) {
            summary.classList.add('text-primary-500', 'font-bold');
          }
        }
      }
    }
  });
}

function initTheme() {
  const themeToggleBtns = document.querySelectorAll('.theme-toggle');
  
  // Check local storage or system preference
  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }

  // Toggle theme on button click
  themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      document.documentElement.classList.toggle('dark');
      if (document.documentElement.classList.contains('dark')) {
        localStorage.theme = 'dark';
      } else {
        localStorage.theme = 'light';
      }
    });
  });
}

function initRTL() {
  const rtlToggleBtns = document.querySelectorAll('.rtl-toggle');
  
  const updateRtlText = (dir) => {
    rtlToggleBtns.forEach(btn => {
      const span = btn.querySelector('span');
      if (span) {
        span.textContent = dir === 'rtl' ? 'LTR' : 'RTL';
      }
    });
  };

  // Check local storage
  if (localStorage.dir === 'rtl') {
    document.documentElement.setAttribute('dir', 'rtl');
    updateRtlText('rtl');
  } else {
    document.documentElement.setAttribute('dir', 'ltr');
    updateRtlText('ltr');
  }

  // Toggle RTL on button click
  rtlToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const currentDir = document.documentElement.getAttribute('dir');
      const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
      document.documentElement.setAttribute('dir', newDir);
      localStorage.dir = newDir;
      updateRtlText(newDir);
    });
  });
}

function initMobileNav() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const closeMenuBtn = document.getElementById('close-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileOverlay = document.getElementById('mobile-overlay');
  
  const openMenu = () => {
    if(mobileOverlay) {
      mobileOverlay.classList.remove('hidden');
      setTimeout(() => {
        mobileOverlay.classList.remove('opacity-0');
      }, 10);
    }
    if(mobileMenu) {
      mobileMenu.classList.remove('hidden');
      setTimeout(() => {
        mobileMenu.classList.add('is-open');
      }, 10);
    }
    document.body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    if(mobileOverlay) {
      mobileOverlay.classList.add('opacity-0');
      setTimeout(() => {
        mobileOverlay.classList.add('hidden');
      }, 300);
    }
    if(mobileMenu) {
      mobileMenu.classList.remove('is-open');
      // Optional: hide after animation
      setTimeout(() => {
        mobileMenu.classList.add('hidden');
      }, 300);
    }
    document.body.style.overflow = '';
  };
  
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', openMenu);
  }
  if (closeMenuBtn) {
    closeMenuBtn.addEventListener('click', closeMenu);
  }
  if (mobileOverlay) {
    mobileOverlay.addEventListener('click', closeMenu);
  }
  
  // Close menu when clicking outside of it
  document.addEventListener('click', (e) => {
    if (mobileMenu && !mobileMenu.classList.contains('hidden') && mobileMenu.classList.contains('is-open')) {
      if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
        closeMenu();
      }
    }
  });
}

function initScrollEffects() {
  const navbar = document.getElementById('navbar');
  
  if (navbar) {
    const isInitiallyTransparent = navbar.classList.contains('navbar-transparent');
    
    const handleScroll = () => {
      if (window.scrollY > 50) {
        navbar.classList.add('shadow-md');
        if (isInitiallyTransparent) {
          navbar.classList.remove('navbar-transparent');
        }
      } else {
        navbar.classList.remove('shadow-md');
        if (isInitiallyTransparent) {
          navbar.classList.add('navbar-transparent');
        }
      }
    };
    
    // Set initial state on load
    handleScroll();
    window.addEventListener('scroll', handleScroll);
  }
}
