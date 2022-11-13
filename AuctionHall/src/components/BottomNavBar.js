import { useLinkProps } from "@react-navigation/native";
import { useState } from "react";
import { View } from "react-native";
import { NavIcon } from "./NavIcons";

export const BottomNavBar = (props) => {
    const [icons, setIcons] = useState([{
        title: 'home',
        path: require("../assets/images/home.png"),
    },
    {
        title: 'auctions',
        path: require("../assets/images/auctions.png"),
    },
    {
        title: 'Add Auction',
        path: require("../assets/images/camera.png"),
    },
    {
        title: 'messages',
        path: require("../assets/images/messages.png"),
    },
    {
        title: 'profile',
        path: require("../assets/images/profile.png"),
    },
    ])
    // console.log(icons[0].title, "title")
    // console.log(icons[0].path, "path")
    return(
        <View
            style = {{
                display: 'flex',
                flexDirection: "row",
                justifyContent: "space-evenly",
            }}
        >
            {
                icons.map((icon, index) => {
                    return(
                        < NavIcon 
                            key = {index}
                            title = {icon.title}
                            imageFilePath = {icon.path}
                            handlePress = {props.handlePress}
                        />
                    )
                })
            }
        </View>
        
    )
}

