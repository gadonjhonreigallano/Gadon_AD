
const text = "Web Developer | Designer | Problem Solver";
let index = 0;
const speed = 100;
const heroText = document.createElement("p");
heroText.style.fontSize = "20px";
heroText.style.marginTop = "10px";

document.querySelector(".hero .container").appendChild(heroText);

function typeWriter() {
  if (index < text.length) {
    heroText.textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, speed);
  }
}

window.addEventListener("load", typeWriter);


// Scroll reveal animation for sections
const revealElements = document.querySelectorAll("section");

function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  revealElements.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
      section.style.transition = "all 0.6s ease-out";
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

// Initial hide state
revealElements.forEach(section => {
  section.style.opacity = "0";
  section.style.transform = "translateY(50px)";
});
