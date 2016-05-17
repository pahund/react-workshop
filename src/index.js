import React from "react";
import ReactDOM from "react-dom";

class HelloMessage extends React.Component {
    render() {
        let index = 0;
        return (
            <h1>
                {
                    this.props.greetings.map(greeting => {
                        return <span key={`greeting${index++}`}>{greeting} {this.props.who}!<br /></span>;
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
