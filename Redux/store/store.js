import { configureStore } from "@reduxjs/toolkit";
import favMoviesReducer from '../slices/favoriteSlice'

const store = configureStore({
    reducer: {
        favoriteMovies: favMoviesReducer,
    }
})

export default store;