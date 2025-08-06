import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import Colors from '@/constants/Colors';
import Card from '@/components/Card';
import AppointmentCard from '@/components/AppointmentCard';
import { Calendar, Plus, BookOpen, MessageSquare, Clock } from 'lucide-react-native';

export default function DashboardScreen() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <View>
            <Text style={styles.date}>{currentDate}</Text>
            <Text style={styles.greeting}>Welcome back, Jamie</Text>
          </View>
          <TouchableOpacity style={styles.avatar}>
            <Image 
              source={{ uri: 'https://images.pexels.com/photos/3747446/pexels-photo-3747446.jpeg' }} 
              style={styles.avatarImage} 
            />
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Today's Insight</Text>
          <Card style={styles.insightCard}>
            <Text style={styles.insightText}>
              "Leadership is not about being in charge. It's about taking care of those in your charge."
            </Text>
            <Text style={styles.insightAuthor}>- Simon Sinek</Text>
          </Card>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Upcoming Coaching</Text>
            <TouchableOpacity 
              style={styles.scheduleButton}
              onPress={() => {/* Handle scheduling */}}
            >
              <Calendar size={14} color={Colors.white} />
              <Text style={styles.scheduleButtonText}>Schedule</Text>
            </TouchableOpacity>
          </View>

          <AppointmentCard
            title="Leadership Workshop"
            description="One-on-one coaching session with Cristina"
            date="June 15, 2025"
            time="10:00 AM - 11:00 AM"
            onPress={() => {/* Handle appointment press */}}
          />

          <Card style={styles.quickActionCard}>
            <Text style={styles.quickActionTitle}>Need immediate guidance?</Text>
            <Text style={styles.quickActionText}>
              Get instant coaching on a specific challenge you're facing.
            </Text>
            <TouchableOpacity style={styles.quickChatButton}>
              <MessageSquare size={16} color={Colors.white} />
              <Text style={styles.quickChatText}>Chat with Coach</Text>
            </TouchableOpacity>
          </Card>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Growth Areas</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.growthAreasContainer}>
            {[
              { id: 1, title: 'Leadership', progress: 65, color: Colors.primary },
              { id: 2, title: 'Communication', progress: 42, color: Colors.secondary },
              { id: 3, title: 'Strategic Planning', progress: 28, color: Colors.accent },
            ].map(area => (
              <TouchableOpacity key={area.id} style={styles.growthCard}>
                <View style={styles.progressRing}>
                  <Text style={styles.progressText}>{area.progress}%</Text>
                </View>
                <Text style={styles.growthTitle}>{area.title}</Text>
                <Text style={styles.growthSubtext}>In progress</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recent Resources</Text>
            <TouchableOpacity onPress={() => {/* Navigate to resources */}}>
              <Text style={styles.viewAllText}>View All</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.resourceItem}>
            <View style={[styles.resourceIcon, { backgroundColor: Colors.primary + '20' }]}>
              <BookOpen size={20} color={Colors.primary} />
            </View>
            <View style={styles.resourceContent}>
              <Text style={styles.resourceTitle}>Purpose-Driven Leadership</Text>
              <Text style={styles.resourceType}>Article • 5 min read</Text>
            </View>
            <Clock size={16} color={Colors.mediumGray} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.resourceItem}>
            <View style={[styles.resourceIcon, { backgroundColor: Colors.accent + '20' }]}>
              <BookOpen size={20} color={Colors.accent} />
            </View>
            <View style={styles.resourceContent}>
              <Text style={styles.resourceTitle}>Team Alignment Strategies</Text>
              <Text style={styles.resourceType}>Guide • 12 min read</Text>
            </View>
            <Clock size={16} color={Colors.mediumGray} />
          </TouchableOpacity>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  date: {
    fontSize: 14,
    color: Colors.textSecondary,
    fontFamily: 'Inter-Regular',
  },
  greeting: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    color: Colors.primary,
    marginTop: 4,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: Colors.lightGray,
    overflow: 'hidden',
  },
  avatarImage: {
    width: '100%',
    height: '100%',
  },
  section: {
    marginBottom: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Inter-Bold',
    color: Colors.text,
    marginBottom: 16,
  },
  insightCard: {
    padding: 20,
  },
  insightText: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: Colors.text,
    lineHeight: 24,
    fontStyle: 'italic',
    marginBottom: 16,
  },
  insightAuthor: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: Colors.primary,
    textAlign: 'right',
  },
  scheduleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.primary,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  scheduleButtonText: {
    color: Colors.white,
    marginLeft: 6,
    fontSize: 14,
    fontFamily: 'Inter-Medium',
  },
  quickActionCard: {
    backgroundColor: Colors.white,
    padding: 16,
  },
  quickActionTitle: {
    fontSize: 16,
    fontFamily: 'Inter-Bold',
    color: Colors.text,
    marginBottom: 8,
  },
  quickActionText: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: Colors.textSecondary,
    marginBottom: 16,
    lineHeight: 20,
  },
  quickChatButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.accent,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  quickChatText: {
    color: Colors.white,
    marginLeft: 8,
    fontSize: 14,
    fontFamily: 'Inter-Medium',
  },
  growthAreasContainer: {
    marginLeft: -8,
  },
  growthCard: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: 16,
    marginRight: 16,
    width: 120,
    alignItems: 'center',
  },
  progressRing: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 4,
    borderColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  progressText: {
    fontSize: 16,
    fontFamily: 'Inter-Bold',
    color: Colors.primary,
  },
  growthTitle: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: Colors.text,
    marginBottom: 4,
  },
  growthSubtext: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: Colors.textSecondary,
  },
  viewAllText: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: Colors.primary,
  },
  resourceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  resourceIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  resourceContent: {
    flex: 1,
  },
  resourceTitle: {
    fontSize: 16,
    fontFamily: 'Inter-Medium',
    color: Colors.text,
    marginBottom: 4,
  },
  resourceType: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: Colors.textSecondary,
  },
});