import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import dynamicLinks from '@react-native-firebase/dynamic-links';

const App = () => {
  const [generatelink, setGenerateLink] = useState('');
  async function buildLink() {
    const buildLink = await dynamicLinks().buildLink({
      link: 'https://invertase.io',
      domainUriPrefix: 'https://xyz.page.link',
      analytics: {
        campaign: 'banner',
      },
    });

    // eslint-disable-next-line no-undef
    return link;
  }

  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1, justifyContent: 'center', alignContent: 'center'}}>
      <Text>{generatelink}</Text>
      <TouchableOpacity
        // eslint-disable-next-line react-native/no-inline-styles
        style={{width: 200, height: 50, borderRadius: 10, borderWidth: 1}}>
        <Text>Generate Deep Link</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
