import React from "react";
import styles from "./styles.css";

class User extends React.Component {
    render() {
        return (
            <div className={styles.user}>
                <div />
                <div className={styles.avatar}>
                    <img src={`images/avatar-${this.props.id}.gif`} />
                </div>
                <b>{this.props.name}</b> {this.props.date}
            </div>
        );
    }
}

export default User;
