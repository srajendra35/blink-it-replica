import { createSlice } from "@reduxjs/toolkit";
import { userCards } from "../MockUp/Mock";

const initialState = [{
    cart:[],
    
}];
 



 

const counterSlice = createSlice({
    name:'counter',
    initialState,
    

    reducers:{
        AddCart(state,action){

              state.push(action.payload);

        },
        

        RemoveCart(state,action){

            return state.filter((item)=>item.id!== action.payload);
        },
        
        productaddcart(state,action){
            state.cart.push(action.payload);
        },
        
        productsremovecart(state,action){
            state.cart.push(action.payload);
        },

    }
})  

export const {AddCart,RemoveCart,productaddcart,productsremovecart}=counterSlice.actions;

export default counterSlice.reducer;
