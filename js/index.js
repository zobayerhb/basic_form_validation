const user_create_form = document.querySelector("#user_create_form");
const msg = document.querySelector(".msg");

const name_req = document.querySelector(".name-req");
const email_req = document.querySelector(".email-req");
const cell_req = document.querySelector(".cell-req");
const username_req = document.querySelector(".username-req");

user_create_form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const cell = document.getElementById("cell");
  const username = document.getElementById("username");

  if (name.value == "") {
    name_req.innerHTML = `<span style="color: red;">* Required</span>`;
  } else {
    name_req.innerHTML = ``;
  }

  if (email.value == "") {
    email_req.innerHTML = `<span style="color: red;">* Required</span>`;
  } else {
    email_req.innerHTML = ``;
  }

  if (cell.value == "") {
    cell_req.innerHTML = `<span style="color: red;">* Required</span>`;
  } else {
    cell_req.innerHTML = ``;
  }

  if (username.value == "") {
    username_req.innerHTML = `<span style="color: red;">* Required</span>`;
  } else {
    username_req.innerHTML = ``;
  }

  if (
    name.value == "" ||
    email.value == "" ||
    cell.value == "" ||
    username.value == ""
  ) {
    msg.innerHTML = showAlert("All fields are required");
  } else if (emailCheck(email.value) == false) {
    msg.innerHTML = showAlert("Invalid Email", "danger");
  } else if (cellCheck(cell.value) == false) {
    msg.innerHTML = showAlert("Invalid Phone Number", "info");
  } else msg.innerHTML = showAlert("Data stable", "success");
});
