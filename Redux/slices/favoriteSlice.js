import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
    name: "favorites",
    initialState: {favoriteMovies:[]},
    reducers:{
        addToFavorite:function(state,action){
            state.favoriteMovies.push(action.payload);
        },

        removeFromFavorite:function(state,action){
            state.favoriteMovies = state.favoriteMovies.filter(movie => movie.id !== action.payload.id);
        }
    }
})

export const {addToFavorite, removeFromFavorite} = favoriteSlice.actions
export default favoriteSlice.reducer;