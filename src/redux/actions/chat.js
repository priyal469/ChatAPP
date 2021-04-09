import types from '../types';
import { USER_CHAT_LIST,USER_MESSAGES} from '../../config/urls';
import {apiGet} from '../../utils/utils';
import store from '../store';

 const{dispatch}=store;

export function getUserChat(){
  let urls=`${USER_CHAT_LIST}`+`?limit= ${4} &skip=${0}`
  return  apiGet(urls);
}
export function getUserChatData(commonConversationId){
let urls=`${USER_MESSAGES}`+`?commonConversationId=${commonConversationId}`
return apiGet(urls)
}


