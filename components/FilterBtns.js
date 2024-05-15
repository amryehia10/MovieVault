import React from 'react';
import { Text } from 'react-native';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

const FilterBtns = ({handleFilter, filterName}) => {
    return (
        <View>
            <TouchableOpacity onPress={()=>handleFilter(filterName)} style={{backgroundColor:"grey", borderRadius:15, marginLeft:6, alignItems:"center", justifyContent:"center", height:35, width:110}}>
                <Text style={{color:"white"}}>{filterName}</Text>
            </TouchableOpacity>
        </View>
    );
}

export default FilterBtns;
