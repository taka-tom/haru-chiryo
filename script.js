function toggleMenu() {

  const navMenu = document.getElementById("nav-menu");

  navMenu.classList.toggle("active");

}
function selectCourse(course) {

  const courseSelect =
    document.getElementById("course");

  courseSelect.value = course;

}

const dateInput =
  document.getElementById("date");

const today = new Date();

today.setDate(today.getDate() + 3);

const year = today.getFullYear();

const month =
  String(today.getMonth() + 1).padStart(2, "0");

const day =
  String(today.getDate()).padStart(2, "0");

dateInput.min =
  `${year}-${month}-${day}`;
