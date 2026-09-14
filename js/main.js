document.addEventListener("DOMContentLoaded", () => {

  /* MOBILE MENU */

  const menuToggle = document.querySelector(".menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("open");

      const isOpen = mobileMenu.classList.contains("open");
      menuToggle.setAttribute("aria-expanded", isOpen);
    });
  }


  /* BETA POPUP */

  const betaButtons = document.querySelectorAll(".beta-open");
  const betaModal = document.getElementById("betaModal");
  const betaClose = document.getElementById("betaClose");

  if (betaModal && betaClose) {

    betaButtons.forEach((button) => {
      button.addEventListener("click", () => {
        betaModal.classList.add("open");

        if (mobileMenu) {
          mobileMenu.classList.remove("open");
        }
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

  }


  /* LINK IN BIO LOADER */

  const bioLoader = document.getElementById("bioLoader");

  if (bioLoader) {
    setTimeout(() => {
      bioLoader.classList.add("hide");
    }, 1000);
  }

});