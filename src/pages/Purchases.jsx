import React, { useEffect } from "react";
import { Col, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getFavoritesThunk } from "../store/slices/favorites.slice";

const Purchases = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const favorites = useSelector((state) => state.favorites);

  useEffect(() => {
    dispatch(getFavoritesThunk());
  }, []);

  return (
    <div>
      <h1>Favoritos</h1>
      <ListGroup>
        {favorites.map((favorite) =>
          favorite.cart.products.map((favor) => (
            <ListGroupItem onClick={() => navigate(`/products/${favor.id}`)} key={favor.id}>
              <Row>
                <Col md={3} lg={2}></Col>
                <Col>
                  <h3>{favor.title}</h3>
                  <p>Price: {favor.price}</p>
                  <p>Quantity: {favor.quantity}</p>
                </Col>
              </Row>
            </ListGroupItem>
          ))
        )}
      </ListGroup>
    </div>
  );
};

export default Purchases;
