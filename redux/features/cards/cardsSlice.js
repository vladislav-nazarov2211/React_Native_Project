import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Alert } from 'react-native';

const initialState = {
    cardsArray: [],
    isLoading: true,
    btnFavourites: false, 
    obj: null
}

export const fetchCards = createAsyncThunk(
    'cards/fetchCards',   
    async () => {
        const response = await fetch('https://jsproject.webcademy.ru/items')
        const data = await response.json()
        return data
    }
)

export const fetchObj = createAsyncThunk(
    'cards/fetchObj',   
    async () => {
        const response = await fetch('https://jsproject.webcademy.ru/items/2')
        const data = await response.json()
        return data
    }
)

export const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        toggleFavouritesCard: (state, action) => {
            state.cardsArray = state.cardsArray.map((item) => {
                if (action.payload === item.id) {
                    return {...item, isLike: !item.isLike}
                } else {
                    return item
                }
            })
        },
        setBtnFavourites: (state) => {
            state.btnFavourites = !state.btnFavourites
        },
        deleteCard: (state, action) => {
            state.cardsArray = state.cardsArray.filter((item) => {
                return item.id != action.payload
            })
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCards.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(fetchCards.fulfilled, (state, action) => {
            state.cardsArray = action.payload.map((item) => {
                return {...item, isLike: false}
                })
            state.isLoading = false
        })
        builder.addCase(fetchObj.pending, (state) => {
            console.log('pending')
            state.isLoading = true;
        })
        builder.addCase(fetchObj.fulfilled, (state, action) => {
            state.obj = action.payload
            state.isLoading = false
        })
    },
})

export const { setCards, toggleFavouritesCard, setBtnFavourites, deleteCard } = cardsSlice.actions
export default cardsSlice.reducer



