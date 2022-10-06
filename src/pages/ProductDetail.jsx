import React, { useEffect, useState } from "react";
import { Button, Col, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { addFavoriteThunk } from "../store/slices/favorites.slice";

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch()
  const productsList = useSelector((state) => state.products);
  const [rate, setRate] = useState(5);
  const producsDetails = productsList.find(
    (products) => products.id === Number(id)
  );
  const relatedProducts = productsList.filter(
    (products) => products.category.id === producsDetails.category.id
  );

  useEffect(() => {
    setRate(5);
  }, [id]);

  //id
  //quantity
  const addFavorite = () => {
    alert("rate:" + rate);
    const favorite = {
      products: id,
      quality: rate,
    };
    dispatch(addFavoriteThunk(favorite))
  };

  console.log(relatedProducts);
  return (
    <Row>
      <Col>
        <img
          className="img-fluid"
          src={producsDetails?.productImgs}
          alt=""
          style={{ width: "100%", objectFit: "contain" }}
        />
      </Col>
      <Col>
        <h1>{producsDetails?.title}</h1>
        <p>{producsDetails?.description}</p>
        <div className="rate mb-5">
          <Button className="me-3" onClick={() => setRate(rate - 1)}>
            -
          </Button>
          {rate}
          <Button className="ms-3" onClick={() => setRate(rate + 1)}>
            +
          </Button>
          <br />
          <Button className="mt-2" onClick={addFavorite}>
            Add to Favorities
          </Button>
        </div>
      </Col>
      <Col lg={3}>
        <ListGroup variant="flush">
          {relatedProducts.map((products) => (
            <ListGroup.Item key={products.id}>
              <img
                src={products.productImgs}
                alt=""
                className="img-fluid"
                style={{ height: "10%", objectFit: "contain" }}
              />
              <Link to={`/products/${products.id}`}>{products.title}</Link>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Col>
    </Row>
  );
};

export default ProductDetail;
