import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput, Button } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const PostComponent = ({ navigation, route }) => {
    const [caption, setCaption] = useState('');
    const [image, setImage] = useState(null);
    const { onMakePost } = route.params || {};


    const handleImageSelection = async () => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!permissionResult.granted) {
          alert('Permission to access the gallery is required!');
          return;
        }
    
        const imageResult = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [1, 1],
          quality: 1,
        });
    
        if (!imageResult.canceled) {
          setImage(imageResult.uri);
        }
      };

    const handlePost = () => {
        // Handle logic for posting the new post...
    
        // Create a new post object
        const newPost = {
            image,
            caption,
          };
    
        // Call the onMakePost function passed from the HomeScreen to add the new post
        if (route.params.onMakePost) {
            route.params.onMakePost(newPost);
        }
    
        // Go back to the HomeScreen
        navigation.goBack();
      };
  
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Make a New Post</Text>
          <TouchableOpacity style={styles.imageContainer} onPress={handleImageSelection}>
            {image ? (
              <Image source={{ uri: image }} style={styles.image} />
            ) : (
              <Text style={styles.selectImageText}>Select Image</Text>
            )}
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            placeholder="Enter caption"
            value={caption}
            onChangeText={setCaption}
          />
          <TouchableOpacity style={styles.postButton} onPress={handlePost}>
            <Text style={styles.buttonText}>Post</Text>
          </TouchableOpacity>
        </View>
      );
    };
  
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 16,
          backgroundColor: '#fee1f3',
        },
        title: {
          fontSize: 24,
          fontWeight: 'bold',
          marginBottom: 16,
          color: '#8A675D',
        },
        input: {
          width: '100%',
          height: 40,
          backgroundColor: 'white',
          marginBottom: 16,
          paddingHorizontal: 10,
          borderWidth: 1,
          borderColor: '#8A675D',
        },
        postButton: {
          width: '50%',
          height: 40,
          backgroundColor: '#8A675D',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 4,
        },
        buttonText: {
          color: 'white',
          fontSize: 16,
          fontWeight: 'bold',
        },
      });

export default PostComponent;
