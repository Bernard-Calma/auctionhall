import { useEffect, useState } from "react"
import { Text, View } from "react-native"


export const Countdown = (props) => {
  console.log("Bid Countdown Starts")
  // console.log("COUNTDOWN - auctionStart: ", props.auctionStart)
  // console.log("BIDCOUNTDOWN: ", props.bidCountdown)
  let [timer, setTimer] = useState(10)
  // console.log("COUNTDOWN - timer: ", timer)
  useEffect( () => {  
    const interval = setInterval(() => {
      console.log("Bid Countdown : ", props.bidCountdown)
      if (props.bidCountdown && timer > 0) {
        console.log("Timer going down")
        setTimer(timer-=1)
      }
      else if (timer === 0){
        console.log("Bid Countdown Stops")
        props.setAuctionStart()
        props.setBidCountdown()
      }

    },1000)
    return () => {
        clearInterval(interval);
    }
  }, []) 
  return(
    <View>
        <Text style = {props.style}>{timer}</Text>
    </View>
  )  
}