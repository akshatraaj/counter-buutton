import { Text, View, StyleSheet,Button } from 'react-native';
import React,{Component} from 'react';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
     counter: 0,
     buttonColor: "red"
    };
  }
  componentDidMount(){}
  incrementCounter = () => {
    this.setState({ counter: this.state.counter + 1});
  };
  render(){
    return(
      <View style={{flex:1}}>
      <Text style={{marginTop: 50, marginLeft: 170}}>
      {this.state.counter}
      </Text>
      <Button title="Click Me" color="blue" onPress={this.incrementCounter}/>
      </View>
    );
  }
}