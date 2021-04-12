import React from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import colors from '../styles/colors';
import commonStyles from '../styles/commonStyles';



export default function UserChatList(props) {
    const { data, onNavigation = () =>{} } = props;
    return (
        <View style={styles.chatListView}>

            <Image source={{ uri: data.userInfo.profileImg[0].original }} style={styles.userImage} />

            <TouchableOpacity onPress={() => onNavigation(data)} >
                <View style={styles.userInfoView}>
                    <Text style={styles.fullName}>{data.userInfo.fullName}</Text>
                    <Text style={styles.firstName}>{data.userInfo.firstName}</Text>
                </View>
            </TouchableOpacity>

        </View>
    )

}
const styles = StyleSheet.create({
    chatListView: {
        backgroundColor: colors.white,
        width: '100%',
        height: 70,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: colors.lightGreyBg,


    },
    userImage: {
        height: 55,
        width: 60,
        resizeMode: 'contain',
        marginHorizontal: 10,
        borderRadius: 100,
        marginTop: 6

    },
    userInfoView: {
        flexDirection: 'column',
        marginHorizontal: 10
    },
    fullName: {
        ...commonStyles.fontSize10,
        color: colors.black,
        fontSize: 15


    },
    firstName: {
        ...commonStyles.fontSize10,
        fontSize: 13
    }
})
