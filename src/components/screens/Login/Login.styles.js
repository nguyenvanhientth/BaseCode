import { StyleSheet } from 'react-native';
import { colors } from '../../../core/common/styles';

export default styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'gray',
    },
    outer:{
        position:'absolute',
        top:0,
        bottom:0,
        left:0,
        right:0,
        zIndex:1,
    },
inner:{
    alignItems:'center',
    justifyContent:'center',
    padding:15,
    flex:1},

    formGroup:{
        marginBottom:10,
        position:'relative'
    },
    textInput:{
        width:280,
        paddingLeft:35,
        backgroundColor:'rgba(255,255,255,.5)',
        borderRadius:10,
        borderWidth:0,
    },
    input: {
        width: 250,
        color: '#555555',
        padding: 10,
        height: 50,
        borderColor: '#6E5BAA',
        borderWidth: 1,
        borderRadius: 4,
        alignSelf: 'center',
        backgroundColor: '#ffffff'
    },
    icon:{
        position:'absolute',
        left:10,
        top:10,
        color:'#555',
    },
    title:{
        fontSize:24,
        color:'#fff',
        fontWeight:'bold',
        marginBottom:45
    },
    footer:{
        position:'absolute',
        bottom:0,
        left:0,
        right:0,
        zIndex:2,
        alignItems:'center',
        paddingBottom:10,
    },
    footerText:{
        fontSize:12,
        color:'#555'
    },
    logo: {
        
    },
    primaryButton: {
        borderRadius: 10,
        backgroundColor: colors.mainColor,
        height: 44,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    mt15: { marginTop: 15 },
    mb15: { marginBottom: 15 },
    primaryButtonText: {
        color: '#FFF',
        fontSize: 16,
    },
})  