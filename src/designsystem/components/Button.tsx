// Button.tsx

import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';

// Define more descriptive variants
type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'disabled';

type ButtonProps = {
  label: string;
  variant?: ButtonVariant;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>; // Optional prop for custom text styles
  disabled?: boolean; // Prop to explicitly disable the button
};

const Button = ({
  label,
  variant = 'primary', // Default to 'primary' variant
  onPress,
  style,
  textStyle,
  disabled = false, // Default to enabled
}: ButtonProps) => {
  // Function to get the appropriate variant style
  const getVariantStyle = (): ViewStyle => {
    switch (variant) {
      case 'primary':
        return styles.primary;
      case 'secondary':
        return styles.secondary;
      case 'outline':
        return styles.outline;
      case 'disabled':
        return styles.disabled;
      default:
        return styles.primary; // Fallback to primary if an unknown variant is provided
    }
  };

  // Combine base styles, variant styles, disabled styles, and any custom styles provided via props
  const buttonStyles = [
    styles.base,
    getVariantStyle(),
    disabled && styles.disabled, // Apply disabled style if button is disabled
    style, // Custom style overrides
  ];

  return (
    <TouchableOpacity
      onPress={onPress}
      style={buttonStyles}
      activeOpacity={0.8}
      disabled={disabled} //  Disable the TouchableOpacity based on the prop
    >
      <Text style={[styles.label, textStyle]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 100, // Ensure a minimum width for the button
  },
  primary: {
    backgroundColor: '#4B2E2B',
  },
  secondary: {
    backgroundColor: '#ff5c5c',
  },
  outline: {
    backgroundColor: '#999999',
    borderColor: '#50332eff',
    borderWidth: 1,
  },
  disabled: {
    backgroundColor: '#999999', // A greyed-out appearance
    opacity: 0.6, //  Reduce opacity to visually indicate disabled state
  },
  label: {
    color: '#ffffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Button;
