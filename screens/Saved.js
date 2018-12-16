// import React,{Component} from 'react';
// import {
//   View,
//   Text,
//   StyleSheet
// } from 'react-native';

// class Saved extends Component {
//   render(){
//     return(
//       <View style={styles.container}>
//         <Text>Save</Text>
//       </View>
//     )
//   }
// }

// export default Saved;

// const styles = StyleSheet.create({
//   container:{
//     flex:1,
//     alignItems:'center',
//     justifyContent:'center'
//   }
// })


import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Camera, Permissions,ImageManipulator,FileSystem } from 'expo';

export default class CameraExample extends React.Component {
  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
  };

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  // takePicture() {
  //   this.setState({
  //     takeImageText: "... PROCESSING PICTURE ..."
  //   });
  //   this.camera.takePictureAsync({ skipProcessing: true }).then((data) => {
  //     this.setState({
  //       takeImageText: "PICTURE TAKEN",
  //       photo: data.uri
  //     }, console.log(data))
  //   })
  // }

  takePicture = async function() {
    if (this.camera) {
        let photo = await this.camera.takePictureAsync();
        let resizedPhoto = await ImageManipulator.manipulate(
            photo.uri,
            [{ resize: { width: 108, height: 192 } }],
            { compress: 0, format: "jpg", base64: false }
        );
        FileSystem.moveAsync({
            from: resizedPhoto.uri,
            to: `${FileSystem.documentDirectory}photos/Photo_${
                this.state.photoId
            }.jpg`
        });
        this.setState({ photoId: this.state.photoId + 1 });
        Vibration.vibrate();            
    }
};


  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera
            style={{ flex: 1 }}
            type={this.state.type}
            ref={ref => { this.camera = ref; }}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={{
                  flex: 0.1,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={() => {
                  this.setState({
                    type: this.state.type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back,
                  });
                }}>
                <Text
                  style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                  {' '}Flip{' '}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
               style={{
                flex: 0.1,
                alignSelf: 'flex-end',
                alignItems: 'center',
              }}
                onPress={this.takePicture.bind(this)} >
                <Text>Take photo</Text>
              </TouchableOpacity>

            </View>
          </Camera>
        </View>
      );
    }
  }
}

// import { RNCamera as Camera } from 'react-native-camera';


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: '#000',
//   },
//   preview: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//     height: Dimensions.get('window').height,
//     width: Dimensions.get('window').width
//   },
//   capture: {
//     width: 70,
//     height: 70,
//     borderRadius: 35,
//     borderWidth: 5,
//     borderColor: '#FFF',
//     marginBottom: 15,
//   },
//   cancel: {
//     position: 'absolute',
//     right: 20,
//     top: 20,
//     backgroundColor: 'transparent',
//     color: '#FFF',
//     fontWeight: '600',
//     fontSize: 17,
//   }
// });

// class TakePictureScreen extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       path: null,
//     };
//   }

//   takePicture = async () => {
//     try {
//       const data = await this.camera.takePictureAsync();
//       this.setState({ path: data.uri });
//       // this.props.updateImage(data.uri);
//       // console.log('Path to image: ' + data.uri);
//     } catch (err) {
//       console.log('err: ', err);
//     }
//   };

//   renderCamera() {
//     return (
//       <Camera
//         ref={(cam) => {
//           this.camera = cam;
//         }}
//         style={styles.preview}
//         flashMode={Camera.Constants.FlashMode.off}
//         permissionDialogTitle={'Permission to use camera'}
//         permissionDialogMessage={'We need your permission to use your camera phone'}
//       >
//         <TouchableHighlight
//           style={styles.capture}
//           onPress={this.takePicture.bind(this)}
//           underlayColor="rgba(255, 255, 255, 0.5)"
//         >
//           <View />
//         </TouchableHighlight>
//       </Camera>
//     );
//   }

//   renderImage() {
//     return (
//       <View>
//         <Image
//           source={{ uri: this.state.path }}
//           style={styles.preview}
//         />
//         <Text
//           style={styles.cancel}
//           onPress={() => this.setState({ path: null })}
//         >Cancel
//         </Text>
//       </View>
//     );
//   }

//   render() {
//     return (
//       <View style={styles.container}>
//         {this.state.path ? this.renderImage() : this.renderCamera()}
//       </View>
//     );
//   }
// }