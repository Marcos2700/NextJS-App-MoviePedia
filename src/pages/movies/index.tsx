import React, { NextPage } from 'next';
import { ApplicationWrapper } from '../../components/layout/ApplicationWrapper';
import { MovieList } from '../../components/moviesList/MovieList';

interface TProps {
    response: string;
}

const Movies: NextPage<TProps> = () => {
    return(
        <ApplicationWrapper
        title='Movies'
        description='Movies of the rootlab movies website'>
            <MovieList />
        </ApplicationWrapper>
    )
}

export default Movies;