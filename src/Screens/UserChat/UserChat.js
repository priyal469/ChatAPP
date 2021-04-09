import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import actions from '../../redux/actions';
import { showMessage } from 'react-native-flash-message';
import navigationStrings from '../../constants/navigationStrings';

// Components
import UserChatList from '../../Component/UserChatList';
import Header from '../../Component/Header';
import Loader from '../../Component/Loader';
import WrapperContainer from '../../Component/WrapperContainer';


export default class UserChat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userChats: [],
      skipCount: 0,
      isLoading: false,
    };

  }
  componentDidMount() {
    this.setState({
      isLoading: true
    })
    this.getUserChatList();
  }

  getUserChatList = () => {
    const { skipCount, userChats } = this.state;

    actions.getUserChat()
      .then(response => {
        console.log("get response of list >>>", response.data)
        this.setState({
          isLoading: false,
          userChats: [...userChats, ...response.data]
        })
      }).catch((error) => {
        showMessage({
          type: "danger",
          icon: "danger",
          message: error.message
        })
      });

  }
 onNavigation=(data)=>{
   
   const{navigation}=this.props;
           navigation.navigate(navigationStrings.CHAT_INBOX,{data})
          
           

 }
 onOpenDrawer=()=>{
       
  const{navigation}=this.props;
  navigation.openDrawer();
}

  render() {
    const { userChats, isLoading } = this.state;
console.log('in userchats>>>>>>>',userChats)
    return (
      <WrapperContainer>
        <Header headerText='Chats'  onClickMenuIcon={this.onOpenDrawer}/>
        <View style={{ flex: 1 }} >
          <FlatList
            data={userChats}
            
            ListFooterComponent={() => <View style={{ height: 30 }}><Loader isLoading={isLoading} /></View>}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={()=><View style={{height:12}}></View>}
            renderItem={({ item }) => <UserChatList  data={item} onNavigation={this.onNavigation} /> }

          />
        </View>
      </WrapperContainer>
    )
  }

}






















 