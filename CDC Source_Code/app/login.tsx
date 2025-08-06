import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { router } from 'expo-router';
import Colors from '@/constants/Colors';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { Mail, Lock, ArrowLeft } from 'lucide-react-native';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    let isValid = true;
    
    // Email validation
    if (!email) {
      setEmailError('Email is required');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Email is invalid');
      isValid = false;
    } else {
      setEmailError('');
    }
    
    // Password validation
    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    } else {
      setPasswordError('');
    }
    
    return isValid;
  };

  const handleLogin = () => {
    if (validateForm()) {
      setIsLoading(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsLoading(false);
        // Navigate to dashboard after successful login
        router.push('/(tabs)');
      }, 1500);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <ArrowLeft size={24} color={Colors.primary} />
        </TouchableOpacity>
        
        <View style={styles.header}>
          <Image
            source={{ uri: 'https://cdcconsultingpartners.com/wp-content/uploads/2021/10/CDC-Logo-1.png' }}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.title}>Welcome Back</Text>
          <Text style={styles.subtitle}>Sign in to continue your coaching journey</Text>
        </View>
        
        <View style={styles.form}>
          <Input
            label="Email"
            placeholder="Enter your email"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
            error={emailError}
            icon={<Mail size={20} color={Colors.mediumGray} />}
          />
          
          <Input
            label="Password"
            placeholder="Enter your password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            error={passwordError}
            icon={<Lock size={20} color={Colors.mediumGray} />}
          />
          
          <TouchableOpacity
            style={styles.forgotPassword}
            onPress={() => {/* Handle forgot password */}}
          >
            <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
          </TouchableOpacity>
          
          <Button
            title="Sign In"
            onPress={handleLogin}
            loading={isLoading}
            style={styles.button}
          />
          
          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>Don't have an account? </Text>
            <TouchableOpacity onPress={() => router.push('/register')}>
              <Text style={styles.signupLink}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 24,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 24,
    zIndex: 10,
  },
  header: {
    alignItems: 'center',
    marginTop: 80,
    marginBottom: 40,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 24,
  },
  title: {
    fontFamily: 'Inter-Bold',
    fontSize: 28,
    color: Colors.primary,
    marginBottom: 8,
  },
  subtitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: Colors.textSecondary,
    textAlign: 'center',
  },
  form: {
    width: '100%',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginBottom: 24,
  },
  forgotPasswordText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: Colors.primary,
  },
  button: {
    marginBottom: 24,
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  signupText: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: Colors.textSecondary,
  },
  signupLink: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: Colors.primary,
  },
});