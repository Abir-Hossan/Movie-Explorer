import { Search, ShieldCheck, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/[.03] p-7">
            <Search className="text-red-500" />
            <h2 className="mt-5 text-xl font-bold">Search instantly</h2>
            <p className="mt-2 text-sm leading-6 text-zinc-500">
              Find a show by title with a responsive search experience powered
              by TVMaze.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[.03] p-7">
            <Sparkles className="text-red-500" />
            <h2 className="mt-5 text-xl font-bold">Rich details</h2>
            <p className="mt-2 text-sm leading-6 text-zinc-500">
              Open any card to view ratings, genres, release year, runtime,
              network, and summary.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/[.03] p-7">
            <ShieldCheck className="text-red-500" />
            <h2 className="mt-5 text-xl font-bold">Responsive everywhere</h2>
            <p className="mt-2 text-sm leading-6 text-zinc-500">
              A mobile-first layout that adapts cleanly from compact phones to
              large desktop screens.
            </p>
          </div>
        </div>
        <div className="mt-12 rounded-3xl border border-red-500/10 bg-gradient-to-br from-red-600/15 to-transparent p-8 sm:p-12">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[.2em] text-red-400">
              Ready to explore?
            </p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">
              Find your next favorite show.
            </h2>
            <Link
              to="/movies"
              className="mt-6 inline-block rounded-xl bg-red-600 px-6 py-3 font-semibold hover:bg-red-500"
            >
              Explore Movies
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
