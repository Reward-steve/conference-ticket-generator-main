const userName = document.querySelectorAll("#name");
const userEmail = document.getElementById("email");
const gitName = document.getElementById("gitName");
const id = document.getElementById("id");
const profilePic = document.querySelector(".avatar");
const currEvent = document.getElementById("current-event");

const response = localStorage.getItem("item");
const data = JSON.parse(response);

if (
  data[0].id !== "" &&
  data[0].userName !== "" &&
  data[0].userEmail !== "" &&
  data[0].profilePic !== "" &&
  data[0].gitHub !== ""
) {
  userName.forEach((name) => {
    name.textContent = data[0].userName;
  });
  userEmail.textContent = data[0].userEmail;
  gitName.textContent = data[0].gitHub;
  profilePic.src = data[0].profilePic;
  id.textContent = `#${data[0].id}`;
}

console.log(id);
