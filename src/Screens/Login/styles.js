import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';
import { moderateVerticalScale } from '../../styles/responsiveSize';



export default StyleSheet.create({
    mainView:{
        flex:1,
        padding:20,
        
    },
   appLogo:{
      alignSelf:'center',
        height:moderateVerticalScale(70),
        width:'100%',
        resizeMode:'contain',
        marginTop:50,
       
    },
    otpText1:{
      ...commonStyles.fontSize10,
        alignSelf:'center',
        marginTop:10
    },
    otpText2:{
       ...commonStyles.fontSize10,
        alignSelf:'center',
       
    },
    loginText:{
       
        ...commonStyles.fontSize20,
       
    //    fontSize:textScale(30),
        alignSelf:'center',
        marginTop:10
    }
})