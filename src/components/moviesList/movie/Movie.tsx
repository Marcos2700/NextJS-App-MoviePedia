import React, { FC } from "react";
import Link from "next/link";
import { IMovie } from "../MovieList";

interface TProps {
    movie:IMovie;
}

const Movie: FC<TProps> = ({ movie }) => {
    return(
        <li>
            <Link href={`/movies/${movie.id}`}>
                <img className="cursor-pointer" src={movie.Poster} alt={'${movie.Title} Poster'}/>
            </Link>
            <strong className="text-lg">{movie.Title}</strong>
            <p className="text-md">Director {movie.Director}</p>
            <p className="text-md">Rating {movie["IMDB Rating"]}</p>
        </li>
    )
}

export default Movie;