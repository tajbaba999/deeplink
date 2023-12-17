/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import dynamicLinks from '@react-native-firebase/dynamic-links';
import Clipboard from '@react-native-clipboard/clipboard';

const App = () => {
  const [generatelink, setGenerateLink] = useState('');

  const buildLink = async () => {
    try {
      const link = await dynamicLinks().buildLink({
        link: 'https://play.google.com/store/apps/details?id=com.hicircle.circle&hl=en_IN&gl=US',
        domainUriPrefix: 'https://hicircle.page.link',
        analytics: {
          campaign: 'banner',
        },
      });
      console.log('Deep link', link);
      // eslint-disable-next-line no-undef
      setGenerateLink(link);
    } catch (error) {
      console.error('Error generateing link ', error);
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>{generatelink}</Text>
      <TouchableOpacity
        style={{
          width: 200,
          height: 50,
          borderRadius: 10,
          borderColor: 'white',
          borderWidth: 1,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 50,
        }}
        onPress={() => {
          buildLink();
        }}>
        <Text>Generate Deep Link</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          width: 200,
          height: 50,
          borderRadius: 10,
          borderColor: 'white',
          borderWidth: 1,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 50,
        }}
        onPress={() => {
          Clipboard.setString(generatelink);
        }}>
        <Text>Copy Deep Link</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
