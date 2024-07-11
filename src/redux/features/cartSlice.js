import { createSlice } from "@reduxjs/toolkit";
const initialState={
    carts:[]
}

const cartSlice=createSlice({
    name:"cartslice",
    initialState,
    reducers:{
        addToCart:(state,action)=>{
            const Itemindex=state.carts.findIndex((item)=>item.id===action.payload.id);
            if(Itemindex>=0)
            {
                state.carts[Itemindex].qnty += 1;
            }
            else{
                state.carts=[...state.carts,action.payload]
            }
            
        },

        removeToCart:(state,action)=>{
            const data =state.carts.filter((ele)=>ele.id!==action.payload)
            state.carts=data
        },
        removeOneItem:(state,action)=>{

            const ItemIndex_dec=state.carts.findIndex((item)=>item.id===action.payload.id)

            if(state.carts[ItemIndex_dec].qnty >=1)
            {
                state.carts[ItemIndex_dec].qnty -=1
            }

        },
       emptyCart:(state,action)=>{
        state.carts=[]
       }
    }
});

export const {addToCart,removeToCart,removeOneItem, emptyCart}=cartSlice.actions;
export default cartSlice.reducer;