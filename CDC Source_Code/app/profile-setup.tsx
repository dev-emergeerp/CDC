import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native';
import { router } from 'expo-router';
import Colors from '@/constants/Colors';
import Button from '@/components/Button';
import Card from '@/components/Card';
import { Check, ArrowLeft, Upload, User } from 'lucide-react-native';

const ROLES = [
  { id: 1, title: 'Manager', description: 'Team leadership and development' },
  { id: 2, title: 'Executive', description: 'Senior leadership and strategy' },
  { id: 3, title: 'Individual Contributor', description: 'Specialized skills and expertise' },
  { id: 4, title: 'Entrepreneur', description: 'Business ownership and development' },
  { id: 5, title: 'Consultant', description: 'Advisory and specialized services' },
];

const EXPERIENCE_LEVELS = [
  { id: 1, title: 'Early Career', years: '0-3 years' },
  { id: 2, title: 'Mid-Level', years: '4-7 years' },
  { id: 3, title: 'Senior', years: '8-15 years' },
  { id: 4, title: 'Executive', years: '15+ years' },
];

const INTEREST_AREAS = [
  { id: 1, title: 'Leadership Development' },
  { id: 2, title: 'Communication Skills' },
  { id: 3, title: 'Career Advancement' },
  { id: 4, title: 'Team Management' },
  { id: 5, title: 'Work-Life Balance' },
  { id: 6, title: 'Conflict Resolution' },
  { id: 7, title: 'Strategic Planning' },
  { id: 8, title: 'Personal Branding' },
];

