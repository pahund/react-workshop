function handleTopicClicked(state, id) {
    return Object.assign({}, state, {
        topics: state.topics.map(topic => Object.assign({}, topic, {
            expanded: topic.id === id
        }))
    });
}

function handleTopicsUpdated(state, newTopics) {
    const topics = state.topics.map((topic, topicIndex) => {
        const posts = newTopics[topicIndex].posts;
        return Object.assign({}, topic, { posts });
    });
    return Object.assign({}, state, { topics });
}

export default (state, action) => {
    console.log("reducer received action:", action.type);
    switch (action.type) {
        case "TOPIC_CLICKED":
            return handleTopicClicked(state, action.id);
        case "TOPICS_UPDATED":
            return handleTopicsUpdated(state, action.topics);
        default:
    }
    return state;
}
