import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { router } from 'expo-router';
import Colors from '@/constants/Colors';
import Input from '@/components/Input';
import Button from '@/components/Button';
import { Mail, Lock, User, Building, ArrowLeft, Check } from 'lucide-react-native';

export default function RegisterScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [password, setPassword] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [termsError, setTermsError] = useState('');
  
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    let isValid = true;
    
    // Name validation
    if (!name.trim()) {
      setNameError('Name is required');
      isValid = false;
    } else {
      setNameError('');
    }
    
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
    } else if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters');
      isValid = false;
    } else {
      setPasswordError('');
    }
    
    // Terms validation
    if (!acceptTerms) {
      setTermsError('You must accept the terms and conditions');
      isValid = false;
    } else {
      setTermsError('');
    }
    
    return isValid;
  };

  const handleRegister = () => {
    if (validateForm()) {
      setIsLoading(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsLoading(false);
        // Navigate to profile setup after successful registration
        router.push('/profile-setup');
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
          <Text style={styles.title}>Create Account</Text>
          <Text style={styles.subtitle}>Start your personal coaching journey today</Text>
        </View>
        
        <View style={styles.form}>
          <Input
            label="Full Name"
            placeholder="Enter your full name"
            value={name}
            onChangeText={setName}
            error={nameError}
            icon={<User size={20} color={Colors.mediumGray} />}
          />
          
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
            label="Company (Optional)"
            placeholder="Enter your company name"
            value={company}
            onChangeText={setCompany}
            icon={<Building size={20} color={Colors.mediumGray} />}
          />
          
          <Input
            label="Password"
            placeholder="Create a password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            error={passwordError}
            icon={<Lock size={20} color={Colors.mediumGray} />}
          />
          
          <TouchableOpacity 
            style={styles.termsContainer}
            onPress={() => setAcceptTerms(!acceptTerms)}
            activeOpacity={0.7}
          >
            <View style={[styles.checkbox, acceptTerms && styles.checkboxChecked]}>
              {acceptTerms && <Check size={16} color={Colors.white} />}
            </View>
            <Text style={styles.termsText}>
              I accept the <Text style={styles.termsLink}>Terms & Conditions</Text> and <Text style={styles.termsLink}>Privacy Policy</Text>
            </Text>
          </TouchableOpacity>
          
          {termsError ? <Text style={styles.errorText}>{termsError}</Text> : null}
          
          <Button
            title="Create Account"
            onPress={handleRegister}
            loading={isLoading}
            style={styles.button}
          />
          
          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>Already have an account? </Text>
            <TouchableOpacity onPress={() => router.push('/login')}>
              <Text style={styles.loginLink}>Sign In</Text>
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
    marginBottom: 32,
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
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: Colors.primary,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    backgroundColor: Colors.primary,
  },
  termsText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: Colors.textSecondary,
    flex: 1,
  },
  termsLink: {
    color: Colors.primary,
    fontFamily: 'Inter-Medium',
  },
  errorText: {
    color: Colors.error,
    fontSize: 12,
    marginBottom: 16,
    fontFamily: 'Inter-Regular',
  },
  button: {
    marginVertical: 24,
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  loginText: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: Colors.textSecondary,
  },
  loginLink: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    color: Colors.primary,
  },
});