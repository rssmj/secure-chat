import * as React from 'react'; 
import { Platform, TouchableOpacity, Text } from 'react-native';

interface ButtonProps {
  onPress: () => void;
  label: string;
  variant?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({ onPress, label, variant = 'primary' }) => {
  if (Platform.OS === 'web') {
    return (
      <button 
        onClick={onPress}
        style={{
          padding: '10px 20px',
          backgroundColor: variant === 'primary' ? '#007AFF' : '#ffffff',
          color: variant === 'primary' ? '#ffffff' : '#007AFF',
          border: variant === 'primary' ? 'none' : '1px solid #007AFF',
          borderRadius: '8px',
          cursor: 'pointer',
        }}
      >
        {label}
      </button>
    );
  }

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        padding: 10,
        backgroundColor: variant === 'primary' ? '#007AFF' : '#ffffff',
        borderRadius: 8,
        borderWidth: variant === 'primary' ? 0 : 1,
        borderColor: '#007AFF',
      }}
    >
      <Text
        style={{
          color: variant === 'primary' ? '#ffffff' : '#007AFF',
          textAlign: 'center',
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};