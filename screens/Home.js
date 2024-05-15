import React, { useEffect, useState } from 'react';
import { FlatList, Image, View, Animated } from 'react-native';
import useMovies from '../hooks/useMovies';
import styles from '../styles'
import { ActivityIndicator } from 'react-native-paper';
import MovieCard from '../components/MovieCard';
import FilterBtns from '../components/FilterBtns';
import useUpComingMovies from '../hooks/upComingMovies';
import "react-native-get-random-values";
import { v4 as uuidv4 } from 'uuid';
import storage from '../Storage/storage'
import { useDispatch } from 'react-redux';
import { addToFavorite } from '../Redux/slices/favoriteSlice';
import Ad from '../components/Ad';
import { useNavigation } from '@react-navigation/native';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
const Home = () => {
    const dispatch = useDispatch()
    const { data, isPending, error } = useMovies();
    const { data: upComingMovies, error: upComingMoviesMovieserror } = useUpComingMovies();
    const [filterdData, setFilteredData] = useState(data?.results);
    const filterName = ['Discover All', 'Top Movies', 'Upcoming Movies']

    useEffect(() => {
        storage.getAllDataForKey('favoriteMovies').then((movie) => {
            if (movie.length !== 0) {
                for (let m of movie)
                    dispatch(addToFavorite(m))
            }
        });
    }, [])

    const handleFilter = (filterName) => {

        if (filterName === 'Discover All')
            setFilteredData(data.results)
        else if (filterName === 'Top Movies') {
            const sortedData = [...data.results].sort((a, b) => b.vote_average - a.vote_average)
            setFilteredData(sortedData)
        } else if (filterName === 'Upcoming Movies') {
            if (!upComingMoviesMovieserror) {
                setFilteredData(upComingMovies.results)
            }
            else
                setFilteredData([])
        }
    }

    if (isPending) return <ActivityIndicator animating={true} color='#03a9f4' size={'large'} style={styles.spinner} />

    if (error) return (
        <View style={styles.error}>
            <Image source={{ uri: "https://cdni.iconscout.com/illustration/premium/thumb/no-data-found-8867280-7265556.png?f=webp" }} width="100%" height={300}></Image>
        </View>
    )
    return (
        <>
            <GestureHandlerRootView>
                <ScrollView>

                    <View style={{ flex: 1 }}>

                        <FlatList data={[`https://image.tmdb.org/t/p/w500/${data.results[3].poster_path}`,
                        `https://image.tmdb.org/t/p/w500/${data.results[6].poster_path}`,
                        `https://image.tmdb.org/t/p/w500/${data.results[9].poster_path}`]}
                            renderItem={({ item }) => <Image source={{ uri: item }} height={400} width={400} />}
                            key={uuidv4()}
                            contentContainerStyle={styles.flatListContent}
                            horizontal
                            nestedScrollEnabled
                        ></FlatList>
                    </View>
                    <View style={styles.container}>
                        <View style={{ flex: 1 }}>

                            <FlatList data={filterdData?.length > 0 ? filterdData : data.results}
                                renderItem={({ item }) => <MovieCard {...item}></MovieCard>}
                                keyExtractor={({ id }) => id.toString()}
                                numColumns={3}
                                contentContainerStyle={styles.flatListContent}
                                ListHeaderComponent={
                                    <View style={styles.filters}>
                                        {filterName.map((f) => <FilterBtns handleFilter={handleFilter} filterName={f} key={uuidv4()}></FilterBtns>)}
                                    </View>
                                }
                            ></FlatList>
                        </View>
                    </View>
                </ScrollView>
            </GestureHandlerRootView>
        </>
    );
}

export default Home;
