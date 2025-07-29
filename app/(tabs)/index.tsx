import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import Header from '@/components/Header';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <Header />
      
      <ScrollView style={styles.scrollView}>
        <View style={styles.welcomeSection}>
          <Text style={styles.welcomeText}>Welcome back</Text>
          <Text style={styles.titleText}>
            Ready to start your{'\n'}journey?
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Daily Progress</Text>
          <Text style={styles.cardSubtitle}>Keep up the great work!</Text>
          
          <View style={styles.progressContainer}>
            <View style={styles.progressHeader}>
              <Text style={styles.progressLabel}>Today's Goal</Text>
              <Text style={styles.progressValue}>75%</Text>
            </View>
            <View style={styles.progressBarBackground}>
              <View style={[styles.progressBar, { width: '75%' }]} />
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Quick Actions</Text>
          
          <View style={styles.actionRow}>
            <View style={[styles.actionCard, styles.blueAction]}>
              <Text style={styles.actionTitle}>Start Practice</Text>
              <Text style={styles.actionSubtitle}>Begin your session</Text>
            </View>
            
            <View style={[styles.actionCard, styles.greenAction]}>
              <Text style={styles.actionTitle}>View Progress</Text>
              <Text style={styles.actionSubtitle}>Check your stats</Text>
            </View>
          </View>
        </View>

        <View style={styles.bottomSection}>
          <Text style={styles.cardTitle}>Recent Activity</Text>
          
          {[1, 2, 3].map((item) => (
            <View key={item} style={styles.activityCard}>
              <View style={styles.activityContent}>
                <View>
                  <Text style={styles.activityTitle}>Practice Session {item}</Text>
                  <Text style={styles.activityTime}>Completed 2 hours ago</Text>
                </View>
                <View style={styles.completedBadge}>
                  <Text style={styles.completedText}>Completed</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 24,
  },
  welcomeSection: {
    marginTop: 32,
    marginBottom: 24,
  },
  welcomeText: {
    color: '#6B7280',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
  },
  titleText: {
    color: '#000000',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
    lineHeight: 36,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    padding: 24,
    marginBottom: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  cardTitle: {
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  cardSubtitle: {
    color: '#6B7280',
    fontSize: 16,
    marginBottom: 16,
  },
  progressContainer: {
    backgroundColor: '#F3F4F6',
    borderRadius: 16,
    padding: 16,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  progressLabel: {
    color: '#374151',
    fontWeight: '500',
  },
  progressValue: {
    color: '#000000',
    fontWeight: 'bold',
  },
  progressBarBackground: {
    backgroundColor: '#D1D5DB',
    borderRadius: 8,
    height: 8,
  },
  progressBar: {
    backgroundColor: '#3B82F6',
    borderRadius: 8,
    height: 8,
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionCard: {
    borderRadius: 16,
    padding: 16,
    flex: 1,
    marginHorizontal: 6,
  },
  blueAction: {
    backgroundColor: '#DBEAFE',
  },
  greenAction: {
    backgroundColor: '#D1FAE5',
  },
  actionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  actionSubtitle: {
    fontSize: 14,
    opacity: 0.8,
  },
  bottomSection: {
    marginBottom: 80,
  },
  activityCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  activityContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  activityTitle: {
    color: '#000000',
    fontWeight: '600',
    fontSize: 16,
  },
  activityTime: {
    color: '#6B7280',
    fontSize: 14,
    marginTop: 2,
  },
  completedBadge: {
    backgroundColor: '#D1FAE5',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  completedText: {
    color: '#065F46',
    fontSize: 12,
    fontWeight: '500',
  },
});