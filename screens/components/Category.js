import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';

class Category extends Component {
    render() {
        console.log(11111111111111111111,this.props)
        return (
            <TouchableOpacity onPress={this.props.onPress}>
            <View
                style={{ width: 130, height: 140, marginLeft: 21, borderWidth: 0.5, borderColor: '#dddddd' }}
            >

                    <View style={{ flex: 2 }}>
                        <Image
                            source={{ uri: this.props.imageUri }}
                            style={{
                                flex: 1,
                                width: null,
                                height: null,
                                resizeMode: 'cover'
                            }}
                        />
                    </View>
                    <View style={{ flex: 1, paddingHorizontal: 10 }}>
                        <Text>{this.props.name}</Text>
                    </View>
            </View>
         </TouchableOpacity>
        )
    }
}

export default Category;

const styles = StyleSheet.create({
    contauner: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});