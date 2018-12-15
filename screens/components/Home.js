import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';

class Home extends Component {
    render() {
        console.log(this.props)
        return (
            <View style={{ width: 0.75*(this.props.width / 2) , height: 0.75*(this.props.width/ 2), borderWidth: 0.5, borderColor: '#dddddd' }}>
                <View style={{ flex: 1 }}>
                    <Image
                        source={{ uri: this.props.imageUri }}
                        style={{ flex: 1, width: null, height: null, resizeMode: 'cover' }}
                    />
                </View>
                <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'space-evenly', paddingLeft: 10 }}>
                    <Text style={{ fontSize: 10, color: '#b63838' }}>
                        {this.props.head}
                        </Text>
                    <Text style={{ fontSize: 12, fontWeight: 'bold' }}>
                        {this.props.name}
                        </Text>
                    <Text style={{ fontSize: 10 }}>
                        {this.props.publisher}
                    </Text>
                </View>
            </View>
        )
    }
}

export default Home;

const styles = StyleSheet.create({
    contauner: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});