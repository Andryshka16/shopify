import { ICartItem } from './../types/cartItem'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState: ICartItem[] = []

const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		pushCartItems: (state, action: PayloadAction<ICartItem>) => {
			const { id, amount } = action.payload
			const alreadyInCart = state.find((item) => item.id === id)

			if (alreadyInCart) alreadyInCart.amount += amount
			else state.push(action.payload)
		},

		increaseAmountOfItem: (state, action: PayloadAction<number>) => {
			const product = state.find((product) => product.id === action.payload)
			if (product) product.amount += 1
		},
		decreaseAmountOfItem: (state, action: PayloadAction<number>) => {
			const product = state.find((product) => product.id === action.payload)
			if (!product) return

			if (product.amount > 1) product.amount -= 1
			else return state.filter((item) => item.id !== action.payload)
		},
		removeCartItem: (state, action: PayloadAction<number>) =>
			state.filter((item) => item.id !== action.payload),
	},
})

export default cartSlice.reducer
export const { pushCartItems, removeCartItem, increaseAmountOfItem, decreaseAmountOfItem } = cartSlice.actions
