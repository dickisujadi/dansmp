import { configureStore, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Positions } from '../Interfaces';

const initialState: Positions = {
  positions: [],
  loading: false,
  error: null,
};

export const fetchPositions = createAsyncThunk('positions/fetchPositions', async () => {
  const response = await fetch('http://dev3.dansmultipro.co.id/api/recruitment/positions.json');
  const data = await response.json();
  return data;
});

const positionsSlice = createSlice({
  name: 'positions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPositions.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPositions.fulfilled, (state, action) => {
        state.loading = false;
        state.positions = action.payload;
      })
      .addCase(fetchPositions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { actions, reducer } = positionsSlice;

const store = configureStore({
  reducer: {
    positions: reducer,
  },
});

export default store;
