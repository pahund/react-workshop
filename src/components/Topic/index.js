import React from "react";
import styles from "./styles.css";

class Topic extends React.Component {
    render() {
        return (
            <article className={styles.topic}>
                <h1>{this.props.subject}</h1>
                {this.props.children}
            </article>
        );
    }
}

export default Topic;
