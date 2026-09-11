const skillsInput = document.getElementById("arrow1");
const projectsInput = document.getElementById("arrow2");

const iconDown1 = document.getElementById("iconDown1");
const iconDown2 = document.getElementById("iconDown2");

const skills = document.querySelector(".skills").firstElementChild;
const projects = document.querySelector(".projects").firstElementChild;

const skillsDesc = document.querySelector(".skills").lastElementChild;
const projectsDesc = document.querySelector(".projects").lastElementChild;

skillsInput.addEventListener("change", () => {
  if (skillsInput.checked) {
    iconDown1.style.rotate = "180deg";
    skills.style.height = "500px";
    skillsDesc.style.display = "block";
  } else {
    iconDown1.style.rotate = "0deg";
    skills.style.height = "clamp(25px, 50px, 75px)";
    skillsDesc.style.display = "none";
  }
});

projectsInput.addEventListener("change", () => {
  if (projectsInput.checked) {
    iconDown2.style.rotate = "180deg";
    projects.style.height = "500px";
  } else {
    iconDown2.style.rotate = "0deg";
    projects.style.height = "clamp(25px, 50px, 755px)";
  }
});
