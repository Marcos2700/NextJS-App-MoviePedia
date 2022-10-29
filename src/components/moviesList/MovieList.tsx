import React, { useState, useEffect } from "react";
import Movie from './movie/Movie';

export interface IMovie {
    Title: string;
    "US Gross": number | null;
    "Worldwide Gross": number | null;
    "US DVD Sales": number | null;
    "Production Budget": number | null;
    "Release Date": string;
    "MPAA Rating": string;
    "Running Time min": number | null;
    Distributor: string;
    Source: number | null;
    "Major Genre": string | null;
    "Creative Type": string | null;
    Director: string | null;
    "Rotten Tomatoes Rating": number | null;
    "IMDB Rating": number | null;
    "IMDB Votes": number;
    id: number;
    Poster: string;
}

const useMovies = () => {
    const [movies, setMovies] = useState<IMovie[]>([]);

    useEffect(() => {
        var sliceStart = Math.floor(Math.random() * 225);
        fetch(process.env.NEXT_PUBLIC_API_URL + '/movies')
        .then((res) => res.json())
        .then((data:IMovie[]) => setMovies(data.slice(sliceStart, sliceStart + 25)))
        .catch((error) => console.log(error));
    }, []);

    return movies;
}

export const MovieList = () => {
    const movies = useMovies();

    return(
        <div className="flex flex-col justify-center dark:text-white items-center p-6 bg-gradient-to-r from-slate-800 via-slate-900 ...">
            <ul className="w-full grid grid-cols-1 md:grid-col-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {movies.map((movie) => (
                    <Movie key={movie.id} movie={movie}/>
                ))}
            </ul>
        </div>
    )
}