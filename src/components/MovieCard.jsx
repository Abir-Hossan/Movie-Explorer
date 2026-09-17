import { CalendarDays, Star } from 'lucide-react';

function stripHtml(value = '') {
  return value.replace(/<[^>]*>/g, '');
}

export default function MovieCard({ movie, onDetails }) {
  const poster = movie.image?.medium || movie.image?.original;
  const year = movie.premiered ? new Date(movie.premiered).getFullYear() : 'N/A';
  const rating = movie.rating?.average ?? 'N/A';

  return (
    <article className="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/70 shadow-xl shadow-black/10 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-2xl">
      <div className="relative aspect-[2/3] overflow-hidden bg-zinc-800">
        {poster ? <img src={poster} alt={`${movie.name} poster`} loading="lazy" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /> : <div className="grid h-full place-items-center px-6 text-center text-sm text-zinc-500">No poster available</div>}
        <div className="absolute inset-x-0 top-0 flex justify-between p-3">
          <span className="rounded-full border border-white/10 bg-black/60 px-2.5 py-1 text-xs font-semibold backdrop-blur">{movie.status || 'Show'}</span>
          <span className="inline-flex items-center gap-1 rounded-full bg-black/70 px-2.5 py-1 text-xs font-semibold backdrop-blur"><Star size={13} className="fill-yellow-400 text-yellow-400" /> {rating}</span>
        </div>
      </div>
      <div className="p-4">
        <h2 className="line-clamp-1 text-base font-bold text-white" title={movie.name}>{movie.name}</h2>
        <div className="mt-2 flex items-center gap-3 text-xs text-zinc-500">
          <span className="inline-flex items-center gap-1"><CalendarDays size={14} /> {year}</span>
          {movie.genres?.[0] && <span className="line-clamp-1">{movie.genres[0]}</span>}
        </div>
        <p className="mt-3 line-clamp-2 min-h-10 text-xs leading-5 text-zinc-500">{stripHtml(movie.summary) || 'No summary available.'}</p>
        <button onClick={() => onDetails(movie)} className="mt-4 w-full rounded-xl bg-white/8 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-red-600">See Details</button>
      </div>
    </article>
  );
}
