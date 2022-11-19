import { Image } from "react-native"

export const ImagePreview = (props) => {
    return  <Image
                style={props.style}
                source={{uri: props.uri}}         
            />

}