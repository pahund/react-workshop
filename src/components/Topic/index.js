import React from "react";
import styles from "./styles.css";

class Topic extends React.Component {
    render() {
        if (this.props.expanded) {
            return (
                <article className={styles.topic}>
                    <h1 onClick={this.props.onTopicClicked}>{this.props.subject}</h1>
                    {this.props.children}
                </article>
            );
        }
        return (
            <article className={styles.topic}>
                <h1 onClick={this.props.onTopicClicked}>{this.props.subject}</h1>
            </article>
        );
    }
}

export default Topic;
