import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getFavoritesThunk } from "../store/slices/favorites.slice";

const Purchases = () => {
  const dispatch =useDispatch()

useEffect(()=>{
  dispatch(getFavoritesThunk())
},[])

  return (
    <div>
      <h1>Favoritos</h1>
    </div>
  );
};

export default Purchases;
