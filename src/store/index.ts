import { configureStore, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Positions, Search } from '../Interfaces';

const initialState: Positions = {
  positions: [],
  loading: false,
  error: null,
  position: {
    id: '',
    type: '',
    url: '',
    created_at: '',
    company: '',
    company_url: '',
    location: '',
    title: '',
    description: ''
  }
};

const BASE_URL = 'http://dev3.dansmultipro.co.id';

export const fetchPositions = createAsyncThunk('positions/fetchPositions', async () => {
  const response = await fetch(`${BASE_URL}/api/recruitment/positions.json?page=1`);
  const data = await response.json();
  return data;
});

export const searchPositions = createAsyncThunk('positions/searchPositions', async ({ jobDescription, location, fullTimeOnly }: Search) => {
  const response = await fetch(`${BASE_URL}/api/recruitment/positions.json?description=${jobDescription}&location=${location}&full_time=${fullTimeOnly}`);
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
      })
      .addCase(searchPositions.pending, (state) => {
        state.loading = true;
      })
      .addCase(searchPositions.fulfilled, (state, action) => {
        state.loading = false;
        state.positions = action.payload;
      })
      .addCase(searchPositions.rejected, (state, action) => {
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
