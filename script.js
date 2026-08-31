function toggleMenu() {

  const navMenu = document.getElementById("nav-menu");

  navMenu.classList.toggle("active");

}
function selectCourse(course) {

  const courseSelect =
    document.getElementById("course");

  courseSelect.value = course;

}
