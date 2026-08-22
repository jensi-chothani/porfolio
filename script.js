// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});

// Close mobile menu after clicking a link
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Re-trigger skill bar fill animation when scrolled into view
const skillFills = document.querySelectorAll('.skill-fill');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
    }
  });
}, { threshold: 0.3 });

skillFills.forEach(fill => observer.observe(fill));

// Check if resume PDF actually exists; if not, show a note instead of a dead link
fetch('Jensi_Chothani_Resume.pdf', { method: 'HEAD' })
  .then(res => {
    if (!res.ok) throw new Error('missing');
  })
  .catch(() => {
    const note = document.getElementById('resumeNote');
    const viewBtn = document.getElementById('viewResumeBtn');
    const downloadBtn = document.getElementById('downloadResumeBtn');
    if (note) note.style.display = 'block';
    if (viewBtn) { viewBtn.style.opacity = '0.5'; viewBtn.style.pointerEvents = 'none'; }
    if (downloadBtn) { downloadBtn.style.opacity = '0.5'; downloadBtn.style.pointerEvents = 'none'; }
  });
