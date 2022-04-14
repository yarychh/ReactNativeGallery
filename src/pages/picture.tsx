import { View, Text, Dimensions, TouchableHighlight, StyleSheet, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export default function Picture(props: any) {
  console.log(props);
  
  const naigation = useNavigation();
  const deviceHeight = Dimensions.get('window').height;
  const headerHeight = document.getElementById("header")?.offsetHeight

  
  

  const styles = StyleSheet.create({
    container:{
      height: (headerHeight  ? (deviceHeight - headerHeight): "auto"),
      width: "100%",
      backgroundColor: "#F7E2E2"
    },
    image:{
      height: "100%",
      resizeMode:"contain"
    },
    "description-box":{
      position: "absolute",
      top: 20,
      right: 20,
      borderRadius: 3,
      backgroundColor: "rgba(256, 256, 256, .6)",
      padding: 5,
      width: "20vw",
    },
    "description-text":{
      fontWeight: "300"
    },
    card:{
      padding: 2,
            backgroundColor: "rgba(256, 256, 256, .7)",
            borderRadius: 3
    }
  })  
  
  return (
    <TouchableHighlight onPress={()=>{ naigation.navigate("Home", {fromUrl: props.route.params.url}) }}>
      <View style={styles.container}>
          <Image source={props.route.params.url} style={styles.image}/>
          <View style={styles["description-box"]}>
                <Text style={styles.card}>Author: {props.route.params.author}</Text>
                <Text style={styles["description-text"]}>{props.route.params.description}</Text>
            </View>
      </View>
    </TouchableHighlight>
  )
}