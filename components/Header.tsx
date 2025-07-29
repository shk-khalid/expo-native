import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Search } from 'lucide-react-native';
import DiamondLogo from './DiamondLogo';

export default function Header() {
  return (
    <View style={styles.container}>
      <DiamondLogo />
      
      <TouchableOpacity style={styles.searchButton}>
        <Search size={24} color="#000" strokeWidth={2} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  searchButton: {
    padding: 8,
  },
});