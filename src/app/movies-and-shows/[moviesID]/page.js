'use client'
import useMoviesFetcher from '@/hooks/useMoviesFetcher';
import MovieCard from '@/ui/MovieCard';
import MovieDetail from '@/ui/MovieDetail';
import React from 'react'


export default function MoviesID({params}) {

  const id = params.moviesID
  const url = 'https://freetestapi.com/api/v1/movies';
  const {loadedProducts, error, isLoading} = useMoviesFetcher(`https://freetestapi.com/api/v1/movies/${id}`)
  return (
    <section className='bg-black'>
        <div className="w-full bg-[#222] flex justify-center gap-4 p-3 flex-wrap mt-9">
      {isLoading && <p className="font-bold text-xl">Loading data Please Wait ...!</p>}
      {error && <p className="font-bold text-xl">{error.message}</p>}

      {loadedProducts?
        <MovieDetail products={loadedProducts}/> 
      :''}

    </div>
    </section>
  )
}
