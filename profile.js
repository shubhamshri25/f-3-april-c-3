if (localStorage.getItem("userinfo") == null) {
  alert(`you are not signed in. Please sign up to see the profile details`);
  window.location.href = "./index.html";
}

let fullname = document.getElementById("fname");
let email = document.getElementById("email");
let password = document.getElementById("pass");
let logoutbtn = document.getElementById("logout");

if (localStorage.getItem("userinfo")) {
  fullname.innerText =
    "Full Name: " + JSON.parse(localStorage.getItem("userinfo")).fullname;
  email.innerText =
    "Email: " + JSON.parse(localStorage.getItem("userinfo")).email;
  password.innerText =
    "Password: " + JSON.parse(localStorage.getItem("userinfo")).password;

  logoutbtn.style.display = "inline-block";
}

logoutbtn.addEventListener("click", () => {
  localStorage.removeItem("userinfo");
  window.location.href = "./index.html";
});
