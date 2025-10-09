// Immediately executed to set up theme based on saved preference or system default
(function() {
  // Check localStorage for stored theme
  const stored = localStorage.getItem('theme');
  let theme = stored || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  document.body.classList.add(theme);

  // Create toggle button
  const btn = document.createElement('div');
  btn.className = 'theme-toggle';
  btn.textContent = theme === 'dark' ? '🌙 Dark' : '☀️ Light';
  btn.onclick = function() {
    const newTheme = document.body.classList.contains('dark') ? 'light' : 'dark';
    // Remove old
    document.body.classList.remove('dark', 'light');
    // Add new
    document.body.classList.add(newTheme);
    localStorage.setItem('theme', newTheme);
    btn.textContent = newTheme === 'dark' ? '🌙 Dark' : '☀️ Light';
  };

  document.body.appendChild(btn);
})();
