import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Clapperboard, Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/movies", label: "Movies" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navClass = ({ isActive }) =>
    `transition-colors ${isActive ? "text-white" : "text-zinc-400 hover:text-white"}`;

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-zinc-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="flex items-center gap-2.5 font-bold tracking-tight"
        >
          <span className="grid size-9 place-items-center rounded-xl bg-red-600 shadow-lg shadow-red-950/40">
            <Clapperboard size={19} />
          </span>
          <span className="text-lg">
            Movie<span className="text-red-500">Explorer</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} className={navClass}>
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/movies"
            className="rounded-full bg-red-600 px-5 py-2.5 text-sm font-semibold transition hover:bg-red-500 active:scale-[.98]"
          >
            Explore Movies
          </Link>
        </nav>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="rounded-xl border border-white/10 p-2 text-zinc-300 md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 px-4 pb-4 pt-3 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 ${isActive ? "bg-white/10 text-white" : "text-zinc-400"}`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/movies"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-xl bg-red-600 px-4 py-3 text-center font-semibold"
            >
              Explore Movies
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
