import React from "react";
import ReactDOM from "react-dom";

class HelloMessage extends React.Component {
    render() {
        return <h1>Hello World!</h1>;
    }
}

ReactDOM.render(<HelloMessage />, document.getElementById("main"));
