import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Button, FlatList, Image, TextInput } from 'react-native';
import * as ImagePicker from 'expo-image-picker'

const HomeScreen = ( {navigation} ) => {

  const [posts, setPosts] = useState([]);

  const handleMakePost = (newPost) => {
    const updatedPost = { ...newPost, image: newPost.image.uri };
    setPosts(prevPosts => [newPost, ...prevPosts]);
    navigation.navigate('Post')
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.postContainer}>
            {item.image && <Image source={{ uri: item.image }} style={styles.postImage} />}
            <Text style={styles.postCaption}>{item.caption}</Text>
          </View>
        )}
        ListEmptyComponent={() => (
          <Text style={styles.emptyText}>No posts yet</Text>
        )}
        contentContainerStyle={styles.postListContent}
      />

      <TouchableOpacity style={styles.postButton} onPress={() => navigation.navigate('Post', { onMakePost: handleMakePost })}>
        <Text style={styles.buttonText}>Make a Post</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fee1f3',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
    },
    title: {
      fontFamily: 'AvenirNext-Bold',
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 16,
      color: '#8A675D',
    },
    postButton: {
      position: 'absolute',
      bottom: 70,
      alignItems: 'center',
    },
    buttonText: {
      fontFamily: 'AvenirNext-Bold',
      color: '#8A675D',
      textAlign: 'center',
      fontSize: 20,
    }
  });

export default HomeScreen;