import React, { useRef } from 'react';
import { FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import styles from '../styles'
import useGenreMovies from '../hooks/GenreMovies';
import { MaterialIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { ActivityIndicator } from 'react-native-paper';
import useMovies from '../hooks/useMovies';
import MovieCard from '../components/MovieCard';
import { addToFavorite, removeFromFavorite } from '../Redux/slices/favoriteSlice';
import storage from '../Storage/storage'



const MovieDetails = () => {
    const route = useRoute();
    const movie = route.params
    const { data, isPending, error } = useGenreMovies();
    const { data: movies, isPending: isPendingMovies } = useMovies();
    const favMovies = useSelector((state) => state.favoriteMovies.favoriteMovies)
    const dispatch = useDispatch();

    const genresNames = () => {
        let genresArr = []
        let isFound = false
        data.genres.forEach(element => {
            isFound = movie.genre_ids.some(id => id === element.id)
            if (isFound)
                genresArr.push(element.name)
        });
        return genresArr
    }

    const handleFavorite = async (dispatch, movie) => {
        const favoriteMovies = await storage.getAllDataForKey('favoriteMovies');
        const isFavorite = favoriteMovies.some(m => m.id === movie.id);
        if(isFavorite) {
          storage.remove({
            key: 'favoriteMovies',
            id: `${movie.id}`
          });
          dispatch(removeFromFavorite(movie))
        } else {
          storage.save({
            key: 'favoriteMovies',
            id: `${movie.id}`,
            data: movie
          })
          dispatch(addToFavorite(movie))
        }
      }

    if (isPending)
        return <ActivityIndicator animating={true} color='#03a9f4' size={'large'} style={styles.spinner} />

    if (isPendingMovies)
        return <ActivityIndicator animating={true} color='#03a9f4' size={'large'} style={styles.spinner} />

    if (error) return (
        <View style={styles.error}>
            <Image source={{ uri: "https://cdni.iconscout.com/illustration/premium/thumb/no-data-found-8867280-7265556.png?f=webp" }} width="100%" height={300}></Image>
        </View>
    )

    

    const genres = genresNames().join('/')
    return (
        <ScrollView  style={styling.container}>
            <View>
                <View>
                    <Image source={{ uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}` }} height={300} width={400} resizeMode='stretch'></Image>
                </View>
                <View style={styles.cardContainer}></View>
                <View>
                    <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Text style={styling.date}>{movie.release_date} - {movie.original_language.toUpperCase()}</Text>
                            <MaterialIcons name="star-rate" color="yellow" size={23} />
                            <Text style={{ color: "#9e9e9e", fontSize: 20, marginLeft: 5 }}>{movie.vote_average.toFixed(1)}</Text>
                        </View>
                        <MaterialIcons
                            name={favMovies.some(m => m.id === movie.id) ? 'favorite' : 'favorite-border'}
                            color='red' size={30}
                            onPress={() => handleFavorite(dispatch, movie)}
                        />
                    </View>
                    <Text style={styling.genres}>{genres}</Text>
                    <Text style={styling.title}>{movie.title}</Text>
                    <Text style={styling.descibtion}>{movie.overview}</Text>
                    <Text style={styling.recommend}>Recommended for you</Text>
                </View>

                <FlatList data={movies.results.slice(0, 5)}
                    renderItem={({ item }) => item.id !== movie.id && <MovieCard {...item} isRec={'true'}></MovieCard>}
                    keyExtractor={({ id }) => id.toString()}
                    style={styling.list}
                    horizontal
                ></FlatList>
            </View>
        </ScrollView>
    );
}

const styling = StyleSheet.create({
    date: {
        color: "#9e9e9e",
        fontSize: 20,
        marginHorizontal: 20,
    },
    container: {
        flex: 1,
        backgroundColor: "black"
    },
    genres: {
        color: "#9e9e9e",
        marginLeft: 20,
        fontSize: 20,
        marginTop: 10
    },
    title: {
        fontSize: 30,
        color: "white",
        marginLeft: 20,
        marginTop: 20
    },
    descibtion: {
        fontSize: 20,
        color: "#9e9e9e",
        marginLeft: 20,
        marginTop: 20
    },
    recommend: {
        fontSize: 25,
        color: "white",
        marginLeft: 20,
        marginTop: 25
    },
    list: {
        marginLeft: 20,
        marginTop: 15

    }
})

export default MovieDetails;
