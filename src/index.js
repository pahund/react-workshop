import React from "react";
import ReactDOM from "react-dom";

class HelloMessage extends React.Component {
    render() {
        return <h1>Hello {this.props.who}!</h1>;
    }
}

ReactDOM.render(<HelloMessage who="everybody" />, document.getElementById("main"));
