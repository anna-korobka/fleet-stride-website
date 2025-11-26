// Sets --vh to real innerHeight so 100vh layouts don't jump on iOS
(function setVhUnit() {
  const set = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };
  set();
  window.addEventListener('resize', set, { passive: true });
})();
