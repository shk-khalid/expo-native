import React, { useRef, useState, useEffect } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Text,
  Image,
  Platform,
  UIManager,
} from 'react-native';
import { Search, ArrowUpRight } from 'lucide-react-native';
import DiamondLogo from './DiamondLogo';

// enable layout animation on Android
if (Platform.OS === 'android' && UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const anim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(anim, {
      toValue: open ? 1 : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [open, anim]);

  const height = anim.interpolate({ inputRange: [0, 1], outputRange: [0, 240] });
  const opacity = anim.interpolate({ inputRange: [0, 1], outputRange: [0, 1] });
  const bgColor = anim.interpolate({
    inputRange: [0, 1],
    outputRange: ['#FFFFFF', '#FAF5F0'],
  });

  return (
    <Animated.View style={[styles.wrapper, { backgroundColor: bgColor }]}>
      {/* Top bar */}
      <View style={styles.bar}>
        <DiamondLogo />
        <TouchableOpacity
          onPress={() => setOpen(v => !v)}
          style={styles.searchButton}
        >
          <Search size={24} color="#000" strokeWidth={2} />
        </TouchableOpacity>
      </View>

      {/* Sliding drawer content */}
      <Animated.View style={[styles.drawer, { height, opacity }]}>
        {/* 1. Small label */}
        <Text style={styles.label}>Daily reflection</Text>

        {/* 2. Greeting line */}
        <View style={styles.greetingRow}>
          <Text style={styles.greetingText}>Hello, Max</Text>
          <Image
            source={{ uri: 'https://i.pravatar.cc/300?img=65' }}
            style={styles.avatar}
          />
        </View>

        {/* 3. Question with bold */}
        <Text style={styles.question}>
          How do you feel about your{' '}
          <Text style={styles.questionBold}>current emotions?</Text>
        </Text>

        {/* 4. Pill‑shaped input bar */}
        <View style={styles.inputBar}>
          <Text style={styles.placeholder}>Your reflection..</Text>
          <TouchableOpacity>
            <ArrowUpRight size={20} strokeWidth={2} />
          </TouchableOpacity>
        </View>
      </Animated.View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    overflow: 'hidden',
  },
  bar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  searchButton: { padding: 8 },

  drawer: {
    paddingHorizontal: 24,
    paddingTop: 16,
    overflow: 'hidden',
  },
  label: {
    fontSize: 14,
    color: '#9E958E',
    marginBottom: 4,
  },
  greetingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  greetingText: {
    fontSize: 32,
    lineHeight: 36,
    fontWeight: '300',
    color: '#000',
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginLeft: 8,
  },
  question: {
    fontSize: 32,
    lineHeight: 36,
    color: '#000',
  },
  questionBold: {
    fontWeight: '700',
  },
  inputBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#E8E2DD',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  placeholder: {
    fontSize: 16,
    color: '#9E958E',
  },
});
