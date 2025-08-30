// Small client-side interactions
function submitContact(e){
  e.preventDefault();
  const form = e.target;
  const status = document.getElementById('formStatus');
  const data = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value
  };
  // This is a demo: we'll just show a friendly message and reset.
  status.textContent = 'Thanks, ' + data.name + '! Your message is noted (demo).';
  form.reset();
  setTimeout(()=> status.textContent = '', 4000);
}

// Smooth scrolling for nav links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', (e)=>{
    const href = a.getAttribute('href');
    if(href.startsWith('#')){
      e.preventDefault();
      const el = document.querySelector(href);
      if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});
// Fade-in effect when scrolling
document.addEventListener("scroll", () => {
  document.querySelectorAll("section").forEach(section => {
    const position = section.getBoundingClientRect().top;
    if (position < window.innerHeight - 100) {
      section.classList.add("visible");
    }
  });
});
