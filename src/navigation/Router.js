import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import GuestsScreen from "../screens/Guests";

import HomeTabNavigator from "./HomeTabNavigator";

const Stack = createStackNavigator();

const Router = (props) => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name={"Home"}
                    component={HomeTabNavigator}
                    options={{
                        headerShown: false,
                    }}
                />

                <Stack.Screen
                    name={"Destination Search"}
                    component={GuestsScreen}
                    options={{
                        title: "Search your destination"
                    }}
                />

                <Stack.Screen
                    name={"Guests"}
                    component={GuestsScreen}
                    options={{
                        title: "How many people?"
                    }}
                />

                <Stack.Screen
                    name={"Post"}
                    component={GuestsScreen}
                    options={{
                        title: "Accommodation"
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Router;