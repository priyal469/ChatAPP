import React, {Component} from 'react';
import {View, FlatList, RefreshControl} from 'react-native';
import actions from '../../redux/actions';
import {showMessage} from 'react-native-flash-message';
import ImageZoom from 'react-native-image-pan-zoom';

// Components
import Header from '../../Component/Header';
import WrapperContainer from '../../Component/WrapperContainer';
import Loader from '../../Component/Loader';
import UserPosts from '../../Component/UserPosts';
import strings from '../../constants/lang';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userPosts: [],
      skipCount: 0,
      isLoading: false,
      isRefreshing: false,
    };
  }

  componentDidMount() {
    this.setState({
      isLoading: true,
    });
    this.getUserPosts();
  }

  handleRefresh = () => {
    this.setState({
      isRefreshing: true,
    });
    this.getUserPosts(); 
  };
           
  getUserPosts = () => {
    const {skipCount, userPosts} = this.state;
    actions
      .getUserSearch({
        searchType: 'LEADERBOARD',
        limit: 6,
        skip: skipCount,
      })
      .then(response => {
        this.setState({
          isLoading: false,
          isRefreshing: false,
          userPosts: [...userPosts, ...response.data],
        });
      })
      .catch(error => {
        showMessage({
          type: 'danger',
          icon: 'danger',
          message: error.message,
        });
      });
  };
  _onEndReached = async () => {
    const {skipCount} = this.state;

     await this.setState({
      skipCount: skipCount + 6,
      isLoading: true,
    });
    this.getUserPosts();
  };

  onOpenDrawer = () => {
    const {navigation} = this.props;
    navigation.openDrawer();
  };

  render() {
    const {isLoading, userPosts, isRefreshing} = this.state;
    return (
      <WrapperContainer>
        <Header headerText={strings.HOME} onClickMenuIcon={this.onOpenDrawer} />

        <View style={{flex: 1}}>
          <FlatList
            data={userPosts}
            numColumns={2}
            ListFooterComponent={() => (
              <View style={{height: 30}}>
                <Loader isLoading={isLoading} />
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
            ItemSeparatorComponent={() => <View style={{height: 15}}></View>}
            renderItem={({item}) => <UserPosts data={item} />}
            onEndReached={this._onEndReached}
            onEndReachedThreshold={0.9}
            refreshControl={
              <RefreshControl
                refreshing={isRefreshing}
                onRefresh={this.handleRefresh}
              />
            }
          />
        </View>

        {/* <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={200}
                       imageHeight={200}>
                <Image style={{width:200, height:200}}
                       source={{uri:'https://cdn.pixabay.com/photo/2014/02/27/16/10/tree-276014__340.jpg'}}/>
            </ImageZoom> */}

      </WrapperContainer>
    );
  }
}
