import menuSvg from "./menu.svg";
import "./MenuButton.css";

export function MenuButton() {
  return (
    <div className="app-menu-button">
      <img src={menuSvg} alt="menu-button" />
    </div>
  );
}
