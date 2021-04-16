import { pagBackward } from "../pagination/backward";
import { pagForward } from "../pagination/forward";

export function fetchImages(e) {
  if (breedsDiv.contains(e.target)) {
    fetch(`https://dog.ceo/api/breed/${e.target.innerText}/images`)
      .then((r) => r.json())
      .then((image) => {
        let index = 0;
        imagesDiv.src = image.message[index];
        pagForward();
        pagBackward();
      });
  }
}
