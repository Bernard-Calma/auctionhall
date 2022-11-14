import { useState } from "react";
import { View } from "react-native";
import { NavIcon } from "./NavIcons";


export const TopNavBar = (props) => {
    const [icons, setIcons] = useState([{
        title: 'filter',
        path: require(`../assets/images/filter.png`),
    },
    {
        title: 'sort',
        path: require("../assets/images/sort.png"),
    },
    {
        title: 'random',
        path: require("../assets/images/random.png"),
    },
    {
        title: 'newest',
        path: require("../assets/images/newest.png"),
    },
    {
        title: 'earliest',
        path: require("../assets/images/earliest.png"),
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
                marginBottom: 10,
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

