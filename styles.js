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
        paddingVertical: 10,
    },
    filters: {
        flexDirection: "row",
        marginBottom:10,
        marginTop:20,
        alignItems:"center",
        justifyContent:"center"
    },
    inputData: {
        flexDirection:"row",
        marginTop:70,
        borderBottomWidth: 1,
        paddingBottom: 10,
    },
    input: {
        height: 40,
        flex:1,
        color:"white",
        fontSize:20,
    },
    Searchcontainer: {
        backgroundColor: "black",
        flex:1
    },
    cardContainer: {
        position:"absolute",
        backgroundColor:"rgba(0, 0, 0, 0.4)",
        top:0,
        left:0,
        height:"100%",
        width:"100%"
      }
})