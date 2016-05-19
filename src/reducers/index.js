function handleTopicClicked(state, id) {
    console.log("[PH_LOG] state: ", state); // PH_TODO: REMOVE
    const nextState = Object.assign({}, state, { topics: state.topics.map(topic => Object.assign({}, topic, {
        expanded: topic.id === id
    }))});
    console.log("[PH_LOG] nextState: ", nextState); // PH_TODO: REMOVE
    return nextState;
}

export default (state, action) => {
    switch (action.type) {
        case "TOPIC_CLICKED":
            return handleTopicClicked(state, action.id);
        default:
    }
    return state;
}
