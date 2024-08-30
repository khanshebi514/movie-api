'use client'
import useMoviesFetcher from '@/hooks/useMoviesFetcher';
import MovieCard from '@/ui/MovieCard';
import Link from 'next/link';
import React, { useState, useEffect } from 'react'

export default function MoviesShows() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);

  const url = 'https://freetestapi.com/api/v1/movies';
  const { loadedProducts, error, isLoading } = useMoviesFetcher(url);

  // Handle search input change
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };


  useEffect(() => {
    if (loadedProducts) {
      if (searchTerm === '') {
        // If search term is empty show all movies
        setFilteredMovies(loadedProducts);
      } else {
        // Filter movies based on search term
        const results = loadedProducts.filter((movie) =>
          movie.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredMovies(results);
      }
    }
  }, [searchTerm, loadedProducts]);

  return (
    <section className='bg-black'>
      <div className='container'>
        <h1 className='main-heading'>Your Movies..</h1>
        <input
          type="text"
          placeholder="Search movies..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input mt-3 ml-3 text-black px-2"
        />
      </div>
      
      <div className="w-full bg-[#222] flex justify-center gap-4 p-3 flex-wrap mt-9">
        {isLoading && <p className="font-bold text-xl">Loading data, Please Wait ...!</p>}
        {error && <p className="font-bold text-xl">{error.message}</p>}

        {!isLoading && !error && (
          filteredMovies.length > 0 ? (
            <MovieCard products={filteredMovies} /> // Display filtered movies
          ) : (
            <p className="font-bold text-xl">No movies found!</p> // Show message if no results match
          )
        )}
      </div>
    </section>
  );
};
