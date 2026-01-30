import { NextResponse } from "next/server";
import { tmdbFetch } from "@/lib/tmdb";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("query") || "";

  if (!query.trim()) {
    return NextResponse.json({ results: [] });
  }

  const data = await tmdbFetch("/search/movie", {
    params: { query, include_adult: false, page: 1 },
    revalidate: 0,
  });

  return NextResponse.json(data);
}
