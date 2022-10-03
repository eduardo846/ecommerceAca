import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getProductsThunk } from "../store/slices/products.slice";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const productsList = useSelector((state) => state.products);
  const [categories, setCategories] = useState([]);
  const [productsFiltered, setProductsFiltered] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://ecommerce-api-react.herokuapp.com/api/v1/products/categories/"
      )
      .then((res) => setCategories(res.data.data.categories));
  }, []);

  useEffect(() => {
    setProductsFiltered(productsList);
  }, [productsList]);

  const filterCategory = (categoryId) => {
    const filtered = productsList.filter(
      (products) => products.category.id === categoryId
    );
    setProductsFiltered(filtered);
  };

  const searchProducts = () => {
    const filtered = productsList.filter((products) =>
      products.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setProductsFiltered(filtered);
  };

  return (
    <Row>
      <Col lg={3}>
        <ListGroup>
          {categories.map((category) => (
            <ListGroup.Item
              key={category.id}
              onClick={() => filterCategory(category.id)}
              style={{cursor: "pointer"}}
            >
              {category.name}
            </ListGroup.Item>
          ))}
        </ListGroup>
      </Col>
      <Col>
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Search products"
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
          />
          <Button variant="outline-secondary" onClick={searchProducts}>
            Button
          </Button>
        </InputGroup>

        <Row xs={1} md={2} className="g-4">
        {productsFiltered.map((product) => (
        <Col key={product.id}>
          <Card onClick={() => navigate(`/products/${product.id}`)} style={{height: "100%"}}>
            <Card.Img variant="top" src={product.productImgs} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>
                {product.description}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
      </Col>
    </Row>
  );
};

export default Home;
