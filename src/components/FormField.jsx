export function FormField(props) {
  return (
    <div className="contact-form-field">
      <p>{props.label}</p>
      <input
        className="input-field"
        onChange={props.onChange}
        style={props.style}
      />
    </div>
  );
}
