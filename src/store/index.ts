import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import checkoutReducer from './features/checkout'
import toggleTheme from './features/toggleTheme'
import { pageFetch, submitBooking } from './services/pageFetch'

const store = configureStore({
  reducer: {
    [pageFetch.reducerPath]: pageFetch.reducer,
    [submitBooking.reducerPath]: submitBooking.reducer,
    checkout: checkoutReducer,
    toggleTheme
  },
  middleware: (getDefaultMiddleware)=>(
    getDefaultMiddleware()
      .concat(pageFetch.middleware)
      .concat(submitBooking.middleware)
  )
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store