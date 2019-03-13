import React from 'react';
import { View } from 'react-native';
import { WebView } from "react-native-webview";

function getRootUrl(url) {
  return url.toString().replace(/^(.*\/\/[^\/?#]*).*$/, "$1");
}

export default class WebViewScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = { visible: true };
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: getRootUrl(navigation.getParam('public_url', 'A Nested Details Screen'))
    };
  };

  render() {
    const { navigation } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <WebView
          cacheEnabled={true}
          scrollEnabled={true}
          useWebKit={true}
          source={{ uri: navigation.getParam('public_url', 'A Nested Details Screen') }}
          style={{ marginTop: 20, height: 300, flex: 1 }}
        />
      </View>
    );
  }
}
