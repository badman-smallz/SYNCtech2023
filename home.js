function submitForm() {
  const form = document.getElementById("registrationForm");
  form.submit();
}

var prevScrollpos = window.pageYOffset;
var navbar = document.querySelector(".navbar");

window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;

  if (prevScrollpos > currentScrollPos) {
    navbar.classList.add("fixed-header");
  } else {
    navbar.classList.remove("fixed-header");
  }

  prevScrollpos = currentScrollPos;
};
$(document).ready(function () {
  $("#registerButton").click(function () {
    $("#registrationModal").modal("show");
  });
});

const targetDate = new Date("2023-8-18"); 
const interval = setInterval(function () {
  const currentDate = new Date();
  const timeRemaining = targetDate - currentDate;

  if (timeRemaining > 0) {
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
      (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    const timerDisplay = document.getElementById("countdown");
    timerDisplay.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  } else {
    clearInterval(interval);
    timerDisplay.innerHTML = "Conference has started!";
  }
}, 1000);


document.addEventListener("DOMContentLoaded", function () {
  const registrationForm = document.getElementById("registrationForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");

  registrationForm.addEventListener("submit", function (event) {
    let isValid = true;

    if (nameInput.value.trim() === "") {
      isValid = false;
      showError(nameInput, "Name is required");
    } else {
      removeError(nameInput);
    }

    if (!isValidEmail(emailInput.value)) {
      isValid = false;
      showError(emailInput, "Invalid email format");
    } else {
      removeError(emailInput);
    }

    if (!isValid) {
      event.preventDefault();
    }
  });

  function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  }

  function showError(input, message) {
    const formGroup = input.parentElement;
    const errorSpan = formGroup.querySelector(".error-message");
    if (!errorSpan) {
      const newErrorSpan = document.createElement("span");
      newErrorSpan.className = "error-message";
      newErrorSpan.textContent = message;
      formGroup.appendChild(newErrorSpan);
    }
  }

  function removeError(input) {
    const formGroup = input.parentElement;
    const errorSpan = formGroup.querySelector(".error-message");
    if (errorSpan) {
      formGroup.removeChild(errorSpan);
    }
  }
});
function initMap() {
  const mapOptions = {
    center: { lat: 5.47631, lng: 7.025853 }, 
    zoom: 15, 
  };

  const map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
function submitForm() {
  const form = document.getElementById("registrationForm");
  form.submit();
}
