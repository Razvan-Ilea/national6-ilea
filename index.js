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

window.addEventListener("load", () => {
  fetch("https://dog.ceo/api/breeds/list/all")
    .then((r) => r.json())
    .then((data) => {
      for (item in data.message) {
        const breed = document.createElement("p");
        breed.id = `${item}`;
        breed.classList.add("breed");
        breedsDiv.appendChild(breed);
        breed.innerText = item;
      }
    });
});

window.addEventListener("click", (e) => {
  if (breedsDiv.contains(e.target)) {
    fetch(`https://dog.ceo/api/breed/${e.target.innerText}/images`)
      .then((r) => r.json())
      .then((image) => {
        let index = 0;
        imagesDiv.src = image.message[index];
        document.getElementById("forward").addEventListener("click", () => {
          imagesDiv.src = "";
          index += 1;
          imagesDiv.src = image.message[index];
          pagination.innerText = index + 1;
        });
        document.getElementById("backward").addEventListener("click", () => {
          imagesDiv.src = "";
          index -= 1;
          imagesDiv.src = image.message[index];
          pagination.innerText = pagination.innerText - 1;
        });
      });
  }
});
