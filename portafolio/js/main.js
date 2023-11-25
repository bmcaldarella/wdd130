
document.addEventListener('DOMContentLoaded', function () {
  // Obtiene los elementos que deseas animar
  const elementsToFadeIn = document.querySelectorAll('.home .img-banner, .home .hi, .home .name, .home .title-hm, .home .btn-hm');

  // Añade la clase "fade-in" a cada elemento después de un breve retraso
  elementsToFadeIn.forEach((element, index) => {
    setTimeout(() => {
      element.classList.add('fade-in', 'active');
    }, index * 200); // Ajusta el valor de retraso según sea necesario
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
        setTimeout(fnCallback, 700);
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
  