import React from "react";
import ReactDOM from "react-dom";

class HelloMessage extends React.Component {
    render() {
        return (
            <h1>
                {
                    this.props.greetings.map(greeting => {
                        return <span>{greeting} {this.props.who}!<br /></span>;
                    })
                }
            </h1>
        );
    }
}

ReactDOM.render(<HelloMessage who="everybody" greetings={[
    "Hello",
    "Hallöchen",
    "Ciao"
]}/>, document.getElementById("main"));
