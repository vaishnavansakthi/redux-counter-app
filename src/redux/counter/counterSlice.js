import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Fake API call with a delay to simulate a real request
const fakeApiCall = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({ data: Math.floor(Math.random() * 100) }); // Return a random number
    }, 1000); // 1 second delay
  });

// createAsyncThunk to handle the fake API call
export const fetchRandomNumber = createAsyncThunk(
  'counter/fetchRandomNumber',
  async () => {
    const response = await fakeApiCall();
    return response.data; // Returning the data for use in the reducer
  }
);

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0,
  },
  reducers: {
    increment(state) {
      state.count += 1;
    },
    decrement(state) {
      state.count -= 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomNumber.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchRandomNumber.fulfilled, (state, action) => {
        state.loading = false;
        state.count = action.payload;
      })
      .addCase(fetchRandomNumber.rejected, (state, action) => {
        state.loading = false;
        state.error = 'Failed to fetch random number';
      });
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
