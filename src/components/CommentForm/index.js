/**
 * index.js
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 19 May 2016
 */
import React, { Component } from "react";
import styles from "./styles.css";

class CommentForm extends Component {
    handleCommentSubmit() {
        this.props.onSubmitClicked(this.refs.comment.value);
        this.refs.comment.value = "";
    }

    render() {
        return (
            <div>
                <textarea ref="comment" className={styles.commentField}></textarea>
                <button className={styles.submitButton}
                        onClick={() => this.handleCommentSubmit()}>Kommentar hinzufügen</button>
            </div>
        );
    }
}

export default CommentForm;
