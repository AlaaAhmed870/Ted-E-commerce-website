// src/Components/SearchBar.jsx
import React from 'react';
import { Form } from 'react-bootstrap';

const SearchBar = () => {
  return (
    <Form>
      <Form.Group controlId="searchBar">
        <Form.Control
          type="text"
          placeholder="Search products..."
        />
      </Form.Group>
    </Form>
  );
};

export default SearchBar;