export default function ProfileSetupScreen() {
  const [selectedRole, setSelectedRole] = useState<number | null>(null);
  const [selectedExperience, setSelectedExperience] = useState<number | null>(null);
  const [selectedInterests, setSelectedInterests] = useState<number[]>([]);
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  
  const toggleInterest = (id: number) => {
    if (selectedInterests.includes(id)) {
      setSelectedInterests(selectedInterests.filter(interestId => interestId !== id));
    } else {
      setSelectedInterests([...selectedInterests, id]);
    }
  };
  
  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      handleCompleteSetup();
    }
  };
  
  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else {
      router.back();
    }
  };
  
  const handleCompleteSetup = () => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      router.push('/(tabs)');
    }, 1500);
  };
  
  const canProceed = () => {
    if (currentStep === 1) {
      return selectedRole !== null;
    } else if (currentStep === 2) {
      return selectedExperience !== null;
    } else {
      return selectedInterests.length > 0;
    }
  };
  
  const renderStepIndicator = () => {
    return (
      <View style={styles.stepIndicator}>
        {[1, 2, 3].map((step) => (
          <View 
            key={step} 
            style={[
              styles.stepDot,
              currentStep === step && styles.activeStepDot,
              currentStep > step && styles.completedStepDot,
            ]}
          />
        ))}
      </View>
    );
  };
  
  const renderRoleSelection = () => {
    return (
      <View style={styles.stepContainer}>
        <Text style={styles.stepTitle}>What is your current role?</Text>
        <Text style={styles.stepDescription}>This helps us personalize your coaching experience.</Text>
        
        <ScrollView style={styles.selectionContainer}>
          {ROLES.map((role) => (
            <TouchableOpacity
              key={role.id}
              style={[
                styles.selectionCard,
                selectedRole === role.id && styles.selectedCard,
              ]}
              onPress={() => setSelectedRole(role.id)}
            >
              <View style={styles.selectionContent}>
                <Text style={styles.selectionTitle}>{role.title}</Text>
                <Text style={styles.selectionDescription}>{role.description}</Text>
              </View>
              
              {selectedRole === role.id && (
                <View style={styles.checkIcon}>
                  <Check size={20} color={Colors.white} />
                </View>
              )}
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    );
  };
  
  const renderExperienceSelection = () => {
    return (
      <View style={styles.stepContainer}>
        <Text style={styles.stepTitle}>Your level of experience?</Text>
        <Text style={styles.stepDescription}>Share where you are in your professional journey.</Text>
        
        <View style={styles.experienceContainer}>
          {EXPERIENCE_LEVELS.map((level) => (
            <TouchableOpacity
              key={level.id}
              style={[
                styles.experienceCard,
                selectedExperience === level.id && styles.selectedExperienceCard,
              ]}
              onPress={() => setSelectedExperience(level.id)}
            >
              <Text style={[
                styles.experienceTitle,
                selectedExperience === level.id && styles.selectedExperienceTitle,
              ]}>
                {level.title}
              </Text>
              <Text style={[
                styles.experienceYears,
                selectedExperience === level.id && styles.selectedExperienceYears,
              ]}>
                {level.years}
              </Text>
              
              {selectedExperience === level.id && (
                <View style={styles.experienceCheckIcon}>
                  <Check size={16} color={Colors.white} />
                </View>
              )}
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  };
  
  const renderInterestSelection = () => {
    return (
      <View style={styles.stepContainer}>
        <Text style={styles.stepTitle}>Areas of interest</Text>
        <Text style={styles.stepDescription}>Select topics you'd like to focus on (select multiple).</Text>
        
        <View style={styles.interestsContainer}>
          {INTEREST_AREAS.map((interest) => (
            <TouchableOpacity
              key={interest.id}
              style={[
                styles.interestChip,
                selectedInterests.includes(interest.id) && styles.selectedInterestChip,
              ]}
              onPress={() => toggleInterest(interest.id)}
            >
              <Text style={[
                styles.interestText,
                selectedInterests.includes(interest.id) && styles.selectedInterestText,
              ]}>
                {interest.title}
              </Text>
              
              {selectedInterests.includes(interest.id) && (
                <Check size={16} color={Colors.white} style={styles.interestCheck} />
              )}
            </TouchableOpacity>
          ))}
        </View>
        
        <TouchableOpacity style={styles.photoUpload}>
          <View style={styles.photoPlaceholder}>
            <User size={40} color={Colors.mediumGray} />
          </View>
          
          <View style={styles.photoTextContainer}>
            <Text style={styles.photoTitle}>Add a profile photo</Text>
            <Text style={styles.photoDescription}>Optional but recommended</Text>
          </View>
          
          <Upload size={24} color={Colors.primary} />
        </TouchableOpacity>
      </View>
    );
  };
  
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.backButton}
        onPress={handlePrevStep}
      >
        <ArrowLeft size={24} color={Colors.primary} />
      </TouchableOpacity>
      
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://cdcconsultingpartners.com/wp-content/uploads/2021/10/CDC-Logo-1.png' }}
          style={styles.logo}
          resizeMode="contain"
        />
        {renderStepIndicator()}
      </View>
      
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {currentStep === 1 && renderRoleSelection()}
        {currentStep === 2 && renderExperienceSelection()}
        {currentStep === 3 && renderInterestSelection()}
      </ScrollView>
      
      <View style={styles.footer}>
        <Button
          title={currentStep === 3 ? "Complete Setup" : "Continue"}
          onPress={handleNextStep}
          disabled={!canProceed()}
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
  backButton: {
    position: 'absolute',
    top: 40,
    left: 24,
    zIndex: 10,
  },
  header: {
    alignItems: 'center',
    marginTop: 80,
    marginBottom: 24,
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 24,
  },
  stepIndicator: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  stepDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: Colors.lightGray,
    marginHorizontal: 6,
  },
  activeStepDot: {
    backgroundColor: Colors.primary,
    width: 16,
    height: 16,
    borderRadius: 8,
  },
  completedStepDot: {
    backgroundColor: Colors.accent,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  stepContainer: {
    flex: 1,
  },
  stepTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 24,
    color: Colors.primary,
    marginBottom: 8,
  },
  stepDescription: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: Colors.textSecondary,
    marginBottom: 24,
  },
  selectionContainer: {
    flex: 1,
  },
  selectionCard: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: Colors.transparent,
  },
  selectedCard: {
    borderColor: Colors.primary,
  },
  selectionContent: {
    flex: 1,
  },
  selectionTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 18,
    color: Colors.text,
    marginBottom: 4,
  },
  selectionDescription: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: Colors.textSecondary,
  },
  checkIcon: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  experienceContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -8,
  },
  experienceCard: {
    width: '48%',
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: 16,
    marginHorizontal: '1%',
    marginBottom: 16,
    borderWidth: 2,
    borderColor: Colors.transparent,
    position: 'relative',
  },
  selectedExperienceCard: {
    borderColor: Colors.primary,
  },
  experienceTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    color: Colors.text,
    marginBottom: 4,
  },
  selectedExperienceTitle: {
    color: Colors.primary,
  },
  experienceYears: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: Colors.textSecondary,
  },
  selectedExperienceYears: {
    color: Colors.primary,
  },
  experienceCheckIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  interestsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 24,
  },
  interestChip: {
    backgroundColor: Colors.white,
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginRight: 12,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.lightGray,
  },
  selectedInterestChip: {
    backgroundColor: Colors.primary,
    borderColor: Colors.primary,
  },
  interestText: {
    fontFamily: 'Inter-Medium',
    fontSize: 14,
    color: Colors.text,
  },
  selectedInterestText: {
    color: Colors.white,
  },
  interestCheck: {
    marginLeft: 6,
  },
  photoUpload: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
  },
  photoPlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  photoTextContainer: {
    flex: 1,
  },
  photoTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 16,
    color: Colors.text,
    marginBottom: 4,
  },
  photoDescription: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: Colors.textSecondary,
  },
  footer: {
    padding: 24,
    backgroundColor: Colors.white,
    borderTopWidth: 1,
    borderTopColor: Colors.lightGray,
  },
});