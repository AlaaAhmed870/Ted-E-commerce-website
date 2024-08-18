// src/Components/Pages/Cart.jsx
import React from 'react';
import { useCart } from '../../Context/CartContext';
import { Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap';

const Cart = () => {
  const { cart, removeFromCart, clearCart, getCartTotal, addToCart } = useCart();

  return (
    <Container>
      <Row className="my-4">
        <Col md={12}>
          <h2 className="mb-4">Cart Summary</h2>
          <Card>
            <Card.Body>
              <Row className="mb-3">
                <Col md={6}>
                  <h5>SubTotal</h5>
                </Col>
                <Col md={6} className="text-end">
                  <h5>${getCartTotal()}</h5>
                </Col>
              </Row>
              {cart.length === 0 ? (
                <p>Your cart is empty.</p>
              ) : (
                <ListGroup variant="flush">
                  {cart.map(item => (
                    <ListGroup.Item key={item.id} className="d-flex align-items-center">
                      <Col md={4} className="d-flex justify-content-center">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="img-fluid rounded"
                          style={{ maxHeight: '150px' }}
                        />
                      </Col>
                      <Col md={8} className="d-flex flex-column justify-content-between">
                        <div>
                          <h5 className="mb-2">{item.title}</h5>
                          <p className="mb-2">${item.price}</p>
                          <div className="d-flex align-items-center">
                            <Button
                              variant="success"
                              onClick={() => addToCart(item)}
                              className="me-2"
                            >
                              Add
                            </Button>
                            <span className="px-3">{item.quantity}</span>
                            <Button
                              variant="danger"
                              onClick={() => removeFromCart(item.id)}
                              className="ms-2"
                            >
                              Remove
                            </Button>
                          </div>
                        </div>
                      </Col>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
              <Button
                variant="primary"
                onClick={clearCart}
                className="w-100 mt-3"
              >
                Clear Cart
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;
