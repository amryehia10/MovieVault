import React from 'react';
import { FlatList, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import styles from '../styles'
import MovieCard from '../components/MovieCard';

const Favorites = () => {
    const favMovies = useSelector((state) => state.favoriteMovies.favoriteMovies)
    if (favMovies.length > 0)
    return (
        <View style={styles.container}>
        <FlatList data={favMovies} 
            renderItem={({item}) => <MovieCard {...item} isFav={true}></MovieCard>} 
            keyExtractor={({id})=>id.toString()}
            numColumns={3}
            contentContainerStyle={styles.flatListContent}
        ></FlatList>
    </View>
    );
    else
    return (
        <View style={styles.container}>
            <Text style={{color:"white", fontSize:20}}>There is no movies in favorites, Add now...</Text>
        </View>
    )
}

export default Favorites;
