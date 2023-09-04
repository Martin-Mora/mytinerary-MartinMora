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
  loading: true,
  selectedValue: "",
  input: "",
};

const cityReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(city_render.fulfilled, (store, action) => {
      return {
        ...store,
        allCity: action.payload,
        filterCity: action.payload,
        loading: false,
      };
    })

    .addCase(get_city.fulfilled, (store, action) => {
      return {
        ...store,
        city: action.payload,
      };
    })

    .addCase(get_tineraries.fulfilled, (store, action) => {
      return {
        ...store,
        tineraries: action.payload,
      };
    })

    .addCase(resetCity, (stateActual, action) => {
      return {
        ...stateActual,
        city: action.payload,
      };
    })

    .addCase(resetSearch, (stateActual) => {
      return {
        ...stateActual,
        input: "",
      };
    })

    .addCase(city_input, (store, action) => {
      return {
        ...store,
        selectedValue: action.payload.selectedValue,
        input: action.payload.input,
      };
    })
);

export default cityReducer;
