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
  
  dateInput.addEventListener("change", function () {

  const selectedDate =
    new Date(this.value + "T00:00:00");

  const day =
    selectedDate.getDay();

  const timeSelect =
    document.getElementById("time");

  if (day === 0) {

    timeSelect.value = "";

    timeSelect.disabled = true;

    alert("日曜日は休診日のため、予約できません。");

  } else {

    timeSelect.disabled = false;

  }

});
