import { useState } from "react";

import MovieContext from "./context";

export const MovieContextProvider = ({children}) => {
    const [movies, setMovies] = useState([])
    return(
        <MovieContext.Provider value = {{movies, setMovies}}>
            {children}
        </MovieContext.Provider>
    )
}

export default MovieContextProvider;
