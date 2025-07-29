import { View } from 'react-native';
import Svg, { Path, Circle, Line } from 'react-native-svg';

export default function PersonIllustration() {
  return (
    <View className="w-16 h-16">
      <Svg width="64" height="64" viewBox="0 0 64 64" fill="none">
        {/* Plant pot */}
        <Path 
          d="M20 50 L44 50 L42 58 L22 58 Z" 
          fill="#8B5A3C" 
          stroke="#654321" 
          strokeWidth="1"
        />
        
        {/* Soil */}
        <Path 
          d="M20 50 L44 50 L43 52 L21 52 Z" 
          fill="#4A5D23"
        />
        
        {/* Main stem/body */}
        <Path 
          d="M32 50 L32 35" 
          stroke="#22C55E" 
          strokeWidth="2"
        />
        
        {/* Person's head (simple circle) */}
        <Circle 
          cx="32" 
          cy="30" 
          r="4" 
          fill="#FFC89B" 
          stroke="#E5A572" 
          strokeWidth="1"
        />
        
        {/* Simple face features */}
        <Circle cx="30" cy="29" r="0.5" fill="#000" />
        <Circle cx="34" cy="29" r="0.5" fill="#000" />
        <Path d="M30 32 Q32 33 34 32" stroke="#000" strokeWidth="0.5" fill="none" />
        
        {/* Branch-like arms */}
        <Path 
          d="M28 38 L20 32" 
          stroke="#22C55E" 
          strokeWidth="1.5"
        />
        <Path 
          d="M36 38 L44 32" 
          stroke="#22C55E" 
          strokeWidth="1.5"
        />
        
        {/* Leaves on arms */}
        <Path 
          d="M20 32 Q16 28 12 32 Q16 36 20 32" 
          fill="#22C55E" 
          stroke="#16A34A" 
          strokeWidth="0.5"
        />
        <Path 
          d="M44 32 Q48 28 52 32 Q48 36 44 32" 
          fill="#22C55E" 
          stroke="#16A34A" 
          strokeWidth="0.5"
        />
        
        {/* Small decorative elements */}
        <Circle cx="24" cy="25" r="1" fill="#86EFAC" opacity="0.7" />
        <Circle cx="40" cy="26" r="1" fill="#86EFAC" opacity="0.7" />
        <Circle cx="18" cy="40" r="0.8" fill="#86EFAC" opacity="0.7" />
      </Svg>
    </View>
  );
}