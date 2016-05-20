/**
 * postComment.js
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 19 May 2016
 */
import axios from "axios";
import { takeEvery } from "redux-saga";
import { call, put } from "redux-saga/effects";
import topicsUpdated from "../actions/topicsUpdated";

function *postCommentSaga() {
    yield *takeEvery("COMMENT_POSTED", postComment);
}

function *postComment(action) {
    yield call(postCommentToApi, action.topicId, action.message);
    const response = yield call(fetchTopics);
    yield put(topicsUpdated(response.data));
}

function postCommentToApi(topicId, message) {
    return axios.post(`http://localhost:8080/api/topics/${topicId}`, {
        message,
        userId: 2314,
        userName: "ChubberGhouly"
    }).then(() => console.log("success")).catch(e => console.error(e));
}

function fetchTopics() {
    return axios.get("http://localhost:8080/api/topics");
}

export default postCommentSaga;
