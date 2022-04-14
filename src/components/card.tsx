import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableHighlight, Image } from 'react-native'
import React from 'react'

export default function card(props: any) {


    const navigation = useNavigation();

    const styles = StyleSheet.create({
        container: {
            margin: 10,
            "min-width": 350,
            height: "37vw",
            position: "relative",
            borderRadius: 3,
            overflow: "hidden",
        },
        img: {
            height: '100%'
        },
        card: {
            padding: 2,
            backgroundColor: "rgba(256, 256, 256, .3)",
            borderRadius: 3
        },
        "description-box":{
            position: "absolute",
            bottom: '0',
            borderTopRightRadius: 3,
            borderBottomRightRadius: 3,
            backgroundColor: "rgba(256, 256, 256, .3)",
            padding: 5,
            width: "65%",
            maxHeight: "20%"
          },
          "description-text":{
            fontWeight: '300'
          }
    })

  return (
    <TouchableHighlight onPress={()=> navigation.navigate('Picture',{url :props.data.imgUrl, description: props.data.title, author: props.data.author})}>
        <View style={styles.container} >
            <Image source={{uri: props.data.imgUrl}} style={styles.img}/>
            <View style={styles["description-box"]}>
                <Text style={styles.card}>Author: {props.data.author}</Text>
                <Text style={styles["description-text"]}>{props.data.title}</Text>
            </View>
        </View>
    </TouchableHighlight> 
  )
}