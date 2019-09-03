import React, {PureComponent} from 'react';
import {View, Text,TouchableOpacity, Image} from 'react-native';
import styles from './Home.styles';
import Icon from 'react-native-vector-icons/FontAwesome';

export const ImageElement = ({data}) => {
    console.warn(data)
    return (
        <View >
            <View style = {styles.row}>
                <Text>
                    {data.id}
                </Text>
                <TouchableOpacity>
                    <Icon name = "ellipsis-h" size = {18} style = {styles.icon} />
                </TouchableOpacity>
            </View>
            {/* {
                data.url ? <Image style={styles.image} source={{uri: data.url}}/>
                : <View style = {styles.image}>
                    <Text>No Image</Text>
                </View>
            } */}
            <View style = {styles.row}>
                <TouchableOpacity>
                    <Icon name = "heart-o" size = {18} style = {styles.icon1} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon name = "ellipsis-h" size = {18} style = {styles.icon2} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon name = "ellipsis-h" size = {18} style = {styles.icon3} />
                </TouchableOpacity>
            </View> 
         </View>
    )
}

// export default class ImageElement extends PureComponent{
//     render(){
//         const {data} = this.props;
//         return(
            // <View style={styles.item}>
            //     <View style = {styles.row}>
            //         <Text>
            //             {data.albumId}
            //         </Text>
            //         <TouchableOpacity>
            //             <Icon name = "ellipsis-h" size = {18} style = {styles.icon} />
            //         </TouchableOpacity>
            //     </View>
            //     {
            //         data ? <Image style={styles.image} source={{uri: data.url}}/>
            //         : <View style = {styles.image}>
            //             <Text>No Image</Text>
            //         </View>
            //     }
            //     <View style = {styles.row}>
            //         <TouchableOpacity>
            //             <Icon name = "heart-o" size = {18} style = {styles.icon1} />
            //         </TouchableOpacity>
            //         <TouchableOpacity>
            //             <Icon name = "ellipsis-h" size = {18} style = {styles.icon2} />
            //         </TouchableOpacity>
            //         <TouchableOpacity>
            //             <Icon name = "ellipsis-h" size = {18} style = {styles.icon3} />
            //         </TouchableOpacity>
            //     </View>
            //     <Text>12</Text>
            // </View>
//         )
//     }
// }