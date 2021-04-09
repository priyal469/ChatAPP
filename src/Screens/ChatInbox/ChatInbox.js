import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { showMessage } from 'react-native-flash-message';
import { GiftedChat } from 'react-native-gifted-chat';
import actions from '../../redux/actions';
import io from 'socket.io-client';
import fontFamily from '../../styles/fontFamily';


export default class ChatInbox extends Component {
    constructor(props){
        super(props);
        this.state={
              messages:[],
        }
    }

    componentDidMount() {
        const{commonConversationId,userInfo}=this.props.route.params.data;
        actions.getUserChatData(commonConversationId).then((res)=> 
       {
        
         const messages=res.data.map((data)=>{
          let message = {
            _id: data._id,
            text: data.text,
            createdAt: data.createdAt,
            user: {
              _id: data.senderId._id,
              name: data.senderId.firstName,
              avatar:userInfo.profileImg[0].original,
            },
          };
          if (!!data.repliedToText) {
            message.replyText = data.repliedToText;
          }
          return message;
        });
        this.setState({ messages});
       }
        )
        .catch((err)=>showMessage({
            icon:"danger",
            type:"danger",
            message:err.message
        }))
        this.setState({
          messages: [
            {
              _id: 1,
              text: 'Hello ',
              createdAt: new Date(Date.UTC(2016, 7, 30, 17, 20, 0)),
              user: {
                _id: 2,
                name: 'React Native',
                avatar: 'https://facebook.github.io/react/img/logo_og.png',
              },
            },
          ],
        });

      }
      onSend=(messages = []) =>{
        this.setState((previousState) => {
          return {
            messages: GiftedChat.append(previousState.messages, messages),
          };
        });
      }
      render() {
         
          const{messages}=this.state;
        return (
          <GiftedChat
            messages={messages}
            onSend={this.onSend}
            user={{
              _id: 1,
            }}
          />
        );
      }
}
