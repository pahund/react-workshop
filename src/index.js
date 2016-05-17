import React from "react";
import ReactDOM from "react-dom";

import data from "json!../data/forum.json";

class Forum extends React.Component {
    render() {
        console.log(this.props.topics);
        return (
            <div>
                {/* TODO: render forum contents here */}
            </div>
        );
    }
}

ReactDOM.render(<Forum topics={data.topics} />, document.getElementById("main"));
