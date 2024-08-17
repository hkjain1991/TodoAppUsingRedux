import { TodoType } from "../globalstate/slice/TodoSlice";

export interface StringMap {
    addOrUpdateTasks : string;
    TodoTasks : string
};

export const RouteConstants: StringMap = {
    addOrUpdateTasks: "AddOrUpdateTask",
    TodoTasks: "TodoScreen"
}

export type StackRouteParams = {
    TodoScreen : undefined;
    AddOrUpdateTask?: TodoType;
}

