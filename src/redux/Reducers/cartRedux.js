import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: localStorage.getItem("cartItems") 
        ? JSON.parse(localStorage.getItem("cartItems")) 
        : [],
        cartTotalQuantity: 0,
        cartTotalAmount:0,
    },
    reducers: {
        addToCart:(state, action)=> {
            const itemIndex = state.cartItems.findIndex(item => item._id === action.payload._id);
            if (itemIndex >= 0) {
                state.cartItems[itemIndex].cartQuantity += 1
            } else {
                const tempProduct = { ...action.payload, cartQuantity: 1};
                state.cartItems.push(tempProduct);
            };
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems));

            state.cartTotalQuantity +=1;
        },

        removeFromCart: (state, action) => {
            const nextCartItems = state.cartItems.filter(
                cartItem => cartItem._id !== action.payload._id
            );
            state.cartItems = nextCartItems;
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
            state.cartTotalQuantity = 0;
        },

        decreaseCartItem: (state, action) => {
            const itemIndex = state.cartItems.findIndex(
                cartItem => cartItem._id === action.payload._id
            );
            if (state.cartItems[itemIndex].cartQuantity > 1) {
                state.cartItems[itemIndex].cartQuantity -=1
                
            } else if (state.cartItems[itemIndex].cartQuantity === 1) {
                const nextCartItems = state.cartItems.filter(
                    cartItem => cartItem._id !== action.payload._id
                );

                state.cartItems = nextCartItems;
            };
            localStorage.setItem("cartItems", JSON.stringify(state.cartItems))
            state.cartTotalQuantity -=1;         
        },
        getTotals: (state, action) => {
            let cartItemQty = state.cartItems.length;
            let { total, quantity} = state.cartItems.reduce((cartTotal, cartItem)=> {
                const { price, cartQuantity } = cartItem;
                const itemTotal = price * cartQuantity;

                cartTotal.total += itemTotal
                cartTotal.quantity += cartQuantity

                return cartTotal
            }, {
                total: 0,
                quantity: 0,
                cartItemQuantity: 0,
            });
            state.cartTotalQuantity = quantity;
            state.cartItemQuantity = cartItemQty;
            state.cartTotalAmount = total;
        },
    },
});

export const {addToCart, removeFromCart, decreaseCartItem, getTotals} = cartSlice.actions;
export default cartSlice.reducer;