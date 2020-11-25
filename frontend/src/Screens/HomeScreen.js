import React, { useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import Message from "../Components/Message";
import Loader from "../Components/Loader";

import { useDispatch, useSelector } from "react-redux";
import Product from "../Components/Product";
import { listProducts } from "../action/productAction";

// data from backend

const HomeScreen = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const { loading, products, error } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <h1>List</h1>
      {/* check error ////////////////////*/}
      {loading ? (
        <Loader></Loader>
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
