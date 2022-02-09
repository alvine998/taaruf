import { View } from "react-native";
import React from 'react';
import Splash from "./src/pages/Splash";
import Intro from "./src/pages/Intro";
import Intro2 from "./src/pages/Intro2";
import Login from "./src/pages/Login";
import Register from "./src/pages/Register";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Home from "./src/pages/Home";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const stack = createStackNavigator();


const App = () => {
  return (
    // <SafeAreaProvider>
    //   <View>
    //     <Home />
    //   </View>
    // </SafeAreaProvider>
    <NavigationContainer>
      <stack.Navigator initialRouteName="splash" screenOptions={{headerShown:false}}>
        <stack.Screen name="splash" component={Splash}/>
        <stack.Screen name="intro" component={Intro}/>
        <stack.Screen name="intro2" component={Intro2}/>
        <stack.Screen name="login" component={Login}/>
        <stack.Screen name="register" component={Register}/>
        <stack.Screen name="home" component={Home}/>
      </stack.Navigator>
    </NavigationContainer>
  )
}

export default App;