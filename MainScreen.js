import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight, Button, Systrace } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const MainScreen = ({ navigation }) => {
    const handleButtonPress = () => {
      navigation.navigate('Login');
    };
  
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.baseText}>Santa Barbara Living</Text>
          <Image
            source={{
              width: 100,
              height: 100,
              uri: "https://cdn-icons-png.flaticon.com/512/25/25694.png"
            }}
          />
        <Button 
        title="Tap to Begin" 
        onPress={handleButtonPress}
        color='#8A675D'
        fontFamily='AvenirNext'
        fontWeight='bold' />
      </SafeAreaView>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fee1f3',
      alignItems: 'center',
      justifyContent: 'center',
    },
    baseText: {
      fontFamily: 'AvenirNext-Bold',
      fontSize: 30,
      color: '#8A675D',
    }
  });

export default MainScreen
  