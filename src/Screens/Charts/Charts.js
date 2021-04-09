import React,{Component} from 'react';
import {View,ScrollView, TouchableOpacity,Text } from 'react-native';
import { AreaChart, Grid,BarChart,StackedBarChart,LineChart,YAxis,XAxis } from 'react-native-svg-charts'
import * as shape from 'd3-shape';
import RazorpayCheckout from 'react-native-razorpay';
import strings from '../../constants/lang';

 
 export default class Charts extends Component {
     constructor(props){
         super(props);
         this.state={}
     }
     onProceedToPay=() => {
        var options = {
          description: 'Credits towards consultation',
        
          currency: 'INR',
          key: 'rzp_test_U3O5rR0kn11vwD', // Your api key
          amount: '5000',
          name: 'Priyal Sharma',
          prefill: {
            email: 'void@razorpay.com',
            contact: '',
            name: 'Razorpay Software'
          },
         
        }
        RazorpayCheckout.open(options).then((data) => {
          // handle success
          alert(`Success: ${data.razorpay_payment_id}`);
        }).catch((error) => {
          // handle failure
          alert(`Error: ${error.code} | ${error.description}`);
        });
      }

     render() {
        const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80]
 
        const contentInset = { top: 20, bottom: 20 }
        
        
       
        return (
            <ScrollView >
                
        
                 <View style={{ height: 200, flexDirection: 'row' }}>
                <YAxis
                    data={data}
                    contentInset={contentInset}
                    svg={{
                        fill: 'grey',
                        fontSize: 10,
                    }}
                    numberOfTicks={10}
                    formatLabel={(value) => `${value}ºC`}
                />
                <LineChart
                    style={{ flex: 1, marginLeft: 16 }}
                    data={data}
                    svg={{ stroke: 'rgb(134, 65, 244)' }}
                    gridMin={0}
                    contentInset={contentInset}
                >
                    <Grid />
                </LineChart>
               
            </View>
            <View style={{marginLeft:35,height:200}}>
                
                <XAxis
                    // style={{ marginHorizontal: -10 }}
                    data={data}
                    formatLabel={(value, index) => index}
                    contentInset={{ left: 10, right: 10 }}
                    svg={{ fontSize: 12, fill: 'black' }}
                />
            </View>
              
              <TouchableOpacity onPress={this.onProceedToPay} style={{alignItems:'center'}}>
              <Text>{strings.PROCEED_TO_PAY}</Text>
              </TouchableOpacity>
           
            </ScrollView>
        )
    }
}