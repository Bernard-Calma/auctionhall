import { View } from "react-native";
import { NavIcon } from "./NavIcons";


export const BottomNavBar = () => {
    return(
        <View
            style = {{
                display: 'flex',
                flexDirection: "row",
                justifyContent: "space-evenly"
            }}
        >
            < NavIcon title = {"home"}/>
            < NavIcon title = {"myAuctions"}/>
            < NavIcon title = {"auction"}/>
            < NavIcon title = {"messages"}/>
            < NavIcon title = {"profile"}/>
        </View>
        
    )
}

