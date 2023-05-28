var btn = document.getElementById("log");

btn.onclick = function () {
  Swal.fire({
    title: "Are you sure?",
    text: "You will logout!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "No , Dont Logout!",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("", "Stay in the page!", "success");
    }
  });
};

// ____________________________
// in mobile screens  >>
let icon1 = document.querySelector(".fa-chart-simple");
let icon2 = document.querySelector(".fa-gear");
let icon3 = document.querySelector(".fa-user");
let icon4 = document.querySelector(".fa-pen-ruler");
let icon5 = document.querySelector(".fa-headphones");
let icon6 = document.querySelector(".fa-user-group");

icon1.onclick = function () {
  window.open("index.html", "_self");
};
icon2.onclick = function () {
  window.open("setting.html", "_self");
};
icon3.onclick = function () {
  window.open("profil.html", "_self");
};
icon4.onclick = function () {
  window.open("frends.html", "_self");
};
icon5.onclick = function () {
  window.open("contact.html", "_self");
};
icon6.onclick = function () {
  window.open("plans.html", "_self");
};

let img = document.querySelectorAll("img");

img.forEach((e) => {
  e.onclick = function () {
    Swal.fire({
      title: ``,
      text: "",
      imageUrl: `${e.src}`,
      imageWidth: 150,
      imageHeight: 150,
      imageAlt: "Custom image",
    });
  };
});
let imgProfile = document.getElementById("img-profile");
imgProfile.style.cursor = "pointer";
imgProfile.onclick = function () {
  Swal.fire({
    title: "Walid Hamdy",
    text: `Level 7⚡`,
    imageUrl: "imgs/photo_2023-01-23_21-35-46.jpg",
    imageWidth: 300,
    imageHeight: 300,
    imageAlt: "Custom image",
  });
};

// __________________________
let buttonSwetch = document.querySelector(".toggel-button");
let toggel = document.querySelector(".toggel");
let statics = document.getElementById("statics");
let boxbtn = document.querySelector(".setting-options .box");

toggel.onclick = function () {
  buttonSwetch.classList.toggle("active");
  if (buttonSwetch.classList.contains("active") === true) {
    statics.style.display = "none";
    boxbtn.style.width = "150%";
  } else {
    statics.style.display = "flex";
    boxbtn.style.width = "415px";
  }
};
