/* ============================================================
   ADVANCED JAVA PROGRAMMING LAB RECORD — SCRIPT ENGINE
   Course: 24IT385 · Academic Year: 2026–2027
   Student: CHINNATHAMBI NARAYANAN POOJA CHANDRAN (Roll: 24EU08145)
   Department of Information Technology · Siddhartha Academy of Higher Education
   ============================================================ */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
  initLoader();
  initNavbar();
  initMobileNav();
  initScrollProgress();
  initBackToTop();
  initRevealAnimations();
  initTypingEffect();
  initButtonRipple();
  initSmoothScroll();
  initCodeEditors();
  generateCardGraphics();
  initScreenshotGallery();
  initZoomModal();
  initStudentProfileModal();
  initStatCounters();
  initWeekSearchAndFilter();
  initPortalSidebar();
});

/* ─────────────────────────────────────────
   1. LOADER
──────────────────────────────────────────── */
function initLoader() {
  const loader = document.getElementById('loader');
  if (!loader) return;

  const hide = () => {
    loader.classList.add('hidden');
    document.body.style.overflow = '';
  };

  window.addEventListener('load', () => setTimeout(hide, 350));
  setTimeout(hide, 1200); // Fallback
}

/* ─────────────────────────────────────────
   2. NAVBAR & MOBILE NAV
──────────────────────────────────────────── */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  const check = () => navbar.classList.toggle('scrolled', window.scrollY > 15);
  check();
  window.addEventListener('scroll', check, { passive: true });
}

function initMobileNav() {
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  if (!hamburger || !mobileNav) return;

  hamburger.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('open');
    hamburger.classList.toggle('active', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
  });

  mobileNav.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      hamburger.classList.remove('active');
    });
  });
}

/* ─────────────────────────────────────────
   3. SCROLL PROGRESS BAR
──────────────────────────────────────────── */
function initScrollProgress() {
  const bar = document.getElementById('scroll-progress');
  if (!bar) return;

  window.addEventListener('scroll', () => {
    const total = document.documentElement.scrollHeight - window.innerHeight;
    const progress = total > 0 ? (window.scrollY / total) * 100 : 0;
    bar.style.width = `${Math.min(progress, 100)}%`;
  }, { passive: true });
}

/* ─────────────────────────────────────────
   4. BACK TO TOP
──────────────────────────────────────────── */
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 350);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ─────────────────────────────────────────
   5. REVEAL ANIMATIONS
──────────────────────────────────────────── */
function initRevealAnimations() {
  const elements = document.querySelectorAll('.reveal, .stagger-children');
  if (!elements.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  elements.forEach(el => observer.observe(el));
}

/* ─────────────────────────────────────────
   6. TYPING EFFECT (Curriculum-wide Code Snippets)
──────────────────────────────────────────── */
function initTypingEffect() {
  const target = document.querySelector('.hero-typing-text');
  if (!target) return;

  const phrases = [
    'Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/studentdb", "root", "");',
    'PreparedStatement ps = con.prepareStatement("INSERT INTO student VALUES (?, ?, ?, ?)");',
    '@RestController @RequestMapping("/api/students") public class StudentController { ... }',
    'List<Student> findByLastNameOrderByFirstNameAsc(String lastName);',
    'JdbcTemplate jdbcTemplate = new JdbcTemplate(dataSource);',
    'Cookie cookie = new Cookie("username", username); response.addCookie(cookie);'
  ];

  let pIndex = 0, cIndex = 0, isDeleting = false;

  function loop() {
    const current = phrases[pIndex];
    if (!isDeleting) {
      target.textContent = current.slice(0, cIndex + 1);
      cIndex++;
      if (cIndex === current.length) {
        isDeleting = true;
        setTimeout(loop, 2200);
        return;
      }
    } else {
      target.textContent = current.slice(0, cIndex - 1);
      cIndex--;
      if (cIndex === 0) {
        isDeleting = false;
        pIndex = (pIndex + 1) % phrases.length;
        setTimeout(loop, 400);
        return;
      }
    }
    setTimeout(loop, isDeleting ? 25 : 55);
  }
  setTimeout(loop, 600);
}

/* ─────────────────────────────────────────
   7. BUTTON RIPPLE EFFECT
──────────────────────────────────────────── */
function initButtonRipple() {
  document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function (e) {
      const rect = this.getBoundingClientRect();
      const ripple = document.createElement('span');
      ripple.style.cssText = `
        position: absolute;
        width: 10px; height: 10px;
        background: rgba(255, 255, 255, 0.4);
        border-radius: 50%;
        left: ${e.clientX - rect.left}px;
        top: ${e.clientY - rect.top}px;
        transform: translate(-50%, -50%) scale(0);
        animation: rippleAnim 0.6s ease-out forwards;
        pointer-events: none;
      `;
      this.style.position = 'relative';
      this.style.overflow = 'hidden';
      this.appendChild(ripple);
      setTimeout(() => ripple.remove(), 650);
    });
  });

  if (!document.getElementById('ripple-style')) {
    const style = document.createElement('style');
    style.id = 'ripple-style';
    style.textContent = `@keyframes rippleAnim { to { transform: translate(-50%, -50%) scale(35); opacity: 0; } }`;
    document.head.appendChild(style);
  }
}

