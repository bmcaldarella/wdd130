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

document.addEventListener('DOMContentLoaded', function () {
  const elementsToFadeIn = document.querySelectorAll('.home .img-banner, .home .hi, .home .name, .home .title-hm, .home .btn-hm');

  elementsToFadeIn.forEach((element, index) => {
    setTimeout(() => {
      element.classList.add('fade-in', 'active');
    }, index * 200); 
  });
});



document.addEventListener("DOMContentLoaded", function () {
    const textContainer = document.getElementById("text-container");
    const textContent = textContainer.innerText;
    textContainer.innerText = ""; 
  
    function typeWriter(text, i, fnCallback) {
      if (i < text.length) {
        textContainer.innerHTML += text.charAt(i);
        i++;
        setTimeout(function () {
          typeWriter(text, i, fnCallback);
        }, 40); 
      } else if (typeof fnCallback == "function") {
        setTimeout(fnCallback, 1500);
      }
    }
  
    function startTextAnimation() {
      if (typeof textContent === "string") {
        typeWriter(textContent, 0, function () {
          
        });
      }
    }
  
    startTextAnimation();
  });
  