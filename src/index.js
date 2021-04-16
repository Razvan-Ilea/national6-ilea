import { fetchBreeds } from "./fetch/fetchBreeds";
import { fetchImages } from "./fetch/fetchImages";

console.log("JavaScript - Dogs App");

if (!localStorage.getItem("name") || !localStorage.getItem("password")) {
  window.location = "/login.html";
}

document.getElementById("logout").addEventListener("click", () => {
  localStorage.removeItem("name");
  localStorage.removeItem("password");
  window.location = "/";
});

const breedsDiv = document.getElementById("breeds");
const imagesDiv = document.getElementById("breed-image");
const pagination = document.getElementById("page-number");

window.addEventListener("load", fetchBreeds());

window.addEventListener("click", fetchImages());
