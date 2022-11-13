import { SafeAreaView, Text } from "react-native";

export const AddAuction = (props) => {
    return(
        <SafeAreaView>
            <Text onPress={props.handlePress}> 🔙 </Text>
            <Text>Add Auction</Text>
        </SafeAreaView>
    )
}