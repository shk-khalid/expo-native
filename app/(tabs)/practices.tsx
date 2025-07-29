import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
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
      
      <ScrollView style={styles.scrollView}>
        <View style={styles.headerSection}>
          <Text style={styles.subtitle}>Practices</Text>
          <Text style={styles.title}>
            Exercises{'\n'}based on <Text style={styles.titleBold}>your{'\n'}needs</Text>
          </Text>
        </View>

        <View style={styles.cardsContainer}>
          {/* First Row */}
          <View style={styles.row}>
            <TouchableOpacity style={[styles.card, styles.purpleCard]}>
              <Text style={styles.cardTitle}>My Strengths</Text>
              <Text style={styles.cardTitle}>& Qualities</Text>
              
              <View style={styles.arrowButton}>
                <ArrowUpRight size={20} color="#000" strokeWidth={2} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.card, styles.yellowCard]}>
              <Text style={styles.cardTitle}>Build</Text>
              <Text style={styles.cardTitle}>Confidence</Text>
              
              <View style={styles.illustrationContainer}>
                <PlantIllustration />
              </View>
              
              <View style={styles.arrowButton}>
                <ArrowUpRight size={20} color="#000" strokeWidth={2} />
              </View>
            </TouchableOpacity>
          </View>

          {/* Second Row */}
          <View style={styles.row}>
            <TouchableOpacity style={[styles.card, styles.mintCard]}>
              <Text style={styles.cardTitle}>Diversity</Text>
              <Text style={styles.cardTitle}>& Inclusion</Text>
              
              <View style={styles.illustrationContainer}>
                <PersonIllustration />
              </View>
              
              <View style={styles.arrowButton}>
                <ArrowUpRight size={20} color="#000" strokeWidth={2} />
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.card, styles.pinkCard]}>
              <Text style={styles.cardTitle}>Behavioral</Text>
              <Text style={styles.cardTitle}>Activation</Text>
              
              <View style={styles.arrowButton}>
                <ArrowUpRight size={20} color="#000" strokeWidth={2} />
              </View>
            </TouchableOpacity>
          </View>

          {/* Third Row */}
          <TouchableOpacity style={[styles.fullCard, styles.whiteCard]}>
            <Text style={styles.cardTitle}>Arabic</Text>
            <Text style={styles.cardTitle}>Mental Health</Text>
            
            <View style={[styles.arrowButton, styles.grayArrow]}>
              <ArrowUpRight size={20} color="#000" strokeWidth={2} />
            </View>

            {/* Decorative elements */}
            <View style={styles.decorativeContainer}>
              <View style={styles.decorativeRow}>
                <Text style={styles.decorativeText}>20</Text>
                <View style={styles.decorativeBadge}>
                  <Text style={styles.decorativeBadgeText}>08</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
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
  headerSection: {
    marginTop: 32,
    marginBottom: 24,
  },
  subtitle: {
    color: '#6B7280',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
  },
  title: {
    color: '#000000',
    fontSize: 28,
    fontWeight: 'bold',
    lineHeight: 36,
  },
  titleBold: {
    fontWeight: '900',
  },
  cardsContainer: {
    marginBottom: 80,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  card: {
    flex: 1,
    borderRadius: 24,
    padding: 24,
    height: 192,
    marginHorizontal: 8,
    position: 'relative',
    overflow: 'hidden',
  },
  fullCard: {
    borderRadius: 24,
    padding: 24,
    height: 128,
    marginHorizontal: 8,
    position: 'relative',
    overflow: 'hidden',
  },
  purpleCard: {
    backgroundColor: '#A78BFA',
  },
  yellowCard: {
    backgroundColor: '#FDE047',
  },
  mintCard: {
    backgroundColor: '#86EFAC',
  },
  pinkCard: {
    backgroundColor: '#FDA4AF',
  },
  whiteCard: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 1,
  },
  cardTitle: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  arrowButton: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 20,
    padding: 8,
  },
  grayArrow: {
    backgroundColor: '#F3F4F6',
  },
  illustrationContainer: {
    position: 'absolute',
    bottom: 64,
    right: 16,
  },
  decorativeContainer: {
    position: 'absolute',
    bottom: 8,
    left: '50%',
    transform: [{ translateX: -30 }],
  },
  decorativeRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  decorativeText: {
    fontSize: 12,
    color: '#9CA3AF',
    marginRight: 8,
  },
  decorativeBadge: {
    backgroundColor: '#000000',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  decorativeBadgeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontFamily: 'monospace',
  },
});