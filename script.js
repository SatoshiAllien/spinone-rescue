/**
 * Italian Spinone Rescue – Main Script
 * Mobile navigation, scroll effects, and fade-in animations
 */

(function () {
  'use strict';

  function t(key) {
    return window.SpinoneI18n ? window.SpinoneI18n.t(key) : key;
  }

  // --- Facebook top bar ---
  const fbBar = document.getElementById('fbBar');
  const fbBarClose = document.getElementById('fbBarClose');

  if (fbBar && !sessionStorage.getItem('fbBarClosed')) {
    document.body.classList.add('has-fb-bar');
  } else if (fbBar) {
    fbBar.classList.add('is-hidden');
  }

  if (fbBarClose && fbBar) {
    fbBarClose.addEventListener('click', function () {
      fbBar.classList.add('is-hidden');
      document.body.classList.remove('has-fb-bar');
      sessionStorage.setItem('fbBarClosed', '1');
    });
  }

  // --- Mobile Menu ---
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const header = document.querySelector('.site-header');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      const isOpen = navMenu.classList.toggle('open');
      navToggle.classList.toggle('active');
      navToggle.setAttribute('aria-expanded', isOpen);
      navToggle.setAttribute('aria-label', isOpen ? t('nav.close') : t('nav.open'));
    });

    // Close menu when a link is clicked
    navMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navMenu.classList.remove('open');
        navToggle.classList.remove('active');
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.setAttribute('aria-label', t('nav.open'));
      });
    });
  }

  // --- Header shadow on scroll ---
  function handleScroll() {
    if (header) {
      if (window.scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // --- Fade-in on scroll (Intersection Observer) ---
  const fadeElements = document.querySelectorAll('.fade-in');

  if ('IntersectionObserver' in window && fadeElements.length > 0) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
      }
    );

    fadeElements.forEach(function (el) {
      observer.observe(el);
    });
  } else {
    // Fallback: show all elements immediately
    fadeElements.forEach(function (el) {
      el.classList.add('visible');
    });
  }

  // --- Smooth active nav highlight (optional subtle effect) ---
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__menu a');

  function highlightNav() {
    const scrollPos = window.scrollY + 100;

    sections.forEach(function (section) {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(function (link) {
          link.style.color = '';
          if (link.getAttribute('href') === '#' + id) {
            link.style.color = 'var(--color-olive)';
          }
        });
      }
    });
  }

  window.addEventListener('scroll', highlightNav, { passive: true });

  // --- Album Foto: filters & lightbox ---
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxCounter = document.getElementById('lightboxCounter');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');
  const albumGrid = document.getElementById('albumGrid');
  const albumCount = document.getElementById('albumCount');
  const albumFilters = document.querySelectorAll('.album__filter');
  const allFotoItems = document.querySelectorAll('.foto__item');

  let currentFilter = 'tutte';
  let currentPhotoIndex = 0;
  let visiblePhotos = [];

  function getVisibleItems() {
    return Array.from(allFotoItems).filter(function (item) {
      return !item.classList.contains('is-hidden');
    });
  }

  function buildVisiblePhotos() {
    visiblePhotos = getVisibleItems().map(function (item) {
      const trigger = item.querySelector('.foto__trigger');
      const img = trigger.querySelector('img');
      return {
        src: img.getAttribute('src'),
        alt: img.getAttribute('alt'),
        caption: trigger.getAttribute('data-caption') || ''
      };
    });
  }

  function updateAlbumCount() {
    if (albumCount) {
      const count = getVisibleItems().length;
      if (count === 1) {
        albumCount.textContent = t('foto.count.one');
      } else {
        albumCount.textContent = t('foto.count').replace('{n}', count);
      }
    }
  }

  function applyFilter(filter) {
    currentFilter = filter;

    allFotoItems.forEach(function (item) {
      const categories = item.getAttribute('data-category') || '';
      const match = filter === 'tutte' || categories.split(' ').includes(filter);
      item.classList.toggle('is-hidden', !match);
    });

    albumFilters.forEach(function (btn) {
      btn.classList.toggle('album__filter--active', btn.getAttribute('data-filter') === filter);
    });

    updateAlbumCount();
    buildVisiblePhotos();
  }

  if (albumFilters.length > 0) {
    albumFilters.forEach(function (btn) {
      btn.addEventListener('click', function () {
        applyFilter(btn.getAttribute('data-filter'));
      });
    });
  }

  if (allFotoItems.length > 0 && lightbox) {
    buildVisiblePhotos();
    updateAlbumCount();

    function showPhoto(index) {
      if (visiblePhotos.length === 0) return;
      currentPhotoIndex = (index + visiblePhotos.length) % visiblePhotos.length;
      const photo = visiblePhotos[currentPhotoIndex];
      lightboxImg.src = photo.src;
      lightboxImg.alt = photo.alt;
      lightboxCaption.textContent = photo.caption;
      if (lightboxCounter) {
        lightboxCounter.textContent = (currentPhotoIndex + 1) + ' / ' + visiblePhotos.length;
      }
    }

    function openLightbox(index) {
      showPhoto(index);
      lightbox.hidden = false;
      document.body.style.overflow = 'hidden';
      lightboxClose.focus();
    }

    function closeLightbox() {
      lightbox.hidden = true;
      document.body.style.overflow = '';
      lightboxImg.src = '';
    }

    if (albumGrid) {
      albumGrid.addEventListener('click', function (e) {
        const trigger = e.target.closest('.foto__trigger');
        if (!trigger) return;

        const item = trigger.closest('.foto__item');
        if (!item || item.classList.contains('is-hidden')) return;

        buildVisiblePhotos();
        const index = getVisibleItems().indexOf(item);
        if (index !== -1) openLightbox(index);
      });
    }

    lightboxClose.addEventListener('click', closeLightbox);

    lightboxPrev.addEventListener('click', function () {
      showPhoto(currentPhotoIndex - 1);
    });

    lightboxNext.addEventListener('click', function () {
      showPhoto(currentPhotoIndex + 1);
    });

    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', function (e) {
      if (lightbox.hidden) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPhoto(currentPhotoIndex - 1);
      if (e.key === 'ArrowRight') showPhoto(currentPhotoIndex + 1);
    });
  }

  window.SpinoneApp = {
    onLanguageChange: function () {
      if (navToggle) {
        const isOpen = navMenu && navMenu.classList.contains('open');
        navToggle.setAttribute('aria-label', isOpen ? t('nav.close') : t('nav.open'));
      }
      updateAlbumCount();
      buildVisiblePhotos();
    }
  };

})();