const currYear = document.getElementById("year");
const selectImage = document.querySelector(".select-file");
const img = document.querySelector("#upload-image img");
const user = document.querySelectorAll("#inputs");
const submitBtn = document.querySelector(".btn");

currYear.textContent = new Date().getFullYear();

const form = [];

const addProfilePic = (e) => {
  let files = e.target.files[0];
  img.src = URL.createObjectURL(files);
};

const updateForm = () => {
  let Name = user[0].value;
  let email = user[1].value;
  let gitname = user[2].value;
  let picture = img.src;

  if ((Name !== "" && email !== "" && gitname !== "", picture !== "")) {
    const formdetails = {
      id: Math.round(Math.random() * 896000),
      profilePic: picture,
      userName: Name,
      userEmail: email,
      gitHub: gitname,
    };

    form.push(formdetails);
    localStorage.setItem("item", JSON.stringify(form));
  }
};

submitBtn.addEventListener("click", updateForm);
selectImage.addEventListener("change", addProfilePic);
