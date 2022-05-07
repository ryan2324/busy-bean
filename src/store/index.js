import { createSlice, configureStore } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
        cartIsOpen: false,
        cartDataChanged: false
    },
    reducers: {
        setCartData(state, action){
            state.cart = action.payload
        },
        addToCart(state, action){
            const existingItem = state.cart.find((item) =>{
                return parseInt(item.id) === parseInt(action.payload.id)
            })
            if(existingItem){
                existingItem.qty++
            }else{
                state.cart.push(action.payload)
            }
        },
        removeFromCart (state, action){
            const existingItem = state.cart.find((item) =>{
                return parseInt(item.id) === parseInt(action.payload.id)
            })
            const newListItem = state.cart.filter((item) =>{
                return item.id !== existingItem.id
            })
            state.cart = newListItem;
        },
        toggleModal(state, action) {
            state.cartIsOpen = !state.cartIsOpen
        },
        toggleCartDataChanged(state, action){
            state.cartDataChanged = true
        }

    }
})

const statusSlice = createSlice({
    name: 'status',
    initialState: {
        statusData: {message:'', type: ''},
        statusUiIsOpen: false
    },
    reducers: {
        setStatusData(state, action){
            state.statusData = action.payload
        },
        toggleStatusModal(state, action){
            state.statusUiIsOpen = action.payload;
        }
    }
})

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        status: statusSlice.reducer
    }
})
export const cartActions = cartSlice.actions;
export const statusUIActions = statusSlice.actions;
export default store;