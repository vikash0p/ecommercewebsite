import { createSlice } from "@reduxjs/toolkit";

const initialState={
    cart:[],
    amount: 0,
    total:0,
    isLoading:true,
}

export const cartSlice= createSlice({
    name:'carts',
    initialState,
    reducers:{
        addToCart(state,action){
            state.cart.push(action.payload)
        },
        removeToCart : (state,action)=>{
            const itemId=action.payload;
            state.cart=state.cart.filter((item)=>item.id!==itemId)
        },
        removeAllCart:(state)=>{
            state.cart=[]
        },
        increase: (state,{payload})=>{
            const cartItem=state.cart.find((item)=>item.id===payload.id)
           cartItem.amount=cartItem.amount + 1;

        },
        decrease:(state,{payload})=>{
            const cartItem=state.cart.find((item)=>item.id===payload.id)
            
            if(cartItem.amount >1){
                cartItem.amount=cartItem.amount - 1;
            }
            
        
           
        },
       
    }
})
export default cartSlice.reducer
export const {addToCart,removeToCart,removeAllCart, increase,decrease }=cartSlice.actions
export const selectAllCart=(state)=>state.carts.cart
