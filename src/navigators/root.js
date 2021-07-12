import React from "react";
import { color } from '../resource';
import LoginScreen from '../LoginScreen';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const Root = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: color.primary,
            shadowColor: "transparent",
            shadowRadius: 0,
            borderBottomWidth: 0,
            elevation: 0,
            shadowOffset: {
                height: 0,
            },       
          }
        }}
      >
        <Stack.Screen name=" " component={LoginScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Root;
