const NEW_TWEET = "chirp.com/tweet";

export const tweetReducer = (state = [], action) => {

    if (action.type === NEW_TWEET) {
        return [ ...state, action.payload ];
    }

    return state;
};

export const newTweetActionCreator = (tweetText) => {
    
    return ({
        type: NEW_TWEET,
        payload: {
            newTweet: tweetText,
        }
    });
}