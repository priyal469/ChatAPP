import React from 'react';
import { StyleSheet, View, Text, Image,Dimensions} from 'react-native';
import ImageZoom from 'react-native-image-pan-zoom';
import colors from '../styles/colors';
import fontFamily from '../styles/fontFamily';


export default function UserPosts(props) {
   const { data} = props;
   return (
      <View style={styles.userPostView}>
        {/* <ImageZoom cropWidth={Dimensions.get('window').width}
                       cropHeight={Dimensions.get('window').height}
                       imageWidth={50}
                       imageHeight={80}>
                <Image style={{width:50, height:80,resizeMode:'contain'}}
                       source={{uri:data.profileImg[1].original }}/>
            </ImageZoom> */}
            <Image source={{uri:data.profileImg[0].original}} style={styles.userPostImage} />
            
         <Text style={styles.fullName}>{data.fullName}</Text>
         <Text>{data.gender}</Text>
        
         {/* <Text>{data.addressDetails.city}</Text> */}
       
      </View>
   )
}
const styles = StyleSheet.create({
   userPostView: {
      // borderWidth:1,
      borderColor: colors.black,
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '50%'
   },

   userPostImage: {
      height: 80,
      width: '100%',
      borderRadius: 50,
      resizeMode: 'contain',
      marginTop: 13
   },

   fullName: {
    fontFamily:fontFamily.bold
   },
   
})