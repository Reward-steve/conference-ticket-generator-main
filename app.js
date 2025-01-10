const currYear = document.getElementById("year");
const selectImage = document.querySelector(".select-file");
const img = document.querySelector("#upload-image img");
const userName = document.querySelector(".input-name");
const userEmail = document.querySelector(".input-email");
const userGitHub = document.querySelector(".input-github");
const submitBtn = document.querySelector(".btn");
const picInfo = document.getElementById("info-message");
const formDoc = document.querySelector("form");

currYear.textContent = new Date().getFullYear();
const form = [];

const addProfilePic = (e) => {
  let files = e.target.files[0];
  if (files) {
    img.src = URL.createObjectURL(files);
    picInfo.style.opacity = 0;
  }
};

// Set a default image if the image fails to load
img.addEventListener("error", () => {
  img.src = "./assets/images/default-avatar.png"; // Set your desired default image path here
});

// CAPITALIZE FIRST LETTER
const capitalizeFirstLetter = (string) => {
  return string
    .toLowerCase()
    .split(" ")
    .map((str) => str[0].toUpperCase() + str.slice(1))
    .join(" ");
};

// EMAIL VALIDATION
const validateEmail = (email) => {
  const regEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regEx.test(String(email).toLowerCase());
};

const updateForm = (e) => {
  e.preventDefault();
  let Name = capitalizeFirstLetter(userName.value.trim());
  let email = userEmail.value.trim();
  let gitname = userGitHub.value.trim();
  let picture = img.src;

  // Warning if all input fields are empty
  if (Name === "" && email === "" && gitname === "") {
    alert("All fields are required.");
    return;
  }

  // Warning if email address is not valid
  if (!validateEmail(email)) {
    alert("Please enter a valid email address");
    return;
  }

  // Warning if profile picture is empty
  if (picture === "") {
    alert("Please upload a profile picture.");
    return;
  }

  const formdetails = {
    id: Math.round(Math.random() * 766680),
    profilePic: picture,
    userName: Name,
    userEmail: email,
    gitHub: gitname,
  };

  form.push(formdetails);
  localStorage.setItem("item", JSON.stringify(form));
  window.location.href = "./preview.html";
};

submitBtn.addEventListener("click", updateForm);
selectImage.addEventListener("change", addProfilePic);

// Accessibility: Allow form submission with Enter key
formDoc.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    updateForm(e);
  }
});
