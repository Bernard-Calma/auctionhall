import { Image, StyleSheet } from "react-native"

export const AuctionPreview = (props) => {
    // console.log(props.auction.photo)
    return(
        <Image 
            style = {styles.photo}
            source={{uri: `data:image/png;base64,${props.auction.photo}`}}
        />
    )
}

const styles = StyleSheet.create({
    photo: {
        // borderWidth: 1,
        // borderColor: 'yellow',
        flex: 1,
    }
})