import { SearchX } from 'lucide-react';

export default function EmptyState({ query, onClear }) {
  return (
    <div className="rounded-3xl border border-dashed border-white/10 bg-white/[.02] px-6 py-20 text-center">
      <div className="mx-auto grid size-14 place-items-center rounded-2xl bg-white/5 text-zinc-400"><SearchX /></div>
      <h2 className="mt-5 text-xl font-bold">No shows found</h2>
      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-zinc-500">We couldn't find anything matching <span className="text-zinc-300">“{query}”</span>. Try another title.</p>
      <button onClick={onClear} className="mt-6 rounded-xl bg-red-600 px-5 py-2.5 text-sm font-semibold hover:bg-red-500">Clear Search</button>
    </div>
  );
}
