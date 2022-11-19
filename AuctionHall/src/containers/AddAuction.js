import { useState } from "react";
import { Text, View, StyleSheet, TextInput, Button, Platform, KeyboardAvoidingView, Pressable, Image } from "react-native";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import DateTimePicker from "@react-native-community/datetimepicker";

// Database
// const backendURL = "https://auctionhall-back-end.herokuapp.com/"
// Database Development
const backendURL = "http://localhost:8000/"

const auctionRoute = "api/v1/auctions/"

export const AddAuction = ({user}) => {
    // console.log(user.user.user.id)
    const [body, setbody] = useState({
        user: user.user.user.id,
        auction_date: new Date(),
        title: "test",
        description: "",
        price: 0,
        price_increment: 0,
        photo: "",

    })
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(true);
    const [text, setText] = useState('empty');
    const [selectedImage, setSelectedImage] = useState()

    const onChangeDate = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        let tempDate = new Date(currentDate);
        let fDate = `${tempDate.getDate()} / ${tempDate.getMonth() + 1} / ${tempDate.getFullYear()}`;
        // let fTime = `Hours: ${tempDate.getHours()} | Minutes: ${tempDate.getMinutes()}`;
        // setText(`${fDate} \n ${fTime}`)
        // console.log(`${fDate} \n ${fTime}`)
        setbody({...body, auction_date: tempDate})
        console.log(body)
        
    }
    const handleChangeText = (text, name) => {
        setbody({...body, [name]: text})
        // console.log("Body:  ", body)
        // console.log("TEXT:  ", text)
        // console.log("NAME:  ", name)
        // console.log("PHOTO: ", body.photo)
    }

    const uploadImageFromLibrary = () => launchImageLibrary({mediaType: 'photo'}, (assets) => {
        console.log(assets.assets[0].uri)
        setbody({...body, photo: assets.assets[0].uri})
        // setbody({...body, photo: assets})
        // console.log("Body: ", body)
    })
    // console.log(selectedImage.assets[0])

    const handleAddAuction = () => {
        console.log("Add Auction")
        console.log("Body ", body.photo)
        fetch(`${backendURL}${auctionRoute}`, {
            method: "POST",
            credentials: "include",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json"
            },
        })
    }
    
    return(
        <KeyboardAvoidingView
            behavior = { Platform.OS === "ios" ? "padding" : "height"}
            style = {styles.keyboardAvoidingView}
            keyboardShould
        >
            <View style = {styles.inner}>  
                { body.photo === ""
                    ?
                    <View style = {styles.photoContainer}>
                        <View style = {styles.selectPhotoContainer}>
                            <Text style = {styles.selectPhoto}>Use Camera</Text>
                        </View>
                        <View style = {styles.selectPhotoContainer}>
                            <Pressable
                                onPress={()=>uploadImageFromLibrary()}
                            >
                                <Text style = {styles.selectPhoto}>Upload Photo</Text>
                            </Pressable>
                        </View>
                        <Text style = {styles.addYourPhoto}>(Add your photo)</Text>
                        </View>
                    :
                    <>  
                        <Image
                            style = {styles.photo} 
                            source={{uri: body.photo}}
                        />
                    </>
                }
                <View style = {styles.descriptionContainer}>
                    <View style = {styles.titleContainer}>
                        <Text style = {styles.inputText}>Title</Text>
                        <TextInput
                            onChangeText = {(text) => handleChangeText(text, "title")}
                            style = {styles.titleInput}
                        />
                    </View>
                    <View style = {styles.titleContainer}>
                        <Text style = {styles.inputText}>Starting Price</Text>
                        <TextInput
                            onChangeText = {(text) => handleChangeText(text, "price")}
                            keyboardType="number-pad"
                            style = {styles.priceInput}
                        />
                    </View>
                    
                    <View style = {styles.titleContainer}>
                        <Text style = {styles.inputText}>Price Increment</Text>
                        <TextInput
                            onChangeText = {(text) => handleChangeText(text, "price_increment")}
                            keyboardType="number-pad"
                            style = {styles.priceIncrementInput}
                        />
                    </View>

                    <View style = {styles.titleContainer}>
                        <Text style = {styles.inputText}>Auction Date</Text>
                        <DateTimePicker 
                            testID="dateTimePicker"
                            value={date}
                            mode={mode}
                            is24Hour={true}
                            display='default'
                            onChange={onChangeDate}
                        />
                    </View>

                    <View>
                        <Text style = {styles.descriptionText}>Description</Text>
                            <TextInput 
                                onChangeText = {(text) => handleChangeText(text, "description")}
                                style = {styles.descriptionInput}
                                multiline = {true}
                            />
                    </View>
                    <View style = {{marginBottom: 100}}>
                        <Button 
                            onPress = {handleAddAuction}
                            title = "Post Auction"
                        />
                    </View>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    addYourPhoto: {
        textAlign: 'center',
        marginBottom: 20,
        fontFamily: "copperplate"
    },
    descriptionContainer: {
        // borderWidth: 1,
        // borderColor: "blue",
    },
    descriptionInput: {
      borderWidth: 1,
      borderColor: "black",
      margin: 10,
      height: 150,
    },
    descriptionText: {
        fontSize: 20,
        marginLeft: 15,
        fontFamily: "copperplate"
    }, 
    inputText: {
        fontSize: 20,
        margin: 5,
        // borderWidth: 1,
        // borderColor: 'green'
        fontFamily: "copperplate"
    },
    keyboardAvoidingView: {
        flex: 1,
    },
    // Container for text and input boxes.
    titleContainer: {
        flexDirection: "row",
        margin: 10,
    },
    titleInput: {
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 20,
        flex: 1,
        paddingLeft: 20,
    }, 
    photoContainer: {
        // borderColor: "red",
        // borderWidth: 1,
        paddingTop: 20, 
    },
    photo: {
        // borderWidth: 1,
        // borderColor: 'red',
        width: 100,
        height: 100,
        alignSelf: "center"
    },
    priceInput: {
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 20,
        width: 150,
        paddingLeft: 20,
    },
    priceIncrementInput: {
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 20,
        width: 122,
        paddingLeft: 20,
    },
    selectPhotoContainer: {
        borderWidth: 1,
        borderRadius: 20,
        margin: 10,
        padding: 5,
    },
    selectPhoto: {
        fontSize: 20,
        fontWeight: "500",
        textAlign: "center",
        fontFamily: "copperplate"
    },
})