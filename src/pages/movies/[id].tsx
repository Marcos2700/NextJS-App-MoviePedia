import React from 'react';
import { GetServerSideProps, NextPage } from 'next';
import { ApplicationWrapper } from '../../components/layout/ApplicationWrapper';
import { IMovie } from '../../components/moviesList/MovieList';

interface TProps {
    movie: IMovie;
}

const MovieDetailsPage: NextPage<TProps> = ({ movie }) => {
    return(
        <ApplicationWrapper title={movie.Title}>
            <div className='grow grid grid-cols-2 gap-4 justify-center items-center bg-gradient-to-r from-slate-800 via-slate-900 ...'>
                <div className='flex flex-auto justify-center'>
                    <img className='' src={movie.Poster} alt="{${movie.Title} Poster}" />
                </div>
                <div>
                    <h1 className='text-5xl font-bold'>{movie.Title}</h1>
                    <p className='text-xl font-medium'>Director: {movie.Director}</p>
                    <p className='text-xl font-medium'>Rating: {movie['IMDB Rating']}</p>
                    <p className='text-xl font-medium'>Estreno: {movie['Release Date']}</p>
                    <p className='text-xl font-medium'>Genero: {movie['Major Genre']}</p>
                </div>
                
            </div>        
        </ApplicationWrapper>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const res = await fetch('http://localhost:3001/movies/' + context.params?.id);
    const movie = await res.json();

    return{
        props: {
            movie,
        },
    };
};

export default MovieDetailsPage;