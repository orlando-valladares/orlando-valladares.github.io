(() => {
  const story = document.querySelector('[data-scroll-story]');
  if (!story) return;

  const sections = [...story.querySelectorAll('.story-section')];
  const progress = story.querySelector('.story-progress span');

  const updateProgress = () => {
    const bounds = story.getBoundingClientRect();
    const total = Math.max(story.offsetHeight - window.innerHeight, 1);
    const complete = Math.min(Math.max(-bounds.top / total, 0), 1);
    progress.style.transform = `scaleX(${complete})`;
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => entry.target.classList.toggle('is-visible', entry.isIntersecting));
  }, { rootMargin: '-18% 0px -28% 0px', threshold: 0.08 });

  sections.forEach((section) => observer.observe(section));
  window.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', updateProgress);
  updateProgress();
})();
