// DOM Selection
const heading = document.querySelector("h1");

// Event Handling
heading.addEventListener("click", function () {
    heading.innerText = "Welcome to My Portfolio ";
});

document.getElementById("alertBtn").addEventListener("click", function(){
    alert("Button clicked successfully!");
});


const form = document.getElementById("contactForm");

if(form){
form.addEventListener("submit", function(e){

let email = document.querySelector("input[type=email]").value;
let name = document.querySelector("input[type=text]").value;

if(name === "" || email === ""){
alert("All fields required!");
e.preventDefault();
}

if(email.indexOf("@") === -1){
alert("Invalid email");
e.preventDefault();
}

});
}

let skills = ["HTML","CSS","JavaScript","PHP"];

for(let i=0;i<skills.length;i++){
console.log("Skill:", skills[i]);
}
