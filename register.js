function check() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let confirmPassword = document.getElementById("confirm_password").value;
  let email = document.getElementById("email").value;
  let mobile = document.getElementById("mobile_number").value;
  let number = 0;
  let cap = 0;
  let special = 0;
  for (let i = 0; i < password.length; i++) {
    let ascii = password.charCodeAt(i);
    if (ascii >= 48 && ascii <= 57) {
      number = 1;
    } else if (ascii >= 65 && ascii <= 90) {
      cap = 1;
    } else if ((ascii >= 32 && ascii <= 47) || (ascii >= 58 && ascii <= 64) || (ascii >= 91 && ascii <= 96) || (ascii >= 123 && ascii <= 126)) {
      special = 1;
    }
  }
  if (username.length < 6) {
    alert("Username must be at least 6 characters long.");
    location.reload();
  } else if (password.length < 8) {
    alert("Password must be at least 8 characters long.");
    location.reload();
  }
  else if (number == 0) {
    alert("Password must contain at least one number.");
    location.reload();
  }
  else if (cap == 0) {
    alert("Password must contain at least one uppercase letter.");
    location.reload();
  }
  else if (special == 0) {
    alert("Password must contain at least one special character.");
    location.reload();
  }
  else if (password !== confirmPassword) {
    alert("Passwords do not match.");
    location.reload();
  }
  else if (!email.includes("@") || !email.includes(".")) {
    alert("Please enter a valid email address.");
    location.reload();
  }
  else if (mobile.length != 10 || isNaN(mobile)) {
    alert("Please enter a valid 10-digit mobile number.");
    location.reload();
  }
  else {
    alert("Registration Successful!");
    window.location.href = "login.html";
  }
}