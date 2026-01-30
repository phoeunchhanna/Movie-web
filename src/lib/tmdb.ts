const BASE_URL = process.env.TMDB_BASE_URL!;
const TOKEN = process.env.TMDB_ACCESS_TOKEN!;
const TMDB_BASE = process.env.TMDB_IMAGE_BASE_URL!;

type FetchOptions = {
    params?: Record<string,string | number |boolean | undefined>;
    revalidate?: number;
};

export async function tmdbFetch(path: string, options: FetchOptions = {}) {
    const url = new URL(BASE_URL + path);

    if (options.params) {
        for (const [k, v] of Object.entries(options.params)) {
            if (v !== undefined) {
                url.searchParams.append(k, String(v));
            }
        }
    }

    const res = await fetch(url.toString(), {
        headers: {
            Authorization: `Bearer ${TOKEN}`,
            "Content-Type": "application/json",
        },
        next: { revalidate: options.revalidate ?? 3600 },
    });

    if(!res.ok){
        const text = await res.text();
        throw new Error(`TMDB Fetch failed: ${res.status} ${text}`);
    }

    return res.json();
}

export function tmdbImage(
    path: string, 
    size: "w92" | "w154" | "w185" | "w342" | "w500" | "w780" | "original" = "w500"
) {
    if (!path) return "";
    return `${TMDB_BASE}${size}${path}`;
}
