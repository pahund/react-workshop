import React from "react";
import Post from "../components/Post";
import Topic from "../components/Topic";
import User from "../components/User";
import CommentForm from "../components/CommentForm";
import { connect } from "react-redux";
import topicClicked from "../actions/topicClicked";
import commendPosted from "../actions/commentPosted";

class App extends React.Component {
    render() {
        let topicIndex = 0,
            postIndex = 0;
        return (
            <div>
                {this.props.topics.map(topic => {
                    return (
                        <Topic subject={topic.subject} key={`topic${topicIndex++}`}
                               onTopicClicked={() => this.props.dispatch(topicClicked(topic.id))}
                               expanded={topic.expanded}>
                            {topic.posts.map(post => {
                                return (
                                    <Post message={post.message} key={`post${postIndex++}`}>
                                        <User id={post.poster.id} name={post.poster.name} date={post.date} />
                                    </Post>
                                );
                            })}
                            <CommentForm onSubmitClicked={comment =>
                                this.props.dispatch(commendPosted(comment, "borat666", 8012))} />
                        </Topic>
                    );
                })}
            </div>
        );
    }
}

export default connect(
    state => ({
        topics: state.topics
    })
)(App);
