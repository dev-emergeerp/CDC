import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Colors from '@/constants/Colors';
import { Calendar, Clock } from 'lucide-react-native';

type AppointmentCardProps = {
  date: string;
  time: string;
  title: string;
  description?: string;
  onPress: () => void;
};

export default function AppointmentCard({ 
  date, 
  time, 
  title, 
  description, 
  onPress 
}: AppointmentCardProps) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        {description && <Text style={styles.description}>{description}</Text>}
        
        <View style={styles.detailsContainer}>
          <View style={styles.detailItem}>
            <Calendar size={16} color={Colors.primary} />
            <Text style={styles.detailText}>{date}</Text>
          </View>
          
          <View style={styles.detailItem}>
            <Clock size={16} color={Colors.primary} />
            <Text style={styles.detailText}>{time}</Text>
          </View>
        </View>
      </View>
      
      <View style={styles.indicator} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 16,
    flexDirection: 'row',
    shadowColor: Colors.text,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  indicator: {
    width: 6,
    backgroundColor: Colors.accent,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  title: {
    color: Colors.text,
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    marginBottom: 4,
  },
  description: {
    color: Colors.textSecondary,
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    marginBottom: 12,
  },
  detailsContainer: {
    flexDirection: 'row',
    marginTop: 8,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  detailText: {
    marginLeft: 6,
    color: Colors.text,
    fontFamily: 'Inter-Regular',
    fontSize: 14,
  },
});