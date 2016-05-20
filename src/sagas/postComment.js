/**
 * postComment.js
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 19 May 2016
 */
import axios from "axios";

function *postCommentSaga() {
    yield *takeEvery("COMMENT_POSTED", postComment);
}

function *postComment(action) {
    yield call(postCommentToApi, action.topicId, action.message);
}

function postCommentToApi(topicId, message) {
    axios.post(`http://localhost:8080/api/topics/${topicId}`, {
        message,
        userId: 2314,
        userName: "ChubberGhouly"
    })
}

export default postCommentSaga;
