import { Component } from "react";
import { FormField } from "./FormField";
import { FormMessage } from "./FormMessage";
import { SendButton } from "./SendButton";

export class Form extends Component {
  state = {
    firstInput: "",
    secondInput: "",
    thirdInput: "",
    messageInput: "",
    firstInputInvalid: false,
    secondInputInvalid: false,
    thirdInputInvalid: false,
    messageInputInvalid: false,
  };

  handleFirstInputChange = (event) => {
    this.setState({ firstInput: event.target.value });
  };
  handleSecondInputChange = (event) => {
    this.setState({ secondInput: event.target.value });
  };
  handleThirdInputChange = (event) => {
    this.setState({ thirdInput: event.target.value });
  };
  handleMessageInputChange = (event) => {
    this.setState({ messageInput: event.target.value });
  };

  handleSendButton = () => {
    if (this.state.firstInput === "") {
      this.setState({ firstInputInvalid: true });
    } else {
      this.setState({ firstInputInvalid: false });
    }
    if (this.state.secondInput === "") {
      this.setState({ secondInputInvalid: true });
    } else {
      this.setState({ secondInputInvalid: false });
    }
    if (this.state.thirdInput === "") {
      this.setState({ thirdInputInvalid: true });
    } else {
      this.setState({ thirdInputInvalid: false });
    }
    if (this.state.messageInput === "") {
      this.setState({ messageInputInvalid: true });
    } else {
      this.setState({ messageInputInvalid: false });
    }
  };

  render() {
    console.log(this.state);
    return (
      <div className="contact-form">
        <FormField
          label="FIRST NAME"
          value={this.state.firstInput}
          onChange={this.handleFirstInputChange}
          style={{
            border: this.state.firstInputInvalid ? "2px solid red" : undefined,
          }}
        />
        <FormField
          label="LAST NAME"
          value={this.state.secondInput}
          onChange={this.handleSecondInputChange}
          style={{
            border: this.state.secondInputInvalid ? "2px solid red" : undefined,
          }}
        />
        <FormField
          label="EMAIL"
          value={this.state.thirdInput}
          onChange={this.handleThirdInputChange}
          style={{
            border: this.state.thirdInputInvalid ? "2px solid red" : undefined,
          }}
        />
        <FormMessage
          label="MESSAGE"
          value={this.state.messageInput}
          onChange={this.handleMessageInputChange}
          style={{
            border: this.state.messageInputInvalid
              ? "2px solid red"
              : undefined,
          }}
        />
        <SendButton onClick={this.handleSendButton} />
      </div>
    );
  }
}
