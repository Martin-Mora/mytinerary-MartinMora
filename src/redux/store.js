import { configureStore } from '@reduxjs/toolkit'
import cityReducer from './reducers/cityReduce.js';
import { userReducer } from './reducers/userReduce.js';


const store= configureStore({
  reducer:{
    cityReducer : cityReducer,
    users : userReducer
  }
})

export default store;