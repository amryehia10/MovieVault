import { StyleSheet } from "react-native";

export default StyleSheet.create({
    error: {
        height:"100%",
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"black"
    },
    spinner: {
        height:"100%",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor: "black"
    },
    container: {
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor: "black"
    },
    flatListContent: {
        alignItems: 'center', 
        paddingVertical: 30,
    },
    filters: {
        flexDirection: "row",
        marginBottom:10
    },
    inputData: {
        flexDirection:"row",
        marginTop:70,
        borderBottomWidth: 1,
        paddingBottom: 10,
    },
    input: {
        height: 40,
        borderBottomWidth: 2,
        borderColor:"#03a9f4",
        padding: 10,
        flex:1,
        color:"white",
        fontSize:20,
    },
    Searchcontainer: {
        backgroundColor: "black",
        flex:1
    }
})