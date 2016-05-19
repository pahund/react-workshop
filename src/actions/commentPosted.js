/**
 * commentPosted.js
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 19 May 2016
 */
export default (message, userId, userName) => ({
    type: "COMMENT_POSTED",
    message,
    userId,
    userName
});
