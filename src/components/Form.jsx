import { Component } from "react";
import { FormField } from "./FormField";
import { FormMessage } from "./FormMessage";
import { SendButton } from "./SendButton";

export class Form extends Component {
  state = {
    inputValue: "",
    isInvalid: false,
  };

  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  handleSendButton = () => {
    if (this.state.inputValue === "") {
      this.setState({ isInvalid: true });
    } else {
      this.setState({ isInvalid: false });
    }
  };

  render() {
    console.log(this.state);
    return (
      <div className="contact-form">
        <FormField
          label="FIRST NAME"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
          style={{
            border: this.state.isInvalid ? "2px solid red" : undefined,
          }}
        />
        <FormField
          label="LAST NAME"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
          style={{
            border: this.state.isInvalid ? "2px solid red" : undefined,
          }}
        />
        <FormField
          label="EMAIL"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
          style={{
            border: this.state.isInvalid ? "2px solid red" : undefined,
          }}
        />
        <FormMessage
          label="MESSAGE"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
          style={{
            border: this.state.isInvalid ? "2px solid red" : undefined,
          }}
        />
        <SendButton onClick={this.handleSendButton} />
      </div>
    );
  }
}
