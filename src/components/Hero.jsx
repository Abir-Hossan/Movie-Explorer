import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_70%_30%,rgba(220,38,38,.32),transparent_35%),linear-gradient(135deg,#09090b_10%,#171116_55%,#09090b)]" />
      <div className="absolute -right-32 top-16 -z-10 h-80 w-80 rounded-full bg-red-600/20 blur-3xl" />
      <div className="absolute left-1/3 top-1/2 -z-10 h-56 w-56 rounded-full bg-orange-500/10 blur-3xl" />

      <div className="mx-auto grid min-h-[620px] max-w-7xl items-center px-4 py-20 sm:px-6 lg:grid-cols-[1.1fr_.9fr] lg:px-8">
        <div className="animate-fade-up max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[.22em] text-red-300">
            <Play size={13} fill="currentColor" /> Your next watch starts here
          </div>
          <h1 className="text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
            Discover something{" "}
            <span className="text-red-500">worth watching.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
            Explore shows from around the world, search by title, and open
            detailed information in a fast, beautiful movie-explorer experience.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/movies"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-3.5 font-semibold shadow-xl shadow-red-950/40 transition hover:bg-red-500 hover:-translate-y-0.5"
            >
              Explore Movies <ArrowRight size={18} />
            </Link>
            <Link
              to="/movies"
              className="rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-center font-semibold text-zinc-200 transition hover:bg-white/10"
            >
              Browse All Shows
            </Link>
          </div>
        </div>

        <div className="relative mx-auto mt-12 hidden h-[440px] w-full max-w-[500px] lg:mt-0 lg:block">
          <div className="absolute left-10 top-10 h-[380px] w-56 rotate-[-10deg] overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 shadow-2xl shadow-black/60">
            <img
              src="https://static.tvmaze.com/uploads/images/original_untouched/1/2853.jpg"
              alt="Show poster"
              className="h-full w-full object-cover opacity-70"
            />
          </div>
          <div className="absolute right-10 top-2 h-[400px] w-60 rotate-[8deg] overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 shadow-2xl shadow-black/70">
            <img
              src="https://static.tvmaze.com/uploads/images/original_untouched/1/2500.jpg"
              alt="Show poster"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute inset-x-20 bottom-2 rounded-2xl border border-white/10 bg-zinc-950/80 p-4 shadow-2xl backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold">Curated discoveries</span>
              <span className="text-xs text-red-400">TVMaze</span>
            </div>
            <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-zinc-800">
              <div className="h-full w-3/4 rounded-full bg-red-600" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
