import { useQuery } from "@tanstack/react-query";

const fetchMovies = async() => {
    try {
        const res = await fetch(process.env.EXPO_PUBLIC_UPCOMING_MOVIES_URL);
        const data = await res.json();
        return data
    } catch(e) {
        console.warn(e.toString());
    }
}

const useUpComingMovies = () => useQuery({ queryKey: ['upComingMovies'], queryFn: fetchMovies });
export default useUpComingMovies;