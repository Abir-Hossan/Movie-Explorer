import { Search, X } from "lucide-react";

export default function SearchBar({ value, onChange, onClear }) {
  return (
    <div className="relative">
      <Search
        className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500"
        size={20}
      />
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search for a movie or show..."
        aria-label="Search for a movie or show"
        className="h-14 w-full rounded-2xl border border-white/10 bg-white/[.04] pl-13 pr-12 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-red-500/60 focus:bg-white/[.06] focus:ring-4 focus:ring-red-500/10"
      />
      {value && (
        <button
          onClick={onClear}
          aria-label="Clear search"
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-lg p-2 text-zinc-500 hover:text-white"
        >
          <X size={18} />
        </button>
      )}
    </div>
  );
}
