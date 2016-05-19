function handleTopicClicked(state, id) {
    /* TODO */
    console.log("topic clicked", id);
    return state;
}

export default (state, action) => {
    switch (action.type) {
        case "TOPIC_CLICKED":
            return handleTopicClicked(state, action.id);
        default:
    }
    return state;
}
