// src/Components/Pages/CollectionPage.jsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axiosInstance from '../../Service/axiosInstance';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CollectionPage = () => {
  const { collection } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axiosInstance.get(`products?collection=${collection}`)
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, [collection]);

  return (
    <Container>
      <h2>{collection} Collection</h2>
      <Row>
        {products.map(product => (
          <Col md={4} key={product.id}>
            <Card>
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
                <Link to={`/product/${product.id}`} className="btn btn-primary">View Details</Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CollectionPage;
