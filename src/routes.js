import React from "react"
import { createBottomTabNavigator } from "react-navigation-tabs"
import { createAppContainer } from "react-navigation"

import Euro from "./pages/Euro"
import Dolar from "./pages/Dolar"

const bottomTabNavigator = createBottomTabNavigator({
    Euro, 
    Dolar
},
    {
        tabBarOptions: {
            labelStyle: {
                fontSize: 30
            },
            activeTintColor: "#fff",
            activeBackgroundColor: "#2ecc71"
        }
    }
)

export default createAppContainer(bottomTabNavigator)
