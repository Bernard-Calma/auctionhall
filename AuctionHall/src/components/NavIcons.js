import { Pressable, Image, View } from "react-native";

export const NavIcon = (props) => {
    return(
        <View style = {{
            width: '20%',
        }}>
            <Pressable
            style = {{
                borderWidth: 1,
                borderRadius: 60,
                width: '50%',
            }}
            >
                <Image
                    source = {{
                        uri: props.imageFilePath
                    }}
                />
            </Pressable>
        </View>
        
    )
}