const { func } = require("prop-types");

export function fetchBreeds() {
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
}
