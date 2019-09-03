import {StyleSheet} from 'react-native'
export default StyleSheet.create({
    backdrop: {
        backgroundColor: "rgba(0,0,0,.5)",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalContainer: {
        width: 250,
        backgroundColor: "#fff",
        padding: 15,
    },
    modalTitle: { color: '#999', paddingBottom: 10},
    selectItem: { paddingVertical: 10, marginBottom:2},
    modalClose: { paddingTop: 10, borderColor: '#ddd', borderTopWidth: 1 },
    searchBox:{
        backgroundColor:'#f1f1f1',
        padding:10,
        position:'relative'
    },
    inputSearch:{
        backgroundColor:'#fff',
        borderRadius:4,
        paddingVertical:5,
        paddingHorizontal:30
    },
    iconSearch:{
        position:'absolute',
        left:17,
        top:17
    },
    iconClose:{
        position:'absolute',
        right:17,
        top:12,
    }
})