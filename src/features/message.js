import { createSlice } from "@reduxjs/toolkit"

const initialMessage = []

const messageSlice = createSlice({
    name: 'messages',
    initialState: { value: initialMessage },
    reducers: {
        addMessage: (state, action) => {
            state.value.push(action.payload)
        }
    }
})

export const { addMessage } = messageSlice.actions
export default messageSlice.reducer
