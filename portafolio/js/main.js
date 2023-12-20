
document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const nav = document.querySelector('nav');

    menuIcon.addEventListener('click', function () {
      nav.classList.toggle('show');
    });

    nav.addEventListener('click', function () {
      nav.classList.remove('show');
    });
  });
  function redirectTo(page) {
    window.location.href = page;
}
document.addEventListener('DOMContentLoaded', function () {
  const elementsToFadeIn = document.querySelectorAll('.home .img-banner, .home .hi, .home .name, .home .title-hm, .home .btn-hm');

  elementsToFadeIn.forEach((element, index) => {
    setTimeout(() => {
      element.classList.add('fade-in', 'active');
    }, index * 200); 
  });
});

const text = '&lt;<span class="color">p</span>&gt;Hi, I\'m Brandon, passionate about technology and web development. I love bringing ideas to life through code, where the only limit is imagination. Transforming concepts into solutions with a touch of creativity is what drives me every day. Let\'s go beyond the limits of the imaginable!&lt;/<span class=" color">p</span>&gt;';

const textElement = document.getElementById('text');
let index = 0;

function typeWriter() {
  if (index < text.length + 1) {
    const newText = text.substring(0, index);
    textElement.innerHTML = newText + (index % 2 ? '|' : '');
    index++;
    setTimeout(typeWriter, 25);
  } else {
    index = 0;
    setTimeout(typeWriter, 4000);
  }
}

typeWriter();

function changeImage(img, newSrc) {
  img.setAttribute('data-original-src', img.src); 
  img.src = newSrc; 
}

function restoreImage(img, originalSrc) {
  img.src = img.getAttribute('data-original-src') || originalSrc; 
}
