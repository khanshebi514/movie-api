'use client'

import Link from 'next/link';
import React, { useState } from 'react';

export default function MovieCard({ products }) {
  const [currentPage, setCurrentPage] = useState(1); // State for current page
  const [moviesPerPage] = useState(10); // Movies per page (you can adjust this value)

  // Calculate the indexes for slicing the movies
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = products.slice(indexOfFirstMovie, indexOfLastMovie); // Movies for the current page

  // Redirect function
  const redirectToLink = (id) => {
    open(`movies-and-shows/${id}`);
  };

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="overflow-x-auto p-4">
      {/* Movie Table */}
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
        <thead>
          <tr className="bg-gray-200 text-gray-700">
            <th className="py-3 px-6 text-left">Title</th>
            <th className="py-3 px-6 text-left">Genre</th>
            <th className="py-3 px-6 text-left">Year</th>
            <th className="py-3 px-6 text-left">Rating</th>
            <th className="py-3 px-6 text-left">Vist Detail</th>
          </tr>
        </thead>
        <tbody>
          {currentMovies.map((movie, index) => (
            <tr
              key={index}
              className="border-b text-black hover:bg-gray-100 cursor-auto"
            >
              <td className="py-3 px-6">{movie.title}</td>
              <td className="py-3 px-6">{movie.genre}</td>
              <td className="py-3 px-6">{movie.year}</td>
              <td className="py-3 px-6">{movie.rating}</td>
              <td className="py-3 px-6 text-blue-700"><Link href={`movies-and-shows/${movie.id}`}>See More Detail</Link></td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <Pagination
        itemsPerPage={moviesPerPage}
        totalItems={products.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
}

// Pagination Component
const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
  const pageNumbers = [];

  // Calculate total pages
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination">
      <ul className="flex justify-center mt-4">
        {pageNumbers.map((number) => (
          <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
            <button
              onClick={() => paginate(number)}
              className={`px-3 py-1 mx-1 rounded ${
                currentPage === number ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }`}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};