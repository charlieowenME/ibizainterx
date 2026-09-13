document.addEventListener("DOMContentLoaded", () => {

  const betaButtons = document.querySelectorAll(".beta-open");
  const betaModal = document.getElementById("betaModal");
  const betaClose = document.getElementById("betaClose");

  betaButtons.forEach((button) => {
    button.addEventListener("click", () => {
      betaModal.classList.add("open");
    });
  });

  betaClose.addEventListener("click", () => {
    betaModal.classList.remove("open");
  });

  betaModal.addEventListener("click", (event) => {
    if (event.target === betaModal) {
      betaModal.classList.remove("open");
    }
  });

});

const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");

    const isOpen = mobileMenu.classList.contains("open");
    menuToggle.setAttribute("aria-expanded", isOpen);
  });
}
const betaOpen = document.querySelector("#betaOpen");
const betaModal = document.querySelector("#betaModal");
const betaClose = document.querySelector("#betaClose");

if (betaOpen && betaModal && betaClose) {
  betaOpen.addEventListener("click", () => {
    betaModal.classList.add("open");
  });

  betaClose.addEventListener("click", () => {
    betaModal.classList.remove("open");
  });

  betaModal.addEventListener("click", (event) => {
    if (event.target === betaModal) {
      betaModal.classList.remove("open");
    }
  });
}