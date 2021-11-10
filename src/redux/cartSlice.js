import { createSlice } from "@reduxjs/toolkit";

export const slice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: []
    },
    reducers: {
        addItemToCart: (state, action) => {
            const pseudoId = (new Date()).getTime(); //generates id for cart item

            state.cartItems.push({
                id: pseudoId,
                productId: action.payload.product.id,
                quantity: action.payload.quantity,
                totalPrice: action.payload.quantity * action.payload.product.price
            });
        },
        removeItemFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(
                cartItem => cartItem.id !== action.payload.cartItemId
            );
        }
    }
});

export const getCartItems = state => state.cart.cartItems;

export const getTotalPrice = state => {
    return state.cart.cartItems.reduce((total, cartItem) => {
        return cartItem.totalPrice + total;
    }, 0)
};

export const {addItemToCart, removeItemFromCart} = slice.actions;

export default slice.reducer;