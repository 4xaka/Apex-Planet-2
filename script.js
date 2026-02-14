/* =========================
   HEADING CLICK EFFECT
========================= */
const heading = document.querySelector("h1");

if (heading) {
heading.addEventListener("click", function () {
heading.innerText = "Welcome to My Portfolio ";
});
}


/* =========================
   BUTTON ALERT
========================= */
const alertBtn = document.getElementById("alertBtn");

if (alertBtn) {
alertBtn.addEventListener("click", function () {
alert("Button clicked successfully!");
});
}


/* =========================
   FORM VALIDATION
========================= */
const form = document.getElementById("contactForm");

if (form) {

form.addEventListener("submit", function (e) {

let emailField = document.querySelector("input[type=email]");
let nameField = document.querySelector("input[type=text]");

let email = emailField.value.trim();
let name = nameField.value.trim();

if (name === "" || email === "") {
alert("All fields required!");
e.preventDefault();
return;
}

if (!email.includes("@")) {
alert("Invalid email format!");
e.preventDefault();
return;
}

});
}


/* =========================
   ARRAY LOOP DEMO
========================= */
let skills = ["HTML", "CSS", "JavaScript", "PHP"];

skills.forEach(skill => {
console.log("Skill:", skill);
});


/* =========================
   SCROLL REVEAL ANIMATION
========================= */
function revealOnScroll() {

let reveals = document.querySelectorAll(".reveal");

reveals.forEach(element => {

let windowHeight = window.innerHeight;
let elementTop = element.getBoundingClientRect().top;
let visiblePoint = 100;

if (elementTop < windowHeight - visiblePoint) {
element.classList.add("active");
}

});

}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
