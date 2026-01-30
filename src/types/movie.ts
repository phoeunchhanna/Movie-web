export type Movie = {
    id:number;
    title:string;
    poster_path:string | null;
    backdrop_path:string | null;
    overview:string;
    release_date:string;
    vote_average:number;
};

export type MovieListResponse ={
    page:number;
    results:Movie[];
    total_pages:number;
    total_results:number;
};

export type MovieDetails ={
    id:number;
    title:string;
    overview:string;
    poster_path:string | null;
    backdrop_path:string | null;
    release_date:string;
    runtime:number;
    vote_average:number;
    genres:{
        id:number; 
        name:string;
    }[];
}