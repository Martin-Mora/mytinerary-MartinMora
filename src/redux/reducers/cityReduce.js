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
  allCity: [],       // Todas las ciudades
  filterCity: [],    // Ciudades filtradas por búsqueda
  tineraries: [],    // Lista de tinerarios
  city: null,        // Ciudad seleccionada
  tinerary: null,    // Tinerario seleccionado (si aplica)
  loading: true,     // Loading general
  selectedValue: "",
  input: "",
};

const cityReducer = createReducer(initialState, (builder) =>
  builder
    // Cargar todas las ciudades
    .addCase(city_render.fulfilled, (store, action) => ({
      ...store,
      allCity: Array.isArray(action.payload) ? action.payload : [],
      filterCity: Array.isArray(action.payload) ? action.payload : [],
      loading: false,
    }))

    // Cargar ciudad específica
    .addCase(get_city.fulfilled, (store, action) => ({
      ...store,
      city: action.payload || null,
    }))

    // Cargar todos los tinerarios
    .addCase(get_tineraries.fulfilled, (store, action) => ({
      ...store,
      tineraries: Array.isArray(action.payload) ? action.payload : [],
      loading: false,
    }))

    // Resetear ciudad seleccionada
    .addCase(resetCity, (store, action) => ({
      ...store,
      city: action.payload || null,
    }))

    // Resetear búsqueda
    .addCase(resetSearch, (store) => ({
      ...store,
      input: "",
    }))

    // Input de búsqueda
    .addCase(city_input, (store, action) => ({
      ...store,
      selectedValue: action.payload.selectedValue,
      input: action.payload.input,
    }))
);

export default cityReducer;
