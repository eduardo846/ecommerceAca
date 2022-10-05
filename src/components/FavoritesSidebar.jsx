import React, { useEffect } from "react";
import { ListGroup, ListGroupItem, Offcanvas } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCartThunk } from "../store/slices/cart.slice";

const FavoritesSidebar = ({ show, handleClose }) => {
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.cart);
  useEffect(() => {
    dispatch(getCartThunk());
  }, []);
  return (
    <Offcanvas show={show} onHide={handleClose} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Carts</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <ListGroup>
          {carts.map(cart=> (
            <ListGroupItem key={cart.id}>
              <Link to={`/products/${cart.id}`}>
                <h4>{cart.brand}</h4>
                {cart.title}
                </Link>
            </ListGroupItem>
          ))}
        </ListGroup>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default FavoritesSidebar;
