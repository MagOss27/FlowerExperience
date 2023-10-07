document.addEventListener('DOMContentLoaded', function() {
    var links = document.querySelectorAll('nav a');

    console.log(links)
    
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('click', smoothScroll);
    }

    function smoothScroll(e) {
      e.preventDefault();
      
      var targetId = this.getAttribute('href');
      var targetElement = document.querySelector(targetId);
      
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }
  });