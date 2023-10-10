// Mouse Hover Effect on LinkedIn and GitHub Icons

// Selecting the LinkedIn Icon
const linkedinIcon = document.querySelector(
  '.links a[href="https://www.linkedin.com/in/jonathanbanerjee"] img'
);

// Selecting the GitHub Icon
const githubIcon = document.querySelector(
  '.links a[href="https://www.github.com/jonathanbanerjee"] img'
);

// On mouseover, increase the brightness of the LinkedIn icon.
linkedinIcon.addEventListener("mouseover", () => {
  linkedinIcon.style.filter = "brightness(1.5)";
});

// When the mouse is not on the LinkedIn icon, change the brightness back down to 1.
linkedinIcon.addEventListener("mouseout", () => {
  linkedinIcon.style.filter = "brightness(1)";
});

// On mouseover, increase the brightness of the GitHub icon.
githubIcon.addEventListener("mouseover", () => {
  githubIcon.style.filter = "brightness(1.5)";
});

// When the mouse is not on the GitHub icon, change the brightness back down to 1.
githubIcon.addEventListener("mouseout", () => {
  githubIcon.style.filter = "brightness(1)";
});
