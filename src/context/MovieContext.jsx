import { useState } from "react";

import MovieContext from ".";

export const MovieContextProvider = ({children}) => {
    const [movies, setMovies] = useState([])
    return(
        <MovieContext.Provider value = {{movies, setMovies}}>
            {children}
        </MovieContext.Provider>
    )
}

export default MovieContextProvider;
