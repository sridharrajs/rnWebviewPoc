import React, { Component } from 'react';

import {
  Alert,
  Button,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';


const styles = StyleSheet.create({
  flatList: {
    paddingTop: 50
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url:''
    };
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
       <TextInput
          style={{
            marginTop: 20
          }}
          onChangeText={(value)=>{
            this.setState({
              url:value.toLowerCase()
            });
          }}
          placeholder={'Enter any url with http://'}
          value={this.state.url}
          editable={true}
        />
       <Button
        style={{
          marginTop:500
        }}
        title="Press Me"
        onPress={()=>{
          return navigate('WebViewScreen', {
            public_url: this.state.url
          });
        }}
       />
      </View>
    );
  }
}
