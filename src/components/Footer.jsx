import { Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/20">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-zinc-500 sm:flex-row sm:px-6 lg:px-8">
        <p>© 2026 MovieExplorer. Built with React.</p>
        <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-white">
          <Github size={17} /> GitHub
        </a>
      </div>
    </footer>
  );
}
