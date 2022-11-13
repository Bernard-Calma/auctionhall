import { createStackNavigator } from "@react-navigation/stack";
import Login from "../containers/Login";

const Stack = createStackNavigator();

const MainNav = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name = "Login" component={Login} screenOptions = {{headerShown: false}}/>
        </Stack.Navigator>
    )
}

export default MainNav