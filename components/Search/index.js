import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from "react-native";

export default function Search({search, val, setVal}) {
    return (
        <View>
            <TextInput
            style={{
            marginTop:"10%",
            backgroundColor: 'white',
            color: 'darkred',
            borderRadius: 10,
            width: 150,
            paddingLeft: 10,
            fontSize: 16,
            opacity: 0.8}}
            value={val}
            onChangeText = {(text)=> setVal(text)}
            placeholder = 'enter smth'    
            />
            <TouchableOpacity
                onPress = {search}
                style={{paddingLeft: '12%',
                paddingTop: 10}}
            >
                <Text
                style={{fontSize: 20,
                color: 'white',
                fontWeight: 'bold',
                }}>CLICK</Text>
            </TouchableOpacity>
        </View>
    )
}
