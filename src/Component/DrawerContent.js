import React from "react";
import {View, StyleSheet,Image} from "react-native";
import {Avatar, Title, Caption, 
    Paragraph, Drawer, Text, TouchableRipple,
    Switch} from "react-native-paper"
import {DrawerContentScrollView,DrawerItem} from "@react-navigation/drawer";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import navigationStrings from "../constants/navigationStrings";
import imagePath from "../constants/imagePath";
import colors from "../styles/colors";
import strings from "../constants/lang";
import fontFamily from "../styles/fontFamily";
import commonStyles from "../styles/commonStyles";


export default function DrawerContent(props){
    const {navigation}=props;
    return(
        <View style={{flex:1}}>
                 <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={styles.screenNameView}>
                            <Avatar.Image 
                                source={{
                                    uri: 'https://img.freepik.com/free-photo/handsome-young-businessman-shirt-eyeglasses_85574-6228.jpg?size=626&ext=jpg'
                                }}
                                size={50}
                            />
                            <View style={styles.userInfo_text}>
                                <Title style={styles.title}>{strings.USER_NAME_TEXT}</Title>
                                <Text style={styles.caption} numberOfLines={1}>{strings.USER_EMAIL_TEXT}</Text>
                            </View>
                        </View>

                
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon={({color, size}) => (
                              <Image source={imagePath.homeIcon} style={styles.icons}/>
                            )}
                           
                          label={strings.HOME}
                            onPress={() => {navigation.navigate(navigationStrings.HOME)}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                               <Image source={imagePath.searchIcon} style={styles.icons}/>

                            )}
                           label={strings.SEARCH}
                            onPress={() => {navigation.navigate(navigationStrings.SEARCH_POSTS)}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                              <Image source={imagePath.chartIcon} style={styles.icons}/>
                            )}
                            label={strings.CHARTS}
                            onPress={()=>{navigation.navigate(navigationStrings.CHARTS)}}
                           
                        />
                        <DrawerItem 
                          icon={({color, size}) => (
                            <Image source={imagePath.QRscannerIcon} style={styles.icons}/>
                        )}
                            label={strings.QR_SCANNER_CODE}
                            onPress={()=>{navigation.navigate(navigationStrings.QR_SCANNER)}}
                        />
                        <DrawerItem 
                          icon={({color, size}) => (
                            <Image source={imagePath.userChatIcon} style={styles.icons}/>
                        )}
                            label={strings.CHAT}
                            onPress={()=>{navigation.navigate(navigationStrings.USER_CHAT)}}
                        />
                        
                    </Drawer.Section>
                  
                </View>
                </DrawerContentScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
      width:'100%',
      
    },
    userInfoSection: {
      
     marginHorizontal:20
    
    },
    icons:{
      height:20,
      width:20,
      resizeMode:'contain',
      
    },
    title: {
      ...commonStyles.fontSize16,
      marginTop: 3,
     
    },
    caption: {
     ...commonStyles.fontSize14
     
     
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
    screenNameView:
    {flexDirection:'row',marginTop: 15},

    userInfo_text:
    {marginLeft:10, flexDirection:'column'}
  });