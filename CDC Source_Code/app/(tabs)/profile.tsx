import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import Colors from '@/constants/Colors';
import { Settings, LogOut, ChevronRight, Calendar, CircleUser as UserCircle, BookOpen, Award, Bell } from 'lucide-react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Text style={styles.headerTitle}>Profile</Text>
            <TouchableOpacity style={styles.settingsButton}>
              <Settings size={24} color={Colors.primary} />
            </TouchableOpacity>
          </View>
        </View>
        
        <View style={styles.profileCard}>
          <Image
            source={{ uri: 'https://images.pexels.com/photos/3747446/pexels-photo-3747446.jpeg' }}
            style={styles.profileImage}
          />
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Jamie Wilson</Text>
            <Text style={styles.profileRole}>Marketing Director</Text>
            <Text style={styles.profileCompany}>Acme Inc.</Text>
          </View>
        </View>
        
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>8</Text>
            <Text style={styles.statLabel}>Coaching Sessions</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>14</Text>
            <Text style={styles.statLabel}>Resources Saved</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>3</Text>
            <Text style={styles.statLabel}>Growth Areas</Text>
          </View>
        </View>
        
        <View style={styles.growthContainer}>
          <Text style={styles.sectionTitle}>Your Growth Journey</Text>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: '45%' }]} />
          </View>
          <Text style={styles.progressText}>45% Complete</Text>
          <Text style={styles.progressDescription}>
            You're making great progress on your leadership development journey!
          </Text>
        </View>
        
        <View style={styles.menuSection}>
          <Text style={styles.sectionTitle}>Account</Text>
          
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuIconContainer}>
              <UserCircle size={20} color={Colors.primary} />
            </View>
            <Text style={styles.menuText}>Personal Information</Text>
            <ChevronRight size={20} color={Colors.mediumGray} />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuIconContainer}>
              <Bell size={20} color={Colors.primary} />
            </View>
            <Text style={styles.menuText}>Notifications</Text>
            <ChevronRight size={20} color={Colors.mediumGray} />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuIconContainer}>
              <Calendar size={20} color={Colors.primary} />
            </View>
            <Text style={styles.menuText}>My Appointments</Text>
            <ChevronRight size={20} color={Colors.mediumGray} />
          </TouchableOpacity>
        </View>
        
        <View style={styles.menuSection}>
          <Text style={styles.sectionTitle}>Content</Text>
          
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuIconContainer}>
              <BookOpen size={20} color={Colors.primary} />
            </View>
            <Text style={styles.menuText}>Saved Resources</Text>
            <ChevronRight size={20} color={Colors.mediumGray} />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuIconContainer}>
              <Award size={20} color={Colors.primary} />
            </View>
            <Text style={styles.menuText}>Achievements</Text>
            <ChevronRight size={20} color={Colors.mediumGray} />
          </TouchableOpacity>
        </View>
        
        <TouchableOpacity style={styles.logoutButton}>
          <LogOut size={20} color={Colors.error} />
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
        
        <Text style={styles.versionText}>Version 1.0.0</Text>
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
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 28,
    fontFamily: 'Inter-Bold',
    color: Colors.primary,
  },
  settingsButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileCard: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 24,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 20,
    fontFamily: 'Inter-Bold',
    color: Colors.text,
    marginBottom: 4,
  },
  profileRole: {
    fontSize: 16,
    fontFamily: 'Inter-Medium',
    color: Colors.primary,
    marginBottom: 2,
  },
  profileCompany: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: Colors.textSecondary,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  statCard: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: 16,
    width: '31%',
    alignItems: 'center',
  },
  statValue: {
    fontSize: 24,
    fontFamily: 'Inter-Bold',
    color: Colors.primary,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    fontFamily: 'Inter-Regular',
    color: Colors.textSecondary,
    textAlign: 'center',
  },
  growthContainer: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: 20,
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Inter-Bold',
    color: Colors.text,
    marginBottom: 16,
  },
  progressBar: {
    height: 8,
    backgroundColor: Colors.lightGray,
    borderRadius: 4,
    marginBottom: 8,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: Colors.accent,
    borderRadius: 4,
  },
  progressText: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: Colors.accent,
    marginBottom: 8,
  },
  progressDescription: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: Colors.textSecondary,
    lineHeight: 20,
  },
  menuSection: {
    marginBottom: 24,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  menuIconContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: Colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  menuText: {
    flex: 1,
    fontSize: 16,
    fontFamily: 'Inter-Medium',
    color: Colors.text,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  logoutText: {
    fontSize: 16,
    fontFamily: 'Inter-Medium',
    color: Colors.error,
    marginLeft: 8,
  },
  versionText: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: Colors.textSecondary,
    textAlign: 'center',
    marginBottom: 24,
  },
});