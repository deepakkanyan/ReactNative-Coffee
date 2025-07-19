import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useIsFocused } from '@react-navigation/native';

type Props = {
  name: string;
  size: number;
  color: string;
};

export const AnimatedIcon = ({ name, size, color }: Props) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const isFocused = useIsFocused();

  // Track if animation already ran for current focus
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isFocused && !hasAnimated.current) {
      hasAnimated.current = true;

      Animated.sequence([
        Animated.spring(scaleAnim, {
          toValue: 1.1,
          useNativeDriver: true,
          friction: 1,
          tension: 100,
        }),
        Animated.spring(scaleAnim, {
          toValue: 1,
          useNativeDriver: true,
          friction: 1,
          tension: 100,
        }),
      ]).start();
    }

    if (!isFocused) {
      hasAnimated.current = false;
    }
  }, [isFocused]);

  return (
    <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
      <Ionicons name={name} size={size} color={color} />
    </Animated.View>
  );
};
