import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingAddress } from "../action/cartAction";
import Checkout from "../Components/Checkout";

const ShippingScreen = ({ history }) => {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postoCode, setPostoCode] = useState(shippingAddress.postoCode);
  const [country, setCountry] = useState(shippingAddress.country);

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postoCode, country }));
    history.push("/payment");
  };
  return (
    <>
      <Checkout step1 step2 />
      <h1>Shipping</h1>
      <Row>
        <Col md={2}></Col>
        <Col md={8}>
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="address">
              <Form.Label>Address </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Address"
                value={address}
                required
                onChange={(e) => setAddress(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="city">
              <Form.Label>City </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter City"
                value={city}
                required
                onChange={(e) => setCity(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="postoCode">
              <Form.Label>Postal Code </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter PostoCode"
                value={postoCode}
                required
                onChange={(e) => setPostoCode(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="country">
              <Form.Label>Country </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter country"
                value={country}
                required
                onChange={(e) => setCountry(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Button type="submit" variant="primary">
              Continue
            </Button>
          </Form>
        </Col>
        <Col md={2}></Col>
      </Row>
    </>
  );
};

export default ShippingScreen;
