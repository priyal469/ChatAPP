import React ,{Component} from 'react';
import {View,Text,Image,TextInput} from 'react-native';
import styles from './styles';
import imagePath from '../../constants/imagePath';
import actions from '../../redux/actions';
import { showMessage } from 'react-native-flash-message';

import strings from '../../constants/lang';

// Components
import Loader from '../../Component/Loader';
import WrapperContainer from '../../Component/WrapperContainer';
import SimpleBtn from '../../Component/SimpleBtn';

export default class OtpVerification extends Component{
    constructor(props){
        super(props);
        this.state={
              otpInput:'',
              isLoading:false,
              newOtp: 12345,
        }
    }

    _onClickSimpleBtn = () => {
        const {userId}=this.props.route.params
        const { navigation } = this.props;
        const { otpInput } = this.state;

        this.setState({
            isLoading: true,
        })
        actions.otpVerify({
            userId,
            otp: otpInput,
            deviceToken: "123",
            registerFrom: Platform.OS.toUpperCase()
        })
            .then(res => {
                this.setState({
                   
                    isLoading: false,
                });
                showMessage({
                    type: 'success',
                    icon: 'success',
                    message: 'otp verified successfully',
                });
                // navigation.navigate(navigationStrings.HOME);
            })
            .catch(error => {
                this.setState({
                    
                    isLoading: false
                });
                showMessage({
                    type: 'danger',
                    icon: 'danger',
                    message: error.message,
                });
            });
    }
    render(){
        const{isLoading}=this.state;
        return(
            <WrapperContainer>
                
            <View style={styles.mainView}>
            <Image source={imagePath.appLogo} style={styles.appLogo}/>
            <Text style={styles.verificationText}>{strings.VERIFICATION_TEXT}</Text>
            <Text style={styles.otpText1}>{strings.OTP_INFO_2}</Text>
             
             <TextInput placeholder={strings.ENTER_OTP}  onChangeText={text => this.setState({ otpInput: text })}/>
             <SimpleBtn simpleBtnText={strings.VERIFY} onPresSimpleBtn={this._onClickSimpleBtn}/>
               <Loader isLoading={isLoading}/>
         </View>
         </WrapperContainer>
        )
    }
}