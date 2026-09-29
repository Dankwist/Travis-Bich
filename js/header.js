const authHeader = document.querySelector("#authHeader");
function renderUserHeader() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  if (!authHeader) return;

  if (currentUser) {
    authHeader.innerHTML = `
      HELLO, ${currentUser.name}
      <button id="logoutBtn" class="logout-btn">LOGOUT</button>
    `;

    const logoutBtn = document.querySelector("#logoutBtn");
    logoutBtn.addEventListener("click", function() {
      localStorage.removeItem("currentUser");
      renderUserHeader();
    });
  } else {
    authHeader.innerHTML = `<a href="./auth.html">LOGIN</a>`;
  }
}

renderUserHeader();