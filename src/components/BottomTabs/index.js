import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Icon } from 'react-native-elements';
import normalize from 'react-native-normalize';
import Chat from '../../pages/Chat';
import Home from '../../pages/Home';
import Love from '../../pages/Love';

const Tab = createBottomTabNavigator();

const BottomTabs = (props) => {
    return (
        <Tab.Navigator initialRouteName='home' screenOptions={{ headerShown: false }}>
            <Tab.Screen name='Home' component={Home} options={{tabBarIcon:(()=><Icon type='font-awesome-5' name='home' color={"#fc77a3"} size={normalize(24)} />), tabBarLabel:"Home", tabBarLabelStyle:{color:"#fc77a3", fontSize:normalize(20)}}} />
            <Tab.Screen name='Chat' component={Chat} options={{tabBarIcon:(()=><Icon type='font-awesome' name='comment' color={"#fc77a3"} size={normalize(24)}/>), tabBarLabel:"Chat", tabBarLabelStyle:{color:"#fc77a3", fontSize:normalize(20)}}}/>
            <Tab.Screen name='Love' component={Love} options={{tabBarIcon:(()=><Icon type='font-awesome' name='heart' color={"#fc77a3"} size={normalize(24)}/>), tabBarLabel:"Love", tabBarLabelStyle:{color:"#fc77a3", fontSize:normalize(20)}}}/>
            <Tab.Screen name='Akun' component={Home} options={{tabBarIcon:(()=><Icon type='font-awesome' name='user' color={"#fc77a3"} size={normalize(24)}/>), tabBarLabel:"Akun", tabBarLabelStyle:{color:"#fc77a3", fontSize:normalize(20)}}}/>
        </Tab.Navigator>
    )
}

export default BottomTabs;