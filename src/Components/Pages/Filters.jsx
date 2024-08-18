// src/Components/Filters.jsx
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const Filters = ({ onChange }) => {
  const [price, setPrice] = useState('');
  const [rating, setRating] = useState('');

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
    onChange({ price: e.target.value, rating });
  };

  const handleRatingChange = (e) => {
    setRating(e.target.value);
    onChange({ price, rating: e.target.value });
  };

  return (
    <Form>
      <Form.Group controlId="filterPrice">
        <Form.Label>Max Price</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter maximum price"
          value={price}
          onChange={handlePriceChange}
        />
      </Form.Group>
      <Form.Group controlId="filterRating" className="mt-3">
        <Form.Label>Min Rating</Form.Label>
        <Form.Control
          as="select"
          value={rating}
          onChange={handleRatingChange}
        >
          <option value="">Select rating</option>
          <option value="1">1 Star</option>
          <option value="2">2 Stars</option>
          <option value="3">3 Stars</option>
          <option value="4">4 Stars</option>
          <option value="5">5 Stars</option>
        </Form.Control>
      </Form.Group>
    </Form>
  );
};

export default Filters;
