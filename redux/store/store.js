import { configureStore } from '@reduxjs/toolkit'
import cardsSlice from '../features/cards/cardsSlice'

export const store = configureStore({
    reducer: {
        cards: cardsSlice
    }
})
