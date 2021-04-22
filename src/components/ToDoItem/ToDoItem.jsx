import "./ToDoItem.css";

export function ToDoItem(props) {
  return (
    <div className="to-do-item">
      <input type="checkbox" defaultChecked={props.checkValue} />
      <p>{props.label}</p>
      <img
        src="https://www.flaticon.com/svg/vstatic/svg/748/748023.svg?token=exp=1618938211~hmac=e273bb6c449187bec21d242bf6382bce"
        alt="trash"
        onClick={() => props.removeItem(props.label)}
      />
    </div>
  );
}
