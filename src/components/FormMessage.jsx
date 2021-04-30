export function FormMessage(props) {
  return (
    <div className="contact-form-field">
      <p>{props.label}</p>
      <textarea
        className="input-field"
        onChange={props.onChange}
        style={props.style}
      ></textarea>
    </div>
  );
}
