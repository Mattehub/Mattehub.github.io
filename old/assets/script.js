// Tiny helper: mark "NEW" if within last 30 days
(function(){
  const items = document.querySelectorAll('[data-date]');
  const now = new Date();
  items.forEach(el=>{
    const d = new Date(el.getAttribute('data-date'));
    const diff = (now - d) / (1000*60*60*24);
    if (diff <= 30) {
      const b = document.createElement('span');
      b.className = 'badge';
      b.textContent = 'NEW';
      el.querySelector('.title').appendChild(b);
    }
  });
})();
