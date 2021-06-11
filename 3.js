import React from "react";
import { Text, View } from "react-native";
import axios from "axios";99

export default class Meteorscreen extends React.Component {
  constructor(){
    super();
    this.state={
      meteors:{}
    }
  }
  getMeteors= ()=>{
     axios
      .get("https://api.nasa.gov/neo/rest/v1/feed?api_key=w61GVnXhdKg0GDhegYzzhUffxuDhGAx19OJJXa9l")
      .then((responce) => {
        this.setState({
          meteors: responce.data,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  render() {
    if (this.state.meteors.key) {
      
    } else {
      
    }
    return (

      <View>
        <Text>Meteor screen</Text>
      </View>
    );
  }
}
