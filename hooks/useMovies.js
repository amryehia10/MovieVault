import { useQuery } from "@tanstack/react-query";

const fetchMovies = async() => {
    try {
        const res = await fetch(process.env.EXPO_PUBLIC_API_URL);
        const data = await res.json();
        return data
    } catch(e) {
        console.warn(e.toString());
    }
}

const useMovies = () => useQuery({ queryKey: ['movies'], queryFn: fetchMovies });
export default useMovies;