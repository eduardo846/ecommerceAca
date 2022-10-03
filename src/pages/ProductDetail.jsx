import React from "react";
import { Col, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const productsList = useSelector((state) => state.products);
  const producsDetails = productsList.find(
    (products) => products.id === Number(id)
  );
  const relatedProducts = productsList.filter(
    (products) => products.category.id === producsDetails.category.id
  );
  console.log(relatedProducts);
  return (
    <Row>
      <Col>
        <h1>{producsDetails?.title}</h1>
        <p>{producsDetails?.description}</p>
        <img
          className="img-fluid"
          src={producsDetails?.productImgs}
          alt=""
          width={"200px"}
        />
      </Col>
      <Col lg={3}>
        <ListGroup variant="flush">
          {relatedProducts.map((products) => (
            <ListGroup.Item key={products.id}>
                <img src={products.productImgs} alt="" className="img-fluid" />
              <Link to={`/products/${products.id}`}>{products.title}</Link>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Col>
    </Row>
  );
};

export default ProductDetail;
