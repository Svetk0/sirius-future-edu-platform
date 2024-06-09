import { configureStore } from "@reduxjs/toolkit";
// import { setupListeners } from "@reduxjs/toolkit/query/react";
 import userReducer from "./slices/userSlice";
 import scheduleReducer from "./slices/scheduleSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        schedule: scheduleReducer,


    }
}
  );

//   export const store = configureStore({
//     reducer: {
//       user: userResucer,
//       [contentApi.reducerPath]: contentApi.reducer,
//     },
//     middleware: (getDefaultMiddleWare) =>
//       getDefaultMiddleWare().concat(contentApi.middleware),
//   });
//   setupListeners(store.dispatch);
  