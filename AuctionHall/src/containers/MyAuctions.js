import { StyleSheet, View } from "react-native"
import { UserAuction } from "../components/UserAuction"

export const MyAuctions = (props) => {
    // console.log("Auctions" ,props.auctions)
    return(
        <View style = {styles.container}>
            {
                props.auctions.length !== undefined ?
                <>{
                    props.auctions.map( (auction, index) => {
                        // console.log("Auctions: " ,auction.user.id === props.user.id)
                        if (auction.user.id === props.user.id)
                        return <UserAuction key = {index} auction = {auction} />
                    })
                }</>
                :
                <>
                </>
                
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // borderWidth: 1,
        // borderColor: 'red',
    },
})