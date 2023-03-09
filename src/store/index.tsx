import { configureStore } from "@reduxjs/toolkit";
import bodySlice from "./bodySlice";
import grayscaleReducer from "./grayscaleSlice";
import solanaReducer from "./solanaSlice";
import themeSlice from "./themeSlice";
import tocSlice from "./tocSlice";
import walletSlice from "./walletSlice";
export const store = configureStore({
  reducer: {
    wallet: walletSlice,
    grayscale: grayscaleReducer,
    toc: tocSlice,
    body: bodySlice,
    solana: solanaReducer,
    theme: themeSlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export default store;
