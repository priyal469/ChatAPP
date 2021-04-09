import types from '../types';
import {USER_POSTS,SEARCH, USER_CHAT} from '../../config/urls';
import {apiPost,apiGet} from '../../utils/utils';
import store from '../store';

 const{dispatch}=store;



  
  export function getUserSearch(data = {}) {
     
    return new Promise((resolve, reject) => {
      apiPost(USER_POSTS, data).then(res => {
        resolve(res);
      }).catch(error => {
        reject(error);
      })
    }) 
  }
  export function searchUsers(data) {
    let urls=SEARCH+`?name=${data}`
  return  apiGet(urls);
}

