import React from "react";

class Component2 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
    };
  }

  handleChange(e) {
    const { value } = e.target;
    this.setState({
      text: value,
    });
  }

  render() {
    const { text } = this.state;
    return (
      <>
        <input type="text" onChange={(e) => this.handleChange(e)} />
        <p>{text}</p>
      </>
    );
  }
}

export default Component2;
