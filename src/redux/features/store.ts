import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import { baseApi } from '../api/baseApi'
// ...
const store = configureStore({
  reducer: {
    [baseApi.reducerPath]:baseApi.reducer,
auth:authReducer,


  },

  middleware:getDefaultMiddlewares=>getDefaultMiddlewares().concat(baseApi.middleware)
})
export type RootState = ReturnType<typeof store.getState>

export default store;