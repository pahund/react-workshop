import React from "react";

class Topic extends React.Component {
    render() {
        return (
            <article>
                <h1>{this.props.subject}</h1>
                {this.props.children}
            </article>
        );
    }
}

export default Topic;
