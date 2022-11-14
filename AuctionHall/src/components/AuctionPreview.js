import { Text } from "react-native"

export const AuctionPreview = (props) => {
    return(
        <Text>{props.auction.title}</Text>
    )
}