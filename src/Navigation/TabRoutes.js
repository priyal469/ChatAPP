import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import imagePath from '../constants/imagePath';
import navigationStrings from '../constants/navigationStrings';
import { Charts, Home, QRScanner, SearchPosts, UserChat } from '../Screens';
import React from "react"
import {View,Image,Text} from "react-native"
import colors from '../styles/colors';
import DrawerRoutes from './DrawerRoutes';
import strings from '../constants/lang';


const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator>
      <Tab.Screen name={navigationStrings.HOME} component={Home}
      options={{
         
        tabBarIcon: ({focused, color, size}) => (
            <Image  source={imagePath.homeIcon}
            style={{
                width: size,
                height: size,
                tintColor: focused ? colors.themeColor : 'black',
            }}
            />
          ),
          tabBarLabel: ({focused, color, size}) => (
            <Text style={{
                color: focused ?colors.themeColor : 'black',
                fontSize: 12,
              }}>
             {strings.HOME}
            </Text>
          ),
      }}
      />
      <Tab.Screen name={navigationStrings.SEARCH_POSTS} component={SearchPosts}
      options={{
         
        tabBarIcon: ({focused, color, size}) => (
            <Image  source={imagePath.searchIcon}
            style={{
                width: size,
                height: size,
                tintColor: focused ? colors.themeColor : 'black',
            }}
            />
          ),
          tabBarLabel: ({focused, color, size}) => (
            <Text style={{
                color: focused ?colors.themeColor : 'black',
                fontSize: 12,
              }}>
              {strings.SEARCH}
            </Text>
          ),
      }}
      />
      <Tab.Screen name={navigationStrings.CHARTS} component={Charts}
      options={{
         
        tabBarIcon: ({focused, color, size}) => (
            <Image  source={imagePath.chartIcon}
            style={{
                width: size,
                height: size,
                tintColor: focused ? colors.themeColor : 'black',
            }}
            />
          ),
          tabBarLabel: ({focused, color, size}) => (
            <Text style={{
                color: focused ?colors.themeColor : 'black',
                fontSize: 12,
              }}>
              {strings.CHARTS}
            </Text>
          ),
      }}
      />
      <Tab.Screen name={navigationStrings.QR_SCANNER} component={QRScanner}
      options={{
         
        tabBarIcon: ({focused, color, size}) => (
            <Image  source={imagePath.QRscannerIcon}
            style={{
                width: size,
                height: size,
                tintColor: focused ? colors.themeColor : 'black',
            }}
            />
          ),
          tabBarLabel: ({focused, color, size}) => (
            <Text style={{
                color: focused ?colors.themeColor : 'black',
                fontSize: 12,
              }}>
             {strings.QR_SCANNER_CODE}
            </Text>
          ),
      }}
      />
       <Tab.Screen name={navigationStrings.USER_CHAT} component={UserChat}
      options={{
         
        tabBarIcon: ({focused, color, size}) => (
            <Image  source={imagePath.userChatIcon}
            style={{
                width: size,
                height: size,
                tintColor: focused ? colors.themeColor : 'black',
            }}
            />
          ),
          tabBarLabel: ({focused, color, size}) => (
            <Text style={{
                color: focused ?colors.themeColor : 'black',
                fontSize: 12,
              }}>
             {strings.CHAT}
            </Text>
          ),
      }}
      />
     
    </Tab.Navigator>
  );
}