import MovieCard from "./MovieCard";

export default function MovieGrid({ movies, onDetails }) {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} onDetails={onDetails} />
      ))}
    </div>
  );
}
