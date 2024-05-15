import React, { useRef } from 'react';
import { Image, StyleSheet, View, Animated } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const Ad = ({movie}) => {
    const CAROUSEL_INTERVAL = 3000;
    const scrollX = useRef(new Animated.Value(0)).current;
    const movieArr = [
                      `https://image.tmdb.org/t/p/w500/${movie[3].poster_path}`, 
                      `https://image.tmdb.org/t/p/w500/${movie[6].poster_path}`, 
                      `https://image.tmdb.org/t/p/w500/${movie[9].poster_path}`
                    ]
    
    const renderCarouselItem = ({ item, index }) => {
        return (
        <View>
            <Image source={{ uri: item.poster_path }} height={400} />
        </View>
        );
    };
    
    
    return (
            <FlatList
          data={movieArr}
          renderItem={renderCarouselItem}
          horizontal
          pagingEnabled
          keyExtractor={(item, index) => `${item.id}_${index}`}
          showsHorizontalScrollIndicator={false}
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: false })}
          scrollEventThrottle={16}
        />
    );
}


export default Ad;
