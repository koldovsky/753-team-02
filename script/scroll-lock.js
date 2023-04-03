//Augustin
(function () {
  const burgerButton = document.getElementById("burger-button");
  const menu = document.getElementById("menu");
  const body = document.querySelector("body");

  burgerButton.addEventListener("click", () => {
    menu.classList.toggle("active");
    body.classList.toggle("menu-active");
  });

  const menuItems = document.querySelectorAll("#menu li");
  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      menu.classList.remove("active");
      body.classList.remove("menu-active");
    });
  });
})();
