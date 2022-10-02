import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const productsList = useSelector(state=> state.products)
  const producsDetails =  productsList.find(products => products.id === Number(id))
  console.log(producsDetails)
  return (
    <div>
      <h1>{producsDetails?.title}</h1>
      <p>{producsDetails?.description}</p>
      <img src={producsDetails?.productImgs} alt="" width={"100px"}/>
    </div>
  );
};

export default ProductDetail;
