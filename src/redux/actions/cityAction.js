import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllCities,
  getOneCity,
  getTinerary,
} from "../../services/cityService.js";

export const city_render = createAsyncThunk("cities_render", async () => {
  const cities = getAllCities();
  return cities;
});

export const city_input = createAction(
  "get_city_search",
  (selectedValue, input) => {
    return {
      payload: {
        selectedValue,
        input,
      },
    };
  }
);

export const get_city = createAsyncThunk("get_city", async (id) => {
  const city = getOneCity(id);
  return city;
});

export const resetCity = createAction("reset_city", () => {
  return {
    payload: null,
  };
});

export const resetSearch = createAction("reset_search", () => {
  return {
    payload: null,
  };
});

export const get_tineraries = createAsyncThunk("get_tinearies", async () => {
  const tineraries = getTinerary();
  return tineraries;
});
