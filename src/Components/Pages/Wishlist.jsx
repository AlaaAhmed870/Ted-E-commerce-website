
import { useWishlist } from '../../Context/WishlistContext';
import { Button, Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Wishlist = () => {
  const { wishlist, removeFromWishlist, clearWishlist } = useWishlist();

  return (
    <section className="ftco-section">
      <Container>
        <Row className="justify-content-center mb-5">
          <Col md={12} className="text-center">
            <h2 className="heading-section">Your Wishlist</h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {wishlist.length === 0 ? (
            <Col md={6} className="text-center">
              <p>Your wishlist is empty.</p>
              <Link to="/products" className="btn btn-primary">Browse Products</Link>
            </Col>
          ) : (
            wishlist.map(item => (
              <Col md={4} key={item.id}>
                <Card className="mb-4">
                  <Card.Img variant="top" src={item.image} alt={item.title} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>${item.price}</Card.Text>
                    <Button variant="danger" onClick={() => removeFromWishlist(item.id)}>
                      Remove from Wishlist
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))
          )}
        </Row>
        {wishlist.length > 0 && (
          <Row>
            <Col className="text-center">
              <Button variant="primary" onClick={() => clearWishlist()}>
                Clear Wishlist
              </Button>
            </Col>
          </Row>
        )}
      </Container>
    </section>
  );
};

export default Wishlist;
