import { Component } from "react";

interface StateType {
  count: number;
}

interface PropsType {
  message: string;
}

export default class Counter extends Component<PropsType, StateType> {
  state = {
    count: 0,
  };

  handleClick = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Increment</button>
        {this.props.message}
        {this.state.count}
      </div>
    );
  }
}
