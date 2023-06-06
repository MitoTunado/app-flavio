import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/home/home-app";
import { FrontEnd } from "../screens/logins/front-end/front-end";
import { DataBase } from "../screens/logins/data-base/data-base";
import { BackEnd } from "../screens/logins/back-end/back-end";
const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() { 
  return (
    <Navigator screenOptions={{ headerShown: false }}> 
      <Screen
      name="home"
      component={Home}
      /> 
      <Screen
        name="FrontEnd"
        component={FrontEnd}
      />
      <Screen
        name="DataBase"
        component={DataBase}
      />
      <Screen
        name="BackEnd"
        component={BackEnd}
      />
    </Navigator>
  )
}