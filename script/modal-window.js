const modal = document.getElementById("modal");
const openModalButton = document.getElementById("open-modal");
const closeModalButton = document.querySelector(".close");

openModalButton.addEventListener("click", function () {
  modal.style.display = "block";
  document.body.classList.add("modal-open");
});

closeModalButton.addEventListener("click", function () {
  modal.style.display = "none";
  document.body.classList.remove("modal-open");
});

window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
  }
});
