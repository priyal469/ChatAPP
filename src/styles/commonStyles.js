import {StyleSheet} from 'react-native';
import colors from './colors';
import fontFamily from './fontFamily';
// import fontFamily from './fontFamily';

export default StyleSheet.create({
   fontSize10:{
        fontSize:10,
        color:colors.textGreyLight,
         fontFamily:fontFamily.regular
       
    },
    fontSize12:{
     fontSize:12,
    },
   fontSize20:{
        fontSize:20,
        color:colors.black,
       
        fontFamily:fontFamily.semibold
    },
    fontSize16:{
     fontSize: 16,
     fontFamily:fontFamily.bold,
    },
    fontSize14:{
     fontSize: 14,
    },
    fontSize13:{
         fontSize:13
    },
    fontSize18:{
         fontSize:18,
         color:colors.black,
    },
    
})