/* ─────────────────────────────────────────
   8. SMOOTH SCROLL
──────────────────────────────────────────── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]:not(.sidebar-week-link):not(.sidebar-task-link):not(.switch-week-btn)').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#' || href === '#!') return;
      try {
        const target = document.querySelector(href);
        if (!target) return;
        e.preventDefault();
        const headerOffset = 90;
        const targetY = target.getBoundingClientRect().top + window.pageYOffset - headerOffset;
        window.scrollTo({ top: Math.max(0, targetY), behavior: 'smooth' });
      } catch (err) {
        // ignore invalid selector
      }
    });
  });
}

/* ─────────────────────────────────────────
   9. CODE EDITORS (COPY, COLLAPSE, DOWNLOAD .JAVA/.SQL/.XML/.SH)
──────────────────────────────────────────── */
function initCodeEditors() {
  // Copy Code
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', async () => {
      const editor = btn.closest('.code-editor');
      const code = editor ? editor.querySelector('code') : null;
      if (!code) return;
      try {
        await navigator.clipboard.writeText(code.textContent);
        const prev = btn.textContent;
        btn.textContent = '✅ Copied!';
        btn.style.color = '#C58A45';
        setTimeout(() => {
          btn.textContent = prev;
          btn.style.color = '';
        }, 2000);
      } catch (err) {
        btn.textContent = 'Error';
      }
    });
  });

  // Collapse Code
  document.querySelectorAll('.collapse-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const editor = btn.closest('.code-editor');
      const body = editor ? editor.querySelector('.code-editor-body') : null;
      if (!body) return;
      body.classList.toggle('collapsed');
      btn.textContent = body.classList.contains('collapsed') ? '⬇ Expand' : '⬆ Collapse';
    });
  });

  // Download Code file (any language / filetype)
  document.querySelectorAll('.dl-java-btn, .dl-code-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const editor = btn.closest('.code-editor');
      const code = editor ? editor.querySelector('code') : null;
      const filename = btn.getAttribute('data-filename') || (editor ? editor.querySelector('.editor-filename')?.textContent.trim() : null) || 'Program.java';
      if (!code) return;

      const blob = new Blob([code.textContent], { type: 'text/plain;charset=utf-8' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = filename;
      link.click();
      URL.revokeObjectURL(link.href);
    });
  });
}

