import React from 'react';
import { View, Text, StyleSheet, ScrollView, StatusBar, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <StatusBar backgroundColor="#4CAF50" barStyle="light-content" />
      
      <View style={styles.header}>
        <Text style={styles.title}>Wellness Ground</Text>
        <Text style={styles.subtitle}>A clean, modern wellness app offering daily mindfulness tools, mood tracking, and progress insights to support mental wellbeing.</Text>
      </View>
      
      <View style={styles.content}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>✨ Features</Text>
          <View key=0 style={styles.featureItem}><Text style={styles.featureDot}>•</Text><Text style={styles.featureText}>Daily mindfulness reminders</Text></View>
          <View key=1 style={styles.featureItem}><Text style={styles.featureDot}>•</Text><Text style={styles.featureText}>Guided breathing exercises</Text></View>
          <View key=2 style={styles.featureItem}><Text style={styles.featureDot}>•</Text><Text style={styles.featureText}>Mood tracker with journaling</Text></View>
          <View key=3 style={styles.featureItem}><Text style={styles.featureDot}>•</Text><Text style={styles.featureText}>Progress statistics dashboard</Text></View>
        </View>
        
        <View style={styles.card}>
          <Text style={styles.cardTitle}>🚀 Getting Started</Text>
          <Text style={styles.cardText}>
            1. Run 'npm install' to install dependencies

            2. Run 'npx react-native run-android' for Android

            3. Or run 'npx react-native run-ios' for iOS
          </Text>
        </View>
        
        <TouchableOpacity style={[styles.button, {backgroundColor: '#4CAF50'}]}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
        
        <Text style={styles.footer}>
          Built with ☁️ Cloud App Builder
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    backgroundColor: '#4CAF50',
    paddingVertical: 40,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.9)',
  },
  content: {
    padding: 20,
    marginTop: -20,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  cardText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555',
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  featureDot: {
    fontSize: 20,
    color: '#4CAF50',
    marginRight: 10,
  },
  featureText: {
    fontSize: 16,
    color: '#444',
    flex: 1,
  },
  button: {
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    marginVertical: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    textAlign: 'center',
    color: '#888',
    marginTop: 20,
    marginBottom: 40,
  },
});
