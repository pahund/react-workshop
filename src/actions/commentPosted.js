/**
 * commentPosted.js
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 19 May 2016
 */
export default (topicId, message, userId, userName) => ({
    type: "COMMENT_POSTED",
    topicId,
    message,
    userId,
    userName
});
