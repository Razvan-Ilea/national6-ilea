import { Component } from "react";

export class ToDoItemWithState extends Component {
  state = {
    nrOfClicks: 0,
  };

  handleIncreaseClicks = () => {
    console.log("click");
    this.setState({ nrOfClicks: this.state.nrOfClicks + 1 });
  };

  render() {
    return (
      <div className="to-do-item" onClick={this.handleIncreaseClicks}>
        <input type="checkbox" defaultChecked={this.props.checkValue} />
        <p>{this.props.label}</p>
        <img
          src="https://www.flaticon.com/svg/vstatic/svg/748/748023.svg?token=exp=1618938211~hmac=e273bb6c449187bec21d242bf6382bce"
          alt="trash"
        />
        <p>{this.state.nrOfClicks}</p>
      </div>
    );
  }
}
