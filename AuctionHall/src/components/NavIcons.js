import { Pressable, Image, View, StyleSheet } from "react-native";

export const NavIcon = (properties ) => {
    // console.log(properties.title, "Nav Icon", properties.imageFilePath, "Path")
    return(
        <View 
            style = {styles.container}
            >
            <Pressable 
                onPress={ properties.handleChangeView  }
                title = {properties.title}
                >
                <Image
                    style = {styles.icon}
                    source = {properties.imageFilePath}
                />
            </Pressable>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container: {
        width: '20%',
    },
    icon: {
        height: 40,
        width: 40,
        borderWidth: 1,
        borderRadius: 20,
    }
})
