import { createSlice } from "@reduxjs/toolkit";

 export const counterSlice = createSlice({
    name:"counterApp", /* slice name  */
    initialState:{
        value:0  /* here we have only on satate named as value and initial value as 0 */
    },
    /* actions are mentioned inside  this reducers key here reducer ket hold the actions or logics reducer and reducer key is not same */
    reducers:{ 
        //logics to update state
        
        //function to increment number

          //if it is an argument function then it can only be accessed by action and value in payload
        increment:(state , action)=>{ //here state is argument there by we can change value
            state.value +=action.payload
        },
      

        decrement:(state ,action)=>{ //here state is argument there by we can change value
            state.value -=action.payload
        },

        /* function to reset */
        reset:(state)=>{
state.value=0
        }


    }
})
/* arguments of createSlice
1.initial state
redux */

/* A function that accepts an initial state, an object full of reducer functions, and a "slice name", and automatically generates action creators and action types that correspond to the reducers and state.

The reducer argument is passed to createReducer() */


//action is required by component to update state


export const{increment,decrement,reset}=counterSlice.actions
//reduce is required to store to change the state value

export default counterSlice.reducer //reducer is automatically created