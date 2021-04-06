import React from "react";
import {View, StyleSheet,Image} from "react-native";
import {Avatar, Title, Caption, 
    Paragraph, Drawer, Text, TouchableRipple,
    Switch} from "react-native-paper"
import {DrawerContentScrollView,DrawerItem} from "@react-navigation/drawer";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import navigationStrings from "../constants/navigationStrings";
import imagePath from "../constants/imagePath";


export default function DrawerContent(props){
    const {navigation}=props;
    return(
        <View style={{flex:1}}>
                 <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            <Avatar.Image 
                                source={{
                                    uri: 'https://img.freepik.com/free-photo/handsome-young-businessman-shirt-eyeglasses_85574-6228.jpg?size=626&ext=jpg'
                                }}
                                size={50}
                            />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>Priyal Sharma</Title>
                                <Caption style={styles.caption}>priyalsh@gmail.com</Caption>
                            </View>
                        </View>

                
                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem 
                            icon={({color, size}) => (
                              <Image source={imagePath.homeIcon} style={styles.icons}/>
                            )}
                            label="Home"
                            onPress={() => {navigation.navigate(navigationStrings.HOME)}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                               <Image source={imagePath.searchIcon} style={styles.icons}/>

                            )}
                            label="Search"
                            onPress={() => {navigation.navigate(navigationStrings.SEARCH_POSTS)}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                              <Image source={imagePath.chartIcon} style={styles.icons}/>
                            )}
                            label="Charts"
                            onPress={()=>{navigation.navigate(navigationStrings.CHARTS)}}
                           
                        />
                        <DrawerItem 
                          icon={({color, size}) => (
                            <Image source={imagePath.settingIcon} style={styles.icons}/>
                        )}
                            label="Settings"
                           
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
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    icons:{
      height:20,
      width:20,
      resizeMode:'contain'
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
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
  });