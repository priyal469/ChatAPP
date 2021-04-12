import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import navigationStrings from '../constants/navigationStrings';
import TabRoutes from './TabRoutes';
import DrawerContent from '../Component/DrawerContent';
import colors from '../styles/colors';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
  return (
    <Drawer.Navigator

      drawerContent={props => <DrawerContent {...props} />} drawerStyle={{ backgroundColor: colors.white }} >
      <Drawer.Screen name={navigationStrings.TAB_ROUTES} component={TabRoutes} />

    </Drawer.Navigator>
  );
}