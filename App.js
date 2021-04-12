import React, { Component } from 'react';

import FlashMessage from 'react-native-flash-message';
import Routes, { navigate } from './src/Navigation/Routes';

import { Provider } from 'react-redux';
import store from './src/redux/store';
import { getUserData } from './src/utils/utils';
import types from './src/redux/types';
import SplashScreen from 'react-native-splash-screen';
import requestUserPermission from './src/utils/notificationServices';
import navigationStrings from './src/constants/navigationStrings';
import { Alert } from 'react-native';

const { dispatch } = store

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  componentDidMount() {    
    getUserData().then(userData => {
      // setTimeout(()=>{
      //   SplashScreen.hide()
      // },1000)
      // SplashScreen.hide()
      if (userData) {
        dispatch({
          type: types.LOGIN,
          payload: userData
        })
      }
    })
    requestUserPermission();
    // Alert.alert(
    //   "Alert Title",
    //   "My Alert Msg",
    //   [
    //     {
    //       text: "Cancel",
    //       onPress: () => console.log("Cancel Pressed"),
    //       style: "cancel"
    //     },
    //     { text: "OK", onPress: () => navigate(navigationStrings.SEARCH_POSTS) }
    //   ]
    // );
  }



  render() {

    return (
      <Provider store={store}>
        <Routes />
        <FlashMessage position="top" />
      </Provider>
    )
  }
}