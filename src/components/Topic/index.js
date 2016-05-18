import React from "react";
import styles from "./styles.css";

class Topic extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            expanded: false
        };
    }

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
