const Search = ({searchMovie, setSearchMovie}) => {
  return (
    <div className="flex justify-center py-6">
      <input 
        type="text"
        placeholder="Search movies..."
        className="w-full max-w-md px-4 py-2 text-lg rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 shadow-sm bg-white text-black"
        value={searchMovie}
        onChange={(e) => setSearchMovie(e.currentTarget.value)}
      />
    </div>
  );
};

export default Search;
