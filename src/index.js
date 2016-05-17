import React from "react";
import ReactDOM from "react-dom";

import data from "json!../data/forum.json";

class Forum extends React.Component {
    render() {
        console.log(this.props.topics);
        let topicIndex = 0,
            postIndex = 0;
        return (
            <div>
                {this.props.topics.map(topic => {
                    return (
                        <article key={`topic${topicIndex++}`}>
                            <h1>{topic.subject}</h1>
                            {topic.posts.map(post => {
                                return (
                                    <section key={`post${postIndex++}`}>
                                        <div>{post.message}</div>
                                        <div>
                                            <img src={`images/avatar-${post.poster.id}.gif`} />
                                            <b>{post.poster.name}</b> {post.date}
                                        </div>
                                    </section>
                                );
                            })}
                        </article>
                    );
                })}
            </div>
        );
    }
}

ReactDOM.render(<Forum topics={data.topics} />, document.getElementById("main"));
