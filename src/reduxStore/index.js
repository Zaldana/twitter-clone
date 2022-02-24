import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from './userState';
import { tweetReducer } from './TweetState'

const store = configureStore({
    preloadedState: JSON.parse(window.localStorage.getItem('applicationState')) || {},
    reducer: {
        user: userReducer,
        tweet: tweetReducer,
    },
})

function handleOnChange() {
    const newState = store.getState();
    window.localStorage.setItem('applicationState', JSON.stringify(newState));
}

store.subscribe(handleOnChange)

export default store;