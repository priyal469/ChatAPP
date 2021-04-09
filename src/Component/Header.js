import React,{Component} from "react";
import{View,Text,StyleSheet,Image} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import imagePath from "../constants/imagePath";
import navigationStrings from "../constants/navigationStrings";
import colors from "../styles/colors";
import commonStyles from "../styles/commonStyles";

 export default function Header(props){

    const{headerText,onClickMenuIcon}=props;
   
    return(
            
        <View style={styles.headerView}>
        <TouchableOpacity onPress={onClickMenuIcon}>
        <Image source={imagePath.menuIcon} style={styles.menuIcon}/>
        </TouchableOpacity>
        <Text style={styles.headerText}>{headerText}</Text>
      
        
       
        </View>
                  
                 
    )
}

 

const styles= StyleSheet.create({
   headerView:{
height:50,
backgroundColor:colors.white,
alignItems:'center',
// justifyContent:'space-between',
flexDirection:'row'
   },
      
       headerText:{
           
        padding:10,
    ...commonStyles.fontSize13
       },
     menuIcon:{
         height:20,
         width:20,
         tintColor:colors.black,
         marginHorizontal:10,
         tintColor:colors.themeColor
     }
})