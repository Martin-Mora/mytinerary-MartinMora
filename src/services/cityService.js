import axios from "axios";

const citiesQueries = axios.create( {
  baseURL: 'http://localhost:3000/api/cities',
} );

const tineraryQueries= axios.create({
  baseURL: 'http://localhost:3000/api/tineraries'
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

