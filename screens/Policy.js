import React, {useCallback } from 'react';
import { View, Text, Pressable, Linking, StyleSheet } from 'react-native';


const supportedURL = 'https://marynahaiduk.github.io';

const OpenURLButton = ({url, children}) => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  }, [url]);

  return (
      <Pressable
        onPress={handlePress}
        accessible={true}
        accessibilityLabel="Tap me!"
        accessibilityHint="Navigates to the Privacy Policy screen"
        style={styles.button}>
        <Text style={styles.footerText}>Privacy Policy</Text>
      </Pressable>
  )
};

const Policy = ({ navigation }) => {
  return (
    <>
      <View style={styles.content}>
        <OpenURLButton style={styles.footerText} url={supportedURL}>Open the Privacy Policy</OpenURLButton>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    paddingTop: 100,
  },
  footerText: {
    fontSize: 12,
    color: '#FFF',
    textAlign: 'center',
  }
});

export default Policy;
