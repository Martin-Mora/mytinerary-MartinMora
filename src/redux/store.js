import { configureStore } from '@reduxjs/toolkit'
import cityReducer from './reducers/cityReduce.js';

const store= configureStore({
  reducer:{
    cityReducer : cityReducer
  }
})

export default store;