import { View, StyleSheet } from 'react-native';

export default function DiamondLogo() {
  return (
    <View style={styles.container}>
      {/* Top diamond */}
      <View style={[styles.diamond, styles.topDiamond]} />
      
      {/* Left diamond */}
      <View style={[styles.diamond, styles.leftDiamond]} />
      
      {/* Right diamond */}
      <View style={[styles.diamond, styles.rightDiamond]} />
      
      {/* Bottom diamond */}
      <View style={[styles.diamond, styles.bottomDiamond]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 32,
    height: 32,
    position: 'relative',
  },
  diamond: {
    position: 'absolute',
    width: 12,
    height: 12,
    backgroundColor: '#000000',
    transform: [{ rotate: '45deg' }],
  },
  topDiamond: {
    top: 0,
    left: 8,
  },
  leftDiamond: {
    top: 8,
    left: 0,
  },
  rightDiamond: {
    top: 8,
    left: 16,
  },
  bottomDiamond: {
    top: 16,
    left: 8,
  },
});