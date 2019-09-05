
import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
    container:{
        flex:1,
        padding:15,
        justifyContent: 'center',
    },
    item:{
        position:'relative',
        paddingVertical:10,
        // borderBottomWidth:1, //boder bottom 
        // borderBottomColor:'#eee',
        paddingRight: 5
    },
    mr15: { marginRight: 15 },
    image: {height: 300},
    row:{
        flexDirection:'row',
        marginBottom:10,
    },
    icon:{
        position:'absolute',
        right:20,
        top:10,
        color:'#555',
    },
    icon1:{
        position:'absolute',
        left:20,
        top:10,
        color:'#555',
    },
    icon2:{
        position:'absolute',
        left:70,
        top:10,
        color:'#555',
    },
    icon3:{
        position:'absolute',
        left:1200,
        top:10,
        color:'#555',
    },
    separator : {
        height: 1,
        width: "100%",
        backgroundColor: "#CED0CE",
        marginLeft: "0%"
    },
    textCenter: {
        textAlign: "center",
    }
})