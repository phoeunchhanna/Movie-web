"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Movie = {
  id: number;
  title: string;
  poster_path: string | null;
  vote_average: number;
};

export default function SearchPage() {
  const [q, setQ] = useState("");
  const [items, setItems] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);

  const search = async () => {
    if (!q.trim()) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/search?query=${encodeURIComponent(q)}`);
      const data = await res.json();
      setItems(data.results ?? []);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-6 space-y-4">
        <h1 className="text-2xl font-bold">Search Movies</h1>

        <div className="flex gap-2">
          <input
            className="flex-1 rounded-lg bg-zinc-900 px-4 py-2 outline-none border border-white/10"
            placeholder="Search movie..."
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && search()}
          />
          <button
            onClick={search}
            className="px-4 py-2 rounded-lg bg-white text-black font-semibold hover:opacity-90"
          >
            {loading ? "Loading..." : "Search"}
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {items.map((m) => (
            <Link
              key={m.id}
              href={`/movie/${m.id}`}
              className="rounded-xl overflow-hidden bg-zinc-900 hover:bg-zinc-800 transition"
            >
              <div className="relative aspect-[2/3]">
                {m.poster_path ? (
                  <Image
                    src={`https://image.tmdb.org/t/p/w500${m.poster_path}`}
                    alt={m.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    No Image
                  </div>
                )}
              </div>
              <div className="p-2">
                <p className="text-xs line-clamp-1">{m.title}</p>
                <p className="text-[11px] text-gray-400">
                  ⭐ {m.vote_average.toFixed(1)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
