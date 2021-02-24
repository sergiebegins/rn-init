/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
    Button,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



class App extends React.Component{
  constructor(props){
      super(props);
      this.state = {
        test:1
      }
  }

  artir(){
    this.setState({test:this.state.test+1})
  }

  render(){
    return(
        <View>
          <Text> {this.state.test}</Text>
          <Button onPress={
            ()=>{this.artir()}
          } title="Learn More" />
        </View>
    );
  }

}



export default App;
