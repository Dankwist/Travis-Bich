const registerForm = document.querySelector("#registerForm");
const loginForm = document.querySelector("#loginForm");

registerForm.addEventListener("submit", function(event) {
  event.preventDefault();
  const name = document.querySelector("#registerName").value;
  const email = document.querySelector("#registerEmail").value
  const password = document.querySelector("#registerPassword").value

  if (name === "" || email === "" || password.length < 6) {
    alert("Please fill all fields. Password must be at least 6 characters.");
    return;
  }

  const user = new User(name, email, password);
  localStorage.setItem("user", JSON.stringify(user))
  localStorage.setItem("currentUser", JSON.stringify(user));
        alert("Registration successful");
        window.location.href = "index.html";
});

loginForm.addEventListener("submit", function(event) {
  event.preventDefault();
  const email = document.querySelector("#loginEmail").value
  const password = document.querySelector("#loginPassword").value
  const savedUser = JSON.parse(localStorage.getItem("user"));

  if (!savedUser) {
    alert("No registered user found");
    return;
  }

  if (email === savedUser.email && password === savedUser.password) {
    localStorage.setItem("currentUser", JSON.stringify(savedUser));
    alert("Login successful");
    window.location.href = "index.html";
  } else {
    alert("Wrong email or password");
  }
});