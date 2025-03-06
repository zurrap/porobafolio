const sr = ScrollReveal({
  distance: '100px',
  duration: 1600,
  easing: 'cubic-bezier(0.5, 0, 0, 1)',
  reset: false,
  mobile: false,
  viewFactor: 0.2,
});


sr.reveal('.home-text', {
  origin: 'left',
  delay: 200
});
sr.reveal('.home-img', {
  origin: 'right',
  delay: 400
});


sr.reveal('.about-img', {
  origin: 'bottom',
  delay: 300
});
sr.reveal('.text-1', {
  origin: 'left',
  delay: 500
});
sr.reveal('.text-2', {
  origin: 'right',
  delay: 600
});
sr.reveal('.text-3', {
  origin: 'left',
  delay: 700
});


sr.reveal('.lang-js', {
  origin: 'bottom',
  delay: 300
});
sr.reveal('.lang-java', {
  origin: 'top',
  delay: 400
});
sr.reveal('.lang-html', {
  origin: 'bottom',
  delay: 500
});
sr.reveal('.lang-php', {
  origin: 'top',
  delay: 600
});
sr.reveal('.experience__grid', {
  origin: 'left',
  delay: 500
});


sr.reveal('.smk', {
  origin: 'right',
  delay: 300
});
sr.reveal('.smp', {
  origin: 'left',
  delay: 400
});
sr.reveal('.timeline-item', {
  origin: 'bottom',
  interval: 200
});


sr.reveal('.project-card', {
  origin: 'bottom',
  delay: 300,
  interval: 200
});


// sr.reveal('.contact-container', {
//   origin: 'top',
//   delay: 300
// });