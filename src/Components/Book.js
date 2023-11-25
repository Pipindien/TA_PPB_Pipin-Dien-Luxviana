// src/components/Book.js
import React, { useState } from 'react';
import './style.css';
import Modal from './Modal';

const Book = ({ book }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [show,setShow]=useState(false);
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="card">
      <div className="book-info" onClick={()=>{setShow(true)}}>
        {book.volumeInfo.imageLinks && (
          <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
        )}
        <h3 className="title">{book.volumeInfo.title}</h3>
        <p>{book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown'}</p>
        <p>{book.volumeInfo.publishedDate}</p>
      </div>
      <hr />
      <Modal show={show} item={book} onClose={()=>setShow(false)}/>
    </div>
  );
};

export default Book;
