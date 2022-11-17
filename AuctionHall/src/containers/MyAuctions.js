import { StyleSheet, Pressable, View } from "react-native"
import { UserAuction } from "../components/UserAuction"

export const MyAuctions = (props) => {
    // console.log("Auctions" ,props.auctions)
    return(
        <View 

            style = {styles.container}>
            {
                props.auctions.length !== undefined ?
                <>{
                    props.auctions.map( (auction, index) => {
                        // console.log("Auctions: " ,auction.user.id === props.user.id)
                        if (auction.user.id === props.user.id)
                        return (
                            <Pressable
                                key = {index} 
                                onPress = {() => props.handleShowAuction(auction)}
                            >
                                <UserAuction 
                                    getAuctions = {props.getAuctions}
                                    auction = {auction} 
                                />
                            </Pressable>

                        )
                    })
                }</>
                :
                <>
                </>
                
            }
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        // borderWidth: 1,
        // borderColor: 'red',
    },
})