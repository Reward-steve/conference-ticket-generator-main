const userName = document.querySelector("#name");
const userEmail = document.getElementById("email");
const gitName = document.getElementById("gitName");
const ticketName = document.getElementById("ticket-name");
const id = document.getElementById("id");
const profilePic = document.querySelector(".avatar");
const currEvent = document.getElementById("current-event");
console.log(ticketName);

async function getFromStorage() {
  try {
    const response = localStorage.getItem("item");
    if (response) {
      const data = await JSON.parse(response);
      if (
        data[0].id !== "" &&
        data[0].userName !== "" &&
        data[0].userEmail !== "" &&
        data[0].profilePic !== "" &&
        data[0].gitHub !== ""
      ) {
        userName.textContent = data[0].userName;
        ticketName.textContent = data[0].userName;
        userEmail.textContent = data[0].userEmail;
        gitName.textContent = data[0].gitHub;
        profilePic.src = data[0].profilePic;
        id.textContent = `#${data[0].id}`;
      }
      if (
        profilePic.src === "http://127.0.0.1:5500/assets/images/icon-upload.svg"
      ) {
        profilePic.src = "./assets/images/icon-avatar.svg";
      }
    }
  } catch (err) {
    console.log(`Slow network: ${err}`);
  }
}
getFromStorage();

// Set a default image if the image is not found
profilePic.addEventListener("error", () => {
  profilePic.src = "./assets/images/image-avatar.jpg";
});

const arrMonth = [
  "Jan",
  "Feb",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const date = new Date();
currEvent.textContent = `${
  arrMonth[date.getMonth()]
} ${date.getDate()}, ${date.getFullYear()} / Ojo Lagos`;
