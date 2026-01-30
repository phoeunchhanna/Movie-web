import Image from "next/image";
import { tmdbFetch, tmdbImage } from "@/lib/tmdb";
import type { MovieDetails } from "@/types/movie";
import { formatDate } from "@/lib/utils";

export default async function MovieDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const movie: MovieDetails = await tmdbFetch(`/movie/${id}`, {
    revalidate: 3600,
  });

  return (
    <main className="min-h-screen">
      {/* Backdrop */}
      <div className="relative h-[40vh] w-full">
        {movie.backdrop_path ? (
          <Image
            src={tmdbImage(movie.backdrop_path, "original")}
            alt={movie.title}
            fill
            className="object-cover opacity-60"
            priority
          />
        ) : (
          <div className="w-full h-full bg-zinc-900" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
      </div>

      {/* Content */}
      <section className="max-w-5xl mx-auto px-4 py-6 -mt-24 relative z-10 flex gap-6">
        <div className="w-[160px] sm:w-[220px] shrink-0">
          {movie.poster_path ? (
            <div className="relative aspect-[2/3] rounded-xl overflow-hidden border border-white/10">
              <Image
                src={tmdbImage(movie.poster_path, "w500")}
                alt={movie.title}
                fill
                className="object-cover"
              />
            </div>
          ) : (
            <div className="aspect-[2/3] rounded-xl bg-zinc-900 flex items-center justify-center text-gray-400">
              No Poster
            </div>
          )}
        </div>

        <div className="space-y-3">
          <h1 className="text-2xl sm:text-4xl font-bold">{movie.title}</h1>

          <p className="text-gray-300 text-sm">
            ⭐ {movie.vote_average.toFixed(1)} • {movie.runtime} min •{" "}
            {formatDate(movie.release_date)}
          </p>

          <div className="flex flex-wrap gap-2">
            {movie.genres?.map((g: { id: number; name: string }) => (
              <span
                key={g.id}
                className="text-xs bg-zinc-800 px-3 py-1 rounded-full"
              >
                {g.name}
              </span>
            ))}
          </div>

          <p className="text-gray-200 leading-relaxed">{movie.overview}</p>
        </div>
      </section>
    </main>
  );
}
