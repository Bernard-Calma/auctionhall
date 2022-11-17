import { useState } from "react";
import { SafeAreaView, Text, View, StyleSheet, TextInput, Button, Platform, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard } from "react-native";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import DateTimePicker from "@react-native-community/datetimepicker";

export const AddAuction = (props) => {
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(true);
    const [text, setText] = useState('empty');

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate)

        let tempDate = new Date(currentDate);
        let fDate = `${tempDate.getDate()} / ${tempDate.getMonth() + 1} / ${tempDate.getFullYear()}`;
        // let fTime = `Hours: ${tempDate.getHours()} | Minutes: ${tempDate.getMinutes()}`;
        // setText(`${fDate} \n ${fTime}`)
        // console.log(`${fDate} \n ${fTime}`)
        console.log(fDate)
    }

    return(
        <KeyboardAvoidingView
            behavior = { Platform.OS === "ios" ? "padding" : "height"}
            style = {styles.keyboardAvoidingView}
            keyboardShould
        >
            <View style = {styles.inner}>
                <View style = {styles.photoContainer}>
                    <View style = {styles.selectPhotoContainer}>
                        <Text style = {styles.selectPhoto}>Use Camera</Text>
                    </View>
                    <View style = {styles.selectPhotoContainer}>
                        <Text style = {styles.selectPhoto}>Upload Photo</Text>
                    </View>
                    <Text style = {styles.addYourPhoto}>(Add your photo)</Text>
                </View>
                <View style = {styles.descriptionContainer}>
                    <View style = {styles.titleContainer}>
                        <Text style = {styles.inputText}>Title</Text>
                        <TextInput
                            style = {styles.titleInput}
                        />
                    </View>
                    <View style = {styles.titleContainer}>
                        <Text style = {styles.inputText}>Starting Price</Text>
                        <TextInput
                            keyboardType="number-pad"
                            style = {styles.priceInput}
                        />
                    </View>
                    
                    <View style = {styles.titleContainer}>
                        <Text style = {styles.inputText}>Price Increment</Text>
                        <TextInput
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
                            onChange={onChange}
                        />
                    </View>

                    <View>
                        <Text style = {styles.descriptionText}>Description</Text>
                            <TextInput 
                                style = {styles.descriptionInput}
                                multiline = {true}
                            />
                    </View>
                    <View style = {{marginBottom: 55}}>
                        <Button 
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