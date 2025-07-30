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
import { MoreHorizontal } from 'lucide-react-native';
import Header from '@/components/Header';

const moods = [
  { emoji: '😄', bg: '#FEFCE8' },
  { emoji: '😊', bg: '#ECFDF5' },
  { emoji: '😠', bg: '#FEF0F0' },
  { emoji: '🙂', bg: '#EFF6FF' },
  { emoji: '😢', bg: '#FEF3C7' },
  { emoji: '😔', bg: '#EDE9FE' },
];

// exact columns you asked for
const dotColumns = [4, 4, 2, 2, 2, 1, 1, 1, 2];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <Header />

      <ScrollView contentContainerStyle={{ paddingBottom: 60 }}>
        {/* Daily Mood Log */}
        <View style={styles.moodSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Daily Mood Log</Text>
            <MoreHorizontal size={16} strokeWidth={2} color="#6B7280" />
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.moodList}
          >
            {moods.map((m, i) => (
              <TouchableOpacity
                key={i}
                style={[styles.moodItem, { backgroundColor: m.bg }]}
              >
                <Text style={styles.moodEmoji}>{m.emoji}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Progress Card */}
        <View style={styles.progressCard}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardHeaderTitle}>Your progress</Text>
            <MoreHorizontal size={16} strokeWidth={2} color="#6B7280" />
          </View>

          <View style={styles.progressRow}>
            <Text style={styles.progressValue}>89%</Text>
            <Text style={styles.progressSubtitle}>
              Of the weekly {'\n'} plan completed
            </Text>
          </View>

          <View style={styles.circlesContainer}>
            {dotColumns.map((count, colIdx) => (
              <View key={colIdx} style={styles.dotColumn}>
                {Array.from({ length: count }).map((_, i) => (
                  <View key={i} style={styles.circle} />
                ))}
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const CARD_RADIUS = 24;
const MOOD_SIZE = 50;
const DOT_SIZE = 20;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },

  /* Mood Log */
  moodSection: {
    marginTop: 32,
    marginHorizontal: 24,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
  },
  moodList: {
    paddingRight: 24,
  },
  moodItem: {
    width: MOOD_SIZE,
    height: MOOD_SIZE,
    borderRadius: MOOD_SIZE / 2,
    marginRight: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFFFFF',
    elevation: 2,
  },
  moodEmoji: {
    fontSize: 24,
  },

  /* Progress Card */
  progressCard: {
    marginTop: 24,
    marginHorizontal: 24,
    backgroundColor: '#FFFFFF',
    borderRadius: CARD_RADIUS,
    padding: 24,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  cardHeaderTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
  },
  progressRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 16,
  },
  progressValue: {
    fontSize: 64,
    fontWeight: '400',
    color: '#000000',
    lineHeight: 64,
  },
  progressSubtitle: {
    flex: 1,
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'right',
    marginLeft: 16,
    marginBottom: 4,
  },

  /* Dot columns */
  circlesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    opacity: 0.8,
  },
  dotColumn: {
    flexDirection: 'column-reverse',
    alignItems: 'center',
  },
  circle: {
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: DOT_SIZE / 2,
    backgroundColor: '#CFFAE1',
    marginVertical: 6,
  },
});
