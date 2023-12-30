
document.addEventListener('DOMContentLoaded', function () {
      const menuIcon = document.getElementById('menu-icon');
      
      // Función para manejar el evento de scroll
      function handleScroll() {
        if (window.scrollY > 50) { // Puedes ajustar este valor según sea necesario
          menuIcon.style.opacity = '0';
        } else {
          menuIcon.style.opacity = '1';
        }
      }

      // Agrega un evento de scroll al documento
      window.addEventListener('scroll', handleScroll);

      // Llama a la función handleScroll al cargar la página
      handleScroll();
    });
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


function toggleCertificate() {
  var certificateDiv = document.getElementById('doc-certificate');
  
  // Toggle the display property based on the current state
  if (certificateDiv.style.display === 'none' || certificateDiv.style.display === '') {
    certificateDiv.style.display = 'flex';
  } else {
    certificateDiv.style.display = 'none';
  }
}