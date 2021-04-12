import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import navigationStrings from "../constants/navigationStrings";
import DrawerRoutes from "./DrawerRoutes";
import { ChatInbox } from "../Screens";

const Stack = createStackNavigator();

export default function MainStack() {

    return (
        <React.Fragment>


            <Stack.Screen name={navigationStrings.DRAWER_ROUTES} component={DrawerRoutes}
                options={{
                    headerShown: false
                }} />
                
            <Stack.Screen name={navigationStrings.CHAT_INBOX} component={ChatInbox}
                options={{
                    headerShown: false
                }} />


        </React.Fragment>
    )

}