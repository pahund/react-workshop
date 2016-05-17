import React from "react";
import Post from "../components/Post";
import Topic from "../components/Topic";
import User from "../components/User";

class App extends React.Component {
    render() {
        let topicIndex = 0,
            postIndex = 0;
        return (
            <div>
                {this.props.topics.map(topic => {
                    return (
                        <Topic subject={topic.subject} key={`topic${topicIndex++}`}>
                            {topic.posts.map(post => {
                                return (
                                    <Post message={post.message} key={`post${postIndex++}`}>
                                        <User id={post.poster.id} name={post.poster.name} date={post.date} />
                                    </Post>
                                );
                            })}
                        </Topic>
                    );
                })}
            </div>
        );
    }
}

export default App;
