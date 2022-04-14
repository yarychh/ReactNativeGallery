import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function header() {

  const styles = StyleSheet.create({
    logo: {
      fontSize: 30,
      fontFamily: "sans-serif",
      color: "#1A132F",
    },
    header: {
      width: "100%",
      height: "10vh",
      backgroundColor: "#61A4BC",
      padding: 0,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      borderBottomColor: "#5B7DB1",
      borderBottomWidth: 5
    },
  });
  return (
    <View nativeID='header' style={styles.header}>
        <Text onPress={() => document.location.reload()} style={styles.logo}>
          Gallery
        </Text>
    </View>
  )
}