const productCards = document.querySelectorAll(".product-card");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
        observer.unobserve(entry.target); // Only once
      }
    });
  },
  {
    threshold: 0.1,
  }
);

productCards.forEach((card) => {
  card.classList.add("hidden");
  observer.observe(card);
});
//////////////

document.addEventListener("DOMContentLoaded", () => {
  const fadeEls = document.querySelectorAll(".fade-in");

  const options = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      }
    });
  }, options);

  fadeEls.forEach((el) => observer.observe(el));
});
