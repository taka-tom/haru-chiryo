function toggleMenu() {

  const navMenu = document.getElementById("nav-menu");

  navMenu.classList.toggle("active");

}

function submitReservation(event) {

  event.preventDefault();

  const message =
    document.getElementById("form-message");

  message.textContent =
    "送信ありがとうございました。現在はデモフォームのため、内容は送信されません。";

}