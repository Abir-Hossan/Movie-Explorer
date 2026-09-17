export default function Loading() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5" aria-label="Loading shows">
      {Array.from({ length: 10 }).map((_, i) => <div key={i} className="overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/70"><div className="skeleton aspect-[2/3]" /><div className="space-y-3 p-4"><div className="skeleton h-4 w-3/4 rounded" /><div className="skeleton h-3 w-1/2 rounded" /><div className="skeleton h-10 w-full rounded-xl" /></div></div>)}
    </div>
  );
}
