import { useState } from "react"
import { Text, View } from "react-native"


export const Countdown = (props) => {
    let [timer, setTimer] = useState(10)
    setTimeout(() => {
        if (props.auctionStart && timer > 0) setTimer(timer-=1)
    },1000)
  return(
    <View>
        <Text>{timer}</Text>
    </View>
  )  
}