import React from 'react';
import { Text } from 'react-native';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

const FilterBtns = ({ handleFilter, filterName}) => {
    return (
        <TouchableOpacity
            onPress={() => handleFilter(filterName)}
            style={[
                styles.button,
            ]}
        >
            <Text style={{ color:'white'}}>{filterName}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'grey',
        borderRadius: 15,
        marginLeft: 6,
        alignItems: 'center',
        justifyContent: 'center',
        height: 35,
        width: 110
    }
});

export default FilterBtns;
