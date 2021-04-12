import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import colors from "../styles/colors";
import commonStyles from "../styles/commonStyles";


export default function SimpleBtn(props) {
    const { onPresSimpleBtn, simpleBtnText } = props;
    return (
        <TouchableOpacity onPress={onPresSimpleBtn} style={styles.touchableBtn}  >
            <Text style={styles.touchableBtnTxt}>
                {simpleBtnText}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    touchableBtn: {
        height: 45,
        width: '100%',
        backgroundColor: colors.themeColor,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 50
    },

    touchableBtnTxt: {
        color: colors.white,
        ...commonStyles.fontSize12
     }
})