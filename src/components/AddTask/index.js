import React from 'react';

class AddTask extends React.Component {
  constructor(props) {
    super(props);
    //inicializo
    this.state = {
      inputValue: '',
    }
  }

  handleChange(e) {
    const { value } = e.target;
    //actualizo
    this.setState({
      inputValue: value
    });
  }

  handleClick() {
    const { inputValue } = this.state;
    if (inputValue !== "") {
      this.props.handleCallback(inputValue);
      this.setState({
        inputValue: ''
      });
    }
  }

  render() {
    return (
      <>
        <input type="text" onChange={(e) => this.handleChange(e)} value={this.state.inputValue} />
        <button onClick={() => this.handleClick()}>Agregar</button>
      </>
    )
  }
}

export default AddTask;