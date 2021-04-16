import { functions } from "lodash";

export function pagBackward() {
  document.getElementById("backward").addEventListener("click", () => {
    imagesDiv.src = "";
    index -= 1;
    imagesDiv.src = image.message[index];
    pagination.innerText = pagination.innerText - 1;
  });
}
