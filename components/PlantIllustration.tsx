import { View } from 'react-native';
import Svg, { Path, Circle } from 'react-native-svg';

export default function PlantIllustration() {
  return (
    <View className="w-16 h-16">
      <Svg width="64" height="64" viewBox="0 0 64 64" fill="none">
        {/* Plant pot */}
        <Path 
          d="M20 45 L44 45 L42 55 L22 55 Z" 
          fill="#8B5A3C" 
          stroke="#654321" 
          strokeWidth="1"
        />
        
        {/* Soil */}
        <Path 
          d="M20 45 L44 45 L43 48 L21 48 Z" 
          fill="#4A5D23"
        />
        
        {/* Main stem */}
        <Path 
          d="M32 45 L32 25" 
          stroke="#22C55E" 
          strokeWidth="2"
        />
        
        {/* Left leaf */}
        <Path 
          d="M32 30 Q25 25 20 30 Q25 35 32 30" 
          fill="#22C55E" 
          stroke="#16A34A" 
          strokeWidth="1"
        />
        
        {/* Right leaf */}
        <Path 
          d="M32 30 Q39 25 44 30 Q39 35 32 30" 
          fill="#22C55E" 
          stroke="#16A34A" 
          strokeWidth="1"
        />
        
        {/* Top leaf */}
        <Path 
          d="M32 25 Q27 18 22 22 Q27 26 32 25" 
          fill="#22C55E" 
          stroke="#16A34A" 
          strokeWidth="1"
        />
        
        {/* Small decorative circles */}
        <Circle cx="38" cy="20" r="1.5" fill="#FDE047" opacity="0.7" />
        <Circle cx="26" cy="22" r="1" fill="#FDE047" opacity="0.7" />
        <Circle cx="40" cy="35" r="1" fill="#FDE047" opacity="0.7" />
      </Svg>
    </View>
  );
}