const language = document.querySelector('.lang');
const url = new URL(window.location.href);
if (url.searchParams.get('lang') === 'en') {
  document.documentElement.lang = 'en';
  document.title = 'ATLAS CORP — Websites, Mini Apps and business software';
  document.querySelectorAll('[data-en]').forEach(element => {
    element.textContent = element.dataset.en;
  });
  url.searchParams.delete('lang');
  language.textContent = 'RU';
  language.setAttribute('aria-label', 'Русский');
  document.querySelector('.logo').href = '?lang=en';
} else {
  url.searchParams.set('lang', 'en');
}
language.href = url.href;

const gallery = document.getElementById('gallery');
const galleryImage = gallery.querySelector('img');
const caption = document.getElementById('gallery-caption');

document.querySelectorAll('.preview').forEach(button => {
  button.addEventListener('click', () => {
    const image = button.querySelector('img');
    galleryImage.src = image.currentSrc || image.src;
    galleryImage.alt = image.alt;
    caption.textContent = button.dataset.caption;
    gallery.showModal();
  });
});

gallery.addEventListener('click', event => {
  if (event.target === gallery && !gallery.contains(document.elementFromPoint(event.clientX, event.clientY))) {
    gallery.close();
  }
});
