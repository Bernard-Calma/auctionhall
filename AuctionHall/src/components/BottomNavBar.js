import { useState } from "react";
import { View } from "react-native";
import { NavIcon } from "./NavIcons";

export const BottomNavBar = (props) => {
    const [icons, setIcons] = useState([{
        title: 'main',
        path: require("../assets/images/home.png"),
    },
    {
        title: 'myAuctions',
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
                flexDirection: "row",
                justifyContent: "space-between",
                marginLeft: 20,
                marginTop: 10,
            }}
        >
            {
                icons.map((icon, index) => {
                    return(
                        < NavIcon 
                            getAuctions = {() => props.getAuctions}
                            key = {index}
                            title = {icon.title}
                            imageFilePath = {icon.path}
                            handleChangeView = {props.handleChangeView}
                        />
                    )
                })
            }
        </View>
        
    )
}

