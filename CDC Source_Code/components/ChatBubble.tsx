import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '@/constants/Colors';

type ChatBubbleProps = {
  message: string;
  isUser: boolean;
  timestamp: string;
};

export default function ChatBubble({ message, isUser, timestamp }: ChatBubbleProps) {
  return (
    <View style={[
      styles.container,
      isUser ? styles.userContainer : styles.botContainer
    ]}>
      <View style={[
        styles.bubble,
        isUser ? styles.userBubble : styles.botBubble
      ]}>
        <Text style={[
          styles.message,
          isUser ? styles.userMessage : styles.botMessage
        ]}>
          {message}
        </Text>
      </View>
      <Text style={styles.timestamp}>{timestamp}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    maxWidth: '80%',
  },
  userContainer: {
    alignSelf: 'flex-end',
  },
  botContainer: {
    alignSelf: 'flex-start',
  },
  bubble: {
    borderRadius: 18,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  userBubble: {
    backgroundColor: Colors.primary,
  },
  botBubble: {
    backgroundColor: Colors.lightGray,
  },
  message: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
  },
  userMessage: {
    color: Colors.white,
  },
  botMessage: {
    color: Colors.text,
  },
  timestamp: {
    fontSize: 12,
    color: Colors.textSecondary,
    marginTop: 4,
    fontFamily: 'Inter-Regular',
    alignSelf: 'flex-end',
  },
});