import React from "react";
import ReactDOM from "react-dom";

import data from "json!../data/forum.json";

class Forum extends React.Component {
    render() {
        console.log(this.props.topics);
        let topicIndex = 0;
        return (
            <div>
                {this.props.topics.map(topic => {
                    return (
                        <article key={`topic${topicIndex++}`}>
                            <h1>{topic.subject}</h1>
                        </article>
                    );
                })}
            </div>
        );
    }
}

ReactDOM.render(<Forum topics={data.topics} />, document.getElementById("main"));
