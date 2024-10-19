document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
  
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        // Reducir el tamaño de la navbar y hacerla más opaca
        header.style.backgroundColor = '#161b1a';
        header.style.padding = '10px'; // Asegúrate de que este valor coincida con el padding por defecto
      } else {
        // Restaurar el tamaño original
        header.style.backgroundColor = '#161b1a';
        header.style.padding = '10px'; // Asegúrate de que este valor coincida con el padding por defecto
      }
    });
  });
  
  function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    
    tablinks = document.getElementsByClassName("tab-link");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  let currentImageIndex = 0;

  function changeImage(direction) {
    const images = document.getElementsByClassName("carousel-image");
    images[currentImageIndex].classList.remove("active");
    currentImageIndex = (currentImageIndex + direction + images.length) % images.length;
    images[currentImageIndex].classList.add("active");
    updateIndicators();
  }

  function setCurrentImage(index) {
    const images = document.getElementsByClassName("carousel-image");
    images[currentImageIndex].classList.remove("active");
    currentImageIndex = index;
    images[currentImageIndex].classList.add("active");
    updateIndicators();
  }

  function updateIndicators() {
    const indicators = document.getElementsByClassName("indicator");
    for (let i = 0; i < indicators.length; i++) {
      indicators[i].classList.remove("active");
    }
    indicators[currentImageIndex].classList.add("active");
  }
