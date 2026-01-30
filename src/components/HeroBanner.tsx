import Image from "next/image";
import Link from "next/link";
import { tmdbImage } from "../lib/tmdb";
import type { Movie } from "../types/movie";

export default function HeroBanner({ movie }: { movie: Movie }) {
    return (
        <div className="relative rounded-2xl overflow-hidden border border-white/10">
            <div className="relative h-[45vh] min-h-[280px] w-full">
                {movie.backdrop_path ? (
                    <Image
                        src={tmdbImage(movie.backdrop_path, "original")}
                        alt={movie.title}
                        fill
                        className="object-cover opacity-70"
                        priority
                    />
                ) : (
                    <div className="w-full h-full bg-zinc-900" />
                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6">
                <h1 className="text-2xl sm:text-4xl font-bold text-white">
                    {movie.title}
                </h1>
                <p className="text-gray-300 text-sm mt-2 line-clamp-2 max-w-2xl">
                    ⭐ {movie.vote_average?.toFixed(1)}
                </p>

                <div className="mt-4">
                    <Link
                        href={`/movie/${movie.id}`}
                        className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-white text-black font-semibold hover:opacity-90"
                    >
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
}