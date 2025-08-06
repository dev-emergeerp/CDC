import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Colors from '@/constants/Colors';
import { FileText } from 'lucide-react-native';

type ResourceCardProps = {
  title: string;
  category: string;
  imageUrl?: string;
  onPress: () => void;
};

export default function ResourceCard({ title, category, imageUrl, onPress }: ResourceCardProps) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
      <View style={styles.imageContainer}>
        {imageUrl ? (
          <Image source={{ uri: imageUrl }} style={styles.image} />
        ) : (
          <View style={styles.placeholderImage}>
            <FileText size={32} color={Colors.primary} />
          </View>
        )}
      </View>
      <View style={styles.content}>
        <Text style={styles.category}>{category}</Text>
        <Text style={styles.title} numberOfLines={2}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
    shadowColor: Colors.text,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  imageContainer: {
    height: 140,
    width: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  placeholderImage: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    padding: 16,
  },
  category: {
    color: Colors.accent,
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    marginBottom: 4,
  },
  title: {
    color: Colors.text,
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    lineHeight: 24,
  },
});