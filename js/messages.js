const link = document.querySelector("#card-link");
const message = document.querySelector("#pop-message");

link.addEventListener("mouseenter", function () {
  message.classList.add("active");
});

link.addEventListener("mouseleave", function () {
  message.classList.remove("active");
});
