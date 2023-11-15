import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";





 export const store= configureStore({
    //reducer can only update value of state in store
    //reducer key is predefined
    //how wany reducers we created can place reducer object 
    //it object can hold more than one reducer
    reducer:{
        /* reducer is coming from counterSlice since we are export reducer as export default */
counter:counterSlice
    }
}) /* redux tool kit is installed for configureStore() that method is used to create store */