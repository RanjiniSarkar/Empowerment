import React from 'react'
import ListScreen from  '../screens/ListScreen';
import SearchScreen from '../screens/SearchScreen';
import {createBottomTabNavigator} from 'react-navigation-tabs'

export const AppTabNavigator = createBottomTabNavigator({
Search :{
    screen : SearchScreen,
    navigationOptions:{
        tabBarLabel: "Search"
    },
ListScreen :{
    screen : ListScreen,
    navigationOptions:{
        tabBarLabel:'ListScreen'
    }
}
}
})