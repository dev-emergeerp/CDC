import React from 'react';
import { 
  TouchableOpacity, 
  Text, 
  StyleSheet, 
  ActivityIndicator, 
  ViewStyle, 
  TextStyle 
} from 'react-native';
import Colors from '@/constants/Colors';

type ButtonProps = {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  style?: ViewStyle;
  textStyle?: TextStyle;
};

export default function Button({
  title,
  onPress,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  style,
  textStyle,
}: ButtonProps) {
  
  const getButtonStyle = () => {
    if (variant === 'primary') {
      return styles.primaryButton;
    } else if (variant === 'secondary') {
      return styles.secondaryButton;
    } else {
      return styles.outlineButton;
    }
  };

  const getTextStyle = () => {
    if (variant === 'primary') {
      return styles.primaryText;
    } else if (variant === 'secondary') {
      return styles.secondaryText;
    } else {
      return styles.outlineText;
    }
  };

  const getSizeStyle = () => {
    if (size === 'small') {
      return styles.smallButton;
    } else if (size === 'large') {
      return styles.largeButton;
    } else {
      return styles.mediumButton;
    }
  };

  return (
    <TouchableOpacity
      style={[
        styles.button,
        getButtonStyle(),
        getSizeStyle(),
        disabled && styles.disabledButton,
        style,
      ]}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
    >
      {loading ? (
        <ActivityIndicator 
          color={variant === 'outline' ? Colors.primary : Colors.white} 
          size="small" 
        />
      ) : (
        <Text 
          style={[
            styles.text, 
            getTextStyle(), 
            disabled && styles.disabledText,
            textStyle
          ]}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButton: {
    backgroundColor: Colors.primary,
  },
  secondaryButton: {
    backgroundColor: Colors.secondary,
  },
  outlineButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: Colors.primary,
  },
  smallButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  mediumButton: {
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  largeButton: {
    paddingVertical: 16,
    paddingHorizontal: 32,
  },
  disabledButton: {
    backgroundColor: Colors.lightGray,
    borderColor: Colors.lightGray,
  },
  text: {
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    textAlign: 'center',
  },
  primaryText: {
    color: Colors.white,
  },
  secondaryText: {
    color: Colors.white,
  },
  outlineText: {
    color: Colors.primary,
  },
  disabledText: {
    color: Colors.mediumGray,
  },
});