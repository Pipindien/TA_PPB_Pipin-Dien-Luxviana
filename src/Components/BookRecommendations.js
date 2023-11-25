// src/components/BookRecommendations.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Book from './Book';


const BookRecommendations = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get(
          'https://www.googleapis.com/books/v1/volumes?q=javascript&maxResults=5'
        );
        setBooks(response.data.items || []);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching book recommendations:', error);
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div>
        <h1>Book Recommendations</h1>
    <div className="container">
      {loading ? (
        <p>Loading...</p>
      ) : (
        books.map((book) => <Book key={book.id} book={book} />)
      )}
    </div>
    </div>
  );
};

export default BookRecommendations;
