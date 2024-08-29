'use client'
import { useEffect, useState } from "react"

const useMoviesFetcher = (url) => {
    const [loadedProducts, setLoadedProducts] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMovies = async () => {
            setIsLoading(true);  // Set loading to true before starting fetch

            try {
                const res = await fetch(url);
                
                if (!res.ok) {
                    throw new Error('Failed to fetch data!');
                }

                const data = await res.json();
                setLoadedProducts(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);  // Ensure loading is set to false after fetch
            }
        };

        fetchMovies();

    }, [url]);

    return { loadedProducts, isLoading, error };
};

export default useMoviesFetcher;