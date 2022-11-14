import { View, Text } from "react-native"


export const ShowAuction = (props) => {
    return(
        <View>
            <Text>{props.auction.title}</Text>
        </View>
    )
}