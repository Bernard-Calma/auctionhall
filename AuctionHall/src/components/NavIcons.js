import { Pressable, Image, View } from "react-native";
import { useState } from "react";

export const NavIcon = (properties ) => {
    
    
    // console.log(properties.title, "Nav Icon", properties.imageFilePath, "Path")
    return(
        <View style = {{
            width: '20%',
        }}>
            <Pressable 
                onPress={properties.handlePress}
                title = {properties.title}
                >
                <Image
                    style = {{
                        height: 40,
                        width: '50%',
                    }}
                    source = {properties.imageFilePath}
                />
            </Pressable>
        </View>
        
    )
}