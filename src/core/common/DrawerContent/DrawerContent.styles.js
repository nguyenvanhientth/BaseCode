import { StyleSheet } from 'react-native';
export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    userInfo: {
        padding: 15,
        paddingTop:45,
        borderBottomWidth: 1,
        borderColor: '#eee',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    image: {
        width: 90,
        height: 90,
        borderRadius: 45,
    },
    welcomeText: { marginVertical: 15, color: '#fff', fontSize: 16, },
    userSubInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    subInfoItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    subInfoText: {
        color: '#fff',
        marginLeft: 5,
    },
    sideMenu: { flex: 1 },
    menuItem: {
        height: 60,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingRight: 20,
        paddingLeft: '20%',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#eee'
    },
    menuItemCaption: {
        fontSize: 16,
        color: '#333',
        marginRight: 20
    },
    menuItemApp: {
        height: 60,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingRight: 20,
        paddingLeft: '10%',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#eee'
    },
    menuIcon:{
        justifyContent: 'flex-end',
        marginLeft: 20,
        position: 'absolute',
        right: 5
    }
})