const open = document.querySelector("#btn-confirm");
const close = document.querySelector("#btn-clear");
const account = document.querySelector("#account-section");

open.addEventListener("click", function () {
  account.classList.remove("hidden");
});

close.addEventListener("click", function () {
  account.classList.add("hidden");
});
