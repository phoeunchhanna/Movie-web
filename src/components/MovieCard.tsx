import Image from "next/image";
import Link from "next/link";
import { tmdbImage } from "../lib/tmdb";
import { formatDate } from "../lib/utils";
import type { Movie } from "../types/movie";

export default function MovieCard({ movie }: { movie: Movie }) {
    return (
        <Link
            href={`/movie/${movie.id}`}
            className="group rounded-xl overflow-hidden bg-zinc-900 hover:bg-zinc-800 transition"
        >
            <div className="relative aspect-[2/3]">
                {movie.poster_path ? (
                    <Image
                        src={tmdbImage(movie.poster_path, "w500")}
                        alt={movie.title}
                        fill
                        className="object-cover group-hover:scale-105 transition"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                        No Image
                    </div>
                )}
            </div>

            <div className="p-3 space-y-1">
                <p className="text-sm font-medium line-clamp-1 text-white">
                    {movie.title}
                </p>
                <p className="text-xs text-gray-400">
                    ⭐ {movie.vote_average?.toFixed(1)}{" "}
                    {movie.release_date ? `• ${formatDate(movie.release_date)}` : ""}
                </p>
            </div>
        </Link>
    )
}