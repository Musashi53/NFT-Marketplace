const navToggle = document.querySelector('.nav');

const navOpen = () => {
  navToggle.classList.toggle('open__nav');
}


const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
});

scrollReveal.reveal(`.home__content`);
scrollReveal.reveal(
  `.hidden__cards,
  .card__collections,
  .bullets__card,
  .footer`,
  {interval: 100}
);