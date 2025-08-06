import React, { useState, useRef } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TextInput, 
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  FlatList
} from 'react-native';
import Colors from '@/constants/Colors';
import ChatBubble from '@/components/ChatBubble';
import { Send, Mic, ArrowLeft } from 'lucide-react-native';

// Sample chat messages
const INITIAL_MESSAGES = [
  {
    id: '1',
    text: 'Hello! I\'m your AI Leadership Coach powered by Cristina De Costa\'s expertise. How can I help you today?',
    isUser: false,
    timestamp: '10:30 AM'
  }
];

// Sample quick prompts
const QUICK_PROMPTS = [
  'How can I improve team communication?',
  'Help me prepare for a difficult conversation',
  'I need advice on work-life balance',
  'Tips for leading during change',
];

export default function ChatScreen() {
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollViewRef = useRef<ScrollView>(null);

  const sendMessage = () => {
    if (inputText.trim() === '') return;
    
    // Add user message
    const userMessage = {
      id: Date.now().toString(),
      text: inputText,
      isUser: true,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages([...messages, userMessage]);
    setInputText('');
    setIsTyping(true);
    
    // Simulate AI response
    setTimeout(() => {
      const botResponse = {
        id: (Date.now() + 1).toString(),
        text: getAIResponse(inputText),
        isUser: false,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setMessages(prevMessages => [...prevMessages, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  // Simple mock AI response logic
  const getAIResponse = (userInput: string) => {
    const input = userInput.toLowerCase();
    
    if (input.includes('team') || input.includes('communication')) {
      return "Effective team communication starts with creating psychological safety. Make sure team members feel comfortable expressing ideas and concerns without fear of judgment. Consider implementing regular check-ins and be transparent about the 'why' behind decisions.";
    } else if (input.includes('difficult') || input.includes('conversation')) {
      return "When preparing for a difficult conversation, remember the 3Ps: Prepare your talking points, Practice active listening, and Plan for various reactions. Focus on specific behaviors rather than personality traits, and approach the conversation with curiosity rather than judgment.";
    } else if (input.includes('work') && input.includes('life')) {
      return "Work-life balance is about setting healthy boundaries. Try time-blocking your calendar, delegating effectively, and being intentional about disconnecting from work. Remember that taking care of yourself enables you to show up as your best leadership self.";
    } else if (input.includes('change') || input.includes('leading')) {
      return "Leading during change requires clear communication, empathy, and consistency. Acknowledge the challenges, provide context for the changes, and create opportunities for team members to ask questions and express concerns. Celebrate small wins along the way.";
    } else {
      return "That's an interesting question about leadership. As Cristina often says, great leadership is about creating environments where people feel safe, valued, and empowered to contribute their unique strengths. Would you like me to elaborate on any specific aspect of leadership?";
    }
  };

  const handleQuickPrompt = (prompt: string) => {
    setInputText(prompt);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
    >
      <View style={styles.header}>
        <TouchableOpacity>
          <ArrowLeft size={24} color={Colors.primary} />
        </TouchableOpacity>
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>CDC Leadership Coach</Text>
          <Text style={styles.headerSubtitle}>AI-powered by Cristina De Costa</Text>
        </View>
        <View style={styles.headerSpace} />
      </View>
      
      <ScrollView
        ref={scrollViewRef}
        style={styles.chatContainer}
        contentContainerStyle={styles.chatContent}
        onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: true })}
      >
        {messages.map(message => (
          <ChatBubble
            key={message.id}
            message={message.text}
            isUser={message.isUser}
            timestamp={message.timestamp}
          />
        ))}
        
        {isTyping && (
          <View style={styles.typingContainer}>
            <Text style={styles.typingText}>Coach is typing...</Text>
          </View>
        )}
      </ScrollView>
      
      {messages.length === 1 && (
        <View style={styles.promptsContainer}>
          <Text style={styles.promptsTitle}>Try asking about:</Text>
          <View style={styles.promptsGrid}>
            {QUICK_PROMPTS.map((prompt, index) => (
              <TouchableOpacity
                key={index}
                style={styles.promptButton}
                onPress={() => handleQuickPrompt(prompt)}
              >
                <Text style={styles.promptText}>{prompt}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      )}
      
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type your message..."
          placeholderTextColor={Colors.mediumGray}
          value={inputText}
          onChangeText={setInputText}
          multiline
        />
        
        <TouchableOpacity 
          style={[
            styles.sendButton,
            !inputText.trim() && styles.disabledButton
          ]}
          onPress={sendMessage}
          disabled={!inputText.trim()}
        >
          <Send size={20} color={Colors.white} />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 60,
    paddingBottom: 16,
    backgroundColor: Colors.white,
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightGray,
  },
  headerContent: {
    flex: 1,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: 'Inter-Bold',
    color: Colors.primary,
  },
  headerSubtitle: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: Colors.textSecondary,
  },
  headerSpace: {
    width: 24,
  },
  chatContainer: {
    flex: 1,
  },
  chatContent: {
    padding: 16,
  },
  typingContainer: {
    alignSelf: 'flex-start',
    marginVertical: 8,
  },
  typingText: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: Colors.textSecondary,
    fontStyle: 'italic',
  },
  promptsContainer: {
    padding: 16,
    backgroundColor: Colors.white,
    borderTopWidth: 1,
    borderTopColor: Colors.lightGray,
    marginBottom: 8,
  },
  promptsTitle: {
    fontSize: 16,
    fontFamily: 'Inter-Medium',
    color: Colors.text,
    marginBottom: 12,
  },
  promptsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -4,
  },
  promptButton: {
    backgroundColor: Colors.background,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    margin: 4,
    borderWidth: 1,
    borderColor: Colors.lightGray,
  },
  promptText: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: Colors.text,
  },
  inputContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: Colors.white,
    borderTopWidth: 1,
    borderTopColor: Colors.lightGray,
    alignItems: 'flex-end',
  },
  input: {
    flex: 1,
    backgroundColor: Colors.background,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    maxHeight: 100,
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: Colors.text,
  },
  sendButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  disabledButton: {
    backgroundColor: Colors.mediumGray,
  },
});