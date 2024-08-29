'use client'
import useMoviesFetcher from '@/hooks/useMoviesFetcher';
import MovieCard from '@/ui/MovieCard';
import Link from 'next/link';
import React from 'react'

export default function MoviesShows() {
    const url = 'https://freetestapi.com/api/v1/movies';
    const {loadedProducts, error, isLoading} = useMoviesFetcher(url)
 

  return (
    <section className='bg-black'>
        <div className="w-full bg-[#222] flex justify-center gap-4 p-3 flex-wrap mt-9">
      {isLoading && <p className="font-bold text-xl">Loading data Please Wait ...!</p>}
      {error && <p className="font-bold text-xl">{error.message}</p>}

      {loadedProducts?
        <MovieCard products={loadedProducts}/> 
      :''}

    </div>
    </section>
  )
}
