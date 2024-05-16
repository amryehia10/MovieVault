import React from 'react';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import routes from '../utiles/routes';
import styles2 from '../styles'

const MovieCard = (props) => {
  const {navigate} = useNavigation()

  return (
    <>
        <Pressable onPress={()=>navigate(routes.details, props)}>
          <View style={styles.container}>
              <Image 
                  source={{uri:`https://image.tmdb.org/t/p/w500/${props.poster_path}`}} 
                  style={styles.image} 
                  resizeMode='cover'
                  />
          </View>
            <View style={styles2.cardContainer}>
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
    top:2,
    left:2
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
