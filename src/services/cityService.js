import axios from "axios";

const citiesQueries = axios.create( {
  baseURL: 'https://mytinerary-back-martinmora-production.up.railway.app/api/cities',
} );

const tineraryQueries= axios.create({
  baseURL: 'https://mytinerary-back-martinmora-production.up.railway.app/api/tineraries'
});


export const getAllCities = async (queryParams="") => {
  try {
      const response = await citiesQueries(queryParams)
      return response.data.response
  } catch (error) {
      console.log(error);
  }
}

export const getOneCity = async ( id ) => {
  try {
      const response = await citiesQueries('/'+id)
      return response.data.response
  } catch (error) {
      console.log(error);
  }
}

export const getTinerary = async ( queryParams="" ) => {
  try {
      const response = await tineraryQueries(queryParams)
      console.log(response.data);
      return response.data
  } catch (error) {
      console.log(error);
  }
}

