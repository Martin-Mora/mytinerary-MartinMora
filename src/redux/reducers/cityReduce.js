import { createReducer } from "@reduxjs/toolkit";
import {
  city_render,
  city_input,
  get_city,
  resetCity,
  resetSearch,
  get_tineraries,
} from "../actions/cityAction.js";

const initialState = {
  allCity: [],
  filterCity: [],
  tineraries: [],
  city: null,
  tinerary: null,
  loadingCity: true,        // loading para la ciudad
  loadingTineraries: true,  // loading para itinerarios
  selectedValue: "",
  input: "",
};

const cityReducer = createReducer(initialState, (builder) =>
  builder
    // ----- CARGAR TODAS LAS CIUDADES -----
    .addCase(city_render.fulfilled, (state, action) => {
      state.allCity = action.payload;
      state.filterCity = action.payload;
      // Podemos usar un loading general para esto si querés
    })

    // ----- GET CITY -----
    .addCase(get_city.pending, (state) => {
      state.loadingCity = true;
    })
    .addCase(get_city.fulfilled, (state, action) => {
      state.city = action.payload;
      state.loadingCity = false;
    })
    .addCase(get_city.rejected, (state) => {
      state.city = null;
      state.loadingCity = false;
    })

    // ----- GET TINERARIES -----
    .addCase(get_tineraries.pending, (state) => {
      state.loadingTineraries = true;
    })
    .addCase(get_tineraries.fulfilled, (state, action) => {
      state.tineraries = action.payload;
      state.loadingTineraries = false;
    })
    .addCase(get_tineraries.rejected, (state) => {
      state.tineraries = [];
      state.loadingTineraries = false;
    })

    // ----- RESET CITY -----
    .addCase(resetCity, (state) => {
      state.city = null;
    })

    // ----- RESET SEARCH -----
    .addCase(resetSearch, (state) => {
      state.input = "";
    })

    // ----- CITY INPUT -----
    .addCase(city_input, (state, action) => {
      state.selectedValue = action.payload.selectedValue;
      state.input = action.payload.input;
    })
);

export default cityReducer;
