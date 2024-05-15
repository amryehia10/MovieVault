import React, { useEffect, useState } from 'react';
import { Image, ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import storage from '../Storage/storage'
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorite, removeFromFavorite } from '../Redux/slices/favoriteSlice';
import { useNavigation } from '@react-navigation/native';
import routes from '../utiles/routes';

const MovieCard = (props) => {
  const favMovies = useSelector((state) => state.favoriteMovies.favoriteMovies)
  const dispatch = useDispatch()
  const {navigate} = useNavigation()

  const handleFavorite = async () => {
    const favoriteMovies = await storage.getAllDataForKey('favoriteMovies');
    const isFavorite = favoriteMovies.some(movie => movie.id === props.id);
    if(isFavorite) {
      storage.remove({
        key: 'favoriteMovies',
        id: `${props.id}`
      });
      dispatch(removeFromFavorite(props))
    } else {
      storage.save({
        key: 'favoriteMovies',
        id: `${props.id}`,
        data: props
      })
      dispatch(addToFavorite(props))
    }
  }

  return (
    <>
        <Pressable onPress={()=>navigate(routes.details, {})}>
          <View style={styles.container}>
              <Image 
                  source={{uri:`https://image.tmdb.org/t/p/w500/${props.poster_path}`}} 
                  style={styles.image} 
                  resizeMode='cover'
                  />
          </View>
            <View style={styles.cardContainer}>
              <View style={styles.favoriteIconContainer}>
                  <MaterialIcons name={favMovies.some(movie => movie.id === props.id)?'favorite':'favorite-border'} color='red' size={23} onPress={handleFavorite}/>
              </View>
            </View>
        </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
      width: 100, 
      height: 150,
      margin: 5,
  },
  image: {
      flex: 1,
      borderRadius: 5,
  },
  favoriteIconContainer: {
    position: 'absolute',
  },
  cardContainer: {
    position:"absolute",
    backgroundColor:"rgba(0, 0, 0, 0.4)",
    top:0,
    left:0,
    height:"100%",
    width:"100%"
  }
});
  

export default MovieCard;
