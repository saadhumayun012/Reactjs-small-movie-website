import { Link } from "react-router-dom"
const MovieCard = ({ movie: {
    id,
    title,
    vote_average,
    poster_path,
    release_date,
    original_language
}
}) => {
    return (
        <Link to = {`/${id}-${encodeURIComponent(title)}`}>
            <div className="bg-white rounded-2xl shadow-md overflow-hidden w-72 hover:shadow-xl transition-shadow duration-300">
                <div className="h-96 overflow-hidden">
                    <img
                        src={ poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : `/no-movie.png` }
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="p-4 space-y-2">
                    <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                    <div className="flex items-center text-sm text-gray-600 space-x-2">
                        <span>{vote_average ? vote_average.toFixed(1) : 'N/A'} ⭐</span>
                        <span>·</span>
                        <span className="uppercase">{original_language}</span>
                        <span>·</span>
                        <span>{release_date}</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default MovieCard
