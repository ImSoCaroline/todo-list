import React from "react";
import Component1 from "./components/Component1";
import Component2 from "./components/Component2";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/imsocaroline");
    const json = await data.json();

    this.setState({
      data: json,
    });
  }

  // handleClick() {
  //   this.setState({
  //     data: { login: "yo" },
  //   });
  // }

  render() {
    console.log("RENDER");
    return (
      <>
        <Component1 />
        <Component2 />
        <p>{this.state.data.login}</p>
        {/* <button onClick={() => this.handleClick()}>Resetear</button> */}
      </>
    );
  }
}

export default App;