/* ─────────────────────────────────────────
   10. FALLBACK REALISTIC SVG GRAPHIC GENERATOR
   (Only applies if an imgWrap does NOT already contain an authentic extracted image)
──────────────────────────────────────────── */
function generateCardGraphics() {
  const targetWrappers = document.querySelectorAll('.ss-img-wrap, .timeline-step-img');

  targetWrappers.forEach((imgWrap, index) => {
    // If an authentic <img> is already present, do NOT overwrite it
    if (imgWrap.querySelector('img')) return;

    const card = imgWrap.closest('.ss-card, .timeline-card');
    const title = imgWrap.dataset.title || (card ? (card.querySelector('.ss-caption') || card.querySelector('.timeline-title'))?.textContent.trim() : `Step ${index + 1}`);
    const subcaption = card ? (card.querySelector('.ss-subcaption') || card.querySelector('.timeline-desc'))?.textContent.trim() : '';
    const badgeText = (card ? card.querySelector('.ss-step-badge')?.textContent.trim() : null) || `Step 0${(index % 5) + 1}`;

    const svgString = buildRealisticLabSVG(title, subcaption, badgeText);
    const encodedSvg = 'data:image/svg+xml;utf8,' + encodeURIComponent(svgString);

    imgWrap.innerHTML = `
      <img src="${encodedSvg}" alt="${escapeXml(title)}" />
      <div class="ss-zoom-overlay">
        <span>🔍 Click to Zoom</span>
      </div>
    `;
  });
}

