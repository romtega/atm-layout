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
const loginCard = document.querySelector("#card");

function showAccountSection(user) {
  loginCard.classList.add("hidden");
  accountCard.classList.remove("hidden");
  username.textContent = user.userId;
  userSavings.textContent = `$${user.savings.toLocaleString()}`;
}

function hideAccountSection() {
  accountCard.classList.add("hidden");
  loginCard.classList.remove("hidden");
  userSign.value = "";
  userPasswordSign.value = "";
  username.textContent = "";
  userSavings.textContent = "";
  amount.value = "";
  newSavings.textContent = "$";
}

function validateTransaction(amount) {
  if (isNaN(amount) || amount <= 0) {
    alert("Por favor, ingresa una cantidad válida.");
    return false;
  }
  return true;
}

login.addEventListener("click", function (e) {
  e.preventDefault();
  const user = users.find(
    (user) =>
      user.userId === userSign.value && user.password === userPasswordSign.value
  );

  if (user) {
    showAccountSection(user);

    deposit.addEventListener("click", function () {
      if (validateTransaction(amount.value)) {
        const updatedSavings = user.savings + parseInt(amount.value);
        if (updatedSavings > 990) {
          alert(
            "Lo siento, no puedes tener más de $990 en este tipo de cuenta."
          );
        } else {
          newSavings.textContent = `$${updatedSavings.toLocaleString()}`;
        }
      }
    });

    withdraw.addEventListener("click", function () {
      if (validateTransaction(amount.value)) {
        const updatedSavings = user.savings - parseInt(amount.value);
        if (updatedSavings < 10) {
          alert(
            "Lo siento, no puedes tener menos de $10 en este tipo de cuenta."
          );
        } else {
          newSavings.textContent = `$${updatedSavings.toLocaleString()}`;
        }
      }
    });

    confirm.addEventListener("click", function () {
      if (amount.value === "") {
        alert("Tienes que ingresar una cantidad primero.");
      } else {
        const updatedSavings = parseInt(
          newSavings.textContent.replace(/\D/g, "")
        );
        user.savings = updatedSavings;
        userSavings.textContent = `$${updatedSavings.toLocaleString()}`;
        amount.value = "";
        newSavings.textContent = "$";
      }
    });

    clear.addEventListener("click", function () {
      amount.value = "";
      newSavings.textContent = "$";
    });

    logout.addEventListener("click", function () {
      hideAccountSection();
    });
  } else {
    alert("El usuario o la contraseña estan incorrectos, vuelve a intentar");
  }
});
