import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Tabs } from 'expo-router';
import { Home, LayoutDashboard as Grid } from 'lucide-react-native';
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs';

const PILL_WIDTH = 150;
const TAB_ITEM_SIZE = 56;

function CustomTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const Icon = route.name === 'index' ? Home : Grid;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={
              descriptors[route.key]?.options.tabBarAccessibilityLabel
            }
            testID={descriptors[route.key]?.options.tabBarButtonTestID}
            onPress={onPress}
            style={[
              styles.tabItem,
              isFocused && styles.tabItemActive,
            ]}
            activeOpacity={0.85}
          >
            <Icon
              size={28}
              color={isFocused ? '#fff' : '#000'}
              strokeWidth={2}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => <CustomTabBar {...props} />}
    >
      <Tabs.Screen name="index" />
      <Tabs.Screen name="practices" />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    left: '50%',
    bottom: 28,
    width: PILL_WIDTH,
    height: 68,
    backgroundColor: 'rgba(255,255,255,0.96)', // pill, glassy
    borderRadius: 28,
    padding: 6,
    transform: [{ translateX: -PILL_WIDTH / 2 }],
    // iOS shadow
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.11,
    shadowRadius: 18,
    // Android elevation
    elevation: 8,
  },
  tabItem: {
    width: TAB_ITEM_SIZE,
    height: TAB_ITEM_SIZE,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    // marginHorizontal: 6, // add if you want wider spacing between tabs
  },
  tabItemActive: {
    backgroundColor: '#111', // active tab
  },
});