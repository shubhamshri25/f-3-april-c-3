const nameVal = document.getElementById("name");
const emailVal = document.getElementById("email");
const passVal = document.getElementById("password");
const confirmPassVal = document.getElementById("confirm-password");
const signUpBtn = document.getElementById("signup-btn");
const form = document.querySelector("form");
const errMessage = document.getElementById("error-div");

if (localStorage.getItem("userinfo")) {
  let name = JSON.parse(localStorage.getItem("userinfo")).fullname;
  alert(`${name} you are already signed in`);
  window.location.href = "./profile.html";
}

signUpBtn.addEventListener("click", () => {
  if (
    nameVal.value == "" ||
    emailVal.value == "" ||
    emailVal.value == "" ||
    confirmPassVal.value == ""
  ) {
    errMessage.innerText = "Error : All the fields are mandatory";
    errMessage.style.color = "red";
    errMessage.style.display = "block";
    return;
  }

  if (emailVal.value != confirmPassVal.value) {
    errMessage.innerText = "Password not matching";
    errMessage.style.color = "red";
    errMessage.style.display = "block";
    return;
  }

  let userinfo = {
    fullname: nameVal.value,
    email: emailVal.value,
    password: passVal.value,
  };

  errmsg.innerText = "Successfully Signed Up!";
  errmsg.style.color = "green";
  errmsg.style.display = "block";
  localStorage.setItem("userinfo", JSON.stringify(userinfo));

  setTimeout(() => {
    window.location.href = "profile.html";
  }, 1000);
});
