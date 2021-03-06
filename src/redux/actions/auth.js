import types from '../types';
import {SEND_OTP,OTP_VERIFY,USER_POSTS,SEARCH, USER_CHAT} from '../../config/urls';
import {apiPost,setUserData,apiGet, clearUserData} from '../../utils/utils';
import store from '../store';

 const{dispatch}=store;

export function onSendOTP(data = {}) {
    // return new Promise((resolve, reject) => {
     return apiPost(SEND_OTP, data)
      // .then(res => {
  
      //   resolve(res);
      // }).catch(error => {
      //   reject(error);
      // })
    // })
  }

  export function otpVerify(data = {}) {


    return new Promise((resolve, reject) => {
      apiPost(OTP_VERIFY, data).then(res => {
        setUserData(res.data).then(suc => {
          dispatch({
            type: types.LOGIN,
            payload: res.data
          })
         
        })
      
  
        resolve(res);
      }).catch(error => {
        reject(error);
      })
    })
  }

  export function logout(){
    clearUserData();
    dispatch({
      type:types.LOGOUT,
    })
  }
  