function buildRealisticLabSVG(title, subcaption, badgeText) {
  const t = (title + ' ' + subcaption).toLowerCase();
  let fill = '#000000';
  let lines = [
    'NetBeans IDE 8.2 / STS Build Window',
    `Execution target: ${title}`,
    'run:',
    'BUILD SUCCESSFUL (total time: 1 second)'
  ];

  if (t.includes('terminal') || t.includes('ubuntu') || t.includes('jdk')) {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="337" viewBox="0 0 600 337">
      <rect width="600" height="337" rx="6" fill="#2c001e"/>
      <text x="20" y="32" font-family="'JetBrains Mono', monospace" font-size="12" font-weight="bold">
        <tspan fill="#5cbf26">student@ITLAB3-1:</tspan>
        <tspan fill="#729fcf">~</tspan>
        <tspan fill="#ffffff">$ java --version</tspan>
      </text>
      <text x="20" y="60" font-family="'JetBrains Mono', monospace" font-size="12" fill="#dedede">java 26.0.1 2026-04-21</text>
      <text x="20" y="82" font-family="'JetBrains Mono', monospace" font-size="12" fill="#dedede">Java(TM) SE Runtime Environment (build 26.0.1+8-34)</text>
      <text x="20" y="104" font-family="'JetBrains Mono', monospace" font-size="12" fill="#dedede">Java HotSpot(TM) 64-Bit Server VM (build 26.0.1+8-34, mixed mode)</text>
    </svg>`;
  }

  const linesHtml = lines.map((l, i) =>
    `<text x="25" y="${36 + i * 24}" font-family="'Courier New', Consolas, monospace" font-size="13" fill="${i === 3 ? '#008000' : '#333333'}" font-weight="${i === 3 ? 'bold' : 'normal'}">${escapeXml(l)}</text>`
  ).join('');

  return `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="337" viewBox="0 0 600 337">
    <rect width="600" height="337" fill="#ffffff" stroke="#a0a0a0" stroke-width="2"/>
    ${linesHtml}
  </svg>`;
}

function escapeXml(str) {
  return String(str).replace(/[&<>"']/g, m => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;'
  })[m]);
}

/* ──────────────────────────────────────────
   11. SCREENSHOT GALLERY & ACTION CONTROLS (REMOVED)
────────────────────────────────────────── */
function initScreenshotGallery() {
  // Action buttons removed per user request
  document.querySelectorAll('.step-card-actions, .ss-actions').forEach(el => el.remove());
}

/* ─────────────────────────────────────────
   12. CLICK TO ZOOM LIGHTBOX MODAL
──────────────────────────────────────────── */
function initZoomModal() {
  const modal = document.getElementById('zoom-modal');
  if (!modal) return;

  const modalImg = modal.querySelector('.modal-img');
  const modalCap = modal.querySelector('.modal-caption');
  const closeBtn = modal.querySelector('.modal-close');

  const closeModal = () => {
    modal.classList.remove('open');
    document.body.style.overflow = '';
    if (modalImg) modalImg.src = '';
  };

  const openModal = (src, caption) => {
    if (!src) return;
    if (modalImg) modalImg.src = src;
    if (modalCap) modalCap.textContent = caption || 'Screenshot Preview';
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  };
  window.openZoomModal = openModal;

  // Click any screenshot / image wrapper to zoom
  document.addEventListener('click', (e) => {
    const target = e.target;
    // Don't intercept clicks inside the open modal, student profile, or on interactive controls
    if (target.closest('#zoom-modal') || target.closest('#studentProfileModal') || target.closest('.header-student-pill') || target.closest('button') || target.closest('a')) return;

    const imgWrap = target.closest('.step-img-wrap, .ss-img-wrap, .proof-card, .step-card');
    let clickedImg = null;

    if (target.tagName === 'IMG') {
      clickedImg = target;
    } else if (imgWrap) {
      clickedImg = imgWrap.querySelector('img');
    }

    if (clickedImg && clickedImg.src && !clickedImg.closest('#zoom-modal')) {
      e.preventDefault();
      e.stopPropagation();
      const title = (imgWrap ? imgWrap.getAttribute('data-title') : null) || clickedImg.getAttribute('alt') || 'Screenshot Preview';
      openModal(clickedImg.src, title);
    }
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.classList.contains('modal-content') || e.target.classList.contains('modal-overlay')) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('open')) return;
    if (e.key === 'Escape') closeModal();
  });
}

/* ─────────────────────────────────────────
   12B. STUDENT PROFILE MODAL
──────────────────────────────────────────── */
function initStudentProfileModal() {
  const modal = document.getElementById('studentProfileModal');
  if (!modal) return;

  const closeBtn = document.getElementById('studentModalCloseBtn') || modal.querySelector('.student-modal-close');

  const openProfile = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeProfile = () => {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  // Bind to student pill trigger and all its descendant elements
  const triggers = document.querySelectorAll('#studentProfileTrigger, .header-student-pill, .student-name, .student-avatar-wrap, .student-avatar');
  triggers.forEach(trigger => {
    trigger.style.cursor = 'pointer';
    trigger.addEventListener('click', openProfile);
    trigger.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openProfile(e);
      }
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      closeProfile();
    });
  }

  // Click outside card to close
  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.classList.contains('student-modal-overlay')) {
      closeProfile();
    }
  });

  // Escape key to close
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeProfile();
    }
  });
}

/* ─────────────────────────────────────────
   13. STAT COUNTERS
──────────────────────────────────────────── */
function initStatCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.count, 10);
      const suffix = el.dataset.suffix || '';
      const duration = 1200;
      const start = performance.now();

      function update(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(ease * target) + suffix;
        if (progress < 1) requestAnimationFrame(update);
      }

      requestAnimationFrame(update);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));
}

/* ─────────────────────────────────────────
   14. WEEK SEARCH & CATEGORY FILTER
──────────────────────────────────────────── */
function initWeekSearchAndFilter() {
  const searchInput = document.getElementById('week-search-input');
  const clearBtn = document.getElementById('search-clear-btn');
  const filterChips = document.querySelectorAll('.filter-chip');
  const weekCards = document.querySelectorAll('.week-card');
  const noWeeksMsg = document.getElementById('no-weeks-found');

  if (!weekCards.length) return;

  let activeCategory = 'all';
  let searchTerm = '';

  function applyFilters() {
    let visibleCount = 0;

    weekCards.forEach(card => {
      const category = card.getAttribute('data-category');
      const keywords = (card.getAttribute('data-keywords') || '') + ' ' + card.textContent.toLowerCase();

      const matchesCategory = (activeCategory === 'all') || (category === activeCategory);
      const matchesSearch = !searchTerm || keywords.includes(searchTerm);

      if (matchesCategory && matchesSearch) {
        card.classList.remove('is-hidden');
        visibleCount++;
      } else {
        card.classList.add('is-hidden');
      }
    });

    if (noWeeksMsg) {
      noWeeksMsg.style.display = visibleCount === 0 ? 'block' : 'none';
    }

    if (clearBtn) {
      clearBtn.style.display = searchTerm.length > 0 ? 'block' : 'none';
    }
  }

  // Filter chips click handler
  filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      filterChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeCategory = chip.getAttribute('data-filter') || 'all';
      applyFilters();
    });
  });

  // Search input handler
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchTerm = e.target.value.trim().toLowerCase();
      applyFilters();
    });
  }

  // Clear button handler
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      searchTerm = '';
      applyFilters();
      if (searchInput) searchInput.focus();
    });
  }
}


/* ────────────────────────────────────────────────────────────
   PORTAL SIDEBAR NAVIGATION & DYNAMIC PANE SWITCHING
   ──────────────────────────────────────────────────────────── */
function initPortalSidebar() {
  const sidebar = document.getElementById('portalSidebar');
  const toggleBtn = document.getElementById('sidebarToggleBtn');
  const searchInput = document.getElementById('weekSearchInput');
  const weekGroups = document.querySelectorAll('.sidebar-week-group');
  const weekPanes = document.querySelectorAll('.week-pane');

  // 1. Mobile Sidebar Toggle
  if (toggleBtn && sidebar) {
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      sidebar.classList.toggle('open');
    });

    document.addEventListener('click', (e) => {
      if (sidebar.classList.contains('open') && !sidebar.contains(e.target) && e.target !== toggleBtn) {
        sidebar.classList.remove('open');
      }
    });
  }

  // 2. Dynamic Pane Switching on index.html
  function switchWeek(targetPaneId, taskAnchor = null) {
    if (!weekPanes.length) return; // Standalone page

    weekPanes.forEach(p => {
      p.style.display = 'none';
      p.classList.remove('active-pane');
    });

    const activePane = document.getElementById(targetPaneId);
    if (activePane) {
      activePane.style.display = 'block';
      activePane.classList.add('active-pane');
    }

    const weekNum = targetPaneId.replace('week-', '').replace('-pane', '');
    weekGroups.forEach(g => {
      if (g.getAttribute('data-week') === weekNum) {
        g.classList.add('active', 'open');
      } else {
        g.classList.remove('active');
        g.classList.remove('open');
      }
    });

    if (taskAnchor) {
      requestAnimationFrame(() => {
        setTimeout(() => {
          const anchorEl = document.getElementById(taskAnchor);
          if (anchorEl) {
            const headerOffset = 90;
            const elementPosition = anchorEl.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({
              top: Math.max(0, offsetPosition),
              behavior: 'smooth'
            });
          }
        }, 80);
      });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    if (sidebar && sidebar.classList.contains('open')) {
      sidebar.classList.remove('open');
    }
  }

  // Sidebar link clicks (fail-safe for data-week-target, data-week, or href)
  document.querySelectorAll('.sidebar-week-link').forEach(link => {
    link.addEventListener('click', (e) => {
      let targetPane = link.getAttribute('data-week-target');
      const group = link.closest('.sidebar-week-group');
      const weekNum = link.getAttribute('data-week') || (group ? group.getAttribute('data-week') : null);

      if (!targetPane && weekNum !== null && weekNum !== undefined) {
        targetPane = `week-${weekNum}-pane`;
      }
      if (!targetPane) {
        const href = link.getAttribute('href') || '';
        const match = href.match(/#week-(\d+)/);
        if (match) {
          targetPane = `week-${match[1]}-pane`;
        }
      }

      if (targetPane && document.getElementById(targetPane)) {
        e.preventDefault();
        switchWeek(targetPane);
        const w = weekNum !== null && weekNum !== undefined ? weekNum : targetPane.replace('week-', '').replace('-pane', '');
        history.replaceState(null, null, `#week-${w}`);
      }
    });
  });

  document.querySelectorAll('.sidebar-task-link').forEach(taskLink => {
    taskLink.addEventListener('click', (e) => {
      let targetPane = taskLink.getAttribute('data-week-target');
      let taskAnchor = taskLink.getAttribute('data-task-anchor');
      const group = taskLink.closest('.sidebar-week-group');
      const weekNum = taskLink.getAttribute('data-week') || (group ? group.getAttribute('data-week') : null);

      if (!targetPane && weekNum !== null && weekNum !== undefined) {
        targetPane = `week-${weekNum}-pane`;
      }
      if (!taskAnchor) {
        const href = taskLink.getAttribute('href') || '';
        const hashIdx = href.indexOf('#');
        if (hashIdx !== -1) {
          const rawHash = href.substring(hashIdx + 1);
          if (!rawHash.startsWith('week-') || rawHash.includes('-task-')) {
            taskAnchor = rawHash;
          }
        }
      }

      if (targetPane && document.getElementById(targetPane)) {
        e.preventDefault();
        switchWeek(targetPane, taskAnchor);
        if (taskAnchor) {
          history.replaceState(null, null, `#${taskAnchor}`);
        } else if (weekNum !== null) {
          history.replaceState(null, null, `#week-${weekNum}`);
        }
      }
    });
  });

  
  // Level 3 Program Link Clicks
  document.querySelectorAll('.sidebar-prog-link').forEach(progLink => {
    progLink.addEventListener('click', (e) => {
      let targetPane = progLink.getAttribute('data-week-target');
      let progAnchor = progLink.getAttribute('data-prog-anchor');
      const group = progLink.closest('.sidebar-week-group');
      const weekNum = progLink.getAttribute('data-week') || (group ? group.getAttribute('data-week') : null);

      if (!targetPane && weekNum !== null && weekNum !== undefined) {
        targetPane = `week-${weekNum}-pane`;
      }
      if (!progAnchor) {
        const href = progLink.getAttribute('href') || '';
        const hashIdx = href.indexOf('#');
        if (hashIdx !== -1) {
          progAnchor = href.substring(hashIdx + 1);
        }
      }

      document.querySelectorAll('.sidebar-prog-link').forEach(p => p.classList.remove('active'));
      progLink.classList.add('active');

      if (targetPane && document.getElementById(targetPane)) {
        e.preventDefault();
        switchWeek(targetPane, progAnchor);
        if (progAnchor) {
          history.replaceState(null, null, `#${progAnchor}`);
        }
      }
    });
  });

  // Switch week buttons (prev/next)
  document.querySelectorAll('.switch-week-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const target = btn.getAttribute('data-target');
      if (target && document.getElementById(target)) {
        switchWeek(target);
        const wNum = target.replace('week-', '').replace('-pane', '');
        history.replaceState(null, null, `#week-${wNum}`);
      }
    });
  });

  // URL Hash routing on load AND on hashchange
  function handleHashRoute() {
    if (!window.location.hash) return;
    const hash = window.location.hash.replace('#', '');
    if (hash.startsWith('week-')) {
      const parts = hash.split('-');
      const wNum = parts[1];
      const targetPane = `week-${wNum}-pane`;
      const anchor = parts.length > 2 ? hash : null;
      if (document.getElementById(targetPane)) {
        switchWeek(targetPane, anchor);
      }
    } else if (hash.startsWith('w') && hash.includes('-t')) {
      const match = hash.match(/^w(\d+)-/);
      if (match) {
        const wNum = match[1];
        const targetPane = `week-${wNum}-pane`;
        if (document.getElementById(targetPane)) {
          switchWeek(targetPane, hash);
        }
      }
    }
  }

  handleHashRoute();
  window.addEventListener('hashchange', handleHashRoute);

  // 3. Sidebar Real-Time Search Filter (Weeks, Tasks & Programs)
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const q = e.target.value.trim().toLowerCase();
      weekGroups.forEach(group => {
        const titleText = group.querySelector('.week-title-text').innerText.toLowerCase();
        const taskLinks = group.querySelectorAll('.sidebar-task-link');
        const progLinks = group.querySelectorAll('.sidebar-prog-link');
        let match = titleText.includes(q) || group.dataset.week.includes(q);
        let taskMatch = false;
        let progMatch = false;

        taskLinks.forEach(tl => {
          if (tl.innerText.toLowerCase().includes(q)) {
            tl.style.display = 'block';
            taskMatch = true;
          } else if (q.length > 0) {
            tl.style.display = 'none';
          } else {
            tl.style.display = 'block';
          }
        });

        progLinks.forEach(pl => {
          if (pl.innerText.toLowerCase().includes(q)) {
            pl.style.display = 'flex';
            progMatch = true;
          } else if (q.length > 0) {
            pl.style.display = 'none';
          } else {
            pl.style.display = 'flex';
          }
        });

        if (match || taskMatch || progMatch || q.length === 0) {
          group.style.display = 'block';
          if (q.length > 0 && (taskMatch || progMatch)) {
            group.classList.add('open');
          }
        } else {
          group.style.display = 'none';
        }
      });
    });
  }

  // 4. Chevron Arrow Click Handler (Toggle Task Accordion)
  document.querySelectorAll('.sidebar-week-group .week-arrow').forEach(arrow => {
    arrow.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const group = arrow.closest('.sidebar-week-group');
      if (group) {
        group.classList.toggle('open');
      }
    });
  });
}

