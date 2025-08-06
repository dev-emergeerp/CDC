import React, { useState } from 'react';
import { 
  View, 
  TextInput, 
  Text, 
  StyleSheet, 
  TextInputProps,
  TouchableOpacity
} from 'react-native';
import Colors from '@/constants/Colors';
import { Eye, EyeOff } from 'lucide-react-native';

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
  secureTextEntry?: boolean;
}

export default function Input({
  label,
  error,
  icon,
  secureTextEntry,
  style,
  ...props
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View 
        style={[
          styles.inputContainer,
          isFocused && styles.focusedInput,
          error && styles.errorInput,
          style
        ]}
      >
        {icon && <View style={styles.iconContainer}>{icon}</View>}
        <TextInput
          style={[
            styles.input,
            icon && styles.inputWithIcon
          ]}
          placeholderTextColor={Colors.mediumGray}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={secureTextEntry && !isPasswordVisible}
          {...props}
        />
        {secureTextEntry && (
          <TouchableOpacity 
            onPress={togglePasswordVisibility}
            style={styles.eyeIcon}
          >
            {isPasswordVisible ? (
              <EyeOff size={20} color={Colors.mediumGray} />
            ) : (
              <Eye size={20} color={Colors.mediumGray} />
            )}
          </TouchableOpacity>
        )}
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: Colors.text,
    marginBottom: 6,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 8,
    height: 48,
  },
  iconContainer: {
    paddingLeft: 12,
  },
  input: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 12,
    color: Colors.text,
    fontFamily: 'Inter-Regular',
    fontSize: 16,
  },
  inputWithIcon: {
    paddingLeft: 8,
  },
  focusedInput: {
    borderColor: Colors.primary,
  },
  errorInput: {
    borderColor: Colors.error,
  },
  errorText: {
    color: Colors.error,
    fontSize: 12,
    marginTop: 4,
    fontFamily: 'Inter-Regular',
  },
  eyeIcon: {
    padding: 10,
  },
});