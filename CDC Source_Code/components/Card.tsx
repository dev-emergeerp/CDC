import React, { ReactNode } from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import Colors from '@/constants/Colors';

type CardProps = {
  children: ReactNode;
  style?: ViewStyle;
  elevation?: number;
};

export default function Card({ children, style, elevation = 1 }: CardProps) {
  return (
    <View 
      style={[
        styles.card, 
        { 
          shadowOpacity: 0.1 * elevation,
          shadowRadius: 4 * elevation,
          elevation: elevation * 2,
        },
        style
      ]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.card,
    borderRadius: 12,
    padding: 16,
    shadowColor: Colors.text,
    shadowOffset: { width: 0, height: 2 },
  },
});