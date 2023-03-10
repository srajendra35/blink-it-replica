import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../Redux/CreateSilce'

const store = configureStore({
    reducer:{
        counter:counterReducer,
    }

})
export default store;

 