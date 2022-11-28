import { Image } from "react-native"

export const ImagePreview = (props) => {
    return  <Image
                style={props.style}
                source={{uri: `data:image/png;base64,${props.photo}`}}         
            />
}