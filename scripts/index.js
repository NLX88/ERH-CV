// Animar proyectos cuando entren en pantalla
const proyectos = document.querySelectorAll('.proyecto-preview');
const secciones = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.2
});

proyectos.forEach(p => observer.observe(p));
secciones.forEach(sec => observer.observe(sec));
