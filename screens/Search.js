import React, { useState } from 'react';
import { Text, View, Image, TextInput, FlatList } from 'react-native';
import useMovies from '../hooks/useMovies';
import { ActivityIndicator } from 'react-native-paper';
import styles from '../styles'
import "react-native-get-random-values";
import { v4 as uuidv4 } from 'uuid';
import MovieCard from '../components/MovieCard';
import { MaterialIcons } from '@expo/vector-icons';
import { Input } from 'react-native-elements';

const Search = () => {
    const {data, isPending, error} = useMovies();
    const [searchResult, setSearchResult] = useState('')
    const [searchResultData, setSearchResultData] = useState([])
    
    const onChange = (text) => {
        setSearchResult(text)
        setSearchResultData(data.results.filter((d)=>d.title.toLowerCase().includes(searchResult.toLowerCase())))
    
    }

    if (isPending)return <ActivityIndicator animating={true} color='#03a9f4' size={'large'} style={styles.spinner}/>
    if(error) return (
        <View style={styles.error}>
            <Image source={{uri:"https://cdni.iconscout.com/illustration/premium/thumb/no-data-found-8867280-7265556.png?f=webp"}} width="100%" height={300}></Image>
        </View>
    )
    
    return (
        <View style={styles.Searchcontainer}>
            <View style={styles.inputData}>
                <Input 
                placeholder='Movie Name' 
                placeholderTextColor='gray' 
                value={searchResult} inputStyle={styles.input} 
                onChangeText={(text) => onChange(text)}
                leftIcon={{ type: 'font-awesome', name: 'search' }}
                ></Input>
            </View>
            <View>
            <FlatList data={searchResultData} 
                renderItem={({item}) => <MovieCard {...item}></MovieCard>} 
                keyExtractor={({id})=>id.toString()}
                numColumns={3}
                contentContainerStyle={styles.flatListContent}
            ></FlatList>
            </View>
        </View>
    );
}


export default Search;
