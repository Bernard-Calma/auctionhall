import { TextInput } from "react-native"

export const SearchBar = () => {
    return (
        <TextInput 
            style = {{
                borderWidth: 1,
                borderRadius: 10,
                height: '5%',
                margin: 10,
                backgroundColor: 'lightgray',
            }}
        />
    )
}

