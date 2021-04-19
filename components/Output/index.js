import React from 'react'
import { View, Text, Image, ScrollView} from 'react-native';

export default function Output({data}) {
    return (
        <ScrollView>
            {data && data.length != 0 ?
            data.map((el, index)=>(
                <View key ={index}>
                    <Image 
                    style={{width: 350, height: 200}}
                    source={{uri: el?.images.original.url}}/>
                    <Text>{el.title}</Text>
                </View>
            ))
            :<Text
            style={{opacity: 0.6,
            color: 'white',
            paddingTop: 10}}>empty</Text>}
            </ScrollView>
    )
}
