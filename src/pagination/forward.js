import { functions } from "lodash";

export function pagForward() {
  document.getElementById("forward").addEventListener("click", () => {
    imagesDiv.src = "";
    index += 1;
    imagesDiv.src = image.message[index];
    pagination.innerText = index + 1;
  });
}
