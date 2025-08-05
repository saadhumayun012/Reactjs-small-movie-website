import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import config from '../config/config';

const MovieDetailsCard = () => {
    const { idAndTitle } = useParams();
    const movieId = idAndTitle?.split("-")[0];

    const [movieData, setMovieData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchMovieDetails = async () => {
        if (!movieId) return;
        setError(null);
        try {
            setLoading(true);
            const url = `${config.tmbd_base_url}/movie/${movieId}?api_key=${config.tmdb_api_key}&append_to_response=videos`;
            const response = await fetch(url);
            const data = await response.json();
            setMovieData(data);
        } catch (err) {
            setError("Something went wrong!");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMovieDetails();
    }, [movieId]);

    return (
        <div className="min-h-screen bg-gray-100 p-4">
            {loading ? (
                <div className="text-center text-xl font-semibold">Loading...</div>
            ) : error ? (
                <div className="text-center text-red-600">{error}</div>
            ) : movieData ? (
                <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden md:flex">
                    <div className="md:w-1/3">
                        <img
                            src={`https://image.tmdb.org/t/p/w500${movieData.poster_path}`}
                            alt={movieData.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="md:w-2/3 p-6 space-y-4">
                        <h2 className="text-3xl font-bold text-gray-800">{movieData.title}</h2>
                        <p className="italic text-gray-500">"{movieData.tagline}"</p>

                        <div>
                            <span className="font-semibold">Release Date:</span> {movieData.release_date}
                        </div>
                        <div>
                            <span className="font-semibold">Language:</span> {movieData.original_language.toUpperCase()}
                        </div>
                        <div>
                            <span className="font-semibold">Status:</span> {movieData.status}
                        </div>
                        <div>
                            <span className="font-semibold">Genres:</span>{" "}
                            {movieData.genres?.map((g) => g.name).join(' - ')}
                        </div>
                        <div>
                            <span className="font-semibold">Countries:</span>{" "}
                            {movieData.production_countries?.map((c) => c.name).join(' - ')}
                        </div>
                        <div>
                            <span className="font-semibold">Budget:</span> ${movieData.budget?.toLocaleString()}
                        </div>
                        <div>
                            <span className="font-semibold">Revenue:</span> ${movieData.revenue?.toLocaleString()}
                        </div>
                        <div>
                            <span className="font-semibold">Production Companies:</span>{" "}
                            {movieData.production_companies?.map((comp) => comp.name).join(' - ')} 
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mt-4">Overview:</h3>
                            <p className="text-gray-700">{movieData.overview}</p>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    );
};

export default MovieDetailsCard;
