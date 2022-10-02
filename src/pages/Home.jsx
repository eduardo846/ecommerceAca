import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getProductsThunk } from "../store/slices/products.slice";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productsList = useSelector((state) => state.products);

  return (
    <div>
      <h1>Este es mi componente Home</h1>
      <ul>
        {productsList.map((product) => (
          <li
            key={product.id}
            onClick={() => navigate(`/products/${product.id}`)}
          >
            <h4>{product.title}</h4>
            <img src={product.productImgs} alt="" width={"100px"} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