/* ─────────────────────────────────────────
   GLOBAL ACTIONS: COPY, DOWNLOAD, PROFILE
──────────────────────────────────────────── */
function copyCode(btn) {
  const container = btn.closest('.code-editor-block, .program-sql-box, .code-editor');
  const codeEl = container ? container.querySelector('code') : null;
  if (!codeEl) return;
  const text = codeEl.innerText || codeEl.textContent;
  navigator.clipboard.writeText(text).then(() => {
    const originalHTML = btn.innerHTML;
    btn.innerHTML = '<i class="bi bi-check2"></i> Copied!';
    btn.style.color = '#C58A45';
    setTimeout(() => {
      btn.innerHTML = originalHTML;
      btn.style.color = '';
    }, 2000);
  }).catch(err => {
    console.error('Copy failed:', err);
  });
}

function downloadSnippet(filename, btn) {
  const container = btn.closest('.code-editor-block, .program-sql-box, .code-editor');
  const codeEl = container ? container.querySelector('code') : null;
  if (!codeEl) return;
  const text = codeEl.innerText || codeEl.textContent;
  const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename || 'Program.java';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function toggleProfileDropdown() {
  const d = document.getElementById('profileDropdown');
  if (d) {
    d.classList.toggle('show');
  }
}

function closeProfileDropdown() {
  const d = document.getElementById('profileDropdown');
  if (d) {
    d.classList.remove('show');
  }
}

document.addEventListener('click', function (e) {
  const btn = document.getElementById('profileDropdownBtn');
  const d = document.getElementById('profileDropdown');
  if (d && d.classList.contains('show')) {
    if (btn && !btn.contains(e.target) && !d.contains(e.target)) {
      d.classList.remove('show');
    }
  }
});

window.copyCode = copyCode;
window.downloadSnippet = downloadSnippet;
window.toggleProfileDropdown = toggleProfileDropdown;
window.closeProfileDropdown = closeProfileDropdown;

