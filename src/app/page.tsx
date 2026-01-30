import { tmdbFetch } from "@/lib/tmdb";
import type { MovieListResponse } from "@/types/movie";
import HeroBanner from "@/components/HeroBanner";
import MovieGrid from "@/components/MovieGrid";

export default async function Homepage() {
  const trending: MovieListResponse = await tmdbFetch("/trending/movie/week", {
    revalidate: 3600,
  });

  const popular: MovieListResponse = await tmdbFetch("/movie/popular", {
    params: { page: 1 },
    revalidate: 3600,
  });

  const hero = trending.results?.[0];

  return (
    <main className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-6 space-y-10">
        {hero && <HeroBanner movie={hero} />}

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Trending This Week</h2>
          <MovieGrid movies={trending.results} />
        </section>

        <section className="space-y-4">
          <h2 className="text-xl font-semibold">Popular Movies</h2>
          <MovieGrid movies={popular.results} />
        </section>
      </div>
    </main>
  );
}