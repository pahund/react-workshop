import React from "react";
import styles from "./styles.css";

class Post extends React.Component {
    render() {
        return (
            <section className={styles.post}>
                <div className={styles.body}>{this.props.message}</div>
                {this.props.children}
            </section>
        );
    }
}

export default Post;
