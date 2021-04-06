import React,{Component} from 'react';
import {View,ScrollView, } from 'react-native';
import { AreaChart, Grid,BarChart,StackedBarChart,LineChart,YAxis,XAxis } from 'react-native-svg-charts'
import * as shape from 'd3-shape';

 
 export default class Charts extends Component {
     constructor(props){
         super(props);
         this.state={}
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
            
           
            </ScrollView>
        )
    }
}