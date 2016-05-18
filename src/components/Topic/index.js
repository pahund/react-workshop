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
        if (this.state.expanded) {
            return (
                <article className={styles.topic}>
                    <h1 onClick={() => this.setState({ expanded: false })}>{this.props.subject}</h1>
                    {this.props.children}
                </article>
            );
        }
        return (
            <article className={styles.topic}>
                <h1 onClick={() => this.setState({ expanded: true })}>{this.props.subject}</h1>
            </article>
        );
    }
}

export default Topic;
