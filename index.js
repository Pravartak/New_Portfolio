const skillsInput = document.getElementById("arrow1");
const projectsInput = document.getElementById("arrow2");
const iconDown1 = document.getElementById("iconDown1");
const iconDown2 = document.getElementById("iconDown2");
const skills = document.querySelector("skills");
const projects = document.querySelector("projects");
console.log(skillsInput);
skillsInput.addEventListener("change", () => {
    if (this.checked) {
        iconDown1.src = "assets/chevron-up.svg";
    } else {
        iconDown1.src = "assets/chevron-down.svg";
    }
});