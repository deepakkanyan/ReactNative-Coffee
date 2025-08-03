// store/index.ts
import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from '../screens/playground/example/CounterViewM';

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer, // 👈 mounted at `state.counter`
  },
});

// ✅ Infer types from store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
