import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MovieApi from "../../common/APIS/MovieApi";
import { APIKey } from "../../common/APIS/MovieApiKey.js";

export const asyncMovies = createAsyncThunk(
  "Movies/asyncMovies",
  async (term) => {
    let response = await MovieApi.get(`?apikey=${APIKey}&s=${term}&type=movie`);
    return response.data;
  }
);

export const asyncSeries = createAsyncThunk(
  "Movies/asyncSeries",
  async (term) => {
    let response = await MovieApi.get(
      `?apikey=${APIKey}&s=${term}&type=series`
    );
    return response.data;
  }
);

export const asyncMoviesOrSeriesDetalis = createAsyncThunk(
  "Movies/asyncSeries",
  async (id) => {
    let response = await MovieApi.get(`?apikey=${APIKey}&i=${id}&Polt=full`);
    return response.data;
  }
);

const initialState = {
  movie: {},
  series: {},
  videoDetalis: {},
};
const SliceReducers = createSlice({
  name: "Movies",
  initialState,
  reducers: {
    addMovie: (state, action) => {
      state.movie = action.payload;
    },
    addUser: (state, { payload }) => {
      state.userData = payload;
    },
  },
  extraReducers: {
    [asyncMovies.pending]: () => {
      // console.log("Pending");
    },
    [asyncMovies.fulfilled]: (state, { payload }) => {
      // console.log("Fulfilled");
      return { ...state, movie: payload };
    },
    [asyncMovies.rejected]: () => {
      // console.log("Rejected");
    },
    [asyncSeries.fulfilled]: (state, { payload }) => {
      // console.log("Fulfilled");
      return { ...state, series: payload };
    },
    [asyncMoviesOrSeriesDetalis.fulfilled]: (state, { payload }) => {
      // console.log("Fulfilled");
      return { ...state, videoDetalis: payload };
    },
  },
});


export const { addMovie } = SliceReducers.actions;
export const getMoviesData = (state) => state.movie;
export const getSeriesData = (state) => state.series;
export const getVideosData = (state) => state.videoDetalis;
export default SliceReducers.reducer;
