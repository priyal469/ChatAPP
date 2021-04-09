
import React, { Component } from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    TouchableOpacity,
    Linking,
    View,
    Button
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import { ScanQRCode } from '../../Component/ScanQRCode';
import QRCode from 'react-native-qrcode-svg';
import * as Animatable from 'react-native-animatable';
import colors from '../../styles/colors';
import strings from '../../constants/lang';


export default class QRScanner extends Component {
    state = {
        isCameraOpen: false
    }
    onSuccess = e => {
        Linking.openURL(e.data).catch(err =>
            console.error('An error occured', err)
        );
        this.setState({
            isCameraOpen: false
        })

    };

    onOpenScanner = () => {
        const { isCameraOpen } = this.state;
        if (isCameraOpen) {
            this.setState({
                isCameraOpen: false
            })
        }
        else {
            this.setState({
                isCameraOpen: true
            })
        }



    }

    render() {
        const { isCameraOpen } = this.state;
        return (
            <View style={{ flex: 1 }} >
                <View style={styles.qrCodeView}>
                    <QRCode
                        value="http://awesome.link.qr"
                    />

                    <View style={{ flexDirection: 'column' }}>

                        <Animatable.Text animation="zoomInUp" direction="alternate">{strings.QR_SCANNER_CODE}</Animatable.Text>
                        <Button title="Scan QR" onPress={this.onOpenScanner} color={colors.themeColor} />
                    </View>

                </View>






                <ScanQRCode isCameraOpen={isCameraOpen} _onSuccess={this.onSuccess} />
            </View>

        );
    }
}
const styles=StyleSheet.create({
  qrCodeView:
    { alignItems: 'center',
     marginVertical: 20 }
})




