import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ArrowUpRight } from 'lucide-react-native';
import Header from '@/components/Header';
import PlantIllustration from '@/components/PlantIllustration';
import PersonIllustration from '@/components/PersonIllustration';

export default function PracticesScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <Header />

      <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
        {/* Header with its own horizontal padding */}
        <View style={styles.headerSection}>
          <Text style={styles.subtitle}>Practices</Text>
          <Text style={styles.title}>
            Exercises{'\n'}based on{' '}
            <Text style={styles.titleBold}>your{'\n'}needs</Text>
          </Text>
        </View>

        {/* Cards grid: no paddingHorizontal here */}
        <View style={styles.cardsGrid}>
          {/* First Row */}
          <View style={styles.row}>
            <TouchableOpacity style={[styles.card, styles.purpleCard]}>
              <Text style={styles.cardTitle}>My Strengths{'\n'}& Qualities</Text>
              <View style={styles.cardIcon}>
                <ArrowUpRight size={20} strokeWidth={2} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.card, styles.yellowCard]}>
              <Text style={styles.cardTitle}>Build{'\n'}Confidence</Text>
              <View style={styles.illustrationIcon}>
                <PlantIllustration />
              </View>
              <View style={styles.cardIcon}>
                <ArrowUpRight size={20} strokeWidth={2} />
              </View>
            </TouchableOpacity>
          </View>

          {/* Second Row */}
          <View style={styles.row}>
            <TouchableOpacity style={[styles.card, styles.mintCard]}>
              <Text style={styles.cardTitle}>Diversity{'\n'}& Inclusion</Text>
              <View style={styles.illustrationIcon}>
                <PersonIllustration />
              </View>
              <View style={styles.cardIcon}>
                <ArrowUpRight size={20} strokeWidth={2} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.card, styles.roseCard]}>
              <Text style={styles.cardTitle}>Behavioral{'\n'}Activation</Text>
              <View style={styles.cardIcon}>
                <ArrowUpRight size={20} strokeWidth={2} />
              </View>
            </TouchableOpacity>
          </View>

          {/* Full‑width third row */}
          <View style={styles.fullWidthRow}>
  <TouchableOpacity style={[styles.fullCard, styles.whiteCard]}>
    <Text style={styles.cardTitle}>Arabic{'\n'}Mental Health</Text>
    
    {/* Reuse the PlantIllustration */}
    <View style={ styles.fullIllustrationIcon}>
      <PlantIllustration />
    </View>

    <View style={styles.cardIcon}>
      <ArrowUpRight size={20} strokeWidth={2} />
    </View>
  </TouchableOpacity>
</View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const CARD_RADIUS = 22;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },

  /* Header */
subtitle: {
  color: '#6B7280',
  fontSize: 24,       
  fontWeight: '100',
  marginBottom: 8,
},
title: {
  color: '#000',
  fontSize: 48,     
  fontWeight: '300',
  lineHeight: 38,
},
titleBold: {
  fontWeight: '600',
},

/* Card Titles */
cardTitle: {
  color: '#18181B',
  fontSize: 24,        // exactly as in mock
  fontWeight: '400',
  lineHeight: 28,
  letterSpacing: 0.2,
  marginBottom: 15,
},

  /* Header w/ its own horizontal padding */
  headerSection: {
    marginTop: 32,
    marginBottom: 24,
    paddingHorizontal: 24,
  },

  /* Cards grid spans full width */
  cardsGrid: {
    // no paddingHorizontal here!
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 0,
  },
  fullWidthRow: {
    flexDirection: 'row',
  },

  card: {
    flex: 1,
    aspectRatio: 1,
    borderRadius: CARD_RADIUS,
    padding: 20,
    overflow: 'hidden',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  fullCard: {
    flex: 1,
    aspectRatio: 3,
    borderRadius: CARD_RADIUS,
    padding: 20,
    overflow: 'hidden',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },

  purpleCard: { backgroundColor: '#D1D5FF' },
  yellowCard: { backgroundColor: '#FFF7C8' },
  mintCard:   { backgroundColor: '#CFFAE1' },
  roseCard:   { backgroundColor: '#FFE4EC' },
  whiteCard: {
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 3,
  },

  cardIcon: {
    position: 'absolute',
    right: 18,
    bottom: 18,
    backgroundColor: '#FFF',
    borderRadius: 24,
    padding: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  illustrationIcon: {
  position: 'absolute',
  left: 24,
  bottom: 4,
  zIndex: -1, 
},
fullIllustrationIcon: {   
  position: 'absolute',
  right: 64,       
  bottom: 4,         
  zIndex: -1,       
},
});
