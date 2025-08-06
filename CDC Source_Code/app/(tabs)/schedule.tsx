import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Colors from '@/constants/Colors';
import { Calendar, Clock, ChevronRight, Calendar as CalendarIcon } from 'lucide-react-native';
import Button from '@/components/Button';

const AVAILABLE_TIMES = [
  '9:00 AM',
  '10:00 AM',
  '11:00 AM',
  '2:00 PM',
  '3:00 PM',
  '4:00 PM',
];

const COACHING_TYPES = [
  {
    id: 1,
    title: 'Leadership Development',
    duration: '60 min',
    description: 'One-on-one coaching focused on developing your leadership skills',
  },
  {
    id: 2,
    title: 'Career Strategy',
    duration: '45 min',
    description: 'Strategic planning session for career advancement',
  },
  {
    id: 3,
    title: 'Team Management',
    duration: '60 min',
    description: 'Guidance on building and managing high-performing teams',
  },
];

export default function ScheduleScreen() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedType, setSelectedType] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSchedule = () => {
    if (!selectedTime || !selectedType) return;
    
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Reset selections
      setSelectedTime('');
      setSelectedType(null);
    }, 1500);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Schedule Coaching</Text>
          <Text style={styles.headerSubtitle}>Book a one-on-one session with Cristina</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Select Coaching Type</Text>
          {COACHING_TYPES.map((type) => (
            <TouchableOpacity
              key={type.id}
              style={[
                styles.typeCard,
                selectedType === type.id && styles.selectedTypeCard,
              ]}
              onPress={() => setSelectedType(type.id)}
            >
              <View style={styles.typeContent}>
                <Text style={styles.typeTitle}>{type.title}</Text>
                <Text style={styles.typeDuration}>
                  <Clock size={14} color={Colors.primary} /> {type.duration}
                </Text>
                <Text style={styles.typeDescription}>{type.description}</Text>
              </View>
              <ChevronRight size={20} color={Colors.mediumGray} />
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Select Time Slot</Text>
          <View style={styles.timeGrid}>
            {AVAILABLE_TIMES.map((time) => (
              <TouchableOpacity
                key={time}
                style={[
                  styles.timeSlot,
                  selectedTime === time && styles.selectedTimeSlot,
                ]}
                onPress={() => setSelectedTime(time)}
              >
                <Text
                  style={[
                    styles.timeText,
                    selectedTime === time && styles.selectedTimeText,
                  ]}
                >
                  {time}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Additional Notes</Text>
          <View style={styles.noteCard}>
            <CalendarIcon size={20} color={Colors.primary} />
            <Text style={styles.noteText}>
              Sessions are conducted virtually via video conference. You'll receive a confirmation email with the meeting link upon booking.
            </Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Button
          title="Schedule Session"
          onPress={handleSchedule}
          disabled={!selectedTime || !selectedType}
          loading={isLoading}
        />
      </View>
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
    marginBottom: 32,
  },
  headerTitle: {
    fontSize: 28,
    fontFamily: 'Inter-Bold',
    color: Colors.primary,
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: Colors.textSecondary,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Inter-Bold',
    color: Colors.text,
    marginBottom: 16,
  },
  typeCard: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: Colors.transparent,
  },
  selectedTypeCard: {
    borderColor: Colors.primary,
  },
  typeContent: {
    flex: 1,
  },
  typeTitle: {
    fontSize: 16,
    fontFamily: 'Inter-Bold',
    color: Colors.text,
    marginBottom: 4,
  },
  typeDuration: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: Colors.primary,
    marginBottom: 8,
  },
  typeDescription: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: Colors.textSecondary,
  },
  timeGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -6,
  },
  timeSlot: {
    width: '33.33%',
    padding: 6,
  },
  timeSlotContent: {
    backgroundColor: Colors.white,
    borderRadius: 8,
    padding: 12,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: Colors.transparent,
  },
  selectedTimeSlot: {
    backgroundColor: Colors.primary,
  },
  timeText: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: Colors.text,
    textAlign: 'center',
    padding: 12,
    backgroundColor: Colors.white,
    borderRadius: 8,
    overflow: 'hidden',
  },
  selectedTimeText: {
    color: Colors.white,
    backgroundColor: Colors.primary,
  },
  noteCard: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  noteText: {
    flex: 1,
    marginLeft: 12,
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: Colors.textSecondary,
    lineHeight: 20,
  },
  footer: {
    padding: 24,
    backgroundColor: Colors.white,
    borderTopWidth: 1,
    borderTopColor: Colors.lightGray,
  },
});