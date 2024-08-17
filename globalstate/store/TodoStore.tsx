import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "../slice/TodoSlice";


const TodoStore = configureStore(
    {
        reducer: TodoSlice
    }
)

export type TodosType = ReturnType<typeof TodoStore.getState>
export type Dispatcher = typeof TodoStore.dispatch

export default TodoStore