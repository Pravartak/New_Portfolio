let skillsInput = document.getElementById("arrow1");
let projectsInput = document.getElementById("arrow2");

let iconDown1 = document.getElementById("iconDown1");
let iconDown2 = document.getElementById("iconDown2");

let skills = document.querySelector("skills");
let projects = document.querySelector("projects");

console.log(skillsInput);

// if (skillsInput.checked) {
//     iconDown1.style.transform = "rotate(180deg)";
// } else {
//     iconDown1.style.transform = "rotate(0deg)";
// }

skillsInput.addEventListener("change", () => {
    if (skillsInput.checked) {
        iconDown1.style.rotate = "180deg";
    } else {
        iconDown1.style.rotate = "0deg";
    }
});

projectsInput.addEventListener("change", () => {
    if (this.checked) {
        iconDown2.style.transform = "rotate(180deg)";
    } else {
        iconDown2.style.transform = "rotate(0deg)";
    }
});