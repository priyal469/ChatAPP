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
import fontFamily from '../styles/fontFamily';
import colors from '../styles/colors';
import commonStyles from '../styles/commonStyles';

export function ScanQRCode(props) {
  const { _onSuccess, isCameraOpen } = props;
  return (
    <View>
      {isCameraOpen &&
        <QRCodeScanner
          onRead={(e) => _onSuccess(e)}
          showMarker={true}
          // reactivate={true}
          flashMode={RNCamera.Constants.FlashMode.auto}
        // topContent={
        //   <Text style={styles.centerText}>
        //     Go to{' '}
        //     <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on
        //     your computer and scan the QR code.
        //   </Text>
        // }

        />}

    </View>
  )
}
const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    ...commonStyles.fontSize18,
    padding: 32,

  },
  textBold: {
    fontFamily: fontFamily.bold,
    color: colors.white
  },
  buttonText: {
    fontSize: 21,
    color: colors.themeColor
  },
  buttonTouchable: {
    padding: 16
  }
});