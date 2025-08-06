import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { router } from 'expo-router';
import Colors from '@/constants/Colors';
import Button from '@/components/Button';
import { ArrowRight } from 'lucide-react-native';

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{ uri: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg' }}
        style={styles.backgroundImage}
      >
        <View style={styles.overlay}>
          <View style={styles.content}>
            <Image
              source={{ uri: 'https://cdcconsultingpartners.com/wp-content/uploads/2021/10/CDC_logo_white-horizontal-1024x242.png' }}
              style={styles.logo}
              resizeMode="contain"
            />
            
            <View style={styles.textContainer}>
              <Text style={styles.title}>Leadership Coaching</Text>
              <Text style={styles.subtitle}>
                Personalized AI coaching to help you navigate workplace challenges and achieve your professional goals
              </Text>
            </View>
            
            <View style={styles.buttonContainer}>
              <Button 
                title="Get Started" 
                onPress={() => router.push('/register')}
                size="large"
                style={styles.button}
              />
              
              <TouchableOpacity
                style={styles.signInContainer}
                onPress={() => router.push('/login')}
              >
                <Text style={styles.signInText}>Already have an account? Sign In</Text>
                <ArrowRight size={16} color={Colors.white} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(11, 57, 84, 0.85)', // Primary color with opacity
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    width: '85%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 260,
    height: 80,
    marginBottom: 40,
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontFamily: 'Inter-Bold',
    fontSize: 32,
    color: Colors.white,
    marginBottom: 16,
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: Colors.white,
    textAlign: 'center',
    lineHeight: 24,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: {
    width: '100%',
    marginBottom: 24,
    backgroundColor: Colors.accent,
  },
  signInContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  signInText: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: Colors.white,
    marginRight: 8,
  },
});