"use strict";

const login = document.querySelector("#btn-login");
const logout = document.querySelector("#btn-logout");
const deposit = document.querySelector("#btn-deposit");
const withdraw = document.querySelector("#btn-withdraw");
const confirm = document.querySelector("#btn-confirm");
const clear = document.querySelector("#btn-clear");
const accountCard = document.querySelector("#account-section");
const userSign = document.querySelector("#user-id");
const userPasswordSign = document.querySelector("#user-password");
const username = document.querySelector("#username");
const userSavings = document.querySelector("#user-savings");
const amount = document.querySelector("#user-amount");
const newSavings = document.querySelector("#user-new-savings");

login.addEventListener("click", function () {
  for (let i = 0; i < users.length; i++) {
    if (
      userSign.value == users[i].userId &&
      userPasswordSign.value == users[i].password
    ) {
      accountCard.classList.remove("hidden");
      username.textContent = users[i].userId;
      userSavings.textContent = users[i].savings;

      deposit.addEventListener("click", function () {
        newSavings.textContent = users[i].savings + Number(amount.value);
      });

      withdraw.addEventListener("click", function () {
        newSavings.textContent = users[i].savings - Number(amount.value);
      });

      confirm.addEventListener("click", function () {
        if (parseInt(newSavings.textContent) > 990) {
          alert(
            "Lo siento, no puedes tener mas de $990 en este tipo de cuenta"
          );
        } else if (parseInt(newSavings.textContent < 10)) {
          alert(
            "Lo siento, no puedes tener menos de $10 en este tipo de cuenta"
          );
        } else if (newSavings.textContent == "") {
          alert("Tienes que ingresar una cantidad primero");
        } else {
          alert(`Ingresaste ${amount.value} a tu cuenta`);
          userSavings.textContent = newSavings.textContent;
          amount.value = "";
          newSavings.textContent = "";
        }
      });

      clear.addEventListener("click", function () {
        amount.value = "";
        newSavings.textContent = "";
      });

      logout.addEventListener("click", function () {
        accountCard.classList.add("hidden");
        userSign.value = "";
        userPasswordSign.value = "";
        username.textContent = "";
        userSavings.textContent = "";
        amount.value = "";
        newSavings.textContent = "";
      });
    }
  }
});
