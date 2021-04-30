export function SendButton(props) {
  return (
    <div className="send-container">
      <button id="send" onClick={props.onClick}>
        Send
      </button>
    </div>
  );
}
