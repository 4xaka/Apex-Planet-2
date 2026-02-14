// ================= TOGGLE PASSWORD =================
function togglePass(id){
let input = document.getElementById(id);
if(input){
input.type = input.type === "password" ? "text" : "password";
}
}


// ================= REGISTER VALIDATION =================
let reg = document.getElementById("registerForm");

if(reg){

reg.addEventListener("submit", function(e){

let p1 = document.getElementById("pass");
let p2 = document.getElementById("confirmPass");

if(p1 && p2){

if(p1.value.length < 6){
alert("Password must be at least 6 characters");
e.preventDefault();
return;
}

if(p1.value !== p2.value){
alert("Passwords do not match!");
e.preventDefault();
}

}

});

}


// ================= LOGIN VALIDATION =================
let login = document.getElementById("loginForm");

if(login){

login.addEventListener("submit", function(e){

let emailInput = login.querySelector("input[type=email]");

if(emailInput && !emailInput.value.includes("@")){
alert("Invalid email!");
e.preventDefault();
}

});

}


// ================= EMAIL CHECK (AJAX) =================
let emailField = document.getElementById("email");

if(emailField){

emailField.addEventListener("keyup", function(){

let email = emailField.value;
let status = document.getElementById("emailStatus");

if(email.length < 3){
if(status) status.innerHTML="";
return;
}

let xhr = new XMLHttpRequest();
xhr.open("GET","checkUser.php?email="+email,true);

xhr.onload = function(){

if(status){

if(this.responseText.trim() === "exists"){
status.innerHTML = "❌ Email already registered";
status.style.color="red";
}else{
status.innerHTML = "✅ Email available";
status.style.color="lightgreen";
}

}

}

xhr.send();

});

}


// ================= LIVE PASSWORD MATCH CHECK =================
let pass = document.getElementById("pass");
let confirmPass = document.getElementById("confirmPass");
let msg = document.getElementById("passMsg");

if(pass && confirmPass && msg){

confirmPass.addEventListener("keyup", function(){

if(pass.value !== confirmPass.value){
msg.innerHTML = "❌ Passwords do not match";
msg.style.color = "red";
}else{
msg.innerHTML = "✅ Passwords match";
msg.style.color = "lightgreen";
}

});

}
