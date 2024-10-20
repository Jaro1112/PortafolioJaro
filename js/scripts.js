document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    // Establecer el estilo inicial del header
    header.style.backgroundColor = '#161b1a';
    header.style.padding = '10px'; // Asegúrate de que el padding sea 10px al cargar
  
    window.addEventListener('scroll', function() {
      if (window.scrollY > 50) {
        // Reducir el tamaño de la navbar y hacerla más opaca
        header.style.backgroundColor = '#161b1a';
        header.style.padding = '10px';
      } else {
        // Restaurar el tamaño original
        header.style.backgroundColor = '#161b1a';
        header.style.padding = '10px';
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

  function changeImage(direction) {
    const images = document.querySelectorAll('.carousel-image');
    let currentIndex = Array.from(images).findIndex(image => image.classList.contains('active'));
    images[currentIndex].classList.remove('active');

    currentIndex = (currentIndex + direction + images.length) % images.length;
    images[currentIndex].classList.add('active');

    // Actualiza los indicadores
    updateIndicators(currentIndex);
  }

  function setCurrentImage(index) {
    const images = document.querySelectorAll('.carousel-image');
    images.forEach(image => image.classList.remove('active'));
    images[index].classList.add('active');

    // Actualiza los indicadores
    updateIndicators(index);
  }

  function updateIndicators(index) {
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach(indicator => indicator.classList.remove('active'));
    indicators[index].classList.add('active');
  }
