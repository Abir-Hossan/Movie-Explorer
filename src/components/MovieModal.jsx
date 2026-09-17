import { useEffect } from "react";
import { CalendarDays, ExternalLink, Star, X } from "lucide-react";

function stripHtml(value = "") {
  return value.replace(/<[^>]*>/g, "");
}

export default function MovieModal({ movie, onClose }) {
  useEffect(() => {
    if (!movie) return undefined;
    const onKeyDown = (e) => e.key === "Escape" && onClose();
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [movie, onClose]);

  if (!movie) return null;
  const image = movie.image?.original || movie.image?.medium;
  const year = movie.premiered
    ? new Date(movie.premiered).getFullYear()
    : "N/A";

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="movie-modal-title"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 p-3 backdrop-blur-sm sm:p-6"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="mx-auto my-4 max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-zinc-950 shadow-2xl shadow-black/80 sm:my-10">
        <div className="relative aspect-[16/8] min-h-56 overflow-hidden bg-zinc-900 sm:min-h-72">
          {image ? (
            <img
              src={image}
              alt=""
              className="h-full w-full object-cover opacity-60"
            />
          ) : null}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-black/10" />
          <button
            onClick={onClose}
            aria-label="Close details"
            className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/60 p-2.5 text-white backdrop-blur transition hover:bg-red-600"
          >
            <X size={20} />
          </button>
          <div className="absolute bottom-5 left-5 right-5 sm:bottom-7 sm:left-8 sm:right-8">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[.2em] text-red-400">
              Show details
            </p>
            <h2
              id="movie-modal-title"
              className="text-3xl font-black sm:text-4xl"
            >
              {movie.name}
            </h2>
          </div>
        </div>
        <div className="modal-scrollbar max-h-[55vh] overflow-y-auto p-5 sm:p-8">
          <div className="flex flex-wrap gap-2 text-sm">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-yellow-400/10 px-3 py-1.5 text-yellow-300">
              <Star size={15} className="fill-yellow-400" />{" "}
              {movie.rating?.average ?? "N/A"}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1.5 text-zinc-300">
              <CalendarDays size={15} /> {year}
            </span>
            {movie.runtime && (
              <span className="rounded-full bg-white/5 px-3 py-1.5 text-zinc-300">
                {movie.runtime} min
              </span>
            )}
          </div>
          <div className="mt-6 grid gap-7 sm:grid-cols-[1fr_220px]">
            <div>
              <h3 className="text-lg font-bold">Overview</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-400">
                {stripHtml(movie.summary) ||
                  "No overview is available for this show."}
              </p>
            </div>
            <aside className="rounded-2xl border border-white/10 bg-white/[.03] p-4">
              <h3 className="text-sm font-bold">Information</h3>
              <dl className="mt-3 space-y-3 text-sm">
                <div>
                  <dt className="text-zinc-600">Genres</dt>
                  <dd className="mt-1 text-zinc-300">
                    {movie.genres?.join(", ") || "N/A"}
                  </dd>
                </div>
                <div>
                  <dt className="text-zinc-600">Language</dt>
                  <dd className="mt-1 text-zinc-300">
                    {movie.language || "N/A"}
                  </dd>
                </div>
                <div>
                  <dt className="text-zinc-600">Network</dt>
                  <dd className="mt-1 text-zinc-300">
                    {movie.network?.name || movie.webChannel?.name || "N/A"}
                  </dd>
                </div>
              </dl>
            </aside>
          </div>
          <div className="mt-8 flex justify-end gap-3">
            <a
              href={movie.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2.5 text-sm font-semibold hover:bg-white/5"
            >
              TVMaze <ExternalLink size={16} />
            </a>
            <button
              onClick={onClose}
              className="rounded-xl bg-red-600 px-5 py-2.5 text-sm font-semibold hover:bg-red-500"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
