window.addEventListener('scroll', () => {
  const navLinks = document.querySelectorAll("nav ul li a");
  const sections = document.querySelectorAll(".section");

  sections.forEach(section => {
      const rect = section.getBoundingClientRect();
      const detectionPoint = window.innerHeight / 3;

      if (rect.top <= detectionPoint && rect.bottom >= detectionPoint) {
          const bgColor = window.getComputedStyle(section).backgroundColor;
          if (bgColor === "rgb(255, 255, 255)" || bgColor === "rgb(245, 245, 245)" || bgColor === "rgb(211, 211, 211)") {
              // Couleur de fond blanche ou claire
              navLinks.forEach(link => link.style.color = "black");
          } else {
              // Couleur de fond sombre
              navLinks.forEach(link => link.style.color = "white");
          }
      }
  });
});
