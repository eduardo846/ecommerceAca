import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import getConfig from "../../utils/getConfig";
import { setIsLoading } from "./isLoading.slice";

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: [],
  reducers: {
    setFavorites: (state, actions) =>{
        return actions.payload
    }
  },
});

export const getFavoritesThunk = () => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.get('https://ecommerce-api-react.herokuapp.com/api/v1/purchases',getConfig())
        .then(res => dispatch(setFavorites(res.data.data.purchases)))
        .finally(() => dispatch(setIsLoading(false)));
}

export const addFavoriteThunk = (favorite) => (dispatch) => {
    dispatch(setIsLoading(true));
    return axios.post('https://ecommerce-api-react.herokuapp.com/api/v1/cart', favorite, getConfig())
        .then(() => dispatch(getFavoritesThunk()))
        .finally(() => dispatch(setIsLoading(false)));
}

export const {setFavorites} = favoritesSlice.actions;

export default favoritesSlice.reducer;
