import React from "react";

class Post extends React.Component {
    render() {
        return (
            <section>
                <div>{this.props.message}</div>
                {this.props.children}
            </section>
        );
    }
}

export default Post;
