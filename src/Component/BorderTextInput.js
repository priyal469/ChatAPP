import React from "react";
import{StyleSheet,TextInput} from "react-native";

import colors from "../styles/colors";


export default function BorderTextInput(props){
    const{placeholder,_onChangeText,inputKey}=props;
    return(
        <TextInput placeholder={placeholder} style={styles.textInput}
       onChangeText={_onChangeText(inputKey)}  maxLength = {10}
        />
    )
}
const styles=StyleSheet.create({
    textInput:{
       borderWidth:1,
       borderColor:colors.themeColor,
       borderRadius:6,
        width:'100%',
        marginTop:80
    }
})
