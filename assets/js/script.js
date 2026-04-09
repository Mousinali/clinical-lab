document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.getElementById("openMenu");
  const closeBtn = document.getElementById("closeMenu");
  const mobileMenu = document.getElementById("mobileMenu");
  const backdrop = document.getElementById("backdrop");
  const body = document.body;

  if (!openBtn || !closeBtn || !mobileMenu || !backdrop) {
    console.error("Menu elements not found");
    return;
  }

  openBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("translate-x-full");
    mobileMenu.classList.add("translate-x-0");

    backdrop.classList.remove("opacity-0", "invisible");
    backdrop.classList.add("opacity-100", "visible");

    body.classList.add("overflow-hidden");
  });

  function closeMenuHandler() {
    mobileMenu.classList.add("translate-x-full");
    mobileMenu.classList.remove("translate-x-0");

    backdrop.classList.add("opacity-0", "invisible");
    backdrop.classList.remove("opacity-100", "visible");

    body.classList.remove("overflow-hidden"); // ✅ IMPORTANT
  }

  closeBtn.addEventListener("click", closeMenuHandler);
  backdrop.addEventListener("click", closeMenuHandler);
});