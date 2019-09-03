import React, {
    Component
} from 'react'
import {
    View,
    StyleSheet,
    Dimensions
} from 'react-native';
import PropTypes from 'prop-types';
import ButtonToolsbar from './Button';
var width = Dimensions.get('screen').width;
class BottomToolbarScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
            const {
                navigate,
            } = this.props;
            return (
            <View style={styles.container} width={width}>                
                <ButtonToolsbar title="Hồ sơ" image={require('../../../assets/images/documents.png')} width={width/5} onPress={() => navigate('Profile')} />
                <ButtonToolsbar title="Tư vấn" image={require('../../../assets/images/chat.png')} width={width/5} onPress={() => navigate('Chat')} />
                <ButtonToolsbar title="Trang chủ" image={require('../../../assets/images/Logo.png')} width={width/5} onPress={() => navigate('Home')} />
                <ButtonToolsbar title="Tin tức" image={require('../../../assets/images/menu.png')} width={width/5} onPress={() => navigate('News')} />
                <ButtonToolsbar title="Tài khoản" image={require('../../../assets/images/profile.png')} width={width/5} onPress={() => navigate('Account')} />
            </View>
        );
    }
};

//Navigation
BottomToolbarScreen.propTypes = {
    navigate: PropTypes.any,
};

//StyleSheet
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#145367',
        flexDirection: 'row',
    }
});

export default BottomToolbarScreen;