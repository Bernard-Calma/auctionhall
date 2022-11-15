import { Text, View, StyleSheet } from "react-native"


export const MyAuctions = (props) => {
    // console.log("Auctions" ,props.auctions)
    return(
        <View style = {styles.container}>
            {
                props.auctions.length !== undefined ?
                <>{
                    props.auctions.map( (auction, index) => {
                        // console.log("Auctions: " ,auction.user.id === props.user.id)
                        if (auction.user.id === props.user.id) return <Text>{auction.title}</Text>
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
        flex: 1,
        borderWidth: 1,
        borderColor: 'red',
    },
})