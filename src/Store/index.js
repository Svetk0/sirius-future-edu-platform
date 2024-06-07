import { createStore } from "@reduxjs/toolkit";
// import { setupListeners } from "@reduxjs/toolkit/query/react";
// import userResucer from "./slices/userSlice";
 import { initialSchedule } from "./query/content";

const reducer = (state = initialSchedule, action) => { 
    switch (action.type) { 
        case 'ADD_EVENT':
            console.log('ADD_EVENT');
            return {
                
            };
        default: return state;
    }

}
export const store = createStore(
  reducer);

