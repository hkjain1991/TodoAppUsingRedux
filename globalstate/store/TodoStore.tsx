import { configureStore} from '@reduxjs/toolkit';
import TodoSlice from '../slice/TodoSlice'; // Ensure you are importing the slice correctly
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer,  FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from 'redux-persist';

// Persist configuration
let persistConfig = {
  key: 'TodoApp',
  storage: AsyncStorage,
};

// Persisted reducer configuration
const persistReduce = persistReducer(persistConfig, TodoSlice);

// Create a store using the persisted reducer
const TodoStore = configureStore({
  reducer: persistReduce,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Persistor to manage persistence operations
export const persistor = persistStore(TodoStore);

// Define types for state and dispatch
export type TodosType = ReturnType<typeof TodoStore.getState>;
export type Dispatcher = typeof TodoStore.dispatch;

export default TodoStore;