import { RefreshCw } from 'lucide-react';
import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import MovieGrid from '../components/MovieGrid';
import Loading from '../components/Loading';
import EmptyState from '../components/EmptyState';
import MovieModal from '../components/MovieModal';
import useMovies from '../hooks/useMovies';

export default function Movies() {
  const [query, setQuery] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const { movies, loading, error } = useMovies(query);

  return (
    <section className="min-h-[calc(100vh-145px)]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="max-w-2xl"><p className="text-sm font-semibold uppercase tracking-[.2em] text-red-400">Movie library</p><h1 className="mt-2 text-4xl font-black tracking-tight sm:text-5xl">Explore shows</h1><p className="mt-4 text-sm leading-6 text-zinc-500 sm:text-base">Browse the TVMaze catalog or search for a specific title. Select any card for more information.</p></div>
        <div className="mt-8"><SearchBar value={query} onChange={setQuery} onClear={() => setQuery('')} /></div>
        <div className="mt-10 flex items-center justify-between"><h2 className="text-xl font-bold">{query.trim() ? `Results for “${query.trim()}”` : 'All Shows'}</h2><span className="text-xs text-zinc-600">{loading ? 'Loading…' : `${movies.length} ${movies.length === 1 ? 'show' : 'shows'}`}</span></div>
        <div className="mt-5">
          {loading ? <Loading /> : error ? <div className="rounded-3xl border border-red-500/20 bg-red-500/5 p-10 text-center"><p className="text-sm text-red-200">{error}</p><button onClick={() => window.location.reload()} className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2.5 text-sm font-semibold hover:bg-white/15"><RefreshCw size={16} /> Retry</button></div> : movies.length ? <MovieGrid movies={movies} onDetails={setSelectedMovie} /> : <EmptyState query={query} onClear={() => setQuery('')} />}
        </div>
      </div>
      <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
    </section>
  );
}
