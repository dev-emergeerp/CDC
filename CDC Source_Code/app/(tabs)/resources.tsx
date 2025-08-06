import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, TextInput } from 'react-native';
import Colors from '@/constants/Colors';
import ResourceCard from '@/components/ResourceCard';
import { Search, Filter } from 'lucide-react-native';

// Sample resource categories
const CATEGORIES = [
  'All',
  'Leadership',
  'Communication',
  'Career Growth',
  'Team Building',
  'Work-Life Balance',
];

// Sample resources
const RESOURCES = [
  {
    id: '1',
    title: 'Developing Trust in Leadership',
    category: 'Leadership',
    imageUrl: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg',
  },
  {
    id: '2',
    title: 'Effective Communication in Remote Teams',
    category: 'Communication',
    imageUrl: 'https://images.pexels.com/photos/3153198/pexels-photo-3153198.jpeg',
  },
  {
    id: '3',
    title: 'Building Authentic Relationships at Work',
    category: 'Team Building',
    imageUrl: 'https://images.pexels.com/photos/1367269/pexels-photo-1367269.jpeg',
  },
  {
    id: '4',
    title: 'Strategic Planning for Career Growth',
    category: 'Career Growth',
    imageUrl: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg',
  },
  {
    id: '5',
    title: 'Maintaining Work-Life Harmony',
    category: 'Work-Life Balance',
    imageUrl: 'https://images.pexels.com/photos/196655/pexels-photo-196655.jpeg',
  },
  {
    id: '6',
    title: 'Leading Through Uncertainty',
    category: 'Leadership',
    imageUrl: 'https://images.pexels.com/photos/5256816/pexels-photo-5256816.jpeg',
  },
];

export default function ResourcesScreen() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredResources = RESOURCES.filter(resource => {
    const matchesCategory = selectedCategory === 'All' || resource.category === selectedCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Resources</Text>
          <Text style={styles.headerSubtitle}>Expert insights to help you grow</Text>
        </View>
        
        <View style={styles.searchContainer}>
          <Search size={20} color={Colors.mediumGray} style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search resources..."
            placeholderTextColor={Colors.mediumGray}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <TouchableOpacity style={styles.filterButton}>
            <Filter size={20} color={Colors.primary} />
          </TouchableOpacity>
        </View>
        
        <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.categoriesContainer}
        >
          {CATEGORIES.map((category) => (
            <TouchableOpacity
              key={category}
              style={[
                styles.categoryChip,
                selectedCategory === category && styles.selectedCategory,
              ]}
              onPress={() => setSelectedCategory(category)}
            >
              <Text
                style={[
                  styles.categoryText,
                  selectedCategory === category && styles.selectedCategoryText,
                ]}
              >
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        
        <View style={styles.featuredContainer}>
          <TouchableOpacity style={styles.featuredCard}>
            <Image
              source={{ uri: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg' }}
              style={styles.featuredImage}
            />
            <View style={styles.featuredOverlay}>
              <View style={styles.featuredContent}>
                <Text style={styles.featuredTag}>FEATURED</Text>
                <Text style={styles.featuredTitle}>Purpose-Driven Leadership Framework</Text>
                <Text style={styles.featuredDescription}>
                  A comprehensive guide to creating workplaces that foster trust, creativity, and human connection.
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        
        <View style={styles.resourcesGrid}>
          {filteredResources.map((resource) => (
            <View key={resource.id} style={styles.resourceCardContainer}>
              <ResourceCard
                title={resource.title}
                category={resource.category}
                imageUrl={resource.imageUrl}
                onPress={() => {/* Handle resource selection */}}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  scrollContainer: {
    padding: 24,
    paddingTop: 60,
  },
  header: {
    marginBottom: 24,
  },
  headerTitle: {
    fontSize: 28,
    fontFamily: 'Inter-Bold',
    color: Colors.primary,
    marginBottom: 4,
  },
  headerSubtitle: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: Colors.textSecondary,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 12,
    paddingHorizontal: 12,
    marginBottom: 24,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 48,
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: Colors.text,
  },
  filterButton: {
    padding: 8,
  },
  categoriesContainer: {
    paddingBottom: 16,
  },
  categoryChip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: Colors.white,
    marginRight: 8,
    borderWidth: 1,
    borderColor: Colors.lightGray,
  },
  selectedCategory: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  categoryText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: Colors.text,
  },
  selectedCategoryText: {
    color: Colors.white,
  },
  featuredContainer: {
    marginBottom: 24,
  },
  featuredCard: {
    height: 200,
    borderRadius: 12,
    overflow: 'hidden',
  },
  featuredImage: {
    width: '100%',
    height: '100%',
  },
  featuredOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(11, 57, 84, 0.7)',
    justifyContent: 'flex-end',
  },
  featuredContent: {
    padding: 16,
  },
  featuredTag: {
    fontFamily: 'Inter-Bold',
    fontSize: 12,
    color: Colors.accent,
    marginBottom: 8,
  },
  featuredTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 20,
    color: Colors.white,
    marginBottom: 8,
  },
  featuredDescription: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: Colors.white,
    opacity: 0.9,
  },
  resourcesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -8,
  },
  resourceCardContainer: {
    width: '50%',
    paddingHorizontal: 8,
  },
});