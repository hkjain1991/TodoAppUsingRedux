import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { act, isValidElement } from "react";

export interface TodoType {
    id: string, 
    text: string,
    completed: boolean
}

interface Todos {
    items : TodoType[]
}
const initialState: Todos = {
    items : []
}

const TodoSlice = createSlice({
    name: "Todo",
    initialState,
    reducers: {
        Add_Item : (state, action: PayloadAction<TodoType>) => {
        state.items.push(action.payload)
        },
        Delete_Item: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter((item) => item.id !== action.payload) 
        },
        Update_Item: (state, action: PayloadAction<TodoType>) => {
        const data = state.items.find((item) => item.id == action.payload.id)
        if(data) {
            data.completed = action.payload.completed 
            data.text = action.payload.text
        }
        }
        ,
        Toggle_Item: (state, action: PayloadAction<string>) => {
            const data = state.items.find((item) => item.id == action.payload)
            if(data) {
                data.completed = !data.completed
            }
        }
    }
})

export const {Add_Item, Delete_Item, Update_Item, Toggle_Item} = TodoSlice.actions

export default TodoSlice.reducer