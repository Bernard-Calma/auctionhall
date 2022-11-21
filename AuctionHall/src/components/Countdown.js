import { useState } from "react"
import { Text, View } from "react-native"


export const Countdown = (props) => {
    let [timer, setTimer] = useState(10)

    const countdown = setTimeout(() => {
        if (props.auctionStart && timer > 0) setTimer(timer-=1)
        else clearTimeout(countdown)
    },1000)

    
  return(
    <View>
        <Text style = {props.style}>{timer}</Text>
    </View>
  )  
}