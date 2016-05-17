import React from "react";

class User extends React.Component {
    render() {
        return (
            <div>
                <img src={`images/avatar-${this.props.id}.gif`} />
                <b>{this.props.name}</b> {this.props.date}
            </div>
        );
    }
}

export default User;
