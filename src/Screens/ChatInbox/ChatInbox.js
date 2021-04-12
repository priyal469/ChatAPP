import React, { Component } from 'react'
import { showMessage } from 'react-native-flash-message';
import { GiftedChat } from 'react-native-gifted-chat';
import actions from '../../redux/actions';
import socketServices from '../../utils/socketServices';
import {SOCKET_STRINGS} from '../../constants/socketStrings';
import { connect } from 'react-redux';


class ChatInbox extends Component {
    constructor(props){
        super(props);
        this.state={
              messages:[],
        }
    }

    componentDidMount() {
      const{userData}=this.props;
        const{commonConversationId,userInfo}=this.props.route.params.data;

        socketServices.initializeSocket(userData.accessToken)

        actions.getUserChatData(commonConversationId).then((res)=>{
      
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

       })
        
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


      onSend = (messages = []) => {

        if (String(messages[0].text).trim().length < 1) {
          return;
        }

        const{userData}=this.props;
        const { _id, commonConversationId, } = this.props.route.params.data

        socketServices.emit(SOCKET_STRINGS.SEND_MESSAGE, {
          senderId: userData._id,
          recieverId: _id,
          commonConversationId,
          messageType: 'Text',
          text: messages[0].text,
        });
    
        this.setState((previousState) => {
          return {
            messages: GiftedChat.append(previousState.messages, messages),
          };
        });
        
      }

      onReceiveMessage = data => {
        const {
          commonConversationId,
          firstName,
          userInfo
        } = this.props.route.params.data;
    
        const message = {
          _id: data._id,
          text: data.text,
          createdAt: data.createdAt,
          user: {
            _id: data.senderId,
            name: firstName,
            avatar: userInfo.profileImg[0].original,
          },
        };
     
    
        if (data.commonConversationId === commonConversationId) {
          socketServices.emit(SOCKET_STRINGS.SEEN_ALL_MESSAGES, {
            senderId: data.senderId,
            isRead: true,
            recieverId: data.recieverId,
          });
    
          this.setState(previousState => ({
            messages: GiftedChat.append(previousState.messages, message),
          }));
        }
      };
    
      render() {
         const{userData}=this.props;
          const{messages}=this.state;
        return (
          <GiftedChat
            messages={messages}
            onSend={this.onSend}
            user={{
              _id: userData._id,
            }}
          />
        );
      }
}
 const mapStateToProps=state=>{
  return{
    userData:state.auth.userData
  }
}
export default connect(mapStateToProps)(ChatInbox)