// Toggle Menu for Mobile
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Simple Contact Form Handler
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("✅ Message sent! We'll be in touch.");
  contactForm.reset();
});
