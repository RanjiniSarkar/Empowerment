import React, {Component} from 'react';
import {View, Text, ImageBackground, Image} from "react-native";

var bg = require("../assets/background.png")
var logo = require("../assets/disability.png")

export default class SplashScreen extends React.Component{
    constructor(props){
        super(props)
    
    
setTimeout(() => {
  this.props.navigation.navigate('WelcomeScreen')  
}, 10000)
} 

render(){
        return(
        <ImageBackground source = {bg}
        style = {{width:"100%", height: "100%" }}
        >
             <View style = {{flex:1, justifyContent:'center', alignItems:'center'}}>
                 <Image source = {logo} style = {{width:100, height: 100}}></Image>
             </View>

        </ImageBackground>
        )
    }
}