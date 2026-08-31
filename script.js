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

  const times = [
    "9:00",
    "9:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00",
    "17:30",
    "18:00",
    "18:30",
    "19:00",
    "19:30"
  ];

  timeSelect.innerHTML =
    '<option value="">選択してください</option>';

  let availableTimes = [];

  if (day === 0) {

    timeSelect.disabled = true;

    alert("日曜日は休診日のため、予約できません。");

    return;

  }

  if (day === 3) {

    availableTimes =
      times.filter(time => time < "12:30");

  } else if (day === 6) {

    availableTimes =
      times.filter(time => time < "18:00");

  } else {

    availableTimes =
      times.filter(time =>
        (time >= "9:00" && time < "12:30") ||
        (time >= "15:00" && time < "20:00")
      );

  }

  availableTimes.forEach(time => {

    const option =
      document.createElement("option");

    option.value = time;

    option.textContent = time;

    timeSelect.appendChild(option);

  });

  timeSelect.disabled = false;

});
