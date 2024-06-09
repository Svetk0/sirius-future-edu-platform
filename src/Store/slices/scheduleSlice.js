import { createSlice } from "@reduxjs/toolkit";
import { initialSchedule } from "../query/content";

// const reducer = (state = initialSchedule, action) => { 
//     switch (action.type) { 
//         case 'ADD_EVENT':
//             console.log('ADD_EVENT');
//             return {
                
//             };
//         default: return state;
//     }

// }
const initialState = { ...initialSchedule };

const scheduleSlice = createSlice({
    name: 'schedule',
    initialState,
    reducers: {
        setSchedule(state, action) {
            state.title = action.payload.title;
            state.schedule = action.payload.schedule;
            state.subject = action.payload.subject;
            state.start = action.payload.start;
            state.id = action.payload.id;
        },
        removeSchedule(state) {
            state.title = null;
            state.schedule = null;
            state.subject = null;
            state.start = null;
            state.id = null;
        },
    },
});

export const {setSchedule, removeSchedule} = scheduleSlice.actions;

export default scheduleSlice.reducer;