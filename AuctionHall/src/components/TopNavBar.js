import { View } from "react-native";
import { NavIcon } from "./NavIcons";


export const TopNavBar = () => {
    return(
        <View
            style = {{
                display: 'flex',
                flexDirection: "row",
                justifyContent: "space-evenly",
            }}
        >
            < NavIcon title = {"filter"}/>
            < NavIcon title = {"sort"}/>
            < NavIcon title = {"random"}/>
            < NavIcon title = {"newest"}/>
            < NavIcon title = {"soonest"}/>
        </View>
        
    )
}

