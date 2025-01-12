const currYear = document.getElementById("year");
const selectImage = document.querySelector(".select-file");
const img = document.querySelector("#upload-image img");
const userName = document.querySelector(".input-name");
const userEmail = document.querySelector(".input-email");
const userGitHub = document.querySelector(".input-github");
const submitBtn = document.querySelector(".btn");
const picInfo = document.getElementById("info-message");
const emailInfo = document.getElementById("error-message");
const emailError = document.querySelector(".email-error");
const imageError = document.querySelector(".image-error");
const formDoc = document.querySelector("form");

currYear.textContent = new Date().getFullYear();

const form = [];
const addProfilePic = (e) => {
  let files = e.target.files[0];

  if (files.size > 500000) {
    imageError.textContent =
      "File too large. Please upload a photo under (500KB)";

    img.src = "./assets/images/icon-upload.svg";
    picInfo.style.opacity = 1;
    imageError.style.color = "red";
  } else {
    imageError.textContent = "";
    img.src = URL.createObjectURL(files);
    picInfo.style.opacity = 0;
  }
};

// CAPITALIZE FIRST LETTER
const capitalizeFirstLetter = (string) => {
  return string !== ""
    ? string
        .toLowerCase()
        .split(" ")
        .map((str) => str[0].toUpperCase() + str.slice(1))
        .join(" ")
    : string;
};

// EMAIL VALIDATION
const validateEmail = (email) => {
  const regEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regEx.test(String(email).toLowerCase());
};

//UPDATE FORM
const updateForm = (e) => {
  e.preventDefault();
  if (
    capitalizeFirstLetter(userName.value.trim()) === "" &&
    userEmail.value.trim() === "" &&
    userGitHub.value.trim() === ""
  ) {
    alert("All Input field must be complete");
  } else {
    const formdetails = {
      id: Math.round(Math.random() * 766680),
      profilePic: img.src,
      userName: capitalizeFirstLetter(userName.value.trim()),
      userEmail: userEmail.value.trim(),
      gitHub: userGitHub.value.trim(),
    };

    form.push(formdetails);
    localStorage.setItem("item", JSON.stringify(form));
    window.location.href = "./preview.html";
  }
};

//VALIDATE EMAIL INPUT
userEmail.addEventListener("change", (e) => {
  let email = e.target.value;

  !validateEmail(email)
    ? ((emailError.style.color = "red"),
      (emailInfo.style.display = "flex"),
      (userEmail.style.outline = "1px solid red"))
    : ((emailInfo.style.display = "none"), (userEmail.style.outline = ""));
});

submitBtn.addEventListener("click", updateForm);
selectImage.addEventListener("change", addProfilePic);

// Accessibility: Allow form submission with Enter key
formDoc.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    updateForm(e);
  }
});
