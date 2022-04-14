import axios from 'axios';
import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'
import Card from '../components/card'

export class Home extends Component {
    state = {
        imgData: [],
    }

    client = 'esMr3YP0hEYEowSArI00hWKWhUcfj24e1WHznqbV17c';
    endpoint = `https://api.unsplash.com/photos/?client_id=${this.client}`;

    
    componentDidMount(){
        axios.get(`${this.endpoint}`)
            .then((response)=> {
                
                let imgData: Array<any> = response.data.map((item : any) => {
                    return {imgUrl: item.urls.regular,
                        author: item.user.name,
                        title: item.user.bio}
                });             
        
                this.setState({
                    ...this.state,
                    imgData,
                })
            })
            .catch((e)=>console.error(e))
    }

   
  render() {      
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hello and welcome to React Gallery!</Text>
            <ScrollView contentContainerStyle={styles.pics}>
                {this.state.imgData.map((data)=>{
                    return (<Card key={data.author} data={data}/>)
                })}
            </ScrollView>
        </View>
    )
  }
}

export default Home;

const styles = StyleSheet.create({
    container: {
        padding: 10,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        backgroundColor: "#F7E2E2"
    },
    text: {
        fontSize: 20,
        paddingBottom: 10
    },
    pics:{
        alignSelf: "center",
        padding: 20,
        paddingHorizontal: 0,
        width: "95%",
        border: "2px solid #5B7DB1",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        alignItems: "center"
    }